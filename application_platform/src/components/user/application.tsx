import { DateAndTimes } from "@/types/dateAndTime";
import {
  ArrowPathRoundedSquareIcon,
  CalendarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Application = ({ dateAndTime }: DateAndTimes) => {
  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="font-bold text-xl">Your Application Progress</h1>
      <p className="text-sm text-gray-500 mb-6">
        You’re on your way! Here’s a summary of your application status.
      </p>

      <div className="flex gap-6">
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-2">Application Timeline</h2>
          <p className="text-sm text-gray-600 mb-6">
            It’s time to submit your application and show us your potential.
          </p>

        
          <div className="space-y-8">
            {/* Submitted */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <CheckCircleIcon className="w-6 h-6 text-green-600" />
                <div className="h-16 w-0.5 bg-gray-300"></div>
              </div>
              <div>
                <h3 className="font-bold">Application Submitted</h3>
                <p className="text-sm text-gray-500">{dateAndTime}</p>
                <p className="text-sm text-gray-500">
                  Your application has been successfully submitted. We’re
                  excited to learn more about you!
                </p>
              </div>
            </div>

            {/* Under Review */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <ArrowPathRoundedSquareIcon className="w-6 h-6 text-blue-600" />
                <div className="h-16 w-0.5 bg-gray-300"></div>
              </div>
              <div>
                <h3 className="font-bold">Under Review</h3>
                <p className="text-sm text-gray-500">Current Stage</p>
                <p className="text-sm text-gray-500">
                  Our team is currently reviewing your application. This may
                  take a few days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div>
                <h3 className="text-gray-400">Interview Stage</h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div>
                <h3 className="text-gray-400">Decision Made</h3>
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-1/3 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold mb-3">Recent Activity</h2>
            <div className="flex items-start gap-2 mb-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium">Application Submitted</p>
                <p className="text-xs text-gray-500">{dateAndTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CalendarIcon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Interview Scheduled</p>
                <p className="text-xs text-gray-500">November 5, 2023</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold mb-2">Important Updates</h2>
            <p className="text-sm text-gray-600">
              There are no new updates at this time. We will notify you by email
              when your application status changes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg shadow-sm">
            <h2 className="text-white font-bold mb-2">
              Get Ready for the Interview
            </h2>
            <p className="text-white text-sm mb-2">
              While you wait, it's a great time to prepare. Practice your
              problem-solving skills on LeetCode or Codeforces.
            </p>
            <p className="text-white text-sm underline cursor-pointer">
              Read our interview prep guide →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
