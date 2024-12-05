import { LinearContainer, PageContainer } from "@/components/ui";
import { Splitter, SplitterPanel } from "primereact/splitter";
import ContestGeneralArea from "./ContestGeneralArea";
import RankingArea from "./RankingArea";

export default function Home() {
  return (
    <PageContainer>
      <Splitter layout="horizontal" className="w-full h-full space-x-1">
        <SplitterPanel size={60}>
          <ContestGeneralArea />
        </SplitterPanel>
        <SplitterPanel size={40}>
          <RankingArea />
        </SplitterPanel>
      </Splitter>
    </PageContainer >
  );
}
