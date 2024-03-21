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
