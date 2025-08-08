'use client';

import { useState } from 'react';

export default function ResetPasswordUI() {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white py-10 px-8 shadow-lg rounded-xl">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <img
                src="/A2SV.png"
                alt="A2SV logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Set a new password</h1>
            <p className="text-sm mt-1 text-gray-600">
              Please choose a strong, new password for your account.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <input
                name="newPassword"
                type="password"
                
               
                placeholder="New Password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>

            <div>
              <input
                name="confirmNewPassword"
                type="password"
                
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
  );
}
