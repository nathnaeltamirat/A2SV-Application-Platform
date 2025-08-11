export interface Recent {
  name: string;
  ago: string;
}
export interface AdminHeaderActive {
  active: "dashboard" | "users" | "cycles" | "analytics" | null;
}

export type UserStatus = "Active" | "Inactive";

export interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
export interface User {
  id: string;
  full_name: string;
  email: string;
  role: string;
  isActive: UserStatus;
  profile_picture: string;
}

export interface UserTableProps {
  users: User[];
  onDelete: (userId: string) => Promise<void>;
  onEdit: (userId: string) => void;
}
export interface USERID {
  USER_ID: string;
}
export interface USERIDPARAMS {
  params: Promise<{ id: string }>;
}
export interface Cycle {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
}
export type CycleData = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
  description: string | null;
};

export type GetCycleResponse = {
  success: boolean;
  data: CycleData;
  message: string;
};