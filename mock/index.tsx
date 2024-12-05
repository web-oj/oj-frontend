import { Contest, Problem, User, TestCase, Submission, Achievement, DiscussionMessage, Tag, TaggedProblem, PlagiarismReport, SubmissionResult, ContestParticipated, ProblemSolved, ContestProblem, Notification } from "@/types";
export const mockContest: Contest = {
  contest_id: 1,
  title: "Mock Contest",
  description: "This is a mock contest description.",
  start_time: "2023-01-01T00:00:00Z",
  end_time: "2023-01-02T00:00:00Z",
  scoring_rule: "default",
  is_plagiarism_check_enabled: true,
  organizer_id: "organizer_1",
  is_published: true,
  id: "",
  created_at: ""
};
export const mockProblem: Problem = {
  id: "1",
  title: "Mock Problem",
  tags: ["tag1", "tag2"],
  statement: "This is a mock problem statement.",
  difficulty: 1,
  time_limit: 1000,
  memory_limit: 256,
  input_format: "Input format description.",
  output_format: "Output format description.",
  solution_text: "Solution text.",
  created_at: "2023-01-01T00:00:00Z",
  creator_id: "creator_1",
};
export const mockUser: User = {
  user_id: 1,
  user_name: "mockuser",
  email: "mockuser@example.com",
  password: "password",
  role: "user",
  created_at: "2023-01-01T00:00:00Z",
  rating: 1000,
};
export const mockTestCase: TestCase = {
  test_case_id: 1,
  problem_id: 1,
  input: "Mock input",
  expected_output: "Mock output",
  is_hidden: false,
};