import { LinearContainer, PageContainer } from "@/components/ui";
import ProblemArea from "./ProblemArea";
import IDEArea from "./IDEArea";
import { Splitter, SplitterPanel } from "primereact/splitter";

export default function Home() {
  return (
    <PageContainer>
      <Splitter layout="horizontal" className="w-full h-full flex flex-row gap-6 overflow-y-auto">
        <SplitterPanel size={60}>
          <ProblemArea />
        </SplitterPanel>
        <SplitterPanel size={40}>
          <IDEArea />
        </SplitterPanel>
      </Splitter>
    </PageContainer >
  );
}
