import CreateContestFormWrapper from "./components/create-contest-form";
import FastCheckTableWrapper from "./components/fast-check-table";
import FormToolbar from "./components/Toolbar";

import { LinearContainer, PageContainer } from "@/components/ui";

export default function Page() {
  return (
    <PageContainer>
      <LinearContainer
        fullheight
        fullwidth
        className="overflow-hidden"
        direction="column"
      >
        <h1 className="text-3xl font-bold">Create Contest</h1>
        <FormToolbar />
        <LinearContainer
          fullheight
          fullwidth
          className="overflow-hidden"
          direction="row"
          space="lg"
        >
          <CreateContestFormWrapper />
          <FastCheckTableWrapper />
        </LinearContainer>
      </LinearContainer>
    </PageContainer>
  );
}
