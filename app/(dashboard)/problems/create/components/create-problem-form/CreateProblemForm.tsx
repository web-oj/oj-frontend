"use client";

import { Input, Textarea } from "@nextui-org/input";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { toast } from "react-toastify";

import { useProblem } from "../../../context";

import { TagsInput } from "./TagsInput";
import StatementEditorInput from "./StatementEditorInput";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { createProblem } from "@/fetch-functions";

interface CreateProblemFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}
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

  const [testCases, setTestCases] = React.useState<
    CreateProblemFormValues["testCases"]
  >([]);
  const [tags, setTags] = React.useState<CreateProblemFormValues["tags"]>([]);
  const [statement, setStatement] =
    React.useState<CreateProblemFormValues["statement"]>("");

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
        isPublished: false,
      });
      console.log(data);
      toast.success("Problem created successfully");
    } catch (error) {
      toast.error("Failed to create problem");
    }
  };

  const onInvalid: SubmitErrorHandler<CreateProblemFormValues> = (
    errors,
    e,
  ) => {
    console.log(errors);
  };

  const registers = {
    title: register("title", {
      required: "Title is required",
      maxLength: {
        value: 200,
        message: "Title must be less than 200 characters",
      },
    }),
    statement: register("statement", { required: "Statement is required" }),
    difficulty: register("difficulty", { required: "Difficulty is required" }),
    tags: register("tags", { required: false }),
    timeLimit: register("timeLimit", { required: "Time limit is required" }),
    memoryLimit: register("memoryLimit", {
      required: "Memory limit is required",
    }),
    inputFormat: register("inputFormat", {
      required: "Input format is required",
    }),
    outputFormat: register("outputFormat", {
      required: "Output format is required",
    }),
    solutionText: register("solutionText", {
      required: "Solution text is required",
    }),
    testCases: register("testCases", { required: false }),
  };
  const watchedFields = watch();

  return (
    <form
      {...props}
      className="flex flex-col gap-4 lg:min-w-[48ch] h-full overflow-y-auto pr-4"
      id="create-problem-form"
      onBlur={() => {
        setData({
          ...data,
          title: watchedFields.title,
          statement: watchedFields.statement,
          difficulty: watchedFields.difficulty,
          tags: watchedFields.tags,
          timeLimit: watchedFields.timeLimit,
          memory_limit: watchedFields.memoryLimit,
          inputFormat: watchedFields.inputFormat,
          outputFormat: watchedFields.outputFormat,
        });
      }}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <Input
        isRequired
        required
        description={`Max length ${registers.title.maxLength}`}
        label="Title"
        labelPlacement="outside"
        placeholder="Title"
        radius="full"
        type="text"
        {...registers.title}
      />
      <ErrorMessage
        errors={errors}
        name="title"
        render={(message) => (
          <p className="text-sm text-danger">{message.message}</p>
        )}
      />
      {/* @todo implement TagInput */}
      <TagsInput className="mb-4" tags={tags || []} onTagsChange={setTags} />
      <Select
        isRequired
        aria-label="Difficulty"
        classNames={{
          base: "items-center",
          trigger: "rounded-l-none",
          label:
            "rounded-r-none rounded-l-full h-full bg-secondary text-secondary-foreground flex items-center justify-center px-4 ",
        }}
        label="Difficulty"
        labelPlacement="outside-left"
        placeholder="Select difficulty"
        radius="full"
        {...registers.difficulty}
      >
        <SelectItem key={1} value={1}>
          Easy
        </SelectItem>
        <SelectItem key={2}>Medium</SelectItem>
        <SelectItem key={3} value={3}>
          Hard
        </SelectItem>
      </Select>
      <ErrorMessage
        errors={errors}
        name="difficulty"
        render={(message) => (
          <p className="text-sm text-danger">{message.message}</p>
        )}
      />
      <StatementEditorInput
        markdown={statement}
        register={registers.statement}
        setMarkdown={setStatement}
      />
      <LinearContainer direction="row">
        <Input
          fullWidth
          isRequired
          required
          description="Time limit in milliseconds"
          label="Time Limit"
          labelPlacement="outside"
          placeholder="Time Limit"
          radius="full"
          type="number"
          {...registers.timeLimit}
        />
        <Input
          fullWidth
          isRequired
          required
          description="Memory limit in bytes"
          label="Memory Limit"
          labelPlacement="outside"
          placeholder="Memory Limit"
          radius="full"
          type="number"
          {...registers.memoryLimit}
        />
      </LinearContainer>
      <ErrorMessage
        errors={errors}
        name="timeLimit"
        render={(message) => (
          <p className="text-sm text-danger">{message.message}</p>
        )}
      />
      <ErrorMessage
        errors={errors}
        name="memoryLimit"
        render={(message) => (
          <p className="text-sm text-danger">{message.message}</p>
        )}
      />
      <Textarea
        isRequired
        required
        description="Describe the input format"
        label="Input Format"
        labelPlacement="outside"
        placeholder="Type the input format here"
        radius="full"
        {...registers.inputFormat}
      />
      <Textarea
        isRequired
        required
        description="Describe the output format"
        label="Output Format"
        labelPlacement="outside"
        placeholder="Type the output format here"
        radius="full"
        {...registers.outputFormat}
      />
      <Textarea
        isRequired
        required
        description="Type the solution text here"
        label="Solution Text"
        labelPlacement="outside"
        placeholder="Type the solution text here"
        radius="full"
        {...registers.solutionText}
      />
      <ErrorMessage
        errors={errors}
        name="inputFormat"
        render={(message) => (
          <p className="text-sm text-danger">{message.message}</p>
        )}
      />
      {/* @todo implement TestCasesInput */}
      {/* <TestCasesInput/> */}
    </form>
  );
}
