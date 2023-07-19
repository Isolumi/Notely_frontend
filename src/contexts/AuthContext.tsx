import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail as updateE, updatePassword as updateP } from "firebase/auth";
import { User } from "firebase/auth";
import { AuthProviderProps, AuthContextType } from '../types';
import { auth } from '../Firebase';

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>();
    const [loading, setLoading] = useState(true);

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function resetPassword(email: string) {
        return sendPasswordResetEmail(auth, email);
    }

    function updatePassword(password: string) {
        if (auth.currentUser === null) {
            throw new Error("user cannot be null");
        }
        return updateP(auth.currentUser, password);
    }

    function updateEmail(email: string) {
        if (auth.currentUser === null) {
            throw new Error("user cannot be null");
        }
        return updateE(auth.currentUser, email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updatePassword,
        updateEmail,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}