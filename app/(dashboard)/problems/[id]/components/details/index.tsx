import { LinearContainer } from "@/components/ui";
import Statement from "./Statement";
import Format from "./Format";

export interface ProblemDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
}
export default function ProblemDetails(props: ProblemDetailsProps) {
    return (
        <LinearContainer direction="column" space="lg" fullWidth fullHeight>
            <Statement />
            <Format />
        </LinearContainer>
    )
}