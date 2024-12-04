"use client";

import { useProblem } from "../../../context";

import { LinearContainer } from "@/components/ui";

function FormatWrapper({ title, format }: { title: string; format: string }) {
  return (
    <LinearContainer fullwidth direction="column" space="sm">
      <h2 className="text-lg font-semibold text-foreground-900">{title}</h2>
      <p className="text-foreground-700 text-base">{format}</p>
    </LinearContainer>
  );
}
export default function Format() {
  const { data } = useProblem();

    return (
        <LinearContainer
            direction="column"
            space="lg"
            classnames={{
                wrapper: "bg-foreground-200 rounded-large p-6",
            }}
            fullwidth
        >
            <FormatWrapper title="Input Format" format={data?.inputFormat} />
            <FormatWrapper title="Output Format" format={data?.outputFormat} />
        </LinearContainer>
    )
}
