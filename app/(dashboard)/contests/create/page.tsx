import { LinearContainer, PageContainer } from "@/components/ui";
import CreateContestFormWrapper from "./components/create-contest-form";
import FastCheckTableWrapper from "./components/fast-check-table";
import FormToolbar from "./components/Toolbar";

export default function Page() {
  return (
    <PageContainer>
      <LinearContainer direction="column" fullwidth>
        <h1 className="text-3xl font-bold">Create Contest</h1>
        <FormToolbar />
        <LinearContainer direction="row" space="lg" fullwidth fullheight>
          <CreateContestFormWrapper />
          <FastCheckTableWrapper />
        </LinearContainer>
      </LinearContainer>
    </PageContainer>
  );
}
