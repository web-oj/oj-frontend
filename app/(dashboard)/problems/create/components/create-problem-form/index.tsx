import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { CreateProblemForm } from "./CreateProblemForm";

export default function CreateProblemFormWrapper() {
    return (
        <LinearContainer direction="column" fullWidth fullHeight>
            <CreateProblemForm />
        </LinearContainer>
    )
}