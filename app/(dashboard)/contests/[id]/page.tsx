import { Splitter, SplitterPanel } from "primereact/splitter";
import { notFound } from "next/navigation";

import { ContestProvider } from "../context";

import ContestGeneralArea from "./ContestGeneralArea";
import RankingArea from "./RankingArea";
import SetterToolbar from "./components/SetterToolbar";

import { PageContainer } from "@/components/ui";
import { getContestById } from "@/fetch-functions";

interface Props {
  params: {
    id: string;
  };
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
