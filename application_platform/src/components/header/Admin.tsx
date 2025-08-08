// admin_user_form.html
// admin_user_form_edit.html
import React from "react";
import Link from "next/link";

const Admin = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
        <img src="Images/a2sv.png" className="w-20" />
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600"
            >
              Applications
            </Link>
            <Link href="/users" className="text-gray-600 hover:text-indigo-600">
              Users
            </Link>
            <Link
              href="/cycles"
              className=" text-gray-600 hover:text-indigo-600"
            >
              Cycles
            </Link>
            <Link
              href="/analytics"
              className="text-gray-600 hover:text-indigo-600"
            >
              Analytics
            </Link>
          </nav>
        </div>
        <div className="relative flex items-center space-x-4">
          <Link className="text-sm " href=" User">
            Admin User
          </Link>
          {/* <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg> */}
          <button className="text-gray-600 hover:text-indigo-600">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Admin;
