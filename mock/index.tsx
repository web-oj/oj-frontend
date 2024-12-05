import {
  Contest,
  Problem,
  User,
  TestCase,
  Submission,
  Achievement,
  DiscussionMessage,
  Tag,
  TaggedProblem,
  PlagiarismReport,
  SubmissionResult,
  ContestParticipated,
  ProblemSolved,
  ContestProblem,
  Notification,
} from "@/types";

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
  contestId: 1,
  title: "Mock Contest",
  description: contestDescription,
  startTime: "2023-01-01T00:00:00Z",
  endTime: "2023-01-02T00:00:00Z",
  scoringRule: "default",
  isPlagiarismCheckEnabled: true,
  organizerId: "organizer_1",
  isPublished: true,
  id: "",
  createdAt: "28",
};

export const mockProblem: Problem = {
  id: "1",
  title: "Mock Problem",
  tags: ["tag1", "tag2"],
  statement: "This is a mock problem statement.",
  difficulty: 1,
  timeLimit: 1000,
  memoryLimit: 256,
  inputFormat: "Input format description.",
  outputFormat: "Output format description.",
  solutionText: "Solution text.",
  createdAt: "2023-01-01T00:00:00Z",
  creatorId: "creator_1",
};

export const mockUser: User = {
  userId: 1,
  userName: "mockuser",
  email: "mockuser@example.com",
  password: "password",
  role: "user",
  createdAt: "2023-01-01T00:00:00Z",
  rating: 1000,
};

export const mockTestCase: TestCase = {
  testCaseId: 1,
  problemId: 1,
  input: "Mock input",
  expectedOutput: "Mock output",
  isHidden: false,
};

export const mockSubmission: Submission = {
  submissionId: 1,
  userId: 1,
  problemId: 1,
  contestId: 1,
  submittedAt: "2023-01-01T00:00:00Z",
  sourceCodeLanguage: "javascript",
  sourceCodeFile: "console.log('Hello, world!');",
  status: "pending",
  compilerMessage: "No errors",
  id: "",
  sourceCodeLang: "",
};

export const mockAchievement: Achievement = {
  achievementId: 1,
  title: "Mock Achievement",
  userId: 1,
  attachment: "attachment_url",
  isVerified: true,
};

export const mockNotification: Notification = {
  notificationId: 1,
  receiveId: 1,
  content: "This is a mock notification.",
  sendAt: "2023-01-01T00:00:00Z",
};

export const mockDiscussionMessage: DiscussionMessage = {
  messageId: 1,
  userId: 1,
  contestId: 1,
  problemId: 1,
  content: "This is a mock discussion message.",
  sendAt: "2023-01-01T00:00:00Z",
  parentId: undefined,
};

export const mockTag: Tag = {
  tagId: 1,
  tagName: "Mock Tag",
  tagType: "type1",
  isSelected: false,
};

export const mockTaggedProblem: TaggedProblem = {
  tagId: 1,
  problemId: 1,
};

export const mockPlagiarismReport: PlagiarismReport = {
  reportId: 1,
  submissionId: 1,
  mossDumpFile: "moss_dump_file_url",
};

export const mockSubmissionResult: SubmissionResult = {
  submissionId: 1,
  testCaseId: 1,
  timeElapsed: 100,
  memoryUsed: 256,
  output: "Mock output",
  judgeMessage: "Accepted",
  status: "accepted",
  judgedAt: "2023-01-01T00:00:00Z",
};

export const mockContestParticipated: ContestParticipated = {
  userId: 1,
  contestId: 1,
};

export const mockProblemSolved: ProblemSolved = {
  userId: 1,
  problemId: 1,
};

export const mockContestProblem: ContestProblem = {
  contestId: 1,
  problemId: 1,
  point: 100,
};

export const mockSubmissionSimple: Submission = {
  id: "1",
  problemId: 1,
  sourceCodeLang: "javascript",
  submittedAt: "2023-01-01T00:00:00Z",
  submissionId: 0,
  userId: 0,
  contestId: 0,
  sourceCodeLanguage: "",
  sourceCodeFile: "",
  status: "",
  compilerMessage: "",
};

// More mock data can be added here

export const mockContests: Contest[] = Array(20).fill(mockContest);
export const mockProblems: Problem[] = Array(20).fill(mockProblem);
export const mockUsers: User[] = Array(20).fill(mockUser);
