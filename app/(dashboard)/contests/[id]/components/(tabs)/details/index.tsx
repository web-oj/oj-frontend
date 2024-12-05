"use client";

import { useContest } from "@/app/(dashboard)/contests/context";
import DifficultyBadge from "@/app/(dashboard)/problems/[id]/components/difficulty_badge";
import { Field, LinearContainer } from "@/components/ui";
import { Calendar03Icon } from "hugeicons-react";

interface DetailsAreaProps extends React.HTMLAttributes<HTMLDivElement> { }
export default function DetailsArea(props: DetailsAreaProps) {
    const { data: contest } = useContest();

    return (
        <LinearContainer
            space="sm"
            direction="column"
            fullheight
            fullwidth
            classnames={{
                wrapper: "bg-foreground-100 p-4"
            }}
            {...props}
        >
            <div className="flex items-center flex-row gap-1">
                <h1 className="text-2xl font-bold text-foreground">{contest?.title}</h1>
            </div>
            <Field
                label="Duration"
                icon={<Calendar03Icon className="text-foreground-500" size={16} />}
                showLabel={false}
                value={`${new Date(contest?.start_time).toLocaleString()} - ${new Date(contest?.end_time).toLocaleString()}`}
                direction="row"
                classNames={{
                    value: "text-foreground-500"
                }}
            />

        </LinearContainer>
    );
}