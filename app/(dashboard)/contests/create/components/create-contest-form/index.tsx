import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { CreateContestForm } from "./CreateContestForm";
import { Toolbar } from "@/components/ui";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

export default function CreateContestFormWrapper() {
    return (
        <LinearContainer direction="column" fullWidth>
            <CreateContestForm />
        </LinearContainer>
    )
}