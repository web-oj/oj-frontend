"use client";
import { Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

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
          form="create-contest-form"
          radius="full"
          type="submit"
        >
          Create
        </Button>
      }
    />
  );
}
