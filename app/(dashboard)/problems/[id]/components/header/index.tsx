"use client";
import {
  Clock01Icon,
  FireIcon,
  Rocket01Icon,
  UsbMemory01Icon,
} from "hugeicons-react";
import { useSearchParams } from "next/navigation";

import { useProblem } from "../../../context";

import Submit from "./Submit";

import { Field, LinearContainer } from "@/components/ui";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
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
        classnames={{
          container: "flex-wrap",
        }}
        direction="row"
        space="sm"
      >
        <Field
          icon={<FireIcon size={16} />}
          label="Difficulty"
          showLabel={false}
          value={problem?.difficulty}
        />
        <Field
          icon={<Clock01Icon size={16} />}
          label="Time Limit"
          showLabel={false}
          value={`${problem?.timeLimit} seconds`}
        />
        <Field
          icon={<UsbMemory01Icon size={16} />}
          label="Memory Limit"
          showLabel={false}
          value={`${problem?.memoryLimit} MB`}
        />
        {contestId && (
          <Field
            icon={<Rocket01Icon size={16} />}
            label="Contest"
            showLabel={false}
            value={contestId}
          />
        )}
      </LinearContainer>
    </LinearContainer>
  );
}
