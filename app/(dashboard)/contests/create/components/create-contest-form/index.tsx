import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { CreateContestForm } from "./CreateContestForm";

export default function CreateContestFormWrapper() {
    return (
        <LinearContainer direction="column" fullwidth>
            <CreateContestForm />
        </LinearContainer>
    )
}