"use client";

import { Input, Textarea } from "@nextui-org/react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { toast } from "react-toastify";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { addTestcasesToProblem, updateProblem } from "@/fetch-functions";
import { useProblem } from "@/app/(dashboard)/problems/context";
import StatementEditorInput from "@/app/(dashboard)/problems/components/StatementEditorInput";
import AddTestcases from "./AddTestcases";
import EditorInputMarkdown from "@/components/markdown/EditorInputMarkdown";

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
  title: string;
};

export function UpdateProblemForm(props: CreateProblemFormProps) {
  const { data: problem, setData } = useProblem();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<UpdateProblemFormValues>({
    mode: "onChange",
    defaultValues: {
      title: problem.title,
      statement: problem.statement,
      difficulty: problem.difficulty,
      timeLimit: problem.timeLimit,
      memoryLimit: problem.memoryLimit,
      inputFormat: problem.inputFormat,
      outputFormat: problem.outputFormat,
      solutionText: problem.solutionText,
    },
  });

  const [statement, setStatement] = React.useState<
    UpdateProblemFormValues["statement"]
  >(problem.statement);
  const [testcases, setTestcases] = React.useState<{
    input: string;
    output: string;
  }[]>(
    problem.testcases.map((testcase) => ({
      input: testcase.input,
      output: testcase.output,
    })),
  );

  const [inputFormat, setInputFormat] = React.useState<string>(
    problem.inputFormat,
  );

  const [outputFormat, setOutputFormat] = React.useState<string>(
    problem.outputFormat,
  );

  const onSubmit: SubmitHandler<UpdateProblemFormValues> = async (data) => {
    const {
      title,
      difficulty,
      timeLimit,
      memoryLimit,
      inputFormat,
      outputFormat,
      solutionText,
    } = data;

    try {
      if (testcases.length > 0) {
        const testcasesToProblem = testcases.map((testcase) => ({
          input: testcase.input,
          output: testcase.output,
        }));

        try {
          await addTestcasesToProblem({
            problemId: problem.id,
            testcases: testcasesToProblem,
          })
        } catch (error) {
          toast.error("Failed to add testcases to problem");
        }
      }
      
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
          solutionText,
        },
      });

      toast.success("Problem updated successfully");
    } catch (error) {
      toast.error("Failed to update problem");
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
    inputFormat: register("inputFormat", {}),
    outputFormat: register("outputFormat", {}),
    solutionText: register("solutionText", {}),
  };
  const watchedFields = watch();

  return (
    <form
      {...props}
      id="update-problem-form"
      onBlur={() => {
        setData({
          ...problem,
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
        description={`Max length ${registers.title.maxLength}`}
        classNames={{
          inputWrapper: "bg-foreground-50",
        }}
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
        classNames={{
          inputWrapper: "bg-foreground-50",
        }}
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
      <EditorInputMarkdown
        markdown={statement}
        setMarkdown={setStatement}
        label="Statement"
        register={registers.statement}
      />
      <LinearContainer direction="row" fullwidth>
        <Input
          fullWidth
          description="Time limit in milliseconds"
          label="Time Limit"
          labelPlacement="outside"
          placeholder="Time Limit"
          radius="full"
          type="number"
          classNames={{
            inputWrapper: "bg-foreground-50",
          }}
          {...registers.timeLimit}
        />
        <Input
          fullWidth
          description="Memory limit in bytes"
          label="Memory Limit"
          labelPlacement="outside"
          placeholder="Memory Limit"
          classNames={{
            inputWrapper: "bg-foreground-50",
          }}
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
      <EditorInputMarkdown
        markdown={problem.inputFormat}
        setMarkdown={setInputFormat}
        label="Input Format"
        register={registers.inputFormat}
      />
      <EditorInputMarkdown
        markdown={problem.outputFormat}
        setMarkdown={setOutputFormat}
        label="Output Format"
        register={registers.outputFormat}
      />
      <Textarea
        description="Describe the solution"
        label="Solution Text"
        labelPlacement="outside"
        placeholder="Type the solution text here"
        radius="full"
        classNames={{
          inputWrapper: "bg-foreground-50",
        }}
        {...registers.solutionText}
      />
      <ErrorMessage
        errors={errors}
        name="inputFormat"
        render={(message) => (
          <p className="text-sm text-danger">{message.message}</p>
        )}
      />
      <AddTestcases testcases={testcases} setTestcases={setTestcases} />
    </form>
  );
}
