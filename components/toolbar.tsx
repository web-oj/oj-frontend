import { LinearContainer } from "./ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function Toolbar(props: Props) {
    return (
        <LinearContainer direction="row" space="sm" {...props} classnames={{
            wrapper: "bg-foreground-900 p-1 !rounded-full fixed bottom-4 left-1/2 transform -translate-x-1/2 border-1 border-foreground-200 shadow-lg",
        }} >
            {props.children}
        </LinearContainer >
    );
}