"use client";

import { Checkbox, Input, Textarea } from "@nextui-org/react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { useContest } from "../../../context";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { createContest } from "@/fetch-functions";
import { useAuth } from "@/app/context";
import { toast } from "react-toastify";
import { useContestTrack } from "../../context";

interface CreateContestFormProps
  extends React.HTMLAttributes<HTMLFormElement> { }

type CreateContestFormValues = {
  organizerId: number;
  isPublished: boolean;
  isPlagiarismCheckEnabled: boolean;
  scoringRule: string;
  endTime: string;
  startTime: string;
  ruleText: string;
  description: string;
  title: string;
};

export function CreateContestForm(props: CreateContestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<CreateContestFormValues>({
    mode: "onBlur",
  });
  const { data, setData } = useContestTrack();

  const { user } = useAuth();
  const onSubmit: SubmitHandler<CreateContestFormValues> = async (data) => {
    if (!user) {
      toast.error("You must be logged in to create a contest");
      return;
    };

    try {
      await createContest({
        organizerId: user?.id,
        isPublished: data.isPublished,
        isPlagiarismCheckEnabled: data.isPlagiarismCheckEnabled,
        scoringRule: data.scoringRule,
        endTime: data.endTime,
        startTime: data.startTime,
        ruleText: data.scoringRule,
        description: data.description,
        title: data.title,
      })
    } catch (error) {
    }
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
    startTime: register("startTime", {
      required: "Start Time is required",
    }),
    endTime: register("endTime", {
      required: "End Time is required",
    }),
    scoringRule: register("scoringRule", {
      required: "Scoring Rule is required",
    }),
    isPublished: register("isPublished"),
    isPlagiarismCheckEnabled: register("isPlagiarismCheckEnabled"),
    description: register("description", {
      required: "Description is required",
    }),
  };

  const watchedFields = watch();

  return (
    <form
      {...props}
      className="flex flex-col gap-4 lg:min-w-[48ch] overflow-auto"
      id="create-contest-form"
      onBlur={() => {
        setData({
          ...data,
          title: watchedFields.title,
          startTime: watchedFields.startTime,
          endTime: watchedFields.endTime,
          scoringRule: watchedFields.scoringRule,
          description: watchedFields.description
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
          defaultValue={new Date((new Date()).getTime() + (7 * 60 * 60 * 1000)).toISOString().slice(0, 16)}
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
      <LinearContainer direction="row" space="sm" classnames={{
        container: "justify-between",
      }}>
        {/* <Input
          type="checkbox"
          label="Published"
          labelPlacement="outside"
          {...registers.isPublished}
        />
        <Input
          type="checkbox"
          labelPlacement="outside"
          label="Plagiarism Check Enabled"
          {...registers.isPlagiarismCheckEnabled}
        /> */}
        <Checkbox
          {...registers.isPublished}
          onValueChange={(value) => {
            registers.isPublished.onChange({ target: { value } });
          }}
        >
          Published
        </Checkbox>
        <Checkbox
          {...registers.isPlagiarismCheckEnabled}
          onValueChange={(value) => {
            registers.isPlagiarismCheckEnabled.onChange({ target: { value } });
          }}
        >
          Plagiarism Check Enabled
        </Checkbox>
      </LinearContainer>
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
