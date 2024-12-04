import { LinearContainer, PageContainer } from "@/components/ui";
import IDEArea from "./IDEArea";
import { Splitter, SplitterPanel } from "primereact/splitter";
import ProblemTabs from "./components/(tabs)";
import { notFound } from "next/navigation";
import Providers from "./providers";
import { Problem } from "@/types";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const { id } = params;
  const fetchProblem = async () => {
    try {
      const problem = {} as Problem;
      return problem;
    } catch (error) {
      console.error("Failed to fetch problem", error);
    }
  }

  const problem = await fetchProblem();
  if (!problem) {
    notFound();
  }

  return (
    <Providers problem={problem}>
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
    </Providers>
  );
}
