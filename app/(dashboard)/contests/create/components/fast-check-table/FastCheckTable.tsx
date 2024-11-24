"use client";
import { LinearContainer } from "@/components/ui";
import { useContest } from "../../../context";
import { Field } from "@/components/ui";


interface FastCheckTableProps extends React.HTMLAttributes<HTMLDivElement> {
}
export function FastCheckTable(props: FastCheckTableProps) {
    const { data } = useContest();

    const fields = [
        {
            label: "Title",
            value: data ? data.title : "N/A"
        },
        {
            label: "Start Time",
            value: data ? data.start_time : "N/A"
        },
        {
            label: "End Time",
            value: data ? data.end_time : "N/A"
        },
        {
            label: "Scoring Rule",
            value: data ? data.scoring_rule : "N/A"
        },
        {
            label: "Organizer",
            value: data ? data.organizer_id : "N/A"
        }
    ]

    return (
        <LinearContainer
            direction="column"
            space="sm"
            classnames={{
                wrapper: "w-full bg-foreground-50 rounded-large p-4",
            }}
            fullwidth
        >
            {fields.map((field, index) => (
                <Field
                    key={index}
                    label={field.label}
                    value={field.value}
                    direction="row"
                    fullWidth
                    classNames={{
                        wrapper: "justify-between",
                    }}
                />
            ))}
        </LinearContainer>
    )
}