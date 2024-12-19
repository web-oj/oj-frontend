import { UpdateContestForm } from "./UpdateContestForm";

import { LinearContainer } from "@/components/ui/container/LinearContainer";

export default function CreateContestFormWrapper() {
  return (
    <LinearContainer fullheight fullwidth direction="column">
      <UpdateContestForm />
    </LinearContainer>
  );
}
