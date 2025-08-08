import React from "react";
import { formatDistanceToNow } from "date-fns";
const token = localStorage.getItem('accessToken')
export const numberUsers = async () => {
  
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/admin/users",
    options
  );
  const data = await res.json();
  const numberOfUsers = data.data.users.length;

  return numberOfUsers;
};

export const numberCycle = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/cycles",
    options
  );
  const data = await res.json();
  const numberOfCycles = data.data.cycles.length;

  return numberOfCycles;
};

export const numberOfApplicants = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/manager/applications/",
    options
  );
  const data = await res.json();
  const numberApplciations = data.data.applications.length;

  return numberApplciations;
};

export const recent = async () => {
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
