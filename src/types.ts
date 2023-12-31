import { ReactNode } from "react";
import { User, UserCredential } from "firebase/auth";

export type AuthProviderProps = {
    children: ReactNode;
};

export type AuthContextType = {
    currentUser: User | null | undefined;
    signup: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    updatePassword: (password: string) => Promise<void>;
    updateEmail: (email: string) => Promise<void>;
  };