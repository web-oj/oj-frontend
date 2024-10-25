import { twMerge } from "tailwind-merge";

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    direction?: "row" | "column";
    fullWidth?: boolean;
    classNames: {
        wrapper?: string;
        label?: string;
        value?: string;
    }
}
export function Field(props: FieldProps) {
    const { label, value, direction = "row", fullWidth = false, classNames } = props;

    return (
        <div className={twMerge(
            "flex",
            direction === "column" && "flex-col",
            fullWidth && "w-full",
            classNames.wrapper
        )}>
            <div className={twMerge(
                "text-sm font-medium text-foreground",
                classNames.label
            )}>
                {label}
            </div>
            <div className={twMerge(
                "text-sm",
                classNames.value
            )}>
                {value}
            </div>
        </div>
    )
}