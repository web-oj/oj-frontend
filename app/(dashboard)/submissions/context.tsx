"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { Submission, ObjectContextType } from "@/types";

type SubmissionContextType = ObjectContextType<Submission>;

const SubmissionContext = createContext<SubmissionContextType>(
    {} as SubmissionContextType,
);

interface SubmissionProviderProps {
    children: ReactNode;
    submission?: Submission;
}

export const SubmissionProvider = ({
    children,
    submission,
}: SubmissionProviderProps) => {
    const [data, setData] = useState<Submission>(submission as Submission);

    return (
        <SubmissionContext.Provider value={{ data, setData }}>
            {children}
        </SubmissionContext.Provider>
    );
};

export const useSubmission = () => {
    const context = useContext(SubmissionContext);

    if (context === undefined) {
        throw new Error("useSubmission must be used within a SubmissionProvider");
    }

    return context;
};
