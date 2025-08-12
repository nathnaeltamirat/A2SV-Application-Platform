"use client";
import Link from "next/link";
import React, { useState } from "react";

const ReviwerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const full_name =
    typeof window !== "undefined" ? localStorage.getItem("full_name") : "";

  return (
    <nav className="bg-white shadow-sm border-b text-black border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src="/Images/a2sv.png" className="w-20" />
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color="black"
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

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="#"
              className="text-gray-900 inline-flex items-center px-1 text-sm font-medium border-b-2 border-[#4F46E5]"
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 text-sm font-medium"
            >
              Your Profile
            </Link>
            <span className="text-gray-500 inline-flex items-center px-1 text-sm font-medium">
              {full_name}
            </span>
            <Link
              href="/auth/login"
              className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 text-sm font-medium"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="#"
              className="text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-[#4F46E5] text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="text-gray-500 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Your Profile
            </Link>

            <Link
              href="/auth/login"
              className="text-gray-500 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ReviwerHeader;
