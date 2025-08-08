import Link from "next/link";
import React from "react";

const Reviewers_details = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-around items-center">
        <Link href="/dashboard"> back to dashboard</Link>

        <div className="relative flex items-center space-x-4">
          <p className="text-sm text-gray-600">Reviewers name</p>

          <button className="text-gray-600 hover:text-indigo-600">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
export default Reviewers_details;
