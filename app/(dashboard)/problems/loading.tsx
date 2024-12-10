"use client";

import { Skeleton } from "@nextui-org/react";

import { LinearContainer } from "@/components/ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Loading(props: Props) {
  return (
    <LinearContainer fullheight fullwidth isCentered direction="column">
      <Skeleton className="rounded-2xl bg-foreground-500/25 w-full h-16" />
      <Skeleton className="rounded-2xl bg-foreground-500/25 w-full h-full" />
    </LinearContainer>
  );
}
