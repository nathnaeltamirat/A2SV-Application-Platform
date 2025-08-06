// ProfilePage.tsx
'use client';

import { useGetProfileQuery } from '@/lib/redux/api/profileApi';
import ProfileHeader from './components/ProfileHeader';
import PersonalInfoForm from './components/PersonalInfoForm';
import ChangePasswordForm from './components/ChangePasswordForm';

export default function ProfilePage() {
  const { data: profile, isLoading, error } = useGetProfileQuery({});

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error || !profile) {
    console.error('Profile fetch error:', error);
    return <div className="text-center text-red-500">Failed to load profile. Please try again later.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <ProfileHeader fullName={profile.data.full_name} email={profile.data.email} />
      <div className="bg-white rounded-xl shadow p-6">
        <PersonalInfoForm profile={profile.data} />
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <ChangePasswordForm />
      </div>
    </div>
  );
}
