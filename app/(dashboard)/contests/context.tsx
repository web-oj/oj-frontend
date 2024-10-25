import { createContext, useContext, useState, ReactNode } from "react";
import { Contest, ObjectContextType } from "@/types";

type ContestContextType = ObjectContextType<Contest>;

const ContestContext = createContext<ContestContextType>({} as ContestContextType);

interface ContestProviderProps {
    children: ReactNode;
    contest: Contest;
}
export const ContestProvider = ({ children, contest }: ContestProviderProps) => {
    const [data, setData] = useState<Contest>(contest);

    return (
        <ContestContext.Provider value={{ data, setData }}>
            {children}
        </ContestContext.Provider>
    );
};

export const useContest = () => {
    const context = useContext(ContestContext);
    if (context === undefined) {
        throw new Error("useContest must be used within a ContestProvider");
    }
    return context;
};