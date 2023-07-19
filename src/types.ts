import { ReactNode } from "react";
import { User, UserCredential } from "firebase/auth";

export type AuthProviderProps = {
    children: ReactNode;
};

export type AuthContextType = {
    currentUser: User | null | undefined;
    signup: (email: string, password: string) => Promise<UserCredential>;
  };