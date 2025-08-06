"use client";
import CodingProfile, {
  CodingProfileHandle,
} from "@/components/application-submission/CodingProfile";
import EssayResume, {
  EssayHandle,
} from "@/components/application-submission/EssayResume";
import PersonalInfo, {
  PersonalInfoHandle,
} from "@/components/application-submission/PersonalInfo";
import sendApplicantData from "@/utils/sendAppliants";
import React, { useRef, useState } from "react";

const ApplyPage = () => {
  const personalInfoFormRef = useRef<PersonalInfoHandle>(null);
  const codingProfileFormRef = useRef<CodingProfileHandle>(null);
  const essayResumeFormRef = useRef<EssayHandle>(null);
  const [currStep, setCurrStep] = useState(1);
  const progressBar = (100 / 3) * currStep;
  const handleNext = async () => {
    if (currStep < 3) {
      if (currStep == 1 && personalInfoFormRef.current) {
        const isvalid = await personalInfoFormRef.current.submitForm();
        if (!isvalid) return;
      } else if (currStep == 2 && codingProfileFormRef.current) {
        const isValid = await codingProfileFormRef.current.submitForm();
        if (!isValid) return;
      }
      setCurrStep(currStep + 1);
    } 
     else if (currStep == 3 && essayResumeFormRef.current) {
        const isValid = await essayResumeFormRef.current.submitForm();

        if (!isValid) return;
        
      }
  };
  const handleBack = () => {
    if (currStep > 0) {
      setCurrStep(currStep - 1);
    }
  };
  return (
    <div className="bg-white rounded-md  p-5 w-3/5 m-auto">
      <h1 className="font-bold text-2xl text-center my-3 ">Application Form</h1>
      <div className="w-[calc(100%-15px)] mx-auto  my-2 h-2 bg-gray-300 ">
        <div
          className="bg-blue-600 py-1 h-2 transition-all duration-300"
          style={{ width: `${progressBar}%` }}
        ></div>
      </div>
      <div className="flex flex-wrap justify-between my-2">
        <div className="flex gap-1">
          <p
            className={
              currStep == 1
                ? "bg-blue-600 -600 text-white rounded-xl px-2"
                : " text-gray-400 rounded-xl px-2"
            }
          >
            1
          </p>
          <p className="text-gray-400">Personal Info</p>
        </div>
        <div className="flex gap-1">
          <p
            className={
              currStep == 2
                ? "bg-blue-600 -600 text-white rounded-xl px-2"
                : " text-gray-400 rounded-xl px-2"
            }
          >
            2
          </p>
          <p className="text-gray-400">Coding Profiles</p>
        </div>
        <div className="flex gap-1">
          <p
            className={
              currStep == 3
                ? "bg-blue-600 -600 text-white rounded-xl px-2"
                : " text-gray-400 rounded-xl px-2"
            }
          >
            3
          </p>
          <p className="text-gray-400">Essays & Resume</p>
        </div>
      </div>
      {currStep == 1 && (
        <PersonalInfo onNext={handleNext} ref={personalInfoFormRef} />
      )}
      {currStep == 2 && (
        <CodingProfile onNext={handleNext} ref={codingProfileFormRef} />
      )}
      {currStep == 3 && (
        <EssayResume onNext={handleNext} ref={essayResumeFormRef} />
      )}
      <div className="bg-gray-50 border-t border-gray-300  my-2 p-2 flex justify-between flex-wrap ">
        <button
          disabled={currStep == 1}
          onClick={handleBack}
          className="p-2 bg-gray-200 rounded-md"
        >
          Back
        </button>
        <button

          type="submit"
          onClick={handleNext}
          className="p-2 bg-blue-600 text-white rounded-md"
        >
          Next:{" "}
          {currStep == 1
            ? " Coding Profiles"
            : currStep == 2
            ? "Essay and Resume"
            : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default ApplyPage;
