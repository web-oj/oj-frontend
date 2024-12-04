"use client";

import { useProblem } from "../../../context";

import { RenderMarkdown } from "@/components/markdown";

export default function Statement() {
  const { data } = useProblem();

  return <RenderMarkdown data={data?.statement} />;
}
