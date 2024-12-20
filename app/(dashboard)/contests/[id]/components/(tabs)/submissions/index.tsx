"use client";

import { useContest } from "@/app/(dashboard)/contests/context";
import { Field, LinearContainer } from "@/components/ui";
import { Submission } from "@/types";
import { Chip } from "@nextui-org/react";
import { Calendar01Icon, CodeIcon } from "hugeicons-react";
import router from "next/router";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function Submissions(props: Props) {
    const { data: contest } = useContest();

    return (
        <>
            {contest.submissions.map((submission: Submission, index) => (
                <LinearContainer
                    key={index}
                    fullwidth
                    className="bg-foreground-50 rounded-2xl p-4 hover:scale-[101%] transition-transform duration-300 ease-in-out cursor-pointer"
                    classnames={{
                        container: "items-center justify-between",
                    }}
                    direction="row"
                    onClick={() => router.push(`/problems/${submission.problem.id}`)}
                >
                    <LinearContainer direction="column" space="sm">
                        <h1 className="text-lg font-semibold">
                            {submission?.id}
                        </h1>
                        <LinearContainer>
                            <Field
                                classNames={{
                                    value: "text-foreground-500",
                                }}
                                icon={<Calendar01Icon size={16} />}
                                label="Created At"
                                showLabel={false}
                                value={new Date(submission.createdAt).toLocaleDateString()}
                            />
                            <Field
                                classNames={{
                                    value: "text-foreground-500",
                                }}
                                icon={<CodeIcon size={16} />}
                                label="Language"
                                showLabel={false}
                                value={submission.language}
                            />
                        </LinearContainer>
                    </LinearContainer>
                    <Chip radius="full">
                        Submission
                    </Chip>
                </LinearContainer>
            ))}
        </ >
    )
}