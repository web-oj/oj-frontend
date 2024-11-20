"use client";
import { LinearContainer } from "@/components/ui/container";
import { Editor } from "@monaco-editor/react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import remarkBreaks from "remark-breaks";
import 'katex/dist/katex.min.css';

export interface StatementEditorInputProps extends React.HTMLAttributes<HTMLDivElement> {
    markdown: string;
    setMarkdown: (markdown: string) => void;
    register: any;
}
const StatementEditorInput = React.forwardRef<HTMLDivElement, StatementEditorInputProps>((props, ref) => {
    const { markdown, setMarkdown, register, ...rest } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Textarea
                label="Statement"
                isRequired
                description={
                    <p>
                        Support <b>markdown</b> and <b>latex</b> syntax
                    </p>
                }
                placeholder="Click here to write the statement"
                labelPlacement="outside"
                required
                radius="full"
                onClick={onOpen}
                value={markdown}
                {...register}
            />
            <Modal isOpen={isOpen} onClose={onOpen} size="5xl">
                <ModalContent>
                    <ModalHeader>Statement Editor</ModalHeader>
                    <ModalBody>

                        <LinearContainer direction="row">
                            <Editor
                                width={"50%"}
                                height={"75vh"}
                                theme="light"
                                language="markdown"
                                onChange={(value) => {
                                    setMarkdown(value as string);
                                }}
                                value={markdown}
                                options={{
                                    fontSize: 16,
                                    minimap: {
                                        enabled: false
                                    }
                                }}
                            />
                            <ReactMarkdown
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                                remarkPlugins={[remarkMath, remarkBreaks]}
                                children={markdown.replace(/&nbsp;/g, '')}
                            />
                        </LinearContainer>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onClick={onClose}
                            color="primary"
                            radius="full"
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </>
    )
});

export default StatementEditorInput;