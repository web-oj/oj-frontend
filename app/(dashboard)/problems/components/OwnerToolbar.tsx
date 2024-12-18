"use client";

import { useAuth } from "@/app/context";
import { useProblem } from "../context";
import Toolbar, { ToolbarButton } from "@/components/toolbar";
import { Edit01Icon, ViewIcon } from "hugeicons-react";
import { usePathname } from "next/navigation";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

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
                color={pathname.includes("edit") ? "primary" : "default"}
            >
                <Edit01Icon />
            </ToolbarButton>
            <ToolbarButton
                color={pathname.includes("") ? "primary" : "default"}
            >
                <ViewIcon />
            </ToolbarButton>
        </Toolbar>
    )
}