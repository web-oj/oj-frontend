"use client";

import { useIDEContext } from "../context";

export default function IDEOutput() {
  const { output } = useIDEContext();

  return (
    <div className="flex p-4 w-full h-full bg-foreground-900 text-foreground-100 rounded-medium">
      {output}
    </div>
  );
}
