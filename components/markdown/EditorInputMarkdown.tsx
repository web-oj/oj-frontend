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
import { RenderMarkdown } from "./RenderMarkdown";

export interface EditorInputMarkdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  markdown: string;
  setMarkdown: (markdown: string) => void;
  register: any;
  label?: string;
  placeholder?: string;
}
const EditorInputMarkdown = React.forwardRef<
  HTMLDivElement,
  EditorInputMarkdownProps
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
      <Modal isOpen={isOpen} size="5xl" onClose={onClose} {...rest}>
        <ModalContent>
          <ModalHeader>Statement Editor</ModalHeader>
          <ModalBody>
            <LinearContainer fullheight fullwidth direction="row">
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
              <RenderMarkdown data={markdown} />
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

EditorInputMarkdown.displayName = "EditorInputMarkdown";

export default EditorInputMarkdown;
