import { Splitter, SplitterPanel } from "primereact/splitter";

import ContestGeneralArea from "./ContestGeneralArea";
import RankingArea from "./RankingArea";

import { PageContainer } from "@/components/ui";
import { getContestById } from "@/fetch-functions";
import { notFound } from "next/navigation";
import { ContestProvider } from "../context";
import SetterToolbar from "./components/SetterToolbar";

interface Props {
  params: {
    id: string
  }
}
export default async function Home({ params }: Props) {
  const { id } = params;

  const contest = await getContestById({ id: parseInt(id) });

  if (!contest) {
    notFound();
  }
  
  return (
    <ContestProvider contest={contest}>
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
      <SetterToolbar />
    </ContestProvider>
  );
}
