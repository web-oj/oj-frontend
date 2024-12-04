import { CreateContestForm } from "./CreateContestForm";

import { LinearContainer } from "@/components/ui/container/LinearContainer";

export default function CreateContestFormWrapper() {
  return (
    <LinearContainer fullwidth direction="column">
      <CreateContestForm />
    </LinearContainer>
  );
}
