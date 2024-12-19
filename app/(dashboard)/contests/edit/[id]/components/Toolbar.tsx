"use client";
import { Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

import { Toolbar } from "@/components/ui";

export default function FormToolbar() {
  return (
    <Toolbar
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
