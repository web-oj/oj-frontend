"use client";

import { Input, Textarea } from "@nextui-org/react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { toast } from "react-toastify";

import { useProblem } from "../../../context";

import StatementEditorInput from "./StatementEditorInput";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { createProblem } from "@/fetch-functions";
import { encodeBase64 } from "@/libs";
import { useAuth } from "@/app/context";

interface CreateProblemFormProps
  extends React.HTMLAttributes<HTMLFormElement> { }
type CreateProblemFormValues = {
  solutionText: string;
  outputFormat: string;
  inputFormat: string;
  memoryLimit: number;
  timeLimit: number;
  difficulty: number;
  statement: string;
  title: string;
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
  const { user } = useAuth();
  const [statement, setStatement] =
    React.useState<CreateProblemFormValues["statement"]>("");

  const onSubmit: SubmitHandler<CreateProblemFormValues> = async (data) => {
    if (!user) {
      toast.error("You must be logged in to create a problem");
      return;
    }

    try {
      await createProblem({
        isPublished: true,
        title: data.title,
        statement: data.statement,
        difficulty: data.difficulty,
        timeLimit: data.timeLimit,
        memoryLimit: data.memoryLimit,
        inputFormat: data.inputFormat,
        outputFormat: data.outputFormat,
        solutionText: data.solutionText,
      });
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
    difficulty: register("difficulty", {
      required: "Difficulty is required",
      min: {
        value: 1,
        message: "Difficulty must be at least 1",
      },
    }),
    timeLimit: register("timeLimit", {
      required: "Time limit is required",
      min: {
        value: 1,
        message: "Time limit must be at least 1 millisecond",
      },
    }),
    memoryLimit: register("memoryLimit", {
      required: "Memory limit is required",
      min: {
        value: 1,
        message: "Memory limit must be at least 1 byte",
      },
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
  };
  const watchedFields = watch();

  return (
    <form
      {...props}
      id="create-problem-form"
      onBlur={() => {
        
        setData({
          ...data,
          title: watchedFields.title,
          statement: watchedFields.statement,
          difficulty: watchedFields.difficulty as any,
          timeLimit: watchedFields.timeLimit,
          memoryLimit: watchedFields.memoryLimit,
          inputFormat: watchedFields.inputFormat,
          outputFormat: watchedFields.outputFormat,
          solutionText: watchedFields.solutionText,
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
      <Input
        fullWidth
        isRequired
        required
        description="Difficulty level of the problem"
        label="Difficulty"
        labelPlacement="outside"
        placeholder="Difficulty"
        radius="full"
        type="number"
        {...registers.difficulty}
      />
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
      <LinearContainer direction="row" fullwidth>
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
        description="Describe the solution"
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
