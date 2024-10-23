"use client";

import React from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { monacoDataConfig } from './data';
import { useIDEContext } from '../context';


export default function IDEEditor() {
    const { language, code, setCode, theme } = useIDEContext();

    React.useEffect(() => {
        if (!localStorage.getItem('code')) {
            const defaultCode = monacoDataConfig.snippets[language as keyof typeof monacoDataConfig.snippets];
            setCode(defaultCode);
        }
    }, [language, code]);

    return (
        <Editor
            width={"100%"}
            height={"100%"}
            className='rounded-large overflow-hidden'
            theme={theme}
            value={code}
            language={language}
            onChange={(value) => {
                setCode(value as string);
            }}
            options={{
                fontSize: 16,
                minimap: {
                    enabled: false
                },
                automaticLayout: true
            }}
        />
    )
}