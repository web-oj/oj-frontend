import { createContext, useContext, useState } from "react";

import { Contest, ObjectContextType } from "@/types";

type ContestTrack = Omit<Contest, "id">;
type ContestTrackType = ObjectContextType<ContestTrack>;

export const ContestTrackContext = createContext<ContestTrackType>(
  {} as ContestTrackType,
);

export const ContestTrackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<ContestTrack>({} as ContestTrack);

  return (
    <ContestTrackContext.Provider value={{ data, setData }}>
      {children}
    </ContestTrackContext.Provider>
  );
};
export const useContestTrack = () => {
  const context = useContext(ContestTrackContext);

  if (context === undefined) {
    throw new Error(
      "useContestTrack must be used within a ContestTrackProvider",
    );
  }

  return context;
};
