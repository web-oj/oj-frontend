"use client";

import { RenderMarkdown } from "@/components/markdown";
import { Field, LinearContainer } from "@/components/ui";
import { Calendar03Icon } from "hugeicons-react";
import { useContest } from "../../../../context";

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
                wrapper: "bg-foreground-100 p-4 overflow-y-auto"
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
            <RenderMarkdown
                data={contest.description}
            />
        </LinearContainer>
    );
}