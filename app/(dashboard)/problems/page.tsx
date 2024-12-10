
import { LinearContainer, PageContainer } from "@/components/ui";
import ProblemsTable from "./components/problems-table/ProblemsTable";
import { getAllProblems } from "@/fetch-functions";

export default async function Page() {
  const problems = await getAllProblems();

  return (
    <PageContainer title="Problems">
      <LinearContainer fullheight fullwidth className="overflow-hidden">
        <ProblemsTable problems={problems} />
      </LinearContainer>
    </PageContainer>
  );
}
