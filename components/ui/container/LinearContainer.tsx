import clsx from "clsx";

export interface LinearContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
    direction?: "row" | "column";
    space?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    label?: string;
    classNames?: {
        wrapper?: string;
        container?: string;
    };
}
export function LinearContainer(props: LinearContainerProps) {
    const {
        direction = "row",
        space = "md",
        ...rest
    } = props;
    return (
        <div className={clsx(
            "flex flex-col gap-2",
            props.fullWidth && "w-full",
            props.classNames?.wrapper
        )}>
            {props.label && <h3 className="text-sm font-medium text-foreground">{props.label}</h3>}
            <div
                {...props}
                className={clsx(
                    "flex w-full",
                    direction === "row" && "flex-row",
                    direction === "column" && "flex-col",
                    space === "sm" && "gap-2",
                    space === "md" && "gap-4",
                    space === "lg" && "gap-6",
                    props.isCentered && "justify-center items-center",
                    props.isCenteredX && "justify-center",
                    props.isCenteredY && "items-center",
                    props.classNames?.container
                )}
            >
                {props.children}
            </div>
        </div>
    )
}