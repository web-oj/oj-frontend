import { SVGProps } from "react";

/*
 * ========================================================
 *                       REACT
 * ========================================================
 * */

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ObjectContextType<T> = {
  data: T;
  setData: (data: T) => void;
};

export interface ApiResponse<T> {
  error: string;
  data: T;
  status: number;
  message: string;
}

export interface QueryParams {
  page?: number;
  limit?: number;
}

/*
 * ========================================================
 *                       SDK
 * ========================================================
 * */

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  handle: string;
  avatar_image: string;
  bio: string;
  email: string;
  password: string;
  role: string;
  isBan: boolean;
  lastTimeChangeHandle: number;
  lastTimeChangeImage: number;
  country: string;
  submissions: Submission[];
  organizedContests: Contest[];
  contestParticipations: Contest[];
}

export interface Submission {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  owner: User;
  problem: Problem;
  contest: Contest;
  code: string;
  language: Language;
  result: SubmissionResult[];
}

export interface Problem {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  title: string;
  statement: string;
  difficulty: number;
  timeLimit: number;
  memoryLimit: number;
  inputFormat: string;
  outputFormat: string;
  solutionText: string;
  createdBy: number;
  submissions: Submission[];
  testcases: TestCase[];
  isPublished: boolean;
  associatedContests: AssociatedContest[];
}

export interface Contest {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  title: string;
  description: string;
  ruleText: string;
  startTime: number;
  endTime: number;
  scoringRule: string;
  isPlagiarismCheckEnabled: boolean;
  isPublished: boolean;
  organizer: User;
  participations: ContestParticipation[];
  problemsInContest: Problem[];
  submissions: Submission[];
}

export interface ContestParticipation {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  userId: number;
  id: number;
  user: User;
  contest: Contest;
  score: number;
}

export interface AssociatedContest {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  problemId: number;
  id: number;
  problem: Problem;
  contest: Contest;
  score: number;
}

export interface ProblemInContest {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  problemId: number;
  id: number;
  problem: Problem;
  contest: Contest;
  score: number;
}

export enum Language {
  CPP = "CPP",
  C = "C",
  JAVA = "JAVA",
  PYTHON = "PYTHON",
}

export interface TestCase {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  problem: Problem;
  submissionResult: SubmissionResult;
  input: string;
  output: string;
}

export interface SubmissionResult {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  submission: Submission;
  testcase: TestCase;
  result: string;
}
