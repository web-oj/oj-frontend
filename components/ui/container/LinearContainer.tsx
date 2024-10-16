import clsx from "clsx";

export interface LinearContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
    direction?: "row" | "column";
    space?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}
export function LinearContainer(props: LinearContainerProps) {
    const {
        direction = "row",
        space = "md",
        ...rest
    } = props;
    return (
        <div
            {...props}
            className={clsx(
                "flex",
                props.fullWidth && "w-full",
                direction === "row" && "flex-row",
                direction === "column" && "flex-col",
                space === "sm" && "gap-2",
                space === "md" && "gap-4",
                space === "lg" && "gap-6",
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