// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   status: 'Active' | 'Inactive'; // Still dummy
// }
export type UserStatus = "Active" | "Inactive";

export interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: UserStatus; // Dummy status
}

export interface UserTableProps {
  users: User[];
  onDelete: (userId: string) => Promise<void>;
  onEdit: (userId: string) => void; 
}
