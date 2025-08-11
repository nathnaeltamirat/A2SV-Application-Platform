export interface ProfileHeaderProps {
  fullName: string;
  email: string;
  profile_image:string;
}
export interface PersonalInfoFormData {
  full_name: string;
  email: string;
  profile_picture?: FileList ;
}

export interface PersonalInfoFormProps {
  profile: {
    full_name: string;
    email: string;
    profile_picture?:   string;
  };
}

export interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}