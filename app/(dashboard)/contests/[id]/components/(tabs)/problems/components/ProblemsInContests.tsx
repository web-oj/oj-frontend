"use client";

import { useContest } from "@/app/(dashboard)/contests/context";
import { Field, LinearContainer } from "@/components/ui";
import { getProblemsInContest } from "@/fetch-functions";
import { Problem } from "@/types";
import { Chip } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { Calendar01Icon, FireIcon } from "hugeicons-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function ProblemsInContests(props: Props) {
    const { data: contest } = useContest();

    const problems = useAsyncList({
        async load() {
            const problems: Problem[] = await getProblemsInContest({
                id: contest.id
            })


            return {
                items: problems
            };
        },

        getKey(item: Problem) {
            return item.id;
        }
    });

    const ProblemCard = ({ problem }: { problem: Problem }) => {
        const router = useRouter();

        return (
            <LinearContainer
                key={problem.id}
                fullwidth direction="row"
                className="bg-foreground-50 p-4 rounded-large hover:scale-[101%] transition-transform duration-200 cursor-pointer ease-in-out"
                classnames={{
                    container: "justify-between items-center"
                }}
                onClick={() => {
                    router.push(`../problems/${problem.id}?contestId=${contest.id}`);
                }}
            >
                <LinearContainer direction="column">
                    <p className="text-foreground font-medium text-lg">{problem.title}</p>
                    <LinearContainer direction="row">
                        <Field
                            icon={<Calendar01Icon size={16} />}
                            label="Created At"
                            value={new Date(problem.createdAt).toLocaleDateString()}
                            showLabel={false}
                        />
                        <Field
                            icon={<FireIcon size={16} />}
                            label="Difficulty"
                            value={problem.difficulty}
                            showLabel={false}
                        />
                    </LinearContainer>
                </LinearContainer>
                <Chip radius="full">
                    #{problem.id}
                </Chip>
            </LinearContainer>
        )
    }

    React.useEffect(() => {
        problems.reload();
        console.log(problems.items);
    }, [contest]);

    if (problems.isLoading) {
        return (
            <LinearContainer fullheight fullwidth direction="column" classnames={{
                container: "overflow-y-auto"
            }}>
                {
                    Array(10).fill(0).map((_, index) => (
                        <div key={index} className="bg-foreground-300 p-4 rounded-large w-full h-32" />
                    ))
                }
            </LinearContainer>
        )
    }

    return (
        <LinearContainer fullheight fullwidth direction="column"
            classnames={{
                container: "overflow-y-auto"
            }}
        >
            {problems.items.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
            ))}
        </LinearContainer>
    );
}