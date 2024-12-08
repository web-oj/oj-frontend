"use client";
import { useProblem } from "../../../context";

import { LinearContainer } from "@/components/ui";
import { Field } from "@/components/ui";

interface FastCheckTableProps extends React.HTMLAttributes<HTMLDivElement> {}
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
    {
      label: "Tags",
      value: data ? data?.tags?.join(", ") : "N/A",
    },
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
      {fields.map((field, index) => (
        <Field
          key={index}
          fullWidth
          classNames={{
            wrapper: "justify-between",
          }}
          direction="row"
          label={field.label}
          value={field.value}
        />
      ))}
    </LinearContainer>
  );
}
