export interface ApplicationItem  {
  id: string;
  status: string;
  applicant_name: string;
  assigned_reviewer_name: string;
};

export interface ApplicationResponse  {
  applications: ApplicationItem[];
  total_count: number;
  page: number;
  limit: number;
  message: string;
};
