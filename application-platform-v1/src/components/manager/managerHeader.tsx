"use client";
import React, { useState } from "react";
import Link from "next/link";

const ManagersHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const full_name =
    typeof window !== "undefined" ? localStorage.getItem("full_name") : "";

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center md:justify-around">
        <img src="/Images/a2sv.png" className="w-20" />

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            color="black"
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

        <div className="hidden md:flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600"
            >
              Dashboard
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link className="text-sm text-indigo-600" href="/profile">
            Your Profile
          </Link>
          <Link className="text-sm text-black-600 " href="admin/Admin User">
            {full_name}
          </Link>
          <button className="text-gray-600 hover:text-indigo-600">
            <Link href="/auth/login">Logout</Link>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 border-t">
          <nav className="flex flex-col space-y-3 py-2">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </nav>
          <div className="flex flex-col space-y-3 py-2 border-t">
            <Link
              className="text-sm text-indigo-600"
              href="admin/Profile"
              onClick={() => setIsMenuOpen(false)}
            >
              Your Profile
            </Link>
            <Link
              className="text-sm"
              href="admin/Admin User"
              onClick={() => setIsMenuOpen(false)}
            >
              {full_name}
            </Link>
            <button
              className="text-gray-600 hover:text-indigo-600 text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/auth/login">Logout</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default ManagersHeader;
