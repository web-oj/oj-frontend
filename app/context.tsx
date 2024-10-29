import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User, ObjectContextType } from "@/types";

type AuthContextType = {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
    loginWithGoogle: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check for existing token in local storage
        const token = localStorage.getItem("token");
        if (token) {
            // Validate token and set user
            // This is a placeholder, replace with actual token validation logic
            const decodedUser = JSON.parse(atob(token.split(".")[1])) as User;
            setUser(decodedUser);
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem("token", token);
        const decodedUser = JSON.parse(atob(token.split(".")[1])) as User;
        setUser(decodedUser);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const loginWithGoogle = () => {
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loginWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};