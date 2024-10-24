import { LinearContainer, PageContainer } from "@/components/ui";
import ProblemArea from "./components/(tabs)/Details";
import IDEArea from "./IDEArea";
import { Splitter, SplitterPanel } from "primereact/splitter";
import ProblemTabs from "./components/(tabs)";

export default function Home() {
  return (
    <PageContainer>
      <Splitter layout="horizontal" className="w-full h-full flex flex-row gap-2 overflow-y-auto">
        <SplitterPanel size={60}>
          <LinearContainer direction="column" space="md" fullWidth fullHeight>
            <ProblemTabs />
          </LinearContainer>
        </SplitterPanel>
        <SplitterPanel size={40}>
          <IDEArea />
        </SplitterPanel>
      </Splitter>
    </PageContainer >
  );
}
