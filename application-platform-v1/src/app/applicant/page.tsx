"use client";

import { applicationSubmitted } from "@/app/api/applicant/applicationSubmitted";
import ApplicantsHeader from "@/components/applicant/applicantsHeader";
import Application from "@/components/applicant/application";
import NoApplication from "@/components/applicant/noApplication";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [inProgress, setInProgress] = useState<boolean | null>(null);
  const [dateAndTime, setDateAndTime] = useState<string | null>("");
  const full_name = localStorage.getItem("full_name");
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
  if (inProgress === null) {
    return (
      <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen mb-2 w-full">
      <ApplicantsHeader applicant_name={full_name} />
      {inProgress ? (
        <Application dateAndTime={dateAndTime} />
      ) : (
        <NoApplication />
      )}
      <Footer />
    </div>
  );
};

export default UserPage;
