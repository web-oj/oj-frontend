"use client";

import { Edit01Icon, ViewIcon } from "hugeicons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useProblem } from "../context";

import Toolbar, { ToolbarButton } from "@/components/toolbar";
import { useAuth } from "@/app/context";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function OwnerToolbar(props: Props) {
  const problem = useProblem();
  const pathname = usePathname();
  const { user } = useAuth();

  if (user?.id !== problem.data.owner.id) {
    return null;
  }

  return (
    <Toolbar>
      <ToolbarButton
        as={Link}
        color={pathname.includes("edit") ? "primary" : "default"}
        href={`/problems/edit/${problem.data.id}`}
      >
        <Edit01Icon />
      </ToolbarButton>
      <ToolbarButton
        as={Link}
        color={!pathname.includes("edit") ? "primary" : "default"}
        href={`/problems/${problem.data.id}`}
      >
        <ViewIcon />
      </ToolbarButton>
    </Toolbar>
  );
}
