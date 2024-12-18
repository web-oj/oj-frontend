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
    <LinearContainer fullwidth direction="column" space="lg">
      <FormatWrapper format={data?.inputFormat} title="Input Format" />
      <FormatWrapper format={data?.outputFormat} title="Output Format" />
    </LinearContainer>
  );
}
