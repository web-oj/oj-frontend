"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import { Add01Icon, Edit01Icon } from "hugeicons-react";

import { useContest } from "../../context";

import { useAuth } from "@/app/context";
import Toolbar from "@/components/toolbar";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function SetterToolbar(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth();
  const contest = useContest();

  const id = pathname.split("/").pop();

  if (!contest.data.organizer) return null;
  if (contest.data.organizer.id !== user?.id) return null;
  if (user) return null;

  return (
    <Toolbar {...props}>
      <Button
        isIconOnly
        color="secondary"
        radius="full"
        onClick={() => router.push(`/contests/${id}/edit`)}
      >
        <Edit01Icon />
      </Button>
      <Button isIconOnly className="dark" radius="full">
        <Add01Icon />
      </Button>
    </Toolbar>
  );
}
