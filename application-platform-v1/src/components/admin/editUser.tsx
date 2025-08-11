"use client";
import { getUserById } from "@/api/admin/getUserById";
import { updateUserAPI } from "@/api/admin/updateUserAPI";
import { USERID } from "@/types/admin.type";

import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const EditUser = ({ USER_ID }: USERID) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    const getName = async () => {
      console.log("USERID", USER_ID);
      const value = await getUserById(USER_ID);
      setFullName(value);
    };
    getName();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    await updateUserAPI(e, name, email, role, USER_ID);
    router.push("/admin/users");
  };

  return (
    <div
      className="min-h-screen pl-[250px] pr-[40px] pt-[50px] pb-[60px]"
      style={{ background: "rgb(243, 244, 246)" }}
    >
      <div className="text-black mb-8">
        <h1 className="text-3xl font-bold mb-1">Edit User: {fullName}</h1>
        <p className="text-gray-600">Update the user’s details and role.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-2xl p-8 max-w-5xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-black font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter full name"
              required
            />
          </div>
          <div>
            <label className="block text-black font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 text-black focus:ring-indigo-500"
              placeholder="Enter email address"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-black font-medium mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black "
              required
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="applicant">Applicant</option>
              <option value="reviewer">Reviewer</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div>
            <label className="block text-black font-medium mb-2">
              Password (optional)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2  text-black focus:ring-indigo-500"
              placeholder="Set new password (not required)"
              
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md  text-black hover:bg-indigo-700 transition"
            >
              Update User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
