import CreateProblemFormWrapper from "./components/create-problem-form";
import FastCheckTableWrapper from "./components/fast-check-table";
import FormToolbar from "./components/Toolbar";

import { LinearContainer, PageContainer } from "@/components/ui";

export default function Page() {
  return (
    <PageContainer>
      <LinearContainer fullheight fullwidth direction="column">
        <h1 className="text-3xl font-bold">Create Problem</h1>
        <FormToolbar />
        <LinearContainer
          fullheight
          fullwidth
          classnames={{
            wrapper: "overflow-auto",
          }}
          direction="row"
          roundedMedium={false}
          space="lg"
        >
          <CreateProblemFormWrapper />
          <FastCheckTableWrapper />
        </LinearContainer>
      </LinearContainer>
    </PageContainer>
  );
}
