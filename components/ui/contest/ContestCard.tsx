"use client";

import { useRouter } from "next/navigation";

import { LinearContainer } from "../container";

import { Contest } from "@/types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  contest: Contest;
}

export function ContestCard(props: Props) {
  const router = useRouter();
  const { contest } = props;

  return (
    <LinearContainer
      fullwidth
      className="max-w-64 bg-foreground-50 p-4 cursor-pointer"
      direction="column"
      space="md"
      onClick={() => router.push(`/contests/${contest.id}`)}
    >
      <p className="text-primary text-base font-semibold">
        {contest.id}
      </p>
      <p className="text-2xl font-semibold text-foreground-900">
        {contest.title}
      </p>
      <p className="text-xs text-foreground-900 truncate">
        {contest.description}
      </p>
    </LinearContainer>
  );
}
