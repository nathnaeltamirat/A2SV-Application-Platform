"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { resetPassword } from "@/app/api/auth/reset-password/resetPassword";
import Footer2 from "@/components/footer/Footer2";

export default function ResetPasswordUI() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token =searchParams ? searchParams.get("token"): null;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const payload = {
      token,
      new_password: newPassword,
    };
    await resetPassword(payload);
    router.push("/auth/login");
  };

  return (
    <div className="bg-gray-100 text-black">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white py-10 px-8 shadow-lg rounded-xl">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/Images/a2sv.png"
                  alt="A2SV logo"
                  width={120}
                  height={40}
                  className="w-30"
                />
              </div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Set a new password
              </h1>
              <p className="text-sm mt-1 text-gray-600">
                Please choose a strong, new password for your account.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <input
                  name="newPassword"
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>

              <div>
                <input
                  name="confirmNewPassword"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm New Password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
