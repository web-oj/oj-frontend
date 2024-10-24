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
            fullWidth
            fullHeight
            classNames={{
                wrapper: "overflow-y-auto bg-foreground-100 rounded-large p-6",
            }}
        >
            <Header />
            <ProblemDetails />
        </LinearContainer>
    )
}