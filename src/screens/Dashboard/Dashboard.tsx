import { NextEventBanner } from "@/components/NextEvent/NextEventBanner";
import { getNextEvent } from "@/helpers/scheduleHelpers";
import { useCurrentSeasonScheduleQuery } from "@/queries/RaceScheduleQueries";
import { useMemo } from "react";

export const Dashboard: React.FC = () => {
  const currentRaceSchedule = useCurrentSeasonScheduleQuery();
  const nextEvent = useMemo(
    () => getNextEvent(currentRaceSchedule.data?.races),
    [currentRaceSchedule.data?.races]
  );

  if (!nextEvent) return null;

  return <NextEventBanner nextEvent={nextEvent} />;
};
