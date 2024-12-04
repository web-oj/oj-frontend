import clsx from "clsx";

interface LayoutContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export function LayoutContainer(props: LayoutContainerProps) {
  return (
    <div {...props} className={clsx("w-full h-full", props.className)}>
      {props.children}
    </div>
  );
}
