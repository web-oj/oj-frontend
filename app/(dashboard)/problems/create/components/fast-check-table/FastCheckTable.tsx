"use client";
import { LinearContainer } from "@/components/ui";
import { Field } from "@/components/ui";
import { useProblem } from "../../../context";


interface FastCheckTableProps extends React.HTMLAttributes<HTMLDivElement> {
}
export function FastCheckTable(props: FastCheckTableProps) {
    const { data } = useProblem();

    const fields = [
        {
            label: "Title",
            value: data ? data.title : "N/A"
        },
        {
            label: "Difficulty",
            value: data ? data.difficulty : "N/A"
        },
        {
            label: "Time Limit",
            value: data ? data.time_limit : "N/A"
        },
        {
            label: "Memory Limit",
            value: data ? data.memory_limit : "N/A"
        },
        {
            label: "Tags",
            value: data ? data?.tags?.join(", ") : "N/A"
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