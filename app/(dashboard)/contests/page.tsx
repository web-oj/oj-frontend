import ContestsTable from "./components/contests-table/ContestsTable";

import { LinearContainer, PageContainer } from "@/components/ui";
import { getAllContests } from "@/fetch-functions";

export default async function Page() {
  const contests = await getAllContests({
    limit: 10,
    page: 1,
  });

  return (
    <PageContainer title="Contests">
      <LinearContainer fullheight fullwidth className="overflow-hidden">
        <ContestsTable contests={contests} />
      </LinearContainer>
    </PageContainer>
  );
}
