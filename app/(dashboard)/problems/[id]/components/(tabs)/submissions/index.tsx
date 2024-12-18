import SubmissionsTable from "./components/submissions-table/SubmissionsTable";

import { useProblem } from "@/app/(dashboard)/problems/context";

export default function Submissions() {
  const problem = useProblem();

  return (
    <div className="w-full h-full">
      <SubmissionsTable submissions={problem.data.submissions} />
    </div>
  );
}
