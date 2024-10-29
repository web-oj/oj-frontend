import clsx from "clsx";
import { LinearContainer } from "./LinearContainer";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
    title?: string;
}
export function PageContainer(props: PageContainerProps) {
    const {
        isCentered = false,
        isCenteredX = false,
        isCenteredY = false,
        title,
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
            <LinearContainer
                direction="column"
                space="lg"
                fullwidth
                fullheight
            >
                {title && <h1 className="text-4xl font-bold text-foreground">{title}</h1>}
                {props.children}
            </LinearContainer>
        </div>
    );
}