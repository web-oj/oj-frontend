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

