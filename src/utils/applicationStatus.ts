import { formatDistanceToNow } from "date-fns";

export const applicantStatus = async () => {
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/cycles"
  );
  const data = await res.json();
  console.log("data", data);
  const cycle_number = data.data.cycles.length
  const recentCycle = data.data.cycles[cycle_number-1];
  console.log("recent cycle", recentCycle);
  const recentCycleName = recentCycle.name;
  const recentCycleCreated = recentCycle?.created_at
    ? formatDistanceToNow(new Date(recentCycle.created_at), { addSuffix: true })
    : "N/A";
  return [recentCycleName, recentCycleCreated];
};
