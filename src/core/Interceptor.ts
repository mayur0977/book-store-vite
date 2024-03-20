/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import AuthService from "./Auth.service";
import { useAuthContext } from "./AuthContext";
import environment from "../environments/environment";

function Interceptor() {
  // We can set the default url also
  axios.defaults.baseURL = environment.baseUrl;
  const navigate = useNavigate();
  const { setAuthData } = useAuthContext();
  axios.interceptors.request.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req: any) => {
      if (!req.url.includes("api/token")) {
        const authData = AuthService.getAuthData();
        if (
          authData &&
          !req.url.includes("api/getStatedetail?StateName=") &&
          !req.url.includes("api/signUp") &&
          !req.url.includes("api/consent-language") &&
          !req.url.includes("api/verification-code-validator")
        ) {
          req.headers.Authorization = `Bearer ${authData.Token}`;
        } else {
          const preloginToken = sessionStorage.getItem("preLoginToken");
          req.headers.Authorization = `Bearer ${preloginToken}`;
        }
      }
      return req;
    },
    () => {}
  );

  const axiosResponseInterceptor = axios.interceptors.response.use(
    (res) => {
      const { status } = res as AxiosResponse;

      if (
        res?.data?.ApiResponse &&
        !res?.data?.ApiResponse.Status &&
        res?.data?.ApiResponse.Message === "Unauthorized"
      ) {
        sessionStorage.clear();

        showNotification({
          id: "unauthorized",
          message: "Your session has been expired. Please login to continue",
          color: "red",
          styles: () => ({
            root: {
              marginTop: "2rem",
              padding: "1.2rem 0.5rem",
            },
            body: {
              paddingLeft: "1rem",
            },
          }),
        });

        navigate("/");
      }

      switch (status) {
        case 200:
          return Promise.resolve(res?.data);
        case 204:
          return Promise.resolve(res?.data);
        default:
          return Promise.resolve(res);
      }
    },
    async (error: AxiosError<any>) => {
      const { response } = error;
      const { status } = response as AxiosResponse;
      if (status === 401) {
        // Check if token tempted by user
        sessionStorage.clear();

        setAuthData(null);

        showNotification({
          id: "unauthorized",
          message: "Your session has been expired. Please login to continue",
          color: "red",
          styles: () => ({
            root: {
              marginTop: "2rem",
              padding: "1.2rem 0.5rem",
            },
            body: {
              paddingLeft: "1rem",
            },
          }),
        });
        navigate("/");
      } else if (status === 500) {
        showNotification({
          id: "unauthorized",
          message: "Internal Server Error.",
          color: "red",
          styles: () => ({
            root: {
              marginTop: "2rem",
              padding: "1.2rem 0.5rem",
            },
            body: {
              paddingLeft: "1rem",
            },
          }),
        });
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.response.eject(axiosResponseInterceptor);
    };
  });
  return null;
}

export default Interceptor;
