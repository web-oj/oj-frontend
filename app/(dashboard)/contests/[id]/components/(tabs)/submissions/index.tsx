"use client";

import { useContest } from "@/app/(dashboard)/contests/context";
import { LinearContainer } from "@/components/ui";
import { Submission } from "@/types";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function Submissions(props: Props) {
    const { data: contest } = useContest();

    return (
        <LinearContainer isCenteredX fullwidth fullheight direction="column">
            <h1>Submissions</h1>
            {contest.submissions.map((submission: Submission) => (
                <LinearContainer key={submission.id}>
                </LinearContainer>
            ))}
        </LinearContainer>
    )
}