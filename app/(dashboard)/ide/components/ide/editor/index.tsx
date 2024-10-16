"use client";

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import React from 'react';

export default function CustomEditor() {
    // stytle for the editor
    return (
        <Editor
            width={"100%"}
            height="90vh"
            defaultLanguage='javascript'
            defaultValue={
                "// code here"
            }
            className='rounded-large overflow-hidden'
        />
    )
}