"use client";

import { Input, Textarea } from "@nextui-org/input";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { useContest } from "../../../context";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { createContest } from "@/fetch-functions";
import { useAuth } from "@/app/context";
import { toast } from "react-toastify";

interface CreateContestFormProps
  extends React.HTMLAttributes<HTMLFormElement> { }
type CreateContestFormValues = {
  title: string;
  startTime: Date;
  endTime: Date;
  description: string;
  scoringRule: string;
  ruleText: string;
  isPublished: boolean;
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
  const { user } = useAuth();

  if (!user) return null;

  const onSubmit: SubmitHandler<CreateContestFormValues> = async (data) => {
    console.log({
      title: data.title,
      startTime: data.startTime,
      endTime: data.endTime,
      organizerId: user.userId,
      ruleText: data.ruleText,
      scoringRule: data.scoringRule,
      isPublished: data.isPublished,
      description: data.description,
      isPlagiarismCheckEnabled: data.isPlagiarismCheckEnabled,
    });
    try {
      await createContest({
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        organizerId: user.userId,
        ruleText: data.ruleText,
        scoringRule: data.scoringRule,
        isPublished: data.isPublished,
        description: data.description,
        isPlagiarismCheckEnabled: data.isPlagiarismCheckEnabled,
      });
      toast.success("Contest created successfully");
    } catch (error) {
      toast.error("Failed to create contest");
    }
  };

  const onInvalid: SubmitErrorHandler<CreateContestFormValues> = (
    errors,
    e,
  ) => {
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
    ruleText: register("ruleText", { required: "Rule text is required" }),
    isPublished: register("isPublished"),
    isPlagiarismCheckEnabled: register("isPlagiarismCheckEnabled"),
    description: register("description"),
  };

  const watchedFields = watch();

  return (
    <form
      {...props}
      className="flex flex-col gap-4 lg:min-w-[48ch]"
      id="create-contest-form"
      onBlur={() => {
        setData({
          ...data,
          organizerId: user.userId,
          title: watchedFields.title,
          startTime: watchedFields.startTime,
          endTime: watchedFields.endTime,
          scoringRule: watchedFields.scoringRule,
          description: watchedFields.description,
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
        label="Rule Text"
        labelPlacement="outside"
        placeholder="Type the rule text here"
        radius="full"
        {...registers.ruleText}
      />
      <ErrorMessage
        errors={errors}
        name="ruleText"
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
      <Input
        isRequired
        label="Published"
        labelPlacement="outside"
        type="checkbox"
        {...registers.isPublished}
      />
      <Input
        isRequired
        label="Plagiarism Check"
        labelPlacement="outside"
        type="checkbox"
        {...registers.isPlagiarismCheckEnabled}
      />
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
