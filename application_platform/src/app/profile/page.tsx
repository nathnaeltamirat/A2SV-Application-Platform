// ProfilePage.tsx
"use client";

import AdminHeader from "@/components/header/adminHeader";
import ChangePasswordForm from "@/components/profile/ChangePasswordForm";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { useGetProfileQuery } from "@/features/setting/profileApi";



export default function ProfilePage() {
  const { data: profile, isLoading, error } = useGetProfileQuery({});

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error || !profile) {
    console.error("Profile fetch error:", error);
    return (
      <div className="text-center text-red-500">
        Failed to load profile. Please try again later.
      </div>
    );
  }

  return (
    <>
      <AdminHeader />
      <div className="w-full h-280 bg-gray-50">
        <div className="max-w-3xl mx-auto p-4 space-y-6">
          <ProfileHeader
            fullName={profile.data.full_name}
            email={profile.data.email}
            profile_image={profile.data.profile_picture_url}
          />
          <div className="bg-white rounded-xl shadow p-6">
            <PersonalInfoForm profile={profile.data} />
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </>
  );
}
