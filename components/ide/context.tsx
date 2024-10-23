import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from './editor/data';

type IDEContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    theme: string;
    setTheme: (theme: string) => void;
    code: string;
    setCode: (code: string) => void;
    output: string;
    setOutput: (output: string) => void;
};

const IDEContext = createContext<IDEContextType | undefined>(undefined);

export const IDEProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('javascript');
    const [theme, setTheme] = useState<string>('vs-dark');
    const [code, setCode] = useState<string>('');
    const [output, setOutput] = useState<string>('');

    React.useEffect(() => {
        // load code from local storage
        const storedCode = localStorage.getItem('code');
        if (storedCode) {
            setCode(storedCode);
        }

        // load language from local storage
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setLanguage(storedLanguage as Language);
        }

        // load theme from local storage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }

        // load output from local storage
        const storedOutput = localStorage.getItem('output');
        if (storedOutput) {
            setOutput(storedOutput);
        }
    }, [])

    React.useEffect(() => {
        localStorage.setItem('code', code);
        localStorage.setItem('language', language);
        localStorage.setItem('theme', theme);
        localStorage.setItem('output', output);
    }, [code, language, theme, output]);

    return (
        <IDEContext.Provider value={{ language, setLanguage, theme, setTheme, code, setCode, output, setOutput }}>
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