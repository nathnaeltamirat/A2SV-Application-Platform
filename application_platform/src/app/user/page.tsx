"use client";

import ApplicantsHeader from "@/components/header/applicantsHeader";
import Application from "@/components/user/application";
import NoApplication from "@/components/user/noApplication";
import { applicationSubmitted } from "@/utils/applicationSubmitted";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [dateAndTime, setDateAndTime] = useState<string | null>("");
  const full_name = localStorage.getItem("full_name")
  useEffect(() => {
    const getDate = async () => {
      const data = await applicationSubmitted();
      if (data) {
        setInProgress(true);
        setDateAndTime(data);
      }
    };
    getDate();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <ApplicantsHeader applicant_name={full_name}/>
      {inProgress ? (
        <Application dateAndTime={dateAndTime} />
      ) : (
        <NoApplication />
      )}
    </div>
  );
};

export default UserPage;
