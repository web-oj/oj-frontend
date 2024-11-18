import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User, ObjectContextType } from "@/types";
import { getUser } from "@/fetch-functions";
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

    const fetchUser = React.useCallback(async () => {
        try {
            const user = await getUser({ user_id: 1 });
            setUser(user);
        } catch (error) {
            console.error("Failed to fetch user", error);
        }
    }, []);

    useEffect(() => {
        const token = Cookies.get("token");
        const cookieConsent = Cookies.get("cookieConsent");

        if (!cookieConsent) {
            setShowCookieConsent(true);
        }
    }, []);

    useEffect(() => {
        if (user === null) {
            fetchUser();
        }
    }, [user, fetchUser]);

    const login = (token: string) => {
        Cookies.set("token", token);
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