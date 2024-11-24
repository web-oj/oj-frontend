"use client";

import React from "react";
import Editor from "@monaco-editor/react";

import { useIDEContext } from "../context";

import { monacoDataConfig } from "./data";

export default function IDEEditor() {
  const { language, code, setCode, theme } = useIDEContext();

  React.useEffect(() => {
    if (!localStorage.getItem("code")) {
      const defaultCode =
        monacoDataConfig.snippets[
          language as keyof typeof monacoDataConfig.snippets
        ];

      setCode(defaultCode);
    }
  }, [language, code]);

  return (
    <Editor
      className="rounded-large overflow-hidden absolute h-full"
      height={"100%"}
      language={language}
      loading={
        <div className="flex items-center justify-center w-full h-full bg-foreground-500 rounded-large" />
      }
      options={{
        fontSize: 16,
        minimap: {
          enabled: false,
        },
        automaticLayout: true,
      }}
      theme={theme}
      value={code}
      width={"100%"}
      onChange={(value) => {
        setCode(value as string);
      }}
    />
  );
}
