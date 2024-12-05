import { LinearContainer, PageContainer } from "@/components/ui";
import CreateProblemFormWrapper from "./components/create-problem-form";
import FormToolbar from "./components/Toolbar";

export default function Page() {
  return (
    <PageContainer>
      <LinearContainer direction="column" fullWidth fullHeight>
        <h1 className="text-3xl font-bold">Create Problem</h1>
        <FormToolbar />
        <CreateProblemFormWrapper />
      </LinearContainer>
    </PageContainer>
  );
}
