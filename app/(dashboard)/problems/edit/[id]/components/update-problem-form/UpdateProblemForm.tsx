"use client";

import { Input, Textarea } from "@nextui-org/react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { toast } from "react-toastify";


import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { createProblem, updateProblem } from "@/fetch-functions";
import { useProblem } from "@/app/(dashboard)/problems/context";
import StatementEditorInput from "@/app/(dashboard)/problems/components/StatementEditorInput";

interface CreateProblemFormProps
  extends React.HTMLAttributes<HTMLFormElement> { }
type UpdateProblemFormValues = {
  solutionText: string;
  outputFormat: string;
  inputFormat: string;
  memoryLimit: number;
  timeLimit: number;
  difficulty: number;
  statement: string;
  title: string
};

export function UpdateProblemForm(props: CreateProblemFormProps) {
  const { data, setData } = useProblem();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<UpdateProblemFormValues>({
    mode: "onChange",
    defaultValues: {
      title: data.title,
      statement: data.statement,
      difficulty: data.difficulty,
      timeLimit: data.timeLimit,
      memoryLimit: data.memoryLimit,
      inputFormat: data.inputFormat,
      outputFormat: data.outputFormat,
      solutionText: data.solutionText,
    }
  });

  const [statement, setStatement] =
    React.useState<UpdateProblemFormValues["statement"]>(data.statement);

  const onSubmit: SubmitHandler<UpdateProblemFormValues> = async (data) => {
    const { title, statement, difficulty, timeLimit, memoryLimit, inputFormat, outputFormat, solutionText } = data;
    try {
      await updateProblem({
        id: 10,
        data: {
          ...data,
          title,
          statement,
          difficulty,
          timeLimit,
          memoryLimit,
          inputFormat,
          outputFormat,
          solutionText
        }
      })
      toast.success("Problem created successfully");
    } catch (error) {
      toast.error("Failed to create problem");
    }
  };

  const onInvalid: SubmitErrorHandler<UpdateProblemFormValues> = (
    errors,
    e,
  ) => {
    console.log(errors);
  };

  const registers = {
    title: register("title", {
      maxLength: {
        value: 200,
        message: "Title must be less than 200 characters",
      },
    }),
    statement: register("statement"),
    difficulty: register("difficulty", {
      min: {
        value: 1,
        message: "Difficulty must be at least 1",
      },
    }),
    timeLimit: register("timeLimit", {
      min: {
        value: 1,
        message: "Time limit must be at least 1 millisecond",
      },
    }),
    memoryLimit: register("memoryLimit", {
      min: {
        value: 1,
        message: "Memory limit must be at least 1 byte",
      },
    }),
    inputFormat: register("inputFormat", {
    }),
    outputFormat: register("outputFormat", {
    }),
    solutionText: register("solutionText", {
    })
  };
  const watchedFields = watch();

  return (
    <form
      {...props}
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
      id="update-problem-form"
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <Input
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
      <LinearContainer direction="row">
        <Input
          fullWidth
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
        description="Describe the input format"
        label="Input Format"
        labelPlacement="outside"
        placeholder="Type the input format here"
        radius="full"
        {...registers.inputFormat}
      />
      <Textarea
        description="Describe the output format"
        label="Output Format"
        labelPlacement="outside"
        placeholder="Type the output format here"
        radius="full"
        {...registers.outputFormat}
      />
      <Textarea
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
