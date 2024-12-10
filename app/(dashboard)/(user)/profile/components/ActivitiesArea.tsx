"use client";

import { useAuth } from "@/app/context";
import { Field, LinearContainer } from "@/components/ui";
import { Contest, ContestParticipation, Problem, ProblemInContest, Submission, User } from "@/types";
import { Chip, Tab, Tabs } from "@nextui-org/react";
import { Calendar01Icon, CodeIcon, PackageOpenIcon, UserGroupIcon } from "hugeicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function ActivitiesArea(props: Props) {
    const { user } = useAuth();
    const router = useRouter();
    const Submissions = () => {

        if (!user?.submissions) return (
            <LinearContainer fullwidth fullheight direction="column" classnames={{
                container: "items-center justify-center"
            }}>
                <PackageOpenIcon />
                <p className="text-md text-center text-foreground-500">
                    No submissions yet
                </p>
            </LinearContainer>
        );

        return (
            <LinearContainer direction="column">
                {
                    user.submissions.map((submission, index) => (
                        <LinearContainer
                            key={index}
                            fullwidth direction="row"
                            classnames={{
                                container: "items-center justify-between"
                            }}
                            className="bg-foreground-50 rounded-2xl p-4"
                            onClick={() => router.push(`/problems/${submission.problem.id}`)}
                        >
                            <LinearContainer direction="column" space="sm">
                                <h1 className="text-lg font-semibold">
                                    {submission?.problem.title}
                                </h1>
                                <LinearContainer>
                                    <Field
                                        label="Created At"
                                        value={new Date(submission.createdAt).toLocaleDateString()}
                                        icon={<Calendar01Icon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                    <Field
                                        label="Language"
                                        value={submission.language}
                                        icon={<CodeIcon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                </LinearContainer>
                            </LinearContainer>
                            <Chip radius="full">
                                {submission.id}
                            </Chip>
                        </LinearContainer>
                    ))
                }
            </LinearContainer>
        )
    }
    const Contests = () => {
        if (!user?.organizedContests) return (
            <LinearContainer fullwidth fullheight direction="column" classnames={{
                container: "items-center justify-center"
            }}>
                <PackageOpenIcon />
                <p className="text-md text-center text-foreground-500">
                    No contests yet
                </p>
            </LinearContainer>
        );

        return (
            <LinearContainer direction="column" fullwidth>
                {
                    user.organizedContests.map((contest, index) => (
                        <LinearContainer
                            key={index}
                            fullwidth
                            direction="row"
                            classnames={{
                                container: "items-center justify-between"
                            }}
                            className="bg-foreground-50 rounded-2xl p-4"
                            onClick={() => router.push(`/contests/${contest.id}`)}
                        >
                            <LinearContainer direction="column" space="sm">
                                <h1 className="text-lg font-semibold">
                                    {contest?.title}
                                </h1>
                                <LinearContainer>
                                    <Field
                                        label="Start Time"
                                        value={contest.startTime}
                                        icon={<Calendar01Icon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                    <Field
                                        label="End Time"
                                        value={contest.endTime}
                                        icon={<Calendar01Icon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                    <Field
                                        label="Participants"
                                        value={contest.participations.length}
                                        icon={<UserGroupIcon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                </LinearContainer>
                            </LinearContainer>
                            <Chip radius="full">
                                #{contest.id}
                            </Chip>
                        </LinearContainer>
                    ))
                }
            </LinearContainer>
        )
    }

    const Participations = () => {
        if (!user?.contestParticipations) return (
            <LinearContainer fullwidth fullheight direction="column" classnames={{
                container: "items-center justify-center"
            }}>
                <PackageOpenIcon />
                <p className="text-md text-center text-foreground-500">
                    No participations yet
                </p>
            </LinearContainer>
        );

        return (
            <LinearContainer
                direction="column"
                fullwidth
                onClick={() => { router }}
            >
                {
                    user.contestParticipations.map((contest, index) => (
                        <LinearContainer
                            key={index}
                            fullwidth
                            direction="row"
                            classnames={{
                                container: "items-center justify-between"
                            }}
                            className="bg-foreground-50 rounded-2xl p-4"
                            onClick={() => router.push(`/contests/${contest.id}`)}
                        >
                            <LinearContainer direction="column" space="sm">
                                <h1 className="text-lg font-semibold">
                                    {contest?.title}
                                </h1>
                                <LinearContainer>
                                    <Field
                                        label="Start Time"
                                        value={contest.startTime}
                                        icon={<Calendar01Icon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                    <Field
                                        label="End Time"
                                        value={contest.endTime}
                                        icon={<Calendar01Icon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                    <Field
                                        label="Participants"
                                        value={contest.participations.length}
                                        icon={<UserGroupIcon size={16} />}
                                        showLabel={false}
                                        classNames={{
                                            value: "text-foreground-500",
                                        }}
                                    />
                                </LinearContainer>
                            </LinearContainer>
                            <Chip radius="full">
                                #{contest.id}
                            </Chip>
                        </LinearContainer>
                    ))
                }
            </LinearContainer>
        )
    }

    const items = [
        {
            label: "Submissions",
            component: <Submissions />,
        },
        {
            label: "Contests",
            component: <Contests />,
        },
        {
            label: "Participations",
            component: <Participations />,
        }
    ]

    return (
        <LinearContainer
            fullheight
            direction="column"
            className="rounded-2xl !flex-1"
            {...props}
        >
            <Tabs variant="underlined" color="primary" radius="full">
                {items.map((item, index) => (
                    <Tab className="h-full" key={index} title={item.label}>
                        {item.component}
                    </Tab>
                ))}
            </Tabs>
        </LinearContainer>
    )
}