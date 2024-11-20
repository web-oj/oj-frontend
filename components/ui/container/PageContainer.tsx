import clsx from "clsx";
import { LinearContainer } from "./LinearContainer";
import { twMerge } from "tailwind-merge";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    isCentered?: boolean;
    isCenteredX?: boolean;
    isCenteredY?: boolean;
    title?: string;
<<<<<<< Updated upstream
    label?: React.ReactNode;
=======
<<<<<<< HEAD
=======
    label?: React.ReactNode;
>>>>>>> main
>>>>>>> Stashed changes
}
export function PageContainer(props: PageContainerProps) {
    const {
        isCentered = false,
        isCenteredX = false,
        isCenteredY = false,
        title,
<<<<<<< Updated upstream
        label,
=======
<<<<<<< HEAD
=======
        label,
>>>>>>> main
>>>>>>> Stashed changes
        className,
        ...rest
    } = props;

    return (
        <div {...props} className={twMerge(
            "w-full h-full flex flex-col gap-6",
            isCentered && "justify-center items-center",
            isCenteredY && "justify-center",
            isCenteredX && "items-center",
            className
        )} >

            {title && <h1 className="text-4xl font-bold text-foreground">{title}</h1>}
<<<<<<< Updated upstream
            {label}
=======
<<<<<<< HEAD
=======
            {label}
>>>>>>> main
>>>>>>> Stashed changes
            {props.children}
        </div>
    );
}