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
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

import { LinearContainer } from "@/components/ui/container";
import "katex/dist/katex.min.css";

export interface StatementEditorInputProps
  extends React.HTMLAttributes<HTMLDivElement> {
  markdown: string;
  setMarkdown: (markdown: string) => void;
  register: any;
}
const StatementEditorInput = React.forwardRef<
  HTMLDivElement,
  StatementEditorInputProps
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
        label="Statement"
        labelPlacement="outside"
        placeholder="Click here to write the statement"
        radius="full"
        value={markdown}
        onClick={onOpen}
        {...register}
      />
      <Modal isOpen={isOpen} size="5xl" onClose={onOpen}>
        <ModalContent>
          <ModalHeader>Statement Editor</ModalHeader>
          <ModalBody>
            <LinearContainer direction="row">
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
              <ReactMarkdown
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                remarkPlugins={[remarkMath, remarkBreaks]}
              >
                {markdown.replace(/&nbsp;/g, "")}
              </ReactMarkdown>
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

StatementEditorInput.displayName = "StatementEditorInput";

export default StatementEditorInput;
