"use client";

import { Input, Textarea } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/react";
import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { toast } from "react-toastify";
import { TagsInput } from "./TagsInput";
import StatementEditorInput from "./StatementEditorInput";

interface CreateProblemFormProps extends React.HTMLAttributes<HTMLFormElement> { }
type CreateProblemFormValues = {
    title: string;
    statement: string;
    difficulty: string;
    tags: string[];
    timeLimit: number;
    memoryLimit: number;
    inputFormat: string;
    outputFormat: string;
    testCases: {
        input: string;
        output: string;
    }[];
};

export function CreateProblemForm(props: CreateProblemFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<CreateProblemFormValues>();

    const [testCases, setTestCases] = React.useState<CreateProblemFormValues["testCases"]>([]);
    const [tags, setTags] = React.useState<CreateProblemFormValues["tags"]>([]);
    const [statement, setStatement] = React.useState<CreateProblemFormValues["statement"]>('');

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    const registers = {
        title: register("title", {
            required: "Title is required",
            maxLength: {
                value: 200,
                message: "Title must be less than 200 characters"
            }
        }),
        statement: register("statement", { required: "Statement is required" }),
        difficulty: register("difficulty", { required: "Difficulty is required" }),
        tags: register("tags", { required: false }),
        timeLimit: register("timeLimit", { required: "Time limit is required" }),
        memoryLimit: register("memoryLimit", { required: "Memory limit is required" }),
        inputFormat: register("inputFormat", { required: "Input format is required" }),
        outputFormat: register("outputFormat", { required: "Output format is required" }),
        testCases: register("testCases", { required: false }),
    }

    React.useEffect(() => {
        if (!isValid) {
            toast.error("Please fill all the required fields");
        }
    }, [isValid]);

    return (
        <form
            {...props}
            onSubmit={onSubmit}
            className="flex flex-col gap-4 lg:min-w-[48ch] h-full overflow-y-auto"
            id="create-problem-form"
        >
            <Input
                type="text"
                label="Title"
                labelPlacement="outside"
                placeholder="Title"
                description="Max length 200"
                required
                radius="full"
                isRequired
                {...registers.title}
            />
            {/* @todo implement TagInput */}
            <TagsInput
                tags={tags}
                onTagsChange={setTags}
                className="mb-4"
            />
            <Select
                label="Difficulty"
                placeholder="Select difficulty"
                labelPlacement="outside-left"
                radius="full"
                aria-label="Difficulty"
                classNames={{
                    base: "items-center",
                    trigger: "rounded-l-none",
                    label: "rounded-r-none rounded-l-full h-full bg-secondary text-secondary-foreground flex items-center justify-center px-4 ",
                }}
            >
                <SelectItem key="easy">Easy</SelectItem>
                <SelectItem key="medium">Medium</SelectItem>
                <SelectItem key="hard">Hard</SelectItem>
            </Select>
            {/* <Textarea
                label="Statement"
                isRequired
                description={
                    <p>
                        Support <b>markdown</b> and <b>latex</b> syntax
                    </p>
                }
                placeholder="Type the problem statement here"
                labelPlacement="outside"
                required
                radius="full"
                classNames={{
                    base: "max-h-[200ch]"
                }}
                {...registers.statement}
            /> */}
            <StatementEditorInput markdown={statement} setMarkdown={setStatement} register={registers.statement} />
            <LinearContainer direction="row">
                <Input
                    type="number"
                    placeholder="Time Limit"
                    label="Time Limit"
                    labelPlacement="outside"
                    description="Time limit in milliseconds"
                    required
                    radius="full"
                    fullWidth
                    isRequired
                    {...registers.timeLimit}
                />
                <Input
                    type="number"
                    placeholder="Memory Limit"
                    label="Memory Limit"
                    labelPlacement="outside"
                    description="Memory limit in bytes"
                    required
                    radius="full"
                    fullWidth
                    isRequired
                    {...registers.memoryLimit}
                />
            </LinearContainer>
            <Textarea
                label="Input Format"
                description="Describe the input format"
                placeholder="Type the input format here"
                labelPlacement="outside"
                required
                isRequired
                radius="full"
                {...registers.inputFormat}
            />
            <Textarea
                label="Output Format"
                description="Describe the output format"
                placeholder="Type the output format here"
                labelPlacement="outside"
                required
                isRequired
                radius="full"
                {...registers.outputFormat}
            />
            {/* @todo implement TestCasesInput */}
            {/* <TestCasesInput/> */}
        </form>
    );
}