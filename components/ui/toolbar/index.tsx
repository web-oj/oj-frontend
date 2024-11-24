import clsx from "clsx";

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  leftContents?: React.ReactNode;
  rightContents?: React.ReactNode;
  classNames?: {
    container?: string;
    leftWrapper?: string;
    rightWrapper?: string;
  };
}
export function Toolbar(props: ToolbarProps) {
  const { leftContents, rightContents, classNames, ...rest } = props;

  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-2 w-full flex-row",
        classNames?.container,
      )}
      {...rest}
    >
      <div className={clsx("flex items-center gap-2", classNames?.leftWrapper)}>
        {leftContents}
      </div>
      <div
        className={clsx("flex items-center gap-2", classNames?.rightWrapper)}
      >
        {rightContents}
      </div>
    </div>
  );
}
