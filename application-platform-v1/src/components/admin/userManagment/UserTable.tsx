import React, { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import { User } from "@/types/admin.type";

interface UserTableProps {
  users: User[];
  onDelete: (userId: string) => Promise<void>;
  onEdit: (userId: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete, onEdit }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = (userId: string) => {
    setUserToDelete(userId);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!userToDelete) return;

    try {
      setIsDeleting(true);
      await onDelete(userToDelete);
    } finally {
      setIsDeleting(false);
      setIsDialogOpen(false);
      setUserToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
    setUserToDelete(null);
  };
  

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table Header - Hidden on mobile, shown on sm+ */}
        <div className="hidden sm:grid sm:grid-cols-12 bg-gray-50 px-4 py-3 font-medium text-gray-700 text-xs border-b border-gray-200">
          <div className="sm:col-span-4">NAME</div>
          <div className="sm:col-span-3">ROLE</div>
          <div className="sm:col-span-3">STATUS</div>
          <div className="sm:col-span-2 text-right">ACTIONS</div>
        </div>

        {/* Table Rows - Stacked on mobile, grid on desktop */}
        {users.map((user) => (
          <div
            key={user.id}
            className="border-b border-gray-100 last:border-b-0"
          >

    
            <div className="sm:hidden p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src={"/Images/person3.jpg"} 
                  alt={`${user.full_name} avatar`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{user.full_name}</h3>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <span className="text-xs text-gray-500">Role</span>
                  <p className="text-sm">{user.role}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Status</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      user.isActive === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.isActive}
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  onClick={() => onEdit(user.id)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium px-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(user.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium px-2"
                  disabled={isDeleting}
                >
                  {isDeleting && userToDelete === user.id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </div>

            {/* Desktop View - Grid Layout */}
            <div className="hidden sm:grid sm:grid-cols-12 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition">
              <div className="col-span-4 flex items-center space-x-3">
                <img
                  src={"/Images/person3.jpg"}
                  alt={`${user.full_name} avatar`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{user.full_name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
              </div>

              <div className="col-span-3 flex items-center text-sm">
                {user.role}
              </div>

              <div className="col-span-3 flex items-center">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    user.isActive === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {user.isActive}
                </span>
              </div>

              <div className="col-span-2 flex items-center justify-end space-x-2">
                <button
                  onClick={() => onEdit(user.id)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(user.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                  disabled={isDeleting}
                >
                  {isDeleting && userToDelete === user.id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this user? This action cannot be undone."
        isProcessing={isDeleting}
      />
    </>
  );
};

export default UserTable;
