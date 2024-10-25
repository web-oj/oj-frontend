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

export interface Submission {
  id: string;
  problem_id: string;
  source_code_lang: Language | string
  submitted_at: string;
}
