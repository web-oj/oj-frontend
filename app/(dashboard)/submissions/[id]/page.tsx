import { LinearContainer, PageContainer } from "@/components/ui";
import { getSubmissionById } from "@/fetch-functions";
import Providers from "./providers";
import { notFound } from "next/navigation";
import Header from "./components/Header";
import Code from "./components/Code";
import General from "./components/General";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const { id } = params;

  const fetchSubmission = async () => {
    try {
      const submission = await getSubmissionById({ id: parseInt(id) });
      return submission;
    } catch (error) {
      console.error("Failed to fetch submission", error);
    }
  };

  const submission = await fetchSubmission();

  if (!submission) {
    notFound();
  }

  return (
    <Providers submission={submission}>
      <PageContainer isCentered className="px-64">
        <LinearContainer fullheight fullwidth direction="column" space="lg">
          <Header />
          <General />
          <Code />
        </LinearContainer>
      </PageContainer>
    </Providers>
  )
}
