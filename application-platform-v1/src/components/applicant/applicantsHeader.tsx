"use client";

import React, { useState } from "react";
import Link from "next/link";
import { applicantName } from "@/types/applicant.type";

const ApplicantsHeader = ({ applicant_name }: applicantName) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Images/a2sv.png" className="w-20" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-6 space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Dashboard
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            color="black"
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

        {/* Desktop User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
            href="profile"
          >
            Your Profile
          </Link>
          <Link
            className="text-sm text-gray-600 hover:text-indigo-600 transition"
            href="admin/Admin User"
          >
            {applicant_name}
          </Link>
          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3 border-t flex flex-col space-y-3">
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-indigo-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            className="text-gray-600 hover:text-indigo-600 transition"
            href="profile"
            onClick={() => setIsMenuOpen(false)}
          >
            Your Profile
          </Link>
          <Link
            className="text-gray-600 hover:text-indigo-600 transition"
            href="admin/Admin User"
            onClick={() => setIsMenuOpen(false)}
          >
            {applicant_name}
          </Link>
          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-indigo-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Logout
          </Link>
        </div>
      )}
    </header>
  );
};

export default ApplicantsHeader;
