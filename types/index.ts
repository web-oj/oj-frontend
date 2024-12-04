import { Language } from "@/components/ide/editor/data";
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

/*
* ========================================================
*                       SDK
* ========================================================
* */

export interface Contest {
  id: string;
  title: string;
  scoring_rule: string;
  organizer_id: string;
  start_time: string;
  end_time: string;
  createdAt: string;

}
export interface Problem {
  id: string;
  title: string;
  tags?: string[];
  statement: string;
  difficulty: number;
  timeLimit: number;
  memoryLimit: number;
  inputFormat: string;
  outputFormat: string;
  solutionText: string;
  createdAt: string;
  creator_id: string;
}

export interface User {
  userId: number;
  userName: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  rating: number;
}

export interface Contest {
  contestId: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  scoringRule: string;
  isPlagiarismCheckEnabled: boolean;
  organizerId: string;
  isPublished: boolean;
}

export interface TestCase {
  testCaseId: number;
  problemId: number;
  input: string;
  expectedOutput: string;
  isHidden: boolean;
}

export interface Submission {
  submissionId: number;
  userId: number;
  problemId: number;
  contestId: number;
  submittedAt: string;
  sourceCodeLanguage: string;
  sourceCodeFile: string;
  status: string;
  compilerMessage: string;
}

export interface Achievement {
  achievementId: number;
  title: string;
  userId: number;
  attachment: string;
  isVerified: boolean;
}

export interface Notification {
  notificationId: number;
  receiveId: number;
  content: string;
  sendAt: string;
}

export interface DiscussionMessage {
  messageId: number;
  userId: number;
  contestId: number;
  problemId: number;
  content: string;
  sendAt: string;
  parentId?: number;
}

export interface Tag {
  tagId: number;
  tagName: string;
  tagType: string;
  isSelected: boolean;
}

export interface TaggedProblem {
  tagId: number;
  problemId: number;
}

export interface PlagiarismReport {
  reportId: number;
  submissionId: number;
  mossDumpFile: string;
}

export interface SubmissionResult {
  submissionId: number;
  testCaseId: number;
  timeElapsed: number;
  memoryUsed: number;
  output: string;
  judgeMessage: string;
  status: string;
  judgedAt: string;
}

export interface ContestParticipated {
  userId: number;
  contestId: number;
}

export interface ProblemSolved {
  userId: number;
  problemId: number;
}

export interface ContestProblem {
  contestId: number;
  problemId: number;
  point: number;
}

export interface Submission {
  id: string;
  problemId: number;
  sourceCodeLang: Language | string;
  submittedAt: string;
}
