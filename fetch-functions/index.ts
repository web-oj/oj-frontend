import type { User, Problem } from "@/types";

import { CreateContestParams } from "./types";

import { api } from "@/utils/api";

// User functions

export async function signUp(params: {
  email: string;
  password: string;
  handle: string; // username
}) {
  try {
    const res = await api.post("/user/sign_up", params);

    return res.data;
  } catch (error) {
    console.error("Failed to sign up", error);
    throw new Error("Failed to sign up");
  }
}

export async function login(params: { email: string; password: string }) {
  try {
    const res = await api.post("/user/login", params);

    return res.data;
  } catch (error) {
    throw new Error("Failed to sign in");
  }
}
export async function getUserByToken() {
  try {
    const res = await api.get<number>("/user/get-user-id-from-token");

    return res.data;
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
    const res = await api.post("/problem/create_problem", params);

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

export async function deleteProblemById(params: { id: number }) {
  try {
    const res = await api.delete(`/problem/id/${params.id}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to delete problem by ID");
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

export async function searchProblems(
  searchKeyword?: string,
  difficultyLow?: number,
  difficultyHigh?: number,
  offset?: number,
  limit?: number,
): Promise<Problem[]> {
  try {
    const res = await api.get<Problem[]>(`/problem`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch all problems");
  }
}

export async function createContest(params: CreateContestParams) {
  try {
    const res = await api.post("/contest/create", params);

    return res.data;
  } catch (error) {
    throw new Error("Failed to create contest");
  }
}
