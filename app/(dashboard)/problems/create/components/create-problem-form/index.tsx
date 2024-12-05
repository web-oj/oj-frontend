import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { CreateProblemForm } from "./CreateProblemForm";
import { Toolbar } from "@/components/ui";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

export default function CreateProblemFormWrapper() {
    return (
        <LinearContainer direction="column" fullWidth>
            <h1 className="text-3xl font-bold">Create Problem</h1>
            <Toolbar
                leftContents={
                    <>
                        <Switch
                            color="secondary"
                            classNames={{
                                label: "text-foreground-500",
                            }} >
                            View mode
                        </Switch>
                    </>
                }
                rightContents={
                    <Button type="submit" form="create-problem-form" color="primary" radius="full">Create</Button>
                }
            />
            <CreateProblemForm />
        </LinearContainer>
    )
}