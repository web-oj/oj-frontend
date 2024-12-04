import { ProblemsTableWrapper } from "./components/problems-table";

import { LinearContainer, PageContainer } from "@/components/ui";

export default function Page() {
  return (
    <PageContainer title="Problems">
      <LinearContainer fullheight fullwidth className="overflow-hidden">
        <ProblemsTableWrapper />
      </LinearContainer>
    </PageContainer>
  );
}
