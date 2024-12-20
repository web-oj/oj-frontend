"use client";

import Toolbar, { ToolbarButton } from "@/components/toolbar";
import { Edit01Icon, ViewIcon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContest } from "../context";
import { useAuth } from "@/app/context";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export function OwnerToolbar(props: Props) {
    const pathname = usePathname();
    const { data: contest } = useContest();
    const { user } = useAuth();

    if (user?.id !== contest.organizer.id) {
        return null;
    }

    return (
        <Toolbar>
            <ToolbarButton
                as={Link}
                color={pathname.includes("edit") ? "primary" : "default"}
                href={`/contests/edit/${contest.id}`}
            >
                <Edit01Icon />
            </ToolbarButton>

            <ToolbarButton
                as={Link}
                color={!pathname.includes("edit") ? "primary" : "default"}
                href={`/contests/${contest.id}`}
            >
                <ViewIcon />
            </ToolbarButton>
        </Toolbar>
    );
}