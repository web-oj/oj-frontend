"use client";
import { useContest } from "../../../context";

import { LinearContainer } from "@/components/ui";
import { Field } from "@/components/ui";

interface FastCheckTableProps extends React.HTMLAttributes<HTMLDivElement> {}
export function FastCheckTable(props: FastCheckTableProps) {
  const { data } = useContest();

  const fields = [
    {
      label: "Title",
      value: data ? data.title : "N/A",
    },
    {
      label: "Start Time",
      value: data ? data.start_time : "N/A",
    },
    {
      label: "End Time",
      value: data ? data.end_time : "N/A",
    },
    {
      label: "Scoring Rule",
      value: data ? data.scoring_rule : "N/A",
    },
    {
      label: "Organizer",
      value: data ? data.organizer_id : "N/A",
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
