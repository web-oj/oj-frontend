import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

import { User } from "@/types";
import { getUserById, getUserByToken } from "@/fetch-functions";

type AuthContextType = {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
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
  const [token, setToken] = useState<string | null>(null);

  const fetchUser = React.useCallback(async () => {
    try {
      if (!token) {
        return;
      }
      const id = await getUserByToken();
      const user = await getUserById({ id });

      setUser(user);
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  }, [token]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setToken(token);
    }
    const cookieConsent = Cookies.get("cookieConsent");

    if (!cookieConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  useEffect(() => {
    if (user === null) {
      fetchUser();
    }
  }, [user, fetchUser, token]);

  const login = (token: string) => {
    if (!token) {
      throw new Error("Token is required");
    }
    Cookies.set("token", token);
    setToken(token);
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };


  const allowCookies = () => {
    Cookies.set("cookieConsent", "true");
    setShowCookieConsent(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        showCookieConsent,
        allowCookies,
      }}
    >
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
