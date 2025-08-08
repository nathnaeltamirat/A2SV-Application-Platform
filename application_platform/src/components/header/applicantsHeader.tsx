// applicant_dashboard
// applicant_ dashboard_welcome
import React from "react";
import Link from "next/link";
import { applicantName } from "@/types/applicantName";

const ApplicantsHeader = ({applicant_name}:applicantName) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/Images/a2sv.png" className="w-20" />
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600"
            >
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="relative flex items-center space-x-4">
          <Link className="text-sm  text-indigo-600" href="profile">
            Your Profile
          </Link>
          <Link className="text-sm " href="admin/Admin User">
            {applicant_name}
          </Link>

          <Link href='/auth/login' className="text-gray-600 hover:text-indigo-600">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ApplicantsHeader;
