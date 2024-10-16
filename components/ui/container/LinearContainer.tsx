import clsx from "clsx";

export interface LinearContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
    direction?: "row" | "column";
    space: "sm" | "md" | "lg";
}
export function LinearContainer(props: LinearContainerProps) {
    return (
        <div
            {...props}
            className={clsx(
                "flex",
                props.direction === "row" ? "flex-row" : "flex-col",
                props.space === "sm" && "gap-1",
                props.space === "md" && "gap-4",
                props.space === "lg" && "gap-6",
                props.isCentered && "justify-center items-center",
                props.isCenteredX && "justify-center",
                props.isCenteredY && "items-center",
                props.className
            )}
        >
            {props.children}
        </div>
    )
}