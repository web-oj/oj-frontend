import { createContext, useContext, useState, ReactNode } from "react";
import { Problem, ObjectContextType } from "@/types";

type ProblemContextType = ObjectContextType<Problem>;

const ProblemContext = createContext<ProblemContextType>({} as ProblemContextType);

interface ProblemProviderProps {
    children: ReactNode;
    problem?: Problem;
}
export const ProblemProvider = ({ children, problem }: ProblemProviderProps) => {
    const [data, setData] = useState<Problem>(problem as Problem);

    return (
        <ProblemContext.Provider value={{ data, setData }}>
            {children}
        </ProblemContext.Provider>
    );
};

export const useProblem = () => {
    const context = useContext(ProblemContext);
    if (context === undefined) {
        throw new Error("useProblem must be used within a ProblemProvider");
    }
    return context;
};