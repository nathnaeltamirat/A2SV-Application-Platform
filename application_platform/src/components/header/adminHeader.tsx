//admin_cycles.html
// admin_dashboard.html
// admin_users.html
// analytics_dashboard.html
import React from "react";
import Link from "next/link";
const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/Images/a2sv.png" className="w-20" />
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600 underline"
            >
              Dashboard
            </Link>
            <Link
              href="/adminFunctionality/createNewUser"
              className="text-gray-600 hover:text-indigo-600"
            >
              Users
            </Link>
            <Link
              href="/adminFunctionality/createNewCycle"
              className=" text-gray-600 hover:text-indigo-600"
            >
              Cycles
            </Link>
            <Link
              href="/features/analytics"
              className="text-gray-600 hover:text-indigo-600"
            >
              Analytics
            </Link>
                  <Link
              href="/adminFunctionality/editUser"
              className="text-gray-600 hover:text-indigo-600"
            >
              Edit User
            </Link>
                            <Link
              href="/adminFunctionality/createNewUser"
              className="text-gray-600 hover:text-indigo-600"
            >
              Add User
            </Link>
          </nav>
        </div>
        <div className="relative flex items-center space-x-4">
          <Link className="text-sm  text-indigo-600" href="admin/Profile">
            Your Profile
          </Link>
          <Link className="text-sm " href="admin/Admin User">
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
          <Link href='/auth/login' className="text-gray-600 hover:text-indigo-600">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
