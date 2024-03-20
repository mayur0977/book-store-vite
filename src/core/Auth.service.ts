import axios from "axios";
import environment from "../environments/environment";
import { ISignUpResponseData } from "./AuthContext";

const { baseUrl } = environment;

const setAuthData = (value: ISignUpResponseData | null): void => {
  if (value) {
    sessionStorage.setItem("auth_data", JSON.stringify(value));
  }
};

/**
 * It is used to get Logged on user data from local storage
 * @returns ISignUpResponseData type of response
 */
const getAuthData = (): ISignUpResponseData | null => {
  const authData = sessionStorage.getItem("auth_data");
  if (authData) {
    return JSON.parse(authData);
  }
  return null;
};

const userSignup = (value: {
  Email: string;
  password: string;
  confirmPassword: string;
}): Promise<unknown> => {
  return axios.post(`${baseUrl}/signup`, value);
};

const AuthService = {
  getAuthData,
  setAuthData,

  userSignup,
};

export default AuthService;
