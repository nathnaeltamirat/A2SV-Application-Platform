import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const NoApplication = () => {
  return (
    <div className="w-[70%] h-20 mx-auto py-5 mb-2 ">
      <h1 className="font-bold text-xl ">Welcome, JohnDoe</h1>
      <p className="text-sm font-extralight">
        Your journey to a global tech career starts now.
      </p>
      <div className="grid grid-cols-3 gap-6 my-4">
        <div className="h-40 mr-2 p-5 text-white pb-8 rounded-md col-span-3 md:col-span-2 bg-gradient-to-r from-violet-900 via-purple-800 to-purple-900">
          <h1 className="text-xl font-bold ">G7 November Intake</h1>
          <p className="mb-5">
            It is time to submit your application and show us your potential.
          </p>
          <Link
            href="/"
            className="bg-white p-2 text-blue-700 font-extrabold rounded-lg"
          >
            Start Application
          </Link>
        </div>
        <div className="flex flex-col col-span-3 md:col-span-1">
          <div className=" bg-white  mr-2  p-4 rounded-md">
            <h1 className="font-bold my-2">Complete Your Profile</h1>
            <p className="text-sm bg-blue-300 w-32 h-6 font-extrabold mb-2 text-blue-600 rounded-xl pl-2 py-1 mt-2">
              75% COMPLETE
            </p>
            <div className="bg-gray-200 h-2 my-1 rounded-2xl ">
              <div
                className="bg-blue-600 h-2  rounded-2xl"
                style={{ width: `75%` }}
              ></div>
            </div>
            <Link
              href="/users"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-600"
            >
              <span>Go to Profile</span>
              <ArrowRightIcon className="w-5" />
            </Link>
          </div>
          <div className=" bg-white   mr-2 my-2  p-4 rounded-md">
            <h1 className="font-bold my-2">Application Checklist</h1>
            <div className="flex my-1 gap-0.5">
              <CheckCircleIcon className="w-4 font-extralight" />
              <p className=" font-extralight text-sm"> Create an Account</p>
            </div>
            <div className="flex my-1  gap-0.5">
              <CheckCircleIcon className="w-4 font-extralight" />
              <p className="font-extralight text-sm">
                {" "}
                Fill Personal Information
              </p>
            </div>
            <div className="flex my-1 gap-0.5">
              <CheckCircleIcon className="w-4 font-extralight" />
              <p className="font-extralight text-sm"> Submit Coding Profiles</p>
            </div>
            <div className="flex gap-0.5">
              <CheckCircleIcon className="w-4 my-1 font-extralight" />
              <p className="font-extralight text-sm"> Write Essays</p>
            </div>
            <div className="flex gap-0.5">
              <CheckCircleIcon className="w-4 font-extralight" />
              <p className="font-extralight text-sm"> Upload Resume</p>
            </div>
          </div>
          <div className=" bg-white  mr-2 my-2  p-4 rounded-md">
            <h1 className="font-bold my-2">Helpful Resources</h1>
            <p className="text-purple-400 text-sm">
              Tips for a Great Application
            </p>
            <p className="text-purple-400 text-sm">
              A2SV Problem Solving Guide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoApplication;
