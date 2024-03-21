/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

export interface ISignUpResponseData {
  Token: string;
}
export interface IAuthContext {
  authData: ISignUpResponseData | null;
  setAuthData: (data: ISignUpResponseData | null) => void;
}

const AuthContext = createContext<IAuthContext>({
  authData: null,
  setAuthData: () => {},
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [authData, setAuthData] = useState<ISignUpResponseData | null>(null);

  const authDataStates = useMemo(
    () => ({
      authData,
      setAuthData,
    }),
    [authData]
  );
  return (
    <AuthContext.Provider value={authDataStates}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }

  return context;
}
