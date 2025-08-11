"use client";

import ApplicantsHeader from "@/components/applicant/applicantsHeader";
import CodingProfile, {
  CodingProfileHandle,
} from "@/components/applicant/application-submission/CodingProfile";
import EssayProfile, {
  EssayHandle,
} from "@/components/applicant/application-submission/EssayResume";
import PersonalInfo, {
  PersonalInfoHandle,
} from "@/components/applicant/application-submission/PersonalInfo";
import React, { useRef, useState } from "react";

const ApplyPage = () => {
  const personalInfoFormRef = useRef<PersonalInfoHandle>(null);
  const codingProfileFormRef = useRef<CodingProfileHandle>(null);
  const essayResumeFormRef = useRef<EssayHandle>(null);
  const [currStep, setCurrStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const progressBar = (100 / 3) * currStep;

  const handleNext = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (currStep < 3) {
        if (currStep === 1 && personalInfoFormRef.current) {
          const isValid = await personalInfoFormRef.current.submitForm();
          if (!isValid) return;
        } else if (currStep === 2 && codingProfileFormRef.current) {
          const isValid = await codingProfileFormRef.current.submitForm();
          if (!isValid) return;
        }
        setCurrStep(currStep + 1);
      } else if (currStep === 3 && essayResumeFormRef.current) {
        const isValid = await essayResumeFormRef.current.submitForm();
        if (!isValid) return;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (currStep > 1) {
      setCurrStep(currStep - 1);
    }
  };
  const full_name = localStorage.getItem("full_name");
  return (
<>
            <ApplicantsHeader applicant_name={full_name} />

      <div className="bg-white mt-5 text-black rounded-md p-5 w-3/5 mx-auto">
        <h1 className="font-bold text-2xl text-center my-3">
          Application Form
        </h1>
        <div className="w-[calc(100%-15px)] mx-auto my-2 h-2 bg-gray-300">
          <div
            className=" py-1 h-2 transition-all duration-300"
            style={{ width: `${progressBar}%`, background: "#4f46e5" }}
          ></div>
        </div>
        <div className="flex flex-wrap justify-between my-2">
          <div className="flex gap-1">
            <p
              style={
                currStep == 1
                  ? { background: "#4f46e5" }
                  : { background: "#d1d5db" }
              }
              className={
                currStep === 1
                  ? " text-white rounded-xl px-2"
                  : "text-gray-500 bg-gray-400 rounded-xl px-2"
              }
            >
              1
            </p>
            <p className="text-gray-400">Personal Info</p>
          </div>
          <div className="flex gap-1">
            <p
              style={
                currStep == 2
                  ? { background: "#4f46e5" }
                  : { background: "#d1d5db" }
              }
              className={
                currStep === 2
                  ? " text-white rounded-xl px-2"
                  : "text-gray-500 bg-gray-400 rounded-xl px-2"
              }
            >
              2
            </p>
            <p className="text-gray-400">Coding Profiles</p>
          </div>
          <div className="flex gap-1">
            <p
              style={
                currStep == 3
                  ? { background: "#4f46e5" }
                  : { background: "#d1d5db" }
              }
              className={
                currStep === 3
                  ? " text-white rounded-xl px-2"
                  : "text-gray-500 bg-gray-400 rounded-xl px-2"
              }
            >
              3
            </p>
            <p className="text-gray-400">Essays & Resume</p>
          </div>
        </div>
        {currStep === 1 && (
          <PersonalInfo onNext={handleNext} ref={personalInfoFormRef} />
        )}
        {currStep === 2 && (
          <CodingProfile onNext={handleNext} ref={codingProfileFormRef} />
        )}
        {currStep === 3 && (
          <EssayProfile onNext={handleNext} ref={essayResumeFormRef} />
        )}
        <div className="bg-gray-50 border-t border-gray-300 my-2 p-2 flex justify-between flex-wrap">
          <button
            disabled={currStep === 1 || isSubmitting}
            onClick={handleBack}
            className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isSubmitting}
            style={{ background: "#4f46e5" }}
            className="p-2 text-white rounded-md disabled:opacity-50"
          >
            {isSubmitting
              ? "Submitting..."
              : currStep === 1
              ? "Next: Coding Profiles"
              : currStep === 2
              ? "Next: Essay and Resume"
              : "Submit"}
          </button>
        </div>
      </div>
    </>


  );
};

export default ApplyPage;
