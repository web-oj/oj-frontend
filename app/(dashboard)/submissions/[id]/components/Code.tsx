"use client";

import { LinearContainer } from "@/components/ui";
import { Editor } from "@monaco-editor/react";
import { useSubmission } from "../../context";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export default function Code(props: Props) {
    const submission = useSubmission();

    return (
        <LinearContainer
            label={<p className="text-foreground text-lg font-bold">Code</p>}
            direction="column"
            space="lg"
            fullwidth
            classnames={{
                container: "rounded-large overflow-hidden h-auto aspect-[2/1]",
            }}
        >
            <Editor
                width="100%"
                height="100%"
                value={submission.data.code}
                options={{
                    formatOnPaste: true,
                    formatOnType: true,
                    trimAutoWhitespace: true,
                    readOnly: true,
                    padding: {
                        bottom: 16,
                        top: 16,
                    }
                }}
                loading={
                    <div
                        className="rounded-large bg-foreground-300 w-full h-full"
                    />
                }
                defaultLanguage={submission.data.language.toLocaleLowerCase()}
                defaultValue="// some comment"
            />
        </LinearContainer>
    )
}