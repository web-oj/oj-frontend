import Statement from "./Statement";
import Format from "./Format";

import { LinearContainer } from "@/components/ui";

export interface ProblemDetailsProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function ProblemDetails(props: ProblemDetailsProps) {
  return (
    <LinearContainer fullheight fullwidth direction="column" space="lg">
      <Statement />
      <Format />
    </LinearContainer>
  );
}
