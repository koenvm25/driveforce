import { NextEventBanner } from "@/components/NextEvent/NextEventBanner";
import { IDashboardLoader } from "@/utils/loaders";
import { useLoaderData } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const { nextEvent } = useLoaderData() as IDashboardLoader;

  if (!nextEvent) return null;

  return <NextEventBanner nextEvent={nextEvent} />;
};
