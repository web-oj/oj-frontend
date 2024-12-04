export type CreateContestParams = {
  organizerId: number;
  isPublished: boolean;
  isPlagiarismCheckEnabled: boolean;
  scoringRule: string;
  startTime: number;
  endTime: number;
  ruleText: string;
  description: string;
  title: string;
};
