//error.html
//forget.html
//reset_password
// confirmation.html
import Link from "next/link";
import React from "react";

const Confirmation = () => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-around items-center">
          <img src="Component 1.png" />

          <div className="relative flex items-center space-x-4">
            <Link className="text-sm text-gray-600" href="/home">
              Home
            </Link>

            <Link className="text-sm text-gray-600" href="/about">
              About
            </Link>
            <Link className="text-sm text-gray-600" href="/Success Stories">
              Success Stories
            </Link>
            <Link
              className="text-sm text-white bg-indigo-600 px-3.5 py-2 rounded"
              href="/Apply"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Confirmation;
