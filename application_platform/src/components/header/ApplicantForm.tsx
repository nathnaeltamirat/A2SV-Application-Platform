// applicant_form_wizard.html
import React from "react";
import Link from "next/link";
import { applicantName } from "@/types/applicantName";

const ApplicantForm = ({applicant_name}:applicantName) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
  <img src="/Images/a2sv.png" className="w-20" />

        <div className="relative flex items-center space-x-4">
          <p className="text-sm text-gray-600">{applicant_name}</p>

          <button className="text-gray-600 hover:text-indigo-600">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default ApplicantForm;
