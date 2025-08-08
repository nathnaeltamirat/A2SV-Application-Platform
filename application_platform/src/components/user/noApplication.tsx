import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const NoApplication = () => {
  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="font-bold text-xl">Welcome, John!</h1>
      <p className="text-sm text-gray-500 mb-6">
        Your journey to a global tech career starts now.
      </p>

      <div className="flex gap-6">
        <div className="w-2/3 p-5 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">G7 November Intake</h2>
            <p className="mb-4">
              It’s time to submit your application and show us your potential.
            </p>
          </div>
          <Link
            href="/apply"
            className="bg-white text-indigo-500 font-semibold py-2 px-4 rounded-md w-fit"
          >
            Start Application
          </Link>
        </div>

        <div className="w-1/3 h-[200px] flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold mb-2">Complete Your Profile</h2>
            <div className="text-sm bg-purple-100 text-indigo-500 rounded-full px-3 py-1 w-fit mb-2">
              75% COMPLETE
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-indigo-500 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <Link
              href="/users"
              className="text-indigo-500 text-sm flex items-center mt-2 hover:underline"
            >
              Go to profile <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold mb-2">Application Checklist</h2>
            {[
              "Create an Account",
              "Fill Personal Information",
              "Submit Coding Profiles",
              "Write Essays",
              "Upload Resume",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-700 mb-1"
              >
                <CheckCircleIcon className="w-4 h-4 text-green-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold mb-2">Helpful Resources</h2>
            <ul className="text-sm text-indigo-500  pl-4">
              <li>Tips for a Great Application</li>
              <li>A2SV Problem Solving Guide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoApplication;
