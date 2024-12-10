import { CreateProblemForm } from "./CreateProblemForm";

import { LinearContainer } from "@/components/ui/container/LinearContainer";

export default function CreateProblemFormWrapper() {
  return (
    <LinearContainer
      fullheight
      fullwidth
      classnames={{
        wrapper: "overflow-auto",
      }}
      direction="column"
    >
      <CreateProblemForm />
    </LinearContainer>
  );
}
