"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";

import { useRouter } from "next/navigation";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "@/features/user/userSlice";
import CreateUserButton from "@/components/admin/userManagment/CreateUserButton";
import UserSearch from "@/components/admin/userManagment/UserSearch";
import UserTable from "@/components/admin/userManagment/UserTable";
import Pagination from "@/components/admin/userManagment/Pagination";
import { User, UserStatus } from "@/types/admin.type";
import Footer2 from "@/components/footer/Footer2";
import AdminHeader from "@/components/admin/adminHeader";

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
    router.push(`/admin/users/${userId}`);
  }, []);

  useEffect(() => {
    if (data?.users) {
      const formattedUsers: User[] = data.users.map((user) => ({
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        profile_picture: user.profile_picture,
        role: user.role.charAt(0).toUpperCase() + user.role.slice(1),
        isActive: (Math.random() > 0.5 ? "Active" : "Inactive") as UserStatus,
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
        ? user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRole]);

  return (
    <div className="px-4 bg-gray-100 text-black py-6 max-w-7xl mx-auto w-[80%]">
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

      <div className="mb-6">
        <UserSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
      </div>

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
