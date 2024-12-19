import { type User, type Problem, type Contest, Submission, ApiResponse, QueryParams } from "@/types";


import { api } from "@/utils/api";

/*
====================================================
=============== USER FUNCTIONS ====================
====================================================
*/

export async function signUp(params: {
  email: string;
  password: string;
  handle: string; // handle
}) {
  try {
    const res = await api.post<ApiResponse<User>>("/user", params);

    return res.data.data;
  } catch (error) {
    console.error("Failed to sign up", error);
    throw new Error("Failed to sign up");
  }
}

export async function login(params: { email: string; password: string }) {
  try {
    const res = await api.post<ApiResponse<{ token: string }>>(
      "/user/login",
      params,
    );

    return res.data.data.token;
  } catch (error) {
    throw new Error("Failed to sign in");
  }
}

export async function getUserRoleByToken() {
  try {
    const res = await api.get<ApiResponse<string>>("/user/role");

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch user role by token");
  }
}

export async function getUserByToken() {
  try {
    const res1 = await api.get<ApiResponse<User>>("/user/id");
    const user = await getUserById({ id: res1.data.data.id });

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user by token");
  }
}

export async function getUserById(params: { id: number }): Promise<User> {
  try {
    const res = await api.get<ApiResponse<User>>(`/user/${params.id}`);

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user by ID");
  }
}

export async function getUserByHandle(params: {
  handle: string;
}): Promise<User> {
  try {
    const res = await api.get<ApiResponse<User>>(
      `/user/handle/${params.handle}`,
    );

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch user by handle");
  }
}

export async function getLeaderboard() {
  try {
    const res = await api.get<ApiResponse<User[]>>("/user/leaderboard");

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch leaderboard");
  }
}

export async function deleteUser(params: { id: number }) {
  try {
    const res = await api.delete<ApiResponse<null>>(`/user/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}

export async function updateUser(params: Partial<User>) {
  try {
    const res = await api.patch<ApiResponse<null>>(`/user`, params);

    return res.data;
  } catch (error) {
    throw new Error("Failed to update user");
  }
}

/*
====================================================
=============== PROBLEMS FUNCTIONS ====================
====================================================
*/

export async function createProblem(params: {
  isPublished: Problem["isPublished"];
  title: Problem["title"];
  difficulty: Problem["difficulty"];
  statement: Problem["statement"];
  timeLimit: Problem["timeLimit"];
  memoryLimit: Problem["memoryLimit"];
  inputFormat: Problem["inputFormat"];
  outputFormat: Problem["outputFormat"];
  solutionText: Problem["solutionText"];
}) {
  try {
    const res = await api.post<ApiResponse<null>>("/problem", params);

    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create problem");
  }
}

export async function updateProblem(params: {
  id: number;
  data: Partial<Problem>;
}) {
  try {
    const res = await api.patch<ApiResponse<null>>(`/problem/id/${params.id}`, params.data);

    return res.data;
  } catch (error: any) {
    throw new Error("Failed to update problem");
  }
}

export async function getProblemById(params: { id: number }): Promise<Problem> {
  try {
    const res = await api.get<ApiResponse<Problem>>(`/problem/id/${params.id}`);

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch problem by ID");
  }
}

export async function addTestcaseToProblem(params: {
  problemId: number;
  input: string;
  output: string;
}) {
  try {
    const res = await api.post<ApiResponse<null>>(
      `/problem/${params.problemId}/testcase`,
      {
        input: params.input,
        output: params.output,
      },
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to add testcase to problem");
  }
}

export async function addTestcasesToProblem(params: {
  problemId: number;
  testcases: { input: string; output: string }[];
}) {
  try {
    const res = await api.post<ApiResponse<null>>(
      `/problem/${params.problemId}/testcases`,
      {
        testcases: params.testcases,
      },
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to add testcases to problem");
  }
}


export async function getProblemByTitle(params: {
  title: string;
}): Promise<Problem[]> {
  try {
    const res = await api.get<ApiResponse<Problem[]>>(
      `/problem/title/${params.title}`,
    );

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch problem by title");
  }
}

export async function deleteProblemById(params: { id: number }) {
  try {
    const res = await api.delete<ApiResponse<null>>(`/problem/id/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete problem by ID");
  }
}

export async function getAllProblems(
  limit?: number,
  offset?: number,
): Promise<Problem[]> {
  try {
    const res = await api.get<ApiResponse<Problem[]>>(`/problem`);

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch all problems");
  }
}

export async function searchProblems(params: {
  searchKeyword?: string;
  difficultyLow?: number;
  difficultyHigh?: number;
  offset?: number;
  limit?: number;
}): Promise<Problem[]> {
  const {
    searchKeyword = "",
    difficultyLow = 0,
    difficultyHigh = 10,
    offset = 0,
    limit = 10,
  } = params;

  try {
    const res = await api.get<ApiResponse<Problem[]>>(`/problem/search`, {
      params: {
        searchKeyword,
        difficultyLow,
        difficultyHigh,
        offset,
        limit,
      },
    });

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch all problems");
  }
}

/*
====================================================
============== CONTEST FUNCTIONS ===================
====================================================
*/

export async function createContest(params: {
  organizerId: number;
  isPublished: boolean;
  scoringRule: string;
  endTime: number;
  startTime: number;
  ruleText: string;
  description: string;
  title: string;
}) {
  try {
    const res = await api.post<ApiResponse<null>>("/contest", params);

    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create contest");
  }
}

export async function getContestById(params: { id: number }) {
  try {
    const res = await api.get<ApiResponse<Contest>>(`/contest/${params.id}`);

    return res.data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get contest by ID");
  }
}

export async function getAllContests(params: QueryParams) {
  try {
    const res = await api.get<ApiResponse<Contest[]>>("/contest", {
      params,
    });

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to get all contests");
  }
}

export async function searchContests(params: {
  searchKeyword?: string;
  startTimeLow?: number;
  startTimeHigh?: number;
  endTimeLow?: number;
  endTimeHigh?: number;
  offset?: number;
  limit?: number;
}) {
  try {
    const res = await api.get<ApiResponse<Contest[]>>(`/contest/search`, {
      params: {
        ...params,
      },
    });

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to search contests");
  }
}

export async function updateContest(params: {
  id: number;
  data: Partial<Contest>;
}) {
  try {
    const res = await api.patch<ApiResponse<null>>(
      `/contest/${params.id}`,
      params.data,
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to update contest");
  }
}

export async function deleteContest(params: { id: number }) {
  try {
    const res = await api.delete<ApiResponse<null>>(`/contest/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete contest");
  }
}

export async function editScoreByContestId(params: {
  contestId: number;
  userId: number;
  score: number;
}) {
  try {
    const res = await api.patch<ApiResponse<null>>(`/contest/${params.contestId}/editScore`, {
      userId: params.userId,
      score: params.score,
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to edit score by contest ID");
  }
}

export async function getRankingByContestId(params: { id: number }) {
  try {
    const res = await api.get<ApiResponse<User[]>>(`/contest/${params.id}/ranking`);

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to get ranking by contest ID");
  }
}

export async function addProblemToContest(params: {
  contestId: number;
  problemId: number;
  score: number;
}) {
  try {
    const res = await api.post<ApiResponse<null>>(`/contest/${params.contestId}/problem`, {
      problemId: params.problemId,
      score: params.score,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add problem to contest");
  }
}

export async function removeProblemFromContest(params: {
  id: number;
  problemId: number;
}) {
  try {
    const res = await api.delete<ApiResponse<null>>(`/contest/${params.id}/problem`, {
      data: {
        problemId: params.problemId,
      },
    }
    );

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to remove problem from contest");
  }
}

export async function getProblemsInContest(params: { id: number }) {
  try {
    const res = await api.get<ApiResponse<Problem[]>>(
      `/contest/${params.id}/problem`,
    );

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to get problems in contest");
  }
}

export async function registerForContest(params: {
  userId: number;
  id: number;
}) {
  try {
    const res = await api.post<ApiResponse<Contest>>(
      `/contest/${params.id}/register`,
      {
        id: params.userId,
      },
    );

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to register for contest");
  }
}

export async function unregisterForContest(params: {
  userId: number;
  id: number;
}) {
  try {
    const res = await api.delete<ApiResponse<null>>(
      `/contest/${params.id}/register`,
      {
        data: {
          id: params.userId,
        },
      },
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to unregister for contest");
  }
}

export async function runMoss(params: {
  contestId: number;
}) {
  try {
    const res = await api.post<ApiResponse<null>>(`/contest/${params.contestId}/moss`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to run MOSS");
  }
}

/*
====================================================
============== SUBMISSION FUNCTIONS ===================
====================================================
*/
export async function createSubmission(params: {
  problemId: number;
  id?: number;
  code: string;
}) {
  // code must be base64 encoded, if not, encode it
  if (!btoa(params.code).includes(params.code)) {
    params.code = btoa(params.code);
  }

  try {
    const res = await api.post<ApiResponse<null>>(`/submission`, {
      ...params,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create submission");
  }
}

export async function getSubmissionExecutionStatus(params: { id: number }) {
  try {
    const res = await api.get(`/submission/${params.id}/execute`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to get submission execution status");
  }
}

export async function getSubmissionById(params: { id: number }) {
  try {
    const res = await api.get<ApiResponse<Submission>>(`/submission/${params.id}`);
    // decode the code
    res.data.data.code = atob(res.data.data.code);

    return res.data.data;
  } catch (error) {
    throw new Error("Failed to get submission by ID");
  }
}
