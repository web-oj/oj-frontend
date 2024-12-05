import { LinearContainer, PageContainer } from "@/components/ui";
import ProblemArea from "./(details)";
import IDEArea from "./IDEArea";
import { Splitter, SplitterPanel } from "primereact/splitter";
import ProblemTabs from "./components/(tabs)";

export default function Home() {
  return (
    <PageContainer>
      <Splitter layout="horizontal" className="w-full h-full space-x-1">
        <SplitterPanel size={60}>
          <ProblemTabs />
        </SplitterPanel>
        <SplitterPanel size={40}>
          <IDEArea />
        </SplitterPanel>
      </Splitter>
    </PageContainer >
  );
}
