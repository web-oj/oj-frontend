import { Toolbar } from "@/components/ui";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";

export default function FormToolbar() {
    return (
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
    )
}