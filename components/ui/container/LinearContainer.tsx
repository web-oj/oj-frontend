import clsx from "clsx";
import { twJoin, twMerge } from "tailwind-merge";

export interface LinearContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isCentered?: boolean;
  isCenteredX?: boolean;
  isCenteredY?: boolean;
  direction?: "row" | "column";
  space?: "sm" | "md" | "lg";
  fullwidth?: boolean;
  fullheight?: boolean;
  label?: React.ReactNode;
  labelSize?: "sm" | "md" | "lg" | "2xl";
  classnames?: {
    wrapper?: string;
    container?: string;
    label?: string;
  };
  roundedMedium?: boolean;
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
    roundedMedium = true,
    classnames: classNames,
    className,
    ...rest
  } = props;

  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 h-fit",
        roundedMedium && "rounded-medium",
        fullWidth && "w-full",
        fullHeight && "h-full",
        twJoin(className, classNames?.wrapper),
      )}
    >
      {props.label && (
        <h3
          className={twMerge(
            "text-sm font-medium text-foreground",
            props.labelSize === "sm" && "text-sm",
            props.labelSize === "md" && "text-md",
            props.labelSize === "lg" && "text-lg",
            props.labelSize === "2xl" && "text-2xl font-semibold",
            classNames?.label,
          )}
        >
          {props.label}
        </h3>
      )}
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
          classNames?.container,
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
