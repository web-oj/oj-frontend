"use client";

import { Skeleton } from "@nextui-org/react";

import { LinearContainer } from "@/components/ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Loading(props: Props) {
  return (
    <LinearContainer fullheight fullwidth>
      <Skeleton className="flex-1 rounded-2xl bg-foreground-200 aspect-square" />
      <Skeleton className="flex-[3] rounded-2xl bg-foreground-200 w-full h-full" />
      <Skeleton className="flex-1 rounded-2xl bg-foreground-200 w-full h-full" />
    </LinearContainer>
  );
}
