"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { monacoDataConfig } from "./data";
import { useMonaco } from "@monaco-editor/react";
import React from "react";

export default function Toolbar() {
    const monaco = useMonaco();
    
    const [editorTheme, setEditorTheme] = React.useState("vs-dark");
    const [editorLanguage, setEditorLanguage] = React.useState("javascript");

    React.useEffect(() => {
        // Set the editor theme
        monaco?.editor.setTheme(editorTheme);

        // Set the editor language
        const model = monaco?.editor.getModels()[0];
        if (model) {
            monaco.editor.setModelLanguage(model, editorLanguage);
        }
    }, [editorTheme]);

    return (
        <div>
            <Select
                value={editorLanguage}
                onChange={(e) => setEditorTheme(e.target.value)}
            >
                {monacoDataConfig.themes.map((item, index) => (
                    <SelectItem key={index} value={item.name}>
                        {item.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}