"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Auth } from "@/types/auth";

const AuthHeader = ({ login }: Auth) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center md:justify-around">
        <img src="/Images/a2sv.png" className="w-20" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-indigo-600 transition"
          >
            The Journey
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-indigo-600 transition"
          >
            Testimonials
          </Link>
          <Link
            href={login ? "/auth/register" : "/auth/login"}
            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
          >
            {login ? "Create Account" : "Log In"}
          </Link>
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 flex flex-col space-y-3 border-t">
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-indigo-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            The Journey
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-indigo-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            style={{ color: "#374151" }}
            className="text-sm hover:text-indigo-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href={login ? "/auth/register" : "/auth/login"}
            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {login ? "Create Account" : "Log In"}
          </Link>
        </div>
      )}
    </header>
  );
};

export default AuthHeader;
