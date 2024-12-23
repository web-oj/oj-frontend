"use client";

import { Calendar03Icon } from "hugeicons-react";
import React from "react";

import { useContest } from "../../../../context";

import { RenderMarkdown } from "@/components/markdown";
import { Field, LinearContainer } from "@/components/ui";
import ParticipantToolbar from "./ParticipantToolbar";

interface DetailsAreaProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function DetailsArea(props: DetailsAreaProps) {
  const { data: contest } = useContest();

  return (
    <LinearContainer
      fullheight
      fullwidth
      classnames={{
        wrapper: "bg-foreground-50 p-4 overflow-y-auto relative",
      }}
      direction="column"
      space="sm"
      {...props}
    >
      <ParticipantToolbar />
      <div className="flex items-center flex-row gap-1">
        <h1 className="text-2xl font-bold text-foreground">{contest?.title}</h1>
      </div>
      <LinearContainer direction="row" space="sm">
        <Field
          classNames={{
            value: "text-foreground-500",
          }}
          direction="row"
          icon={<Calendar03Icon className="text-foreground-500" size={16} />}
          label="Start time"
          showLabel={false}
          value={new Date(Number(contest.startTime)).toLocaleString()}
        />
        <Field
          classNames={{
            value: "text-foreground-500",
          }}
          direction="row"
          icon={<Calendar03Icon className="text-foreground-500" size={16} />}
          label="End time"
          showLabel={false}
          value={new Date(Number(contest.endTime)).toLocaleString()}
        />
      </LinearContainer>
      <RenderMarkdown data={contest.description} />
    </LinearContainer>
  );
}
