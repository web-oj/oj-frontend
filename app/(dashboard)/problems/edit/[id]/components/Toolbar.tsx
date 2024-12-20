"use client";

import { Button } from "@nextui-org/react";

import { Toolbar } from "@/components/ui";

export default function FormToolbar() {
  return (
    <Toolbar
      rightContents={
        <Button
          color="primary"
          form="update-problem-form"
          radius="full"
          type="submit"
        >
          Update
        </Button>
      }
    />
  );
}
