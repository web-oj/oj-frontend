import { LinearContainer, PageContainer } from "@/components/ui";
import CreateContestFormWrapper from "./components/create-problem-form";
import FastCheckTableWrapper from "./components/fast-check-table";
import FormToolbar from "./components/Toolbar";

export default function Page() {
  return (
    <PageContainer>
      <LinearContainer direction="column" fullwidth fullheight>
        <h1 className="text-3xl font-bold">Create Problem</h1>
        <FormToolbar />
        <LinearContainer
          classnames={{
            wrapper: "overflow-hidden"
          }}
          direction="row"
          space="lg"
          fullwidth fullheight
        >
          <CreateContestFormWrapper />
          <FastCheckTableWrapper />
        </LinearContainer>
      </LinearContainer>
    </PageContainer>
  );
}
