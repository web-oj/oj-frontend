import { twMerge } from "tailwind-merge";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isCentered?: boolean;
  isCenteredX?: boolean;
  isCenteredY?: boolean;
  title?: string;
  label?: React.ReactNode;
}
export function PageContainer(props: PageContainerProps) {
  const {
    isCentered = false,
    isCenteredX = false,
    isCenteredY = false,
    title,
    label,
    className,
    ...rest
  } = props;

  return (
    <div
      {...props}
      className={twMerge(
        "w-full h-full flex flex-col gap-6",
        isCentered && "justify-center items-center",
        isCenteredY && "justify-center",
        isCenteredX && "items-center",
        className,
      )}
    >
      {title && <h1 className="text-4xl font-bold text-foreground">{title}</h1>}
      {label}
      {props.children}
    </div>
  );
}
