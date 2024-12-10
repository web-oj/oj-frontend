import { useProblem } from "@/app/(dashboard)/problems/context";
import SubmissionsTable from "./components/submissions-table/SubmissionsTable";

export default function Submissions() {
  const problem = useProblem();
  return (
    <div className="w-full h-full">
      <SubmissionsTable submissions={problem.data.submissions} />
    </div>
  );
}
