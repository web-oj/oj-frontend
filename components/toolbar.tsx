import { Button, ButtonProps } from "@nextui-org/react";

import { LinearContainer } from "./ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function ToolbarButton(props: ButtonProps) {
  return (
    <Button {...props} isIconOnly className="dark" radius="full">
      {props.children}
    </Button>
  );
}
export default function Toolbar(props: Props) {
  return (
    <LinearContainer
      direction="row"
      space="sm"
      {...props}
      classnames={{
        wrapper:
          "bg-foreground-900 p-1 !rounded-full fixed bottom-4 left-1/2 transform -translate-x-1/2 border-1 border-foreground-200 shadow-lg",
      }}
    >
      {props.children}
    </LinearContainer>
  );
}
