import { LinearContainer, PageContainer } from "@/components/ui";
import { Splitter, SplitterPanel } from "primereact/splitter";

export default function Home() {
  return (
    <PageContainer>
      <Splitter layout="horizontal" className="w-full h-full space-x-1">
        <SplitterPanel size={60}>
        </SplitterPanel>
        <SplitterPanel size={40}>
        </SplitterPanel>
      </Splitter>
    </PageContainer >
  );
}
