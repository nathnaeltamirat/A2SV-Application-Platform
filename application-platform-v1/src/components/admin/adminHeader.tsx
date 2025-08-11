"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AdminHeaderActive } from "@/types/admin.type";

const AdminHeader = ({ active }: AdminHeaderActive) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const full_name = localStorage.getItem("full_name");

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-between space-x-50 ">
          <img src="/Images/a2sv.png" className="w-20" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              color="black"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {active && (
          <div className="flex items-center space-x-12">
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

        <div className="hidden md:flex items-center space-x-4">
          <Link className="text-sm text-indigo-600" href="/profile">
            Your Profile
          </Link>
          <Link className="text-sm text-black" href="">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 border-t">
          {active && (
            <div className="flex flex-col space-y-3 py-2">
              <Link
                href="/dashboard"
                className={
                  active == "dashboard"
                    ? "text-gray-600 hover:text-indigo-600 underline"
                    : "text-gray-600 hover:text-indigo-600 "
                }
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
              >
                Analytics
              </Link>
            </div>
          )}
          <div className="flex flex-col space-y-3 py-2 border-t">
            <Link
              className="text-sm text-indigo-600"
              href="Profile"
              onClick={() => setIsMenuOpen(false)}
            >
              Your Profile
            </Link>

            <Link
              href="/auth/login"
              className="text-gray-600 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
