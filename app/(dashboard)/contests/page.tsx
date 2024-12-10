
import { LinearContainer, PageContainer } from "@/components/ui";
import ContestsTable from "./components/contests-table/ContestsTable";

export default async function Page() {
  const contests = await getAllContests();
  return (
    <PageContainer title="Contests">
      <LinearContainer fullheight fullwidth className="overflow-hidden">
        <ContestsTable contests={contests} />
      </LinearContainer>
    </PageContainer>
  );
}
