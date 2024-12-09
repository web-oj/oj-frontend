"use client";
import { Clock01Icon, FireIcon, UsbMemory01Icon } from "hugeicons-react";
import { useProblem } from "../../../context";

import { Field, LinearContainer } from "@/components/ui";
import { Button } from "@nextui-org/react";
import Submit from "./Submit";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> { }
export default function Header(props: HeaderProps) {
  const { data: problem } = useProblem();

  return (
    <LinearContainer
      fullwidth
      classnames={{
        wrapper: "relative"
      }} direction="column" space="sm">
      <Submit />
      <h1 className="text-2xl font-bold text-foreground capitalize">{problem?.title}</h1>
      <LinearContainer
        direction="row"
        space="sm"
        className="text-foreground-500"
      >
        <Field
          label="Difficulty"
          icon={<FireIcon size={16} />}
          value={problem?.difficulty}
        />
        <Field
          label="Time Limit"
          icon={<Clock01Icon size={16} />}
          value={`${problem?.timeLimit} seconds`}
        />
        <Field
          label="Memory Limit"
          icon={<UsbMemory01Icon size={16} />}
          value={`${problem?.memoryLimit} MB`}
        />
      </LinearContainer>
    </LinearContainer>
  );
}
