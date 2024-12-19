import { notFound } from "next/navigation";

import Providers from "../../providers";

import CreateProblemFormWrapper from "./components/update-problem-form";
import FastCheckTableWrapper from "./components/fast-check-table";
import FormToolbar from "./components/Toolbar";

import { getProblemById } from "@/fetch-functions";
import { LinearContainer, PageContainer } from "@/components/ui";
import OwnerToolbar from "../../components/OwnerToolbar";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const { id } = params;

  const problem = await getProblemById({ id: parseInt(id) });

  if (!problem) {
    notFound();
  }

  return (
    <Providers problem={problem}>
      <PageContainer>
        <LinearContainer fullheight fullwidth direction="column">
          <h1 className="text-3xl font-bold">Update Problem</h1>
          <FormToolbar />
          <LinearContainer
            fullheight
            fullwidth
            classnames={{
              wrapper: "overflow-auto",
            }}
            direction="row"
            roundedMedium={false}
            space="lg"
          >
            <CreateProblemFormWrapper />
            <FastCheckTableWrapper />
          </LinearContainer>
        </LinearContainer>
        <OwnerToolbar />
      </PageContainer>
    </Providers>
  );
}
