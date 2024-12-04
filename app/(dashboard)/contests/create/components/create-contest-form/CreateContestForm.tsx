"use client";

import { Input, Textarea } from "@nextui-org/input";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { useContest } from "../../../context";

import { LinearContainer } from "@/components/ui/container/LinearContainer";

interface CreateContestFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}
type CreateContestFormValues = {
  title: string;
  startTime: string;
  endTime: string;
  scoringRule: string;
  isPublished: boolean;
  description: string;
  isPlagiarismCheckEnabled: boolean;
};

export function CreateContestForm(props: CreateContestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<CreateContestFormValues>();
  const { data, setData } = useContest();

  const onSubmit: SubmitHandler<CreateContestFormValues> = (data) => {
    console.log(data);
  };

  const onInvalid: SubmitErrorHandler<CreateContestFormValues> = (
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
    startTime: register("startTime", { required: "Start time is required" }),
    endTime: register("endTime", { required: "End time is required" }),
    scoringRule: register("scoringRule", {
      required: "Scoring rule is required",
    }),
    isPublished: register("isPublished"),
    isPlagiarismCheckEnabled: register("isPlagiarismCheckEnabled"),
    description: register("description"),
  };

  const watchedFields = watch();

  return (
    <form
      {...props}
      className="flex flex-col gap-4 lg:min-w-[48ch]"
      id="create-problem-form"
      onBlur={() => {
        setData({
          ...data,
          title: watchedFields.title,
          startTime: watchedFields.startTime,
          endTime: watchedFields.endTime,
          scoringRule: watchedFields.scoringRule,
        });
      }}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <Input
        isRequired
        required
        description="Max length 200"
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
        render={({ message }) => (
          <p className="text-red-500 text-sm">{message}</p>
        )}
      />
      <LinearContainer direction="column">
        <Input
          isRequired
          label="Start Time"
          labelPlacement="outside"
          placeholder="Start Time"
          radius="full"
          type="datetime-local"
          {...registers.startTime}
        />
        <Input
          isRequired
          label="End Time"
          labelPlacement="outside"
          placeholder="End Time"
          radius="full"
          type="datetime-local"
          {...registers.endTime}
        />
      </LinearContainer>
      <ErrorMessage
        errors={errors}
        name="startTime"
        render={({ message }) => (
          <p className="text-red-500 text-sm">{message}</p>
        )}
      />
      <ErrorMessage
        errors={errors}
        name="endTime"
        render={({ message }) => (
          <p className="text-red-500 text-sm">{message}</p>
        )}
      />
      <Textarea
        isRequired
        required
        classNames={{
          base: "max-h-[200ch]",
        }}
        label="Scoring Rule"
        labelPlacement="outside"
        placeholder="Type the scoring rule here"
        radius="full"
        {...registers.scoringRule}
      />
      <ErrorMessage
        errors={errors}
        name="scoringRule"
        render={({ message }) => (
          <p className="text-red-500 text-sm">{message}</p>
        )}
      />
      <Input type="checkbox" {...registers.isPublished} />
      <label htmlFor="isPublished">Published</label>
      <Input type="checkbox" {...registers.isPlagiarismCheckEnabled} />
      <label htmlFor="isPlagiarismCheckEnabled">Plagiarism Check Enabled</label>
      <Textarea
        isRequired
        required
        label="Description"
        labelPlacement="outside"
        placeholder="Type the description here"
        radius="full"
        {...registers.description}
      />
    </form>
  );
}
