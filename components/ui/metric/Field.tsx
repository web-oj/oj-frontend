"use client";

import { Tooltip } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  showLabel?: boolean;
  icon?: React.ReactNode;
  value: React.ReactNode;
  direction?: "row" | "column";
  fullWidth?: boolean;
  fullHeight?: boolean;
  classNames?: {
    wrapper?: string;
    label?: string;
    value?: string;
  };
}
export function Field(props: FieldProps) {
  const {
    label,
    value,
    direction = "row",
    fullWidth = false,
    fullHeight = false,
    showLabel = true,
    icon,
    classNames,
  } = props;

  return (
    <div
      className={twMerge(
        "flex gap-1 justify-center items-center w-fit h-fit",
        direction === "column" && "flex-col",
        fullWidth && "w-full",
        fullHeight && "h-full",
        classNames?.wrapper,
      )}
    >
      <Tooltip content={label} placement="top">
        {icon}
      </Tooltip>
      {showLabel && (
        <div
          className={twMerge(
            "text-sm font-medium text-foreground",
            classNames?.label,
          )}
        >
          {label}
        </div>
      )}
      <div className={twMerge("text-sm", classNames?.value)}>{value}</div>
    </div>
  );
}
