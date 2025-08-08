"use client";

import Link from "next/link";

const DashboardHeader = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-2">
      <div className="max-w-7xl mx-auto flex flex-row ">
        <div className="ml-3">
          <img src="/images/a2sv.png" alt="A2SV Logo" className="h-[20px] w-auto" />
        </div>

  
        <nav className="flex items-center gap-6">
          <Link
            href="#the-journey"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            The Journey
          </Link>
          <Link
            href="#about"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Testimonials
          </Link>
          <Link
            href="/apply"
            className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
