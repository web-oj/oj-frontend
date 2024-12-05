import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { CreateProblemForm } from "./CreateProblemForm";

export default function CreateProblemFormWrapper() {
    return (
        <LinearContainer direction="column" classnames={{
            wrapper: "overflow-hidden"
        }} fullwidth fullheight>
            <CreateProblemForm />
        </LinearContainer>
    )
}