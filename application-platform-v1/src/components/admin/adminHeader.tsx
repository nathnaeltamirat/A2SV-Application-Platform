'use client'
import React from "react";
import Link from "next/link";
import { AdminHeaderActive } from "@/types/admin.type";
const AdminHeader = ({ active }: AdminHeaderActive) => {
  const full_name = localStorage.getItem('full_name')
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/Images/a2sv.png" className="w-20" />
        {active && (
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/dashboard"
                className={
                  active == "dashboard"
                    ? "text-gray-600 hover:text-indigo-600 underline"
                    : "text-gray-600 hover:text-indigo-600 "
                }
              >
                Dashboard
              </Link>
              <Link
                href="/admin/users"
                className={
                  active == "users"
                    ? "text-gray-600 hover:text-indigo-600 underline"
                    : "text-gray-600 hover:text-indigo-600 "
                }
              >
                Users
              </Link>
              <Link
                href="/admin/cycles"
                className={
                  active == "cycles"
                    ? "text-gray-600 hover:text-indigo-600 underline"
                    : "text-gray-600 hover:text-indigo-600 "
                }
              >
                Cycles
              </Link>
              <Link
                href="/admin/analytics"
                className={
                  active == "analytics"
                    ? "text-gray-600 hover:text-indigo-600 underline"
                    : "text-gray-600 hover:text-indigo-600 "
                }
              >
                Analytics
              </Link>
            </nav>
          </div>
        )}

        <div className="relative flex items-center space-x-4">
          <Link className="text-sm  text-indigo-600" href="Profile">
            Your Profile
          </Link>
          <Link className="text-sm " href="">
          {full_name}
          </Link>

          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-indigo-600"
          >
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
