import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from './editor/data';

type IDEContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    theme: string;
    setTheme: (theme: string) => void;
    code: string;
    setCode: (code: string) => void;
};

const IDEContext = createContext<IDEContextType | undefined>(undefined);

export const IDEProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('javascript');
    const [theme, setTheme] = useState<string>('vs-dark');
    const [code, setCode] = useState<string>('');

    return (
        <IDEContext.Provider value={{ language, setLanguage, theme, setTheme, code, setCode }}>
            {children}
        </IDEContext.Provider>
    );
};

export const useIDEContext = () => {
    const context = useContext(IDEContext);
    if (context === undefined) {
        throw new Error('useIDEContext must be used within an IDEProvider');
    }
    return context;
};