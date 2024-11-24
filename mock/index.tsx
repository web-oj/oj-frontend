import { Contest, Problem, User, TestCase, Submission, Achievement, DiscussionMessage, Tag, TaggedProblem, PlagiarismReport, SubmissionResult, ContestParticipated, ProblemSolved, ContestProblem, Notification } from "@/types";

const contestDescription = `
# **Mock Contest**

## **Description**
This is a **mock contest** description. Participate in this contest to test your skills and compete with others.

## **Details**
- **Start Time:** January 1, 2023, 00:00 UTC
- **End Time:** January 2, 2023, 00:00 UTC
- **Scoring Rule:** Default
- **Organizer:** Organizer 1
- **Published:** Yes

## **Rules**
1. **Plagiarism Check:** Enabled
2. **Submission Guidelines:** Follow the standard submission guidelines.
3. **Scoring:** Points will be awarded based on the correctness and efficiency of the solutions.

## **Prizes**
- **1st Place:** $500
- **2nd Place:** $300
- **3rd Place:** $200

## **Contact**
For any queries, please contact the organizer at [organizer@example.com](mailto:organizer@example.com).

---

**Good luck and happy coding!**
`;
export const mockContest: Contest = {
  contest_id: 1,
  title: "Mock Contest",
  description: contestDescription,
  start_time: "2023-01-01T00:00:00Z",
  end_time: "2023-01-02T00:00:00Z",
  scoring_rule: "default",
  is_plagiarism_check_enabled: true,
  organizer_id: "organizer_1",
  is_published: true,
  id: "",
  created_at: "28"
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

export const mockSubmission: Submission = {
  submission_id: 1,
  user_id: 1,
  problem_id: 1,
  contest_id: 1,
  submitted_at: "2023-01-01T00:00:00Z",
  source_code_language: "javascript",
  source_code_file: "console.log('Hello, world!');",
  status: "pending",
  compiler_message: "No errors",
  id: "",
  source_code_lang: ""
};

export const mockAchievement: Achievement = {
  achievement_id: 1,
  title: "Mock Achievement",
  user_id: 1,
  attachment: "attachment_url",
  is_verified: true,
};

export const mockNotification: Notification = {
  notification_id: 1,
  receive_id: 1,
  content: "This is a mock notification.",
  send_at: "2023-01-01T00:00:00Z",
};

export const mockDiscussionMessage: DiscussionMessage = {
  message_id: 1,
  user_id: 1,
  contest_id: 1,
  problem_id: 1,
  content: "This is a mock discussion message.",
  send_at: "2023-01-01T00:00:00Z",
  parent_id: undefined,
};

export const mockTag: Tag = {
  tag_id: 1,
  tag_name: "Mock Tag",
  tag_type: "type1",
  is_selected: false,
};

export const mockTaggedProblem: TaggedProblem = {
  tag_id: 1,
  problem_id: 1,
};

export const mockPlagiarismReport: PlagiarismReport = {
  report_id: 1,
  submission_id: 1,
  moss_dump_file: "moss_dump_file_url",
};

export const mockSubmissionResult: SubmissionResult = {
  submission_id: 1,
  test_case_id: 1,
  time_elapsed: 100,
  memory_used: 256,
  output: "Mock output",
  judge_message: "Accepted",
  status: "accepted",
  judged_at: "2023-01-01T00:00:00Z",
};

export const mockContestParticipated: ContestParticipated = {
  user_id: 1,
  contest_id: 1,
};

export const mockProblemSolved: ProblemSolved = {
  user_id: 1,
  problem_id: 1,
};

export const mockContestProblem: ContestProblem = {
  contest_id: 1,
  problem_id: 1,
  point: 100,
};

export const mockSubmissionSimple: Submission = {
  id: "1",
  problem_id: 1,
  source_code_lang: "javascript",
  submitted_at: "2023-01-01T00:00:00Z",
  submission_id: 0,
  user_id: 0,
  contest_id: 0,
  source_code_language: "",
  source_code_file: "",
  status: "",
  compiler_message: ""
};

// More mock data can be added here

export const mockContests: Contest[] = Array(20).fill(mockContest);
export const mockProblems: Problem[] = Array(20).fill(mockProblem);
export const mockUsers: User[] = Array(20).fill(mockUser);
