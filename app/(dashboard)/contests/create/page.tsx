import CreateContestFormWrapper from "./components/create-contest-form";
import FastCheckTableWrapper from "./components/fast-check-table";
import FormToolbar from "./components/Toolbar";

import { LinearContainer, PageContainer } from "@/components/ui";

export default function Page() {
  return (
    <PageContainer>
      <LinearContainer fullwidth fullheight direction="column" className="overflow-hidden">
        <h1 className="text-3xl font-bold">Create Contest</h1>
        <FormToolbar />
        <LinearContainer fullheight fullwidth direction="row" space="lg" className="overflow-hidden">
          <CreateContestFormWrapper />
          <FastCheckTableWrapper />
        </LinearContainer>
      </LinearContainer>
    </PageContainer>
  );
}
