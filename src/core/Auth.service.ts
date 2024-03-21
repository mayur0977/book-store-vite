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

export interface ISignupResponse {
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  user: User;
  accessToken: string;
}

export interface User {
  role: string;
  _id: string;
  name: string;
  email: string;
  password: string;
  __v: number;
}

const userSignup = (value: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<ISignupResponse> => {
  return axios.post(`${baseUrl}/api/v1/users/signup`, value);
};

export interface ILoginResponse {
  status: string;
  message: string;
  data: LoginData;
}

export interface LoginData {
  name: string;
  email: string;
  userRole: string;
  userId: string;
  accessToken: string;
}
const userLogin = (value: {
  email: string;
  password: string;
}): Promise<ILoginResponse> => {
  return axios.post(`${baseUrl}/api/v1/users/login`, value);
};

const AuthService = {
  getAuthData,
  setAuthData,
  userLogin,
  userSignup,
};

export default AuthService;
