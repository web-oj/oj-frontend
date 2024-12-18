"use client";
import { Editor } from "@monaco-editor/react";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";

import { LinearContainer } from "@/components/ui/container";
import "katex/dist/katex.min.css";
import { RenderMarkdown } from "@/components/markdown";

export interface Props
    extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    placeholder: string;
    markdown: string;
    setMarkdown: (markdown: string) => void;
    register: any;
}
const DialogEditorInputMarkdown = React.forwardRef<
    HTMLDivElement,
    Props
>((props, ref) => {
    const { markdown, setMarkdown, register, ...rest } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Textarea
                isRequired
                required
                description={
                    <p>
                        Support <b>markdown</b> and <b>latex</b> syntax
                    </p>
                }
                label={props.label}
                labelPlacement="outside"
                placeholder={props.placeholder}
                radius="full"
                value={markdown}
                onClick={onOpen}
                {...register}
            />
            <Modal isOpen={isOpen} size="5xl" onClose={onClose}>
                <ModalContent>
                    <ModalHeader>{props.label} Editor</ModalHeader>
                    <ModalBody>
                        <LinearContainer classnames={{
                            container: "overflow-scroll max-h-[75vh]",
                        }} direction="row" fullheight fullwidth>
                            <Editor
                                height={"75vh"}
                                language="markdown"
                                options={{
                                    fontSize: 16,
                                    minimap: {
                                        enabled: false,
                                    },
                                }}
                                theme="light"
                                value={markdown}
                                width={"50%"}
                                onChange={(value) => {
                                    setMarkdown(value as string);
                                }}
                            />
                            <RenderMarkdown className="" data={markdown} />
                        </LinearContainer>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" radius="full" onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
});

DialogEditorInputMarkdown.displayName = "DialogEditorInputMarkdown";

export default DialogEditorInputMarkdown;
