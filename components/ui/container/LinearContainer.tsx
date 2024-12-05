import clsx from "clsx";

export interface LinearContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
    direction?: "row" | "column";
    space?: "sm" | "md" | "lg";
    fullwidth?: boolean;
    fullheight?: boolean;
    label?: string;
    classnames?: {
        wrapper?: string;
        container?: string;
    };
}
export function LinearContainer(props: LinearContainerProps) {
    const {
        direction = "row",
        space = "md",
        fullwidth: fullWidth = false,
        fullheight: fullHeight = false,
        isCentered = false,
        isCenteredX = false,
        isCenteredY = false,
        classnames: classNames,
        ...rest
    } = props;
    return (
        <div className={clsx(
            "flex flex-col gap-2 h-fit rounded-medium",
            fullWidth && "w-full",
            fullHeight && "h-full",
            classNames?.wrapper
        )}>
            {props.label && <h3 className="text-sm font-medium text-foreground">{props.label}</h3>}
            <div
                {...props}
                className={clsx(
                    "flex w-full h-full",
                    direction === "row" && "flex-row",
                    direction === "column" && "flex-col",
                    space === "sm" && "gap-2",
                    space === "md" && "gap-4",
                    space === "lg" && "gap-6",
                    isCentered && "justify-center items-center",
                    isCenteredX && "justify-center",
                    isCenteredY && "items-center",
                    classNames?.container
                )}
            >
                {props.children}
            </div>
        </div>
    )
}