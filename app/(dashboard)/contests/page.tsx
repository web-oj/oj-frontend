import ContestsTable from "./components/contests-table/ContestsTable";

import { LinearContainer, PageContainer } from "@/components/ui";
import { getAllContests } from "@/fetch-functions";

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
