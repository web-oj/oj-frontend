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
  created_at: string;

}
export interface Problem {
  id: string;
  title: string;
  tags?: string[];
  statement: string;
  difficulty: number;
  time_limit: number;
  memory_limit: number;
  input_format: string;
  output_format: string;
  solution_text: string;
  created_at: string;
  creator_id: string;
}

export interface User {
  user_id: number;
  user_name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  rating: number;
}

export interface Contest {
  contest_id: number;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  scoring_rule: string;
  is_plagiarism_check_enabled: boolean;
  organizer_id: number;
  is_published: boolean;
}

export interface TestCase {
  test_case_id: number;
  problem_id: number;
  input: string;
  expected_output: string;
  is_hidden: boolean;
}

export interface Submission {
  submission_id: number;
  user_id: number;
  problem_id: number;
  contest_id: number;
  submitted_at: string;
  source_code_language: string;
  source_code_file: string;
  status: string;
  compiler_message: string;
}

export interface Achievement {
  achievement_id: number;
  title: string;
  user_id: number;
  attachment: string;
  is_verified: boolean;
}

export interface Notification {
  notification_id: number;
  receive_id: number;
  content: string;
  send_at: string;
}

export interface DiscussionMessage {
  message_id: number;
  user_id: number;
  contest_id: number;
  problem_id: number;
  content: string;
  send_at: string;
  parent_id?: number;
}

export interface Tag {
  tag_id: number;
  tag_name: string;
  tag_type: string;
  is_selected: boolean;
}

export interface TaggedProblem {
  tag_id: number;
  problem_id: number;
}

export interface PlagiarismReport {
  report_id: number;
  submission_id: number;
  moss_dump_file: string;
}

export interface SubmissionResult {
  submission_id: number;
  test_case_id: number;
  time_elapsed: number;
  memory_used: number;
  output: string;
  judge_message: string;
  status: string;
  judged_at: string;
}

export interface ContestParticipated {
  user_id: number;
  contest_id: number;
}

export interface ProblemSolved {
  user_id: number;
  problem_id: number;
}

export interface ContestProblem {
  contest_id: number;
  problem_id: number;
  point: number;
}

export interface Submission {
  id: string;
  problem_id: string;
  source_code_lang: Language | string
  submitted_at: string;
}
