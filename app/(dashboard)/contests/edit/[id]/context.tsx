import { createContext, useContext } from "react";

import { Contest, ObjectContextType } from "@/types";

type ContestTrack = Omit<Contest, "id">;
type ContestTrackType = ObjectContextType<ContestTrack>;

export const ContestTrackContext = createContext<ContestTrackType>(
  {} as ContestTrackType,
);

export const useContestTrack = () => useContext(ContestTrackContext);