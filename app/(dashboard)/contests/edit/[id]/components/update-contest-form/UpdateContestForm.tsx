"use client";

import { Checkbox, Input, Textarea } from "@nextui-org/react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";

import { useContestTrack } from "../../context";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { addProblemToContest, removeProblemFromContest, updateContest } from "@/fetch-functions";
import { useAuth } from "@/app/context";
import EditorInputMarkdown from "@/components/markdown/EditorInputMarkdown";
import { useContest } from "@/app/(dashboard)/contests/context";
import AddProblems from "../AddProblems";

interface UpdateContestFormProps
  extends React.HTMLAttributes<HTMLFormElement> { }

type UpdateContestFormValues = {
  organizerId: number;
  isPublished: boolean;
  isPlagiarismCheckEnabled: boolean;
  scoringRule: string;
  endTime: number;
  startTime: number;
  ruleText: string;
  description: string;
  title: string;
};

export function UpdateContestForm(props: UpdateContestFormProps) {
  const { data: contest } = useContest();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<UpdateContestFormValues>({
    mode: "onBlur",
    defaultValues: {
      title: contest.title,
      startTime: contest.startTime,
      endTime: contest.endTime,
      ruleText: contest.ruleText,
      scoringRule: contest.scoringRule,
      description: contest.description,
      isPublished: contest.isPublished,
    }
  });
  const { data, setData } = useContestTrack();
  const { user } = useAuth();

  const [description, setDescription] = React.useState<string>(contest.description);
  const [problemsInContest, setProblemsInContest] = React.useState<{
    score: number;
    problemId: number;
  }[]>([]);

  const onSubmit: SubmitHandler<UpdateContestFormValues> = async (data) => {
    if (!user) {
      toast.error("You must be logged in to create a contest");

      return;
    }

    try {
      await updateContest({
        id: contest.id,
        data: {
          isPublished: data.isPublished || contest.isPublished,
          scoringRule: data.scoringRule || contest.scoringRule,
          endTime: new Date(data.endTime).getTime() || contest.endTime,
          startTime: new Date(data.startTime).getTime() || contest.startTime,
          ruleText: data.scoringRule || contest.scoringRule,
          description: description || contest.description,
          title: data.title,
        },
      });

      // compare problemsInContest with contest.problemsInContest, if has difference, update the contest (add or remove problems)
      const existingProblems = contest.problemsInContest || [];
      console.log(problemsInContest, existingProblems);
      const problemsToAdd = problemsInContest.filter(
        (problem) =>
          !existingProblems.some(
            (existingProblem) => existingProblem.problemId === problem.problemId
          )
      ).map(p => ({ problemId: p.problemId, score: p.score }));

      const problemsToRemove = existingProblems.filter(
        (existingProblem) =>
          !problemsInContest.some(
            (problem) => problem.problemId === existingProblem.problemId
          )
      ).map(p => ({ problemId: p.id }));

      for (const problem of problemsToAdd) {
        try {
          await addProblemToContest({
            contestId: contest.id,
            problemId: problem.problemId,
            score: problem.score,
          });
        } catch (error) {
          toast.error("Failed to add problem to contest");
        }
      }

      for (const problem of problemsToRemove) {
        try {
          await removeProblemFromContest({
            id: contest.id,
            problemId: problem.problemId,
          });
        } catch (error) {
          toast.error("Failed to remove problem from contest");
        }
      }

      toast.success("Contest updated successfully");
    } catch (error) {
      toast.error("Failed to update contest");
    }
  };

  const onInvalid: SubmitErrorHandler<UpdateContestFormValues> = (
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
    startTime: register("startTime"),
    endTime: register("endTime"),
    scoringRule: register("scoringRule"),
    ruleText: register("ruleText"),
    isPublished: register("isPublished"),
    description: register("description"),
  };

  const watchedFields = watch();

  return (
    <form
      {...props}
      className="flex flex-col gap-4 lg:min-w-[48ch] overflow-auto"
      id="update-contest-form"
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

      <EditorInputMarkdown
        label="Description"
        markdown={description}
        placeholder="Type the description here"
        register={registers.description}
        setMarkdown={setDescription}
      />
      <ErrorMessage
        errors={errors}
        name="description"
        render={({ message }) => (
          <p className="text-red-500 text-sm">{message}</p>
        )}
      />
      <LinearContainer fullwidth direction="column">
        <Input
          isRequired
          label="Start Time"
          labelPlacement="outside"
          placeholder="Start Time"
          radius="full"
          type="datetime-local"
          value={new Date(Number(contest.startTime)).toISOString().slice(0, 16)}
          {...registers.startTime}
        />
        <Input
          isRequired
          label="End Time"
          labelPlacement="outside"
          placeholder="End Time"
          radius="full"
          type="datetime-local"
          value={new Date(Number(contest.endTime)).toISOString().slice(0, 16)}
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
      <Textarea
        isRequired
        required
        classNames={{
          base: "max-h-[200ch]",
        }}
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
      <LinearContainer
        fullwidth
        classnames={{
          container: "justify-between",
        }}
        direction="row"
        space="sm"
      >
        <Checkbox
          {...registers.isPublished}
          onValueChange={(value) => {
            registers.isPublished.onChange({ target: { value } });
          }}
        >
          Published
        </Checkbox>
      </LinearContainer>
      <AddProblems problemsInContest={problemsInContest} setProblemsInContest={setProblemsInContest} />
    </form>
  );
}
