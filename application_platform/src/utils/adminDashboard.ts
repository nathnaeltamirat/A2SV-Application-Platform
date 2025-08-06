import React from "react";
import { formatDistanceToNow } from "date-fns";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNWI2Yjk1NS1iYjY5LTRhNGItYmE5Ny1kYWFlNzJiNTQ4YzAiLCJleHAiOjE3NTQ0NzI0NjQsInR5cGUiOiJhY2Nlc3MifQ.rYyMIRFgyi772Cq0Ds1Lnp5JJDOK1r0eGurGmIL36Lg";
export const numberUsers = async () => {
  console.log("token", token);
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
