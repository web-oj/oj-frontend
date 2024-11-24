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
  start_time: string;
  end_time: string;
  scoring_rule: string;
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
    startTime: register("start_time", { required: "Start time is required" }),
    endTime: register("end_time", { required: "End time is required" }),
    scoringRule: register("scoring_rule", {
      required: "Scoring rule is required",
    }),
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
          start_time: watchedFields.start_time,
          end_time: watchedFields.end_time,
          scoring_rule: watchedFields.scoring_rule,
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
        name="start_time"
        render={({ message }) => (
          <p className="text-red-500 text-sm">{message}</p>
        )}
      />
      <ErrorMessage
        errors={errors}
        name="end_time"
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
        name="scoring_rule"
        render={({ message }) => (
          <p className="text-red-500 text-sm">{message}</p>
        )}
      />
    </form>
  );
}
