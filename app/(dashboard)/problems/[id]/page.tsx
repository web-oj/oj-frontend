import { Splitter, SplitterPanel } from "primereact/splitter";
import { notFound } from "next/navigation";

import OwnerToolbar from "../components/OwnerToolbar";

import IDEArea from "./IDEArea";
import ProblemTabs from "./components/(tabs)";
import Providers from "./providers";

import { PageContainer } from "@/components/ui";
import { getProblemById } from "@/fetch-functions";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const { id } = params;
  const fetchProblem = async () => {
    try {
      const problem = await getProblemById({ id: parseInt(id) });

      return problem;
    } catch (error) {
      console.error("Failed to fetch problem", error);
    }
  };

  const problem = await fetchProblem();

  if (!problem) {
    notFound();
  }

  return (
    <Providers problem={problem}>
      <PageContainer>
        <Splitter className="w-full h-full space-x-1" layout="horizontal">
          <SplitterPanel size={60}>
            <ProblemTabs />
          </SplitterPanel>
          <SplitterPanel size={40}>
            <IDEArea />
          </SplitterPanel>
        </Splitter>
        <OwnerToolbar />
      </PageContainer>
    </Providers>
  );
}
