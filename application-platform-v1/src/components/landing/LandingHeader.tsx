"use client";
import Link from "next/link";
import { useState } from "react";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="flex justify-between items-center p-3 md:justify-evenly"
        style={{ background: "#d7d7d7" }}
      >
        <img src="/Images/a2sv.png" className="w-20" />

        <div className="hidden md:flex flex-wrap gap-8">
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-blue-600 transition"
          >
            The Journey
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-blue-600 transition"
          >
            Testimonials
          </Link>
          <Link
            href="/dashboard"
            className="text-white font-semibold p-1 text-sm px-2 rounded-md hover:bg-blue-700 transition"
            style={{ background: "#4f46e5" }}
          >
            Apply Now
          </Link>
        </div>

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
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-200 p-4 flex flex-col gap-4">
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            The Journey
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/dashboard"
            className="text-white font-semibold p-1 text-sm px-2 rounded-md hover:bg-blue-700 transition text-center w-fit"
            style={{ background: "#4f46e5" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </>
  );
};

export default LandingHeader;
