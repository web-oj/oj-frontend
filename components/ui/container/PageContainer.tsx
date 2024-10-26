import clsx from "clsx";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
}
export function PageContainer(props: PageContainerProps) {
    const {
        isCentered = false,
        isCenteredX = false,
        isCenteredY = false,
        className,
        ...rest
    } = props;
    return (
        <div {...props} className={clsx(
            "w-full h-full flex",
            isCentered && "justify-center items-center",
            isCenteredX && "justify-center",
            isCenteredY && "items-center",
            className
        )} >
            {props.children}
        </div>
    );
}