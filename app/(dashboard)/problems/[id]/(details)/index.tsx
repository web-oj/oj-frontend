import { LinearContainer } from "@/components/ui";
import Header from "../components/header";
import ProblemDetails from "../components/details";

export interface ProblemAreaProps extends React.HTMLAttributes<HTMLDivElement> {
}
export default function ProblemArea(props: ProblemAreaProps) {
    return (
        <LinearContainer
            direction="column"
            space="lg"
            fullwidth
            fullheight
            classnames={{
                wrapper: "overflow-y-auto bg-foreground-50 rounded-large p-6",
            }}
        >
            <Header />
            <ProblemDetails />
        </LinearContainer>
    )
}