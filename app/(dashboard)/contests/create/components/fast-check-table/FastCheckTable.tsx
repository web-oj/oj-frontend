"use client";
import { useContest } from "../../../context";

import { LinearContainer } from "@/components/ui";
import { Field } from "@/components/ui";

interface FastCheckTableProps extends React.HTMLAttributes<HTMLDivElement> { }
export function FastCheckTable(props: FastCheckTableProps) {
  const { data } = useContest();

  const fields = [
    {
      label: "Organizer",
      value: data ? data.organizerId : "N/A",
    },
    {
      label: "Title",
      value: data ? data.title : "N/A",
    },
    {
      label: "Start Time",
      value: data ? data.startTime : "N/A",
    },
    {
      label: "End Time",
      value: data ? data.endTime : "N/A",
    },
    {
      label: "Scoring Rule",
      value: data ? data.scoringRule : "N/A",
    },
    {
      label: "Description",
      value: data ? data.description : "N/A",
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
          value={field.value as string}
        />
      ))}
    </LinearContainer>
  );
}
