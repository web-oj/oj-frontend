import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";

import { Toolbar } from "@/components/ui";

export default function FormToolbar() {
  return (
    <Toolbar
      leftContents={
        <>
          <Switch
            classNames={{
              label: "text-foreground-500",
            }}
            color="secondary"
          >
            View mode
          </Switch>
        </>
      }
      rightContents={
        <Button
          color="primary"
          form="create-problem-form"
          radius="full"
          type="submit"
        >
          Create
        </Button>
      }
    />
  );
}
