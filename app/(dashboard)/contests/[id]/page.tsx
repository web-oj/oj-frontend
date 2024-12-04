import { Splitter, SplitterPanel } from "primereact/splitter";

import ContestGeneralArea from "./ContestGeneralArea";
import RankingArea from "./RankingArea";

import { PageContainer } from "@/components/ui";

export default function Home() {
  return (
    <PageContainer>
      <Splitter className="w-full h-full space-x-1" layout="horizontal">
        <SplitterPanel size={60}>
          <ContestGeneralArea />
        </SplitterPanel>
        <SplitterPanel size={40}>
          <RankingArea />
        </SplitterPanel>
      </Splitter>
    </PageContainer>
  );
}
