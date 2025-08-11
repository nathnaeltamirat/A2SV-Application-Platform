"use client";

import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Make sure you install Heroicons
import ApplicantsHeader from "@/components/applicant/applicantsHeader";

const SuccessMessage = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/dashboard");
  };
  const full_name = localStorage.getItem("full_name");

  return (
    <div className="mb-2 min-h-screen">
      <ApplicantsHeader applicant_name={full_name} />
      <div className="bg-white border-2 border-dashed mx-auto  mt-15 border-blue-300 rounded-md p-6 w-full max-w-md text-center shadow-md">
        <div className="flex justify-center mb-4">
          <CheckCircleIcon className="h-10 w-10 text-green-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Action Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Your Application has been Recorded.
        </p>
        <button
          onClick={handleLoginRedirect}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition-colors duration-200"
        >
          Go to Main Page
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
