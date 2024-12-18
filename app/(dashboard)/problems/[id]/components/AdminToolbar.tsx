"use client";

import { useAuth } from "@/app/context";
import { useProblem } from "../../context";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function AdminToolbar(props: Props) {
    const problem = useProblem();
    const { user } = useAuth();

    // if (!user || problem.) {
        // return null;
    // }
    return (
        <>
        </>
    )
}