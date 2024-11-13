import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User, ObjectContextType } from "@/types";
import Cookies from "js-cookie";

type AuthContextType = {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
    loginWithGoogle: () => void;
    showCookieConsent: boolean;
    allowCookies: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);

    useEffect(() => {
        // Check for existing token in cookies
        const token = Cookies.get("token");
        if (token) {
            // Validate token and set user
            // This is a placeholder, replace with actual token validation logic
            const decodedUser = JSON.parse(atob(token.split(".")[1])) as User;
            setUser(decodedUser);
        }

        const cookieConsent = Cookies.get("cookieConsent");
        if (!cookieConsent) {
            setShowCookieConsent(true);
        }
    }, []);

    const login = (token: string) => {
        Cookies.set("token", token);
        const decodedUser = JSON.parse(atob(token.split(".")[1])) as User;
        setUser(decodedUser);
    };

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
    };

    const loginWithGoogle = () => {
    };

    const allowCookies = () => {
        Cookies.set("cookieConsent", "true");
        setShowCookieConsent(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loginWithGoogle, showCookieConsent, allowCookies }}>
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