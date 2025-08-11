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
import Footer from "@/components/footer/Footer";

const AdminPage = () => {
  const [numberOfUsers, setNumberOfUsers] = useState<number>(0);
  const [numberOfCycles, setNumberOfCycles] = useState<number>(0);
  const [numberApplicants, setNumberOfApplicants] = useState<number>(0);
  const [recentCycle, setRecentCycle] = useState<Recent | null>(null);

  useEffect(() => {
    const numberRes = async () => {
      const usersCount = await numberUsers();
      const cyclesCount = await numberCycle();
      const applicantsCount = await numberOfApplicants();
      const recentCycleNameTime = await recent();
      setNumberOfUsers(usersCount);
      setNumberOfCycles(cyclesCount);
      setNumberOfApplicants(applicantsCount);
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
      <div className="bg-gray-100 w-full text-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <h1 className="font-bold text-3xl py-3">Admin Command Center</h1>

          {/* Top stats */}
          <div className="my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className="flex justify-between items-center p-3 text-white rounded-md"
              style={{ background: "#01005e" }}
            >
              <p className="text-lg">Total Users</p>
              <p className="font-bold text-2xl">{numberOfUsers}</p>
            </div>
            <div
              className="flex justify-between items-center p-3 text-white rounded-md"
              style={{ background: "#22267b" }}
            >
              <p className="text-lg">Total Applicants</p>
              <p className="font-bold text-2xl">{numberApplicants}</p>
            </div>
            <div
              className="flex justify-between items-center p-3 text-white rounded-md"
              style={{ background: "#28518a" }}
            >
              <p className="text-lg">Active Cycles</p>
              <p className="font-bold text-2xl">{numberOfCycles}</p>
            </div>
          </div>

          {/* Action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-md">
              <h1 className="font-bold my-2">Manage Users</h1>
              <p className="text-sm my-2">
                Create, edit, and manage user accounts and roles.
              </p>
              <Link
                href="/admin/users"
                style={{ color: "#22267b" }}
                className="flex items-center gap-2 text-sm"
              >
                Go to users <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-4 rounded-md">
              <h1 className="font-bold my-2">Manage Cycles</h1>
              <p className="text-sm my-2">
                Create and manage application cycles.
              </p>
              <Link
                href="/admin/cycles"
                style={{ color: "#22267b" }}
                className="flex items-center gap-2 text-sm"
              >
                Go to cycles <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-4 rounded-md">
              <h1 className="font-bold my-2">Recent Admin Activity</h1>
              <div className="flex items-center gap-3">
                <CalendarDateRangeIcon
                  className="h-6 w-6 text-purple-400"
                  aria-hidden="true"
                />
                <p className="text-sm">
                  {recentCycle?.name}
                  <span className="block text-gray-400">
                    {recentCycle?.ago}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Analytics card */}
          <div className="bg-white p-4 mt-8 rounded-md">
            <h1 className="font-bold mb-2 text-xl">View Analytics</h1>
            <p className="mb-2 text-gray-600">
              Explore application data and platform insights.
            </p>
            <Link
              href="/features/analytics"
              style={{ color: "#22267b" }}
              className="flex items-center gap-2 text-sm"
            >
              Go to Analytics <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
