"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";

import UserSearch from "@/components/userManagment/UserSearch";
import CreateUserButton from "@/components/userManagment/CreateUserButton";
import Pagination from "@/components/userManagment/Pagination";
import { User, UserStatus } from "../../../types/types";
import { useGetUsersQuery, useDeleteUserMutation } from "../../../features/users/userApi";
import UserTable from "@/components/userManagment/UserTable";
import { useRouter } from "next/navigation";

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
const router = useRouter();
  // API hooks
  const { data, error, isLoading, refetch } = useGetUsersQuery({
    page: 1,
    limit: 100,
  });
  const [deleteUser] = useDeleteUserMutation();

  const [allUsers, setAllUsers] = useState<User[]>([]);

  // Handle user deletion
  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser({ user_id: userId }).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleEditUser = useCallback((userId: string) => {
    console.log(`Edit user with ID: ${userId}`);
    router.push(`adminFunctionality/user/${userId}`)
  }, []);

  // Map backend data to frontend structure
  useEffect(() => {
    if (data?.users) {
      const formattedUsers: User[] = data.users.map((user) => ({
        id: user.id,
        name: user.full_name,
        email: user.email,
        role: user.role.charAt(0).toUpperCase() + user.role.slice(1),
        status: (Math.random() > 0.5 ? "Active" : "Inactive") as UserStatus,
      }));
      setAllUsers(formattedUsers);
    } else {
      setAllUsers([]);
    }
  }, [data]);

  // Filter and paginate users
  const filteredUsers = useMemo(() => {
    return allUsers.filter((user) => {
      const matchesSearch = searchTerm
        ? user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesRole =
        selectedRole !== "All Roles"
          ? user.role.toLowerCase() === selectedRole.toLowerCase()
          : true;

      return matchesSearch && matchesRole;
    });
  }, [allUsers, searchTerm, selectedRole]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage;
    return filteredUsers.slice(startIndex, startIndex + usersPerPage);
  }, [filteredUsers, currentPage]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRole]);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header - Stacked on mobile, row on desktop */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            User Management
          </h1>
          <p className="text-sm text-gray-600 sm:text-base">
            Administer platform users
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <CreateUserButton />
        </div>
      </div>

      {/* Search & Filters - Full width on mobile */}
      <div className="mb-6">
        <UserSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
      </div>

      {/* Table & Pagination */}
      {isLoading ? (
        <div className="flex justify-center py-8">
          <p className="text-gray-600">Loading users...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          <p>Error loading users. Please try again.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto mb-6">
            <UserTable
              users={paginatedUsers}
              onDelete={handleDeleteUser}
              onEdit={handleEditUser}
            />
          </div>
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={filteredUsers.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default UserManagement;
