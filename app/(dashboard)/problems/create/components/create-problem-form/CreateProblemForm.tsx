"use client";

import { Input, Textarea } from "@nextui-org/input";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { TagsInput } from "./TagsInput";
import StatementEditorInput from "./StatementEditorInput";
import { useProblem } from "../../../context";
import { createProblem } from "@/fetch-functions";
import { toast } from "react-toastify";

interface CreateProblemFormProps extends React.HTMLAttributes<HTMLFormElement> { }
type CreateProblemFormValues = {
    title: string;
    statement: string;
    difficulty: number;
    tags?: string[];
    timeLimit: number;
    memoryLimit: number;
    inputFormat: string;
    outputFormat: string;
    solutionText: string;
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
        watch,
    } = useForm<CreateProblemFormValues>({
        mode: "onChange",
    });
    const { data, setData } = useProblem();

    const [testCases, setTestCases] = React.useState<CreateProblemFormValues["testCases"]>([]);
    const [tags, setTags] = React.useState<CreateProblemFormValues["tags"]>([]);
    const [statement, setStatement] = React.useState<CreateProblemFormValues["statement"]>('');

    const onSubmit: SubmitHandler<CreateProblemFormValues> = (data) => {
        try {
            createProblem({
                title: data.title,
                statement: data.statement,
                difficulty: data.difficulty,
                timeLimit: data.timeLimit,
                memoryLimit: data.memoryLimit,
                inputFormat: data.inputFormat,
                outputFormat: data.outputFormat,
                solutionText: data.solutionText,
            });
            console.log(data);
            toast.success("Problem created successfully");
        } catch (error) {
            toast.error("Failed to create problem");
        }
    }

    const onInvalid: SubmitErrorHandler<CreateProblemFormValues> = (errors, e) => {
        console.log(errors);
    }

    const registers = {
        title: register("title", {
            required: "Title is required",
            maxLength: {
                value: 200,
                message: "Title must be less than 200 characters"
            },
        }),
        statement: register("statement", { required: "Statement is required" }),
        difficulty: register("difficulty", { required: "Difficulty is required" }),
        tags: register("tags", { required: false }),
        timeLimit: register("timeLimit", { required: "Time limit is required" }),
        memoryLimit: register("memoryLimit", { required: "Memory limit is required" }),
        inputFormat: register("inputFormat", { required: "Input format is required" }),
        outputFormat: register("outputFormat", { required: "Output format is required" }),
        solutionText: register("solutionText", { required: "Solution text is required" }),
        testCases: register("testCases", { required: false }),
    }
    const watchedFields = watch();


    return (
        <form
            {...props}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            onBlur={() => {
                setData({
                    ...data,
                    title: watchedFields.title,
                    statement: watchedFields.statement,
                    difficulty: watchedFields.difficulty,
                    tags: watchedFields.tags,
                    time_limit: watchedFields.timeLimit,
                    memory_limit: watchedFields.memoryLimit,
                    input_format: watchedFields.inputFormat,
                    output_format: watchedFields.outputFormat,
                });
            }}
            className="flex flex-col gap-4 lg:min-w-[48ch] h-full overflow-y-auto pr-4"
            id="create-problem-form"
        >
            <Input
                type="text"
                label="Title"
                labelPlacement="outside"
                placeholder="Title"
                description={`Max length ${registers.title.maxLength}`}
                required
                radius="full"
                isRequired
                {...registers.title}
            />
            <ErrorMessage
                errors={errors}
                name="title"
                render={(message) => <p className="text-sm text-danger">{message.message}</p>}
            />
            {/* @todo implement TagInput */}
            <TagsInput
                tags={tags || []}
                onTagsChange={setTags}
                className="mb-4"
            />
            <Select
                label="Difficulty"
                placeholder="Select difficulty"
                labelPlacement="outside-left"
                radius="full"
                isRequired
                aria-label="Difficulty"
                classNames={{
                    base: "items-center",
                    trigger: "rounded-l-none",
                    label: "rounded-r-none rounded-l-full h-full bg-secondary text-secondary-foreground flex items-center justify-center px-4 ",
                }}
                {...registers.difficulty}
            >
                <SelectItem key={1} value={1}>Easy</SelectItem>
                <SelectItem key={2}>Medium</SelectItem>
                <SelectItem key={3} value={3}>Hard</SelectItem>
            </Select>
            <ErrorMessage
                errors={errors}
                name="difficulty"
                render={(message) => <p className="text-sm text-danger">{message.message}</p>}
            />
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
            <ErrorMessage
                errors={errors}
                name="timeLimit"
                render={(message) => <p className="text-sm text-danger">{message.message}</p>}
            />
            <ErrorMessage
                errors={errors}
                name="memoryLimit"
                render={(message) => <p className="text-sm text-danger">{message.message}</p>}
            />
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
            <Textarea
                label="Solution Text"
                description="Type the solution text here"
                placeholder="Type the solution text here"
                labelPlacement="outside"
                required
                isRequired
                radius="full"
                {...registers.solutionText}
            />
            <ErrorMessage
                errors={errors}
                name="inputFormat"
                render={(message) => <p className="text-sm text-danger">{message.message}</p>}
            />
            {/* @todo implement TestCasesInput */}
            {/* <TestCasesInput/> */}
        </form>
    );
}