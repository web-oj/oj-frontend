import UpdateContestFormWrapper from "./components/update-contest-form";
import FastCheckTableWrapper from "./components/fast-check-table";
import FormToolbar from "./components/Toolbar";

import { LinearContainer, PageContainer } from "@/components/ui";
import { getContestById } from "@/fetch-functions";
import { notFound } from "next/navigation";
import Providers from "./providers";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const { id } = params;

  const fetchContest = async () => {
    const response = await getContestById({ id: parseInt(id) });
    return response;
  };

  const contest = await fetchContest();

  if (!contest) {
    notFound();
  }

  return (
    <Providers contest={contest}>
      <PageContainer>
        <LinearContainer
          fullheight
          fullwidth
          className="overflow-hidden"
          direction="column"
        >
          <h1 className="text-3xl font-bold">Update Contest</h1>
          <FormToolbar />
          <LinearContainer
            fullheight
            fullwidth
            className="overflow-hidden"
            direction="row"
            space="lg"
          >
            <UpdateContestFormWrapper />
            <FastCheckTableWrapper />
          </LinearContainer>
        </LinearContainer>
      </PageContainer>
    </Providers>
  );
}
