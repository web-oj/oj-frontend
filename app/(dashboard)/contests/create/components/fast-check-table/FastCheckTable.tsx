"use client";
import { useContestTrack } from "../../context";

import { LinearContainer } from "@/components/ui";
import { Field } from "@/components/ui";
import { Checkbox } from "@nextui-org/react";

interface FastCheckTableProps extends React.HTMLAttributes<HTMLDivElement> { }
export function FastCheckTable(props: FastCheckTableProps) {
  const { data } = useContestTrack();

  const checkFields = [
    {
      label: "Title",
      value: !!data.title
    },
    {
      label: "Description",
      value: !!data.description
    },
    {
      label: "Start Time",
      value: !!data.startTime
    },
    {
      label: "End Time",
      value: !!data.endTime
    },
    {
      label: "Scoring Rule",
      value: !!data.scoringRule
    },
    {
      label: "Plagiarism Check",
      value: data ? data.isPlagiarismCheckEnabled : false,
    },
    {
      label: "Published",
      value: data ? data.isPublished : false,
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
              isInvalid={
                field.label === "Plagiarism Check" && !data.isPlagiarismCheckEnabled
                || field.label === "Published" && !data.isPublished
              }
              disabled
              radius="full"
            />
          }
        />
      ))}
    </LinearContainer>
  );
}
