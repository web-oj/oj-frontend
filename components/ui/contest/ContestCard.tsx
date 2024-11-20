"use client";

import { Contest } from "@/types";
import { LinearContainer } from "../container";
import { useRouter } from "next/navigation";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    contest: Contest;
}

export function ContestCard(props: Props) {
    const router = useRouter();
    const { contest } = props;

    return (
        <LinearContainer
            direction="column"
            space="md"
            className="max-w-64 bg-foreground-50 p-4 cursor-pointer"
            fullwidth
            onClick={() => router.push(`/contests/${contest.contest_id}`)}
        >
            <p className="text-primary text-base font-semibold">{contest.contest_id}</p>
            <p className="text-2xl font-semibold text-foreground-900">{contest.title}</p>
            <p className="text-xs text-foreground-900 truncate">{contest.description}</p>
        </LinearContainer>
    );
}