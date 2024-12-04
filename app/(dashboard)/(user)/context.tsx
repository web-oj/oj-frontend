import { createContext, useContext, useState, ReactNode } from "react";

import { User, ObjectContextType } from "@/types";

type UserContextType = ObjectContextType<User>;

const UserContext = createContext<UserContextType>({} as UserContextType);

interface UserProviderProps {
  children: ReactNode;
  user?: User;
}
export const UserProvider = ({ children, user }: UserProviderProps) => {
  const [data, setData] = useState<User>(user as User);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
