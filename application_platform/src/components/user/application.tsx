import { DateAndTimes } from "@/types/dateAndTime";
import {
  ArrowPathRoundedSquareIcon,
  ArrowRightIcon,
  CalendarDateRangeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

const Application = ({dateAndTime}:DateAndTimes) => {
  return (
    <div className="w-[70%]  mx-auto py-5 mb-2 ">
      <h1 className="font-bold text-xl ">Your Application Progress</h1>
      <p className="text-sm font-extralight">
        Youre on your way! Heres a summary of your application status.
      </p>
      <div className="flex gap-2 my-4">
        <div className="w-[60%]  mr-2 p-5 pb-8 rounded-md bg-white">
          <h1 className="text-lg font-bold ">Application Timeline</h1>
          <p className="mb-5">
            It is time to submit your application and show us your potential.
          </p>
          <div className="flex  gap-2">
            <div className="flex flex-col">
              <CheckCircleIcon className="w-6 h-6 text-green-600 " />
              <div className="h-25 w-0.5 ml-2 bg-gray-300"></div>
            </div>
            <div>
              <h2 className="font-bold">Application Submitted</h2>
              <p className="text-sm font-extralight">{dateAndTime}</p>
              <p className="text-sm font-extralight">
                Your application has been successfully submitted. Were excited
                to learn more about you!
              </p>
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="flex flex-col">
              <ArrowPathRoundedSquareIcon className="w-6 h-6 text-blue-600 " />
              <div className="h-25 w-0.5 ml-2 bg-gray-300"></div>
            </div>
            <div>
              <h2 className="font-bold">Under Review</h2>
              <p className="text-sm font-extralight">Current Stage</p>
              <p className="text-sm font-extralight">
                Our team is currently reviewing your application. This may take
                a few days. Thank you for your patience.
              </p>
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="flex flex-col">
              <div className="w-6 h-6 rounded-4xl bg-gray-300"></div>
              <div className="h-5 w-0.5 ml-2 bg-gray-300"></div>
            </div>
            <div>
              <h2 className="text-gray-400">Interview Stage</h2>
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="flex flex-col">
              <div className="w-6 h-6 rounded-4xl bg-gray-300"></div>
            </div>
            <div>
              <h2 className="text-gray-400">Decission Made</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[35%]">
          <div className=" bg-white   mr-2 my-2  p-4 rounded-md">
            <h1 className="font-bold my-2">Recent Activity</h1>
            <div className="flex gap-1 my-2">
              <CheckCircleIcon className="w-6 h-6 text-green-600 " />
              <div className="flex flex-col">
                <p className="font-light">Application Submitted</p>
                <p className="text-sm font-extralight">{dateAndTime}</p>
              </div>
            </div>
            <div className="flex gap-1">
              <CalendarDateRangeIcon className="w-6 h-6 text-blue-600 " />
              <div className="flex flex-col ">
                <p className="font-light">Interview Scheduled</p>
                <p className="text-sm font-extralight">November 5,2023</p>
              </div>
            </div>
          </div>
          <div className=" bg-white   mr-2 my-2  p-4 rounded-md">
            <h1 className="font-bold my-2">Important Updates</h1>
            <p>
              There are no new updates at this time. We will notify you by email
              when your application status changes.
            </p>
          </div>
          <div className=" bg-blue-600  mr-2 my-2  p-4 rounded-md">
            <h1 className="font-bold my-2 text-white">
              Get Ready for the Interview
            </h1>
            <p className="text-white">
              While you wait, its a great time to prepare. Practice your
              problem-solving skills on platforms like LeetCode and Codeforces.
            </p>
            <div className="flex">
              <p className="text-white">Read our interview prep guide →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
