"use client";
import { Clock01Icon, FireIcon, UsbMemory01Icon } from "hugeicons-react";

import { useProblem } from "../../../context";

import Submit from "./Submit";

import { Field, LinearContainer } from "@/components/ui";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Header(props: HeaderProps) {
  const { data: problem } = useProblem();

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
      >
        <Field
          icon={<FireIcon size={16} />}
          label="Difficulty"
          value={problem?.difficulty}
        />
        <Field
          icon={<Clock01Icon size={16} />}
          label="Time Limit"
          value={`${problem?.timeLimit} seconds`}
        />
        <Field
          icon={<UsbMemory01Icon size={16} />}
          label="Memory Limit"
          value={`${problem?.memoryLimit} MB`}
        />
      </LinearContainer>
    </LinearContainer>
  );
}
