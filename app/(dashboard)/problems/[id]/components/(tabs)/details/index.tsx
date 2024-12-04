import Header from "../../header";
import ProblemDetails from "../../details";

import { LinearContainer } from "@/components/ui";

export interface ProblemAreaProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function ProblemArea(props: ProblemAreaProps) {
  return (
    <LinearContainer
      fullheight
      fullwidth
      classnames={{
        wrapper: "overflow-y-auto bg-foreground-50 rounded-large p-6",
      }}
      direction="column"
      space="lg"
    >
      <Header />
      <ProblemDetails />
    </LinearContainer>
  );
}
