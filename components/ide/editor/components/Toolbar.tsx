"use client";

import { Button, Select, Selection, SelectItem } from "@nextui-org/react";
import React from "react";

import { Language, monacoDataConfig } from "../data";
import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { runCode } from "@/utils/piston";
import { useIDEContext } from "../../context";
import { PlayIcon } from "hugeicons-react";


export default function Toolbar() {
    const { code, language, setLanguage, setTheme, setOutput } = useIDEContext();

    const themes = monacoDataConfig.themes;
    const languages = monacoDataConfig.languages;

    const [editorThemeKey, setEditorThemeKey] = React.useState<Selection>(new Set([]));
    const [languagekey, setLanguageKey] = React.useState<Selection>(new Set([]));

    const [isExecuting, setIsExecuting] = React.useState(false);

    const handleRunCode = React.useCallback(async () => {
        try {
            setIsExecuting(true);
            const { output } = await runCode(language, code);

            setOutput(output);

        } catch (error) {
            console.error(error);
        } finally {
            setIsExecuting(false);
        }
    }, [code, language]);

    React.useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setEditorThemeKey(new Set([storedTheme]));
        }

        // load language from local storage
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setLanguageKey(new Set([storedLanguage]));
        }
    }, []);

    React.useEffect(() => {
        const convertLanguage = Array.from(languagekey).join('') as Language;
        const convertTheme = Array.from(editorThemeKey).join('');

        setLanguage(convertLanguage);
        setTheme(convertTheme);
        localStorage.setItem('language', convertLanguage);
        localStorage.setItem('theme', convertTheme);
        localStorage.setItem('code', code);

    }, [editorThemeKey, languagekey]);

    return (
        <LinearContainer direction="row" space="md">
            <Select
                placeholder="Select theme"
                selectedKeys={editorThemeKey}
                onSelectionChange={setEditorThemeKey}
                shouldFlip
                radius="full"
                aria-label="Select theme"
            >
                {themes.map((item, index) => (
                    <SelectItem key={item.key}>
                        {item.key}
                    </SelectItem>
                ))}
            </Select>
            <Select
                placeholder="Select language"
                selectedKeys={languagekey}
                onSelectionChange={setLanguageKey}
                shouldFlip
                radius="full"
                aria-label="Select language"
            >
                {languages.map((item, index) => (
                    <SelectItem key={item.key}>
                        {item.key}
                    </SelectItem>
                ))}
            </Select>
            <Button
                radius="full"
                aria-label="Run code"
                className="bg-foreground-900 text-foreground-100"
                isLoading={isExecuting}
                startContent={<PlayIcon size={24} />}
                onClick={handleRunCode}
            >
                Run
            </Button>
        </LinearContainer>
    )
}