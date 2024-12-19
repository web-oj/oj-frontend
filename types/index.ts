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
export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Organizer = 'ORGANIZER',
  ProblemSetter = 'PROBLEM_SETTER',
}

export interface User {
  id: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  handle: string;
  avatar_image: string;
  bio: string;
  email: string;
  password: string;
  role: Role;
  isBan: boolean;
  rating: number;
  lastTimeChangeHandle: number;
  lastTimeChangeImage: number;
  country: string;
  submissions: Submission[];
  organizedContests: Contest[];
  participatedContest: ContestParticipation[];
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
  deletedAt: string | null;
  title: string;
  statement: string;
  difficulty: number;
  timeLimit: number;
  memoryLimit: number;
  inputFormat: string;
  outputFormat: string;
  solutionText: string;
  isPublished: boolean;
  owner: User;
  submissions: Submission[];
  testcases: TestCase[];
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
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  userId: number;
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
