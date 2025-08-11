"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/24/solid";
import {
  numberCycle,
  numberOfApplicants,
  numberUsers,
  recent,
} from "@/api/admin/adminDashboard";
import { Recent } from "@/types/admin.type";
import AdminHeader from "@/components/admin/adminHeader";

const AdminPage = () => {
  const [numberOfUsers, setNumberOfUsers] = useState<number>(0);
  const [numberOfCycles, setNumberOfCycles] = useState<number>(0);
  const [numberApplicants, setNumberOfApplicants] = useState<number>(0);
  const [recentCycle, setRecentCycle] = useState<Recent | null>(null);
  useEffect(() => {
    const numberRes = async () => {
      const numberOfUsers: number = await numberUsers();
      const numberOfCycles: number = await numberCycle();
      const numberOfApplications: number = await numberOfApplicants();
      console.log("number of applicants",numberApplicants)
      const recentCycleNameTime = await recent();
      setNumberOfUsers(numberOfUsers);
      setNumberOfCycles(numberOfCycles);
      setNumberOfApplicants(numberOfApplications);
      setRecentCycle({
        name: recentCycleNameTime[0],
        ago: recentCycleNameTime[1],
      });
    };
    numberRes();
  }, []);

  return (
    <>
      <AdminHeader active="dashboard" />
      <div className="bg-gray-100 w-full text-black  min-w-full h-screen">
        <div className="w-[70%] h-20 mx-auto py-5 mb-2 ">
          <h1 className="font-bold text-xl py-3">Admin Command Center</h1>

          <div className="display my-3 flex justify-between flex-wrap">
            <div className="w-[30%] mr-2 p-2 rounded-md pb-2 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
              <p>Total Users</p>
              <p className="font-bold">{numberOfUsers}</p>
            </div>
            <div className="w-[30%] mr-2 p-2 rounded-md pb-2 bg-gradient-to-r from-green-400 via-green-500 to-green-700">
              <p>Total Applicants (G7)</p>
              <p className="font-bold">{numberApplicants}</p>
            </div>
            <div className="w-[30%] p-2 rounded-md pb-2 mr-2  bg-gradient-to-r from-orange-400 via-orange-400 to-orange-700">
              <p>Active Cycles</p>
              <p className="font-bold">{numberOfCycles}</p>
            </div>
          </div>
          <div className="flex  justify-between  flex-wrap">
            <div className="w-[30%] bg-white pb-8 mr-2  p-2 rounded-md">
              <h1 className="font-bold my-2">Manage Users</h1>
              <p className="text-sm my-2">
                Create, edit, and manage user accounts and roles.
              </p>
              <Link
                href="/admin/users"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-600"
              >
                <span>Go to users</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="w-[30%] bg-white mr-2  pb-8  p-2 rounded-md">
              <h1 className="font-bold my-2">Manage Cycles</h1>
              <p className="text-sm my-2">
                Create and manage application cycles.
              </p>
              <Link
                href="/admin/cycles"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-600"
              >
                <span>Go to cycles</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="w-[30%] bg-white mr-2 pb-8 p-2 rounded-md">
              <h1 className="font-bold my-2">Recent Admin Activity</h1>

              <div className="flex items-center gap-3">
                <CalendarDateRangeIcon
                  className="h-6 w-6 text-purple-400"
                  aria-hidden="true"
                />
                <p className="text-sm">
                  {recentCycle && recentCycle.name}
                  <span className="block text-gray-400 text-sm">
                    {" "}
                    {recentCycle && recentCycle.ago}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto bg-white p-2 px-5 pb-7 my-8 rounded-md w-[80%]">
            <h1 className="font-bold mb-2">View Analytics</h1>
            <p className="mb-2 text-gray-600">
              Explore application data and platform insights.
            </p>
            <Link
              href="/features/analytics"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-600"
            >
              <span>Go to Analytics</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AdminPage;
