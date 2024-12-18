"use client";

import { useProblem } from "../../../context";

import { LinearContainer } from "@/components/ui";
import { Field } from "@/components/ui";
import { Checkbox } from "@nextui-org/react";

interface FastCheckTableProps extends React.HTMLAttributes<HTMLDivElement> { }
export function FastCheckTable(props: FastCheckTableProps) {
  const { data } = useProblem();

  const fields = [
    {
      label: "Title",
      value: data ? data.title : "N/A",
    },
    {
      label: "Difficulty",
      value: data ? data.difficulty : "N/A",
    },
    {
      label: "Time Limit",
      value: data ? data.timeLimit : "N/A",
    },
    {
      label: "Memory Limit",
      value: data ? data.memoryLimit : "N/A",
    },
  ];
  const checkFields = [
    {
      label: "Title",
      value: data && !!data.title,
    },
    {
      label: "Difficulty",
      value: data && !!data.difficulty,
    },
    {
      label: "Statement",
      value: data && !!data.statement,
    },
    {
      label: "Time Limit",
      value: data && !!data.timeLimit,
    },
    {
      label: "Memory Limit",
      value: data && !!data.memoryLimit,
    },
    {
      label: "Input Format",
      value: data && !!data.inputFormat,
    },
    {
      label: "Output Format",
      value: data && !!data.outputFormat,
    },
    {
      label: "Solution Text",
      value: data && !!data.solutionText,
    }
  ];
  return (
    <LinearContainer
      fullwidth
      classnames={{
        wrapper: "w-full bg-foreground-50 rounded-large p-4",
      }}
      direction="column"
      space="sm"
    >
      {checkFields.map((field, index) => (
        <Field
          key={index}
          fullWidth
          classNames={{
            wrapper: "justify-between",
          }}
          direction="row"
          label={field.label}
          value={
            <Checkbox
              isSelected={field.value}
              color="primary"
              disabled
              radius="full"
            />
          }
        />
      ))}
    </LinearContainer>
  );
}
