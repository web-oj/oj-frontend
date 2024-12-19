"use client";
import { Clock01Icon, FireIcon, Rocket01Icon, UsbMemory01Icon } from "hugeicons-react";

import { useProblem } from "../../../context";

import Submit from "./Submit";

import { Field, LinearContainer } from "@/components/ui";
import { useSearchParams } from "next/navigation";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> { }
export default function Header(props: HeaderProps) {
  const { data: problem } = useProblem();
  const searchParams = useSearchParams();
  const contestId = searchParams.get("contestId");

  return (
    <LinearContainer
      fullwidth
      classnames={{
        wrapper: "relative",
      }}
      direction="column"
      space="sm"
    >
      <Submit />
      <h1 className="text-2xl font-bold text-foreground capitalize">
        {problem?.title}
      </h1>
      <LinearContainer
        className="text-foreground-500"
        direction="row"
        space="sm"
        classnames={{
          container: "flex-wrap",
        }}
      >
        <Field
          icon={<FireIcon size={16} />}
          label="Difficulty"
          value={problem?.difficulty}
          showLabel={false}
        />
        <Field
          icon={<Clock01Icon size={16} />}
          label="Time Limit"
          value={`${problem?.timeLimit} seconds`}
          showLabel={false}
        />
        <Field
          icon={<UsbMemory01Icon size={16} />}
          label="Memory Limit"
          value={`${problem?.memoryLimit} MB`}
          showLabel={false}
        />
        {contestId && (
          <Field
            icon={<Rocket01Icon size={16} />}
            label="Contest"
            value={contestId}
            showLabel={false}
          />
        )}
      </LinearContainer>
    </LinearContainer>
  );
}
