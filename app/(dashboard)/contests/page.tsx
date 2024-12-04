import { ContestsTableWrapper } from "./components/contests-table";

import { LinearContainer, PageContainer } from "@/components/ui";

export default function Page() {
  return (
    <PageContainer title="Contests">
      <LinearContainer fullheight fullwidth className="overflow-hidden">
        <ContestsTableWrapper />
      </LinearContainer>
    </PageContainer>
  );
}
