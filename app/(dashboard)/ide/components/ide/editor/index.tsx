"use client";

import React from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { monacoDataConfig } from './data';
import { useIDEContext } from '../context';


export default function CustomEditor() {
    const { language, code, setCode, theme } = useIDEContext();

    const monaco = useMonaco();

    React.useEffect(() => {
        if (!localStorage.getItem('code')) {
            const defaultCode = monacoDataConfig.snippets[language as keyof typeof monacoDataConfig.snippets];
            setCode(defaultCode);
        }
    }, [language, code]);

    return (
        <Editor
            width={"100%"}
            height="90vh"
            className='rounded-large overflow-hidden'
            theme={theme}
            value={code}
            language={language}
            onChange={(value) => {
                setCode(value as string);
                if (code) {
                    localStorage.setItem('code', code);
                }
            }}
            options={{
                fontSize: 16,
                minimap: {
                    enabled: false
                }
            }}
        />
    )
}