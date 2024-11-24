import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User, ObjectContextType } from "@/types";
<<<<<<< Updated upstream
import { getUser, getUserIdByToken } from "@/fetch-functions";
import Cookies from "js-cookie";
=======
<<<<<<< HEAD
=======
import { getUser, getUserIdByToken } from "@/fetch-functions";
import Cookies from "js-cookie";
>>>>>>> main
>>>>>>> Stashed changes

type AuthContextType = {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
    loginWithGoogle: () => void;
<<<<<<< Updated upstream
    showCookieConsent: boolean;
    allowCookies: () => void;
=======
<<<<<<< HEAD
=======
    showCookieConsent: boolean;
    allowCookies: () => void;
>>>>>>> main
>>>>>>> Stashed changes
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
<<<<<<< Updated upstream
    const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);
=======
<<<<<<< HEAD
>>>>>>> Stashed changes

    const fetchUser = React.useCallback(async () => {
        try {
            const token = Cookies.get("token");
            if (!token) {
                return;
            }
            const id = await getUserIdByToken();
            const user = await getUser({ user_id: id });
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
        if (!token) {
            throw new Error("Token is required");
        }
        Cookies.set("token", token);
    };

    const logout = () => {
<<<<<<< Updated upstream
        Cookies.remove("token");
=======
        localStorage.removeItem("token");
=======
    const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);

    const fetchUser = React.useCallback(async () => {
        try {
            const token = Cookies.get("token");
            if (!token) {
                return;
            }
            const id = await getUserIdByToken();
            const user = await getUser({ user_id: id });
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
        if (!token) {
            throw new Error("Token is required");
        }
        Cookies.set("token", token);
    };

    const logout = () => {
        Cookies.remove("token");
>>>>>>> main
>>>>>>> Stashed changes
        setUser(null);
    };

    const loginWithGoogle = () => {
    };

<<<<<<< Updated upstream
    const allowCookies = () => {
        Cookies.set("cookieConsent", "true");
        setShowCookieConsent(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loginWithGoogle, showCookieConsent, allowCookies }}>
=======
<<<<<<< HEAD
    return (
        <AuthContext.Provider value={{ user, login, logout, loginWithGoogle }}>
=======
    const allowCookies = () => {
        Cookies.set("cookieConsent", "true");
        setShowCookieConsent(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loginWithGoogle, showCookieConsent, allowCookies }}>
>>>>>>> main
>>>>>>> Stashed changes
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