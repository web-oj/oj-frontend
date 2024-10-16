import clsx from "clsx";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
}
export function PageContainer(props: PageContainerProps) {
    return (
        <div {...props} className={clsx(
            "w full h-full flex",
            props.isCentered && "justify-center items-center",
            props.isCenteredX && "justify-center",
            props.isCenteredY && "items-center",
            props.className
        )} >
            {props.children}
        </div>
    );
}