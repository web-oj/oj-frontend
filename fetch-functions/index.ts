import type { User, Problem, Contest } from "@/types";

import { CreateContestParams } from "./types";

import { api } from "@/utils/api";

// User functions

export async function signUp(params: {
  email: string;
  password: string;
  handle: string; // username
}) {
  try {
    const res = await api.post("/user", params);

    return res.data;
  } catch (error) {
    console.error("Failed to sign up", error);
    throw new Error("Failed to sign up");
  }
}

export async function login(params: { email: string; password: string }) {
  try {
    const res = await api.post("/user/login", params);

    return res.data.token;
  } catch (error) {
    throw new Error("Failed to sign in");
  }
}
export async function getUserByToken() {
  try {
    const res = await api.get("/user/id");
    const id = res.data.id;
    const user = await getUserById({ id });

    return user;

  } catch (error) {
    throw new Error("Failed to fetch user by token");
  }
}

export async function getUserById(params: { id: number }): Promise<User> {
  try {
    const res = await api.get<User>(`/user/id/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch user by ID");
  }
}

export async function getUserByHandle(params: {
  handle: string;
}): Promise<User> {
  try {
    const res = await api.get<User>(`/user/handle/${params.handle}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch user by handle");
  }
}

export async function deleteUser(params: { id: number }) {
  try {
    const res = await api.delete(`/user/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}

export async function updateUser(params: Partial<User>) {
  try {
    const res = await api.patch(`/user`, params);

    return res.data;
  } catch (error) {
    throw new Error("Failed to update user");
  }
}

// Problem functions

export async function createProblem(params: {
  title: Problem["title"];
  difficulty: Problem["difficulty"];
  statement: Problem["statement"];
  /**
   * @ignore: tags are not implemented yet
   */
  // tags: string[];
  timeLimit: Problem["timeLimit"];
  memoryLimit: Problem["memoryLimit"];
  inputFormat: Problem["inputFormat"];
  outputFormat: Problem["outputFormat"];
  solutionText: Problem["solutionText"];
}) {
  try {
    const res = await api.post("/problem", params);

    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create problem");
  }
}

export async function addTestcaseToProblem(params: {
  problemId: number;
  input: string;
  output: string;
}) {
  try {
    const res = await api.post(`/problem/${params.problemId}/testcase`, {
      input: params.input,
      output: params.output,
    });

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
    const res = await api.post(`/problem/${params.problemId}/testcases`, {
      testcases: params.testcases,
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to add testcases to problem");
  }
}

export async function updateProblem(params: {
  id: number;
  data: Partial<Problem>;
}) {
  try {
    const res = await api.patch(`/problem/id/${params.id}`, params.data);

    return res.data;
  } catch (error: any) {
    throw new Error("Failed to update problem");
  }
}

export async function getProblemById(params: { id: number }): Promise<Problem> {
  try {
    const res = await api.get<Problem>(`/problem/id/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch problem by ID");
  }
}

export async function getProblemByTitle(params: {
  title: string;
}): Promise<Problem[]> {
  try {
    const res = await api.get<Problem[]>(`/problem/title/${params.title}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch problem by title");
  }
}

export async function deleteProblemById(params: { id: number }) {
  try {
    const res = await api.delete(`/problem/id/${params.id}`);

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
    const res = await api.get<Problem[]>(`/problem`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch all problems");
  }
}

export async function searchProblems(params: {
  searchKeyword?: string,
  difficultyLow?: number,
  difficultyHigh?: number,
  offset?: number,
  limit?: number,
}): Promise<Problem[]> {
  const {
    searchKeyword = "",
    difficultyLow = 0,
    difficultyHigh = 10,
    offset = 0,
    limit = 10,
  } = params;

  try {
    const res = await api.get<Problem[]>(`/problem/search`, {
      params: {
        searchKeyword,
        difficultyLow,
        difficultyHigh,
        offset,
        limit,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch all problems");
  }
}

export async function createContest(params: {
  organizerId: number;
  isPublished: boolean;
  isPlagiarismCheckEnabled: boolean;
  scoringRule: string;
  endTime: number;
  startTime: number;
  ruleText: string;
  description: string;
  title: string;
}) {
  try {
    const res = await api.post("/contest", params);

    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create contest");
  }
}

export async function getContestById(params: { id: number }) {
  try {
    const res = await api.get(`/contest/${params.id}`);

    return res.data.payload;
  } catch (error) {
    throw new Error("Failed to get contest by ID");
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
    const res = await api.get(`/contest/search`, {
      params: {
        ...params,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to search contests");
  }
}

export async function updateContest(params: {
  id: number;
  data: Partial<Contest>;
}) {
  try {
    const res = await api.patch(`/contest/${params.id}`, params.data);

    return res.data;
  } catch (error) {
    throw new Error("Failed to update contest");
  }
}

export async function deleteContest(params: { id: number }) {
  try {
    const res = await api.delete(`/contest/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete contest");
  }
}

export async function addProblemToContest(params: {
  contestId: number;
  problemId: number;
}) {
  try {
    const res = await api.post(`/contest/${params.contestId}/problem`, {
      problemId: params.problemId,
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to add problem to contest");
  }
}

export async function removeProblemFromContest(params: {
  contestId: number;
  problemId: number;
}) {
  try {
    const res = await api.delete(`/contest/${params.contestId}/problem`, {
      data: {
        problemId: params.problemId,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to remove problem from contest");
  }
}

export async function getProblemsInContest(params: { contestId: number }) {
  try {
    const res = await api.get(`/contest/${params.contestId}/problem`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to get problems in contest");
  }
}

export async function registerForContest(params: {
  userId: number;
  contestId: number;
}) {
  try {
    const res = await api.post(`/contest/${params.contestId}/register`, {
      id: params.userId,
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to register for contest");
  }
}

export async function unregisterForContest(params: {
  userId: number;
  contestId: number;
}) {
  try {
    const res = await api.delete(`/contest/${params.contestId}/register`, {
      data: {
        id: params.userId,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to unregister for contest");
  }
}

export async function createSubmission(params: {
  problemId: number;
  contestId?: number;
  code: string;
}) {
  try {
    const res = await api.post(`/submission`, {
      ...params,
    });

    return res.data;
  } catch (error) {
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
    const res = await api.get(`/submission/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to get submission by ID");
  }
}