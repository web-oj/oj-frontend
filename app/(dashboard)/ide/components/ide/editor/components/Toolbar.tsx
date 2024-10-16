"use client";

import { Select, Selection, SelectItem } from "@nextui-org/react";
import { Language, monacoDataConfig } from "../data";

import React from "react";
import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { useIDEContext } from "../../context";



export default function Toolbar() {
    const { setLanguage, setTheme } = useIDEContext();

    const themes = monacoDataConfig.themes;
    const languages = monacoDataConfig.languages;

    const [editorThemeKey, setEditorThemeKey] = React.useState<Selection>(new Set([]));
    const [languagekey, setLanguageKey] = React.useState<Selection>(new Set([]));

    React.useEffect(() => {
        setLanguage(Array.from(languagekey).join('') as Language);
        setTheme(Array.from(editorThemeKey).join(''));
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
        </LinearContainer>
    )
}