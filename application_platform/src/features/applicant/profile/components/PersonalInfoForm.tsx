// components/PersonalInfoForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { useUpdateProfileMutation } from '@/lib/redux/api/profileApi';

interface PersonalInfoFormData {
  full_name: string;
  email: string;
}

interface PersonalInfoFormProps {
  profile: {
    full_name: string;
    email: string;
  };
}

export default function PersonalInfoForm({ profile }: PersonalInfoFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      full_name: profile.full_name,
      email: profile.email,
    },
  });

  const [updateProfile, { isLoading, isSuccess, error }] = useUpdateProfileMutation();

  const onSubmit = async (data: PersonalInfoFormData) => {
    await updateProfile(data);
  };

  return (
    <>
      <h3 className="text-md font-semibold mb-4">Personal Information</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input
            {...register('full_name', { required: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.full_name && <p className="text-red-500 text-sm mt-1">Required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input
            {...register('email', { required: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">Required</p>}
        </div>

        <div className="text-right mt-2">
          <button
            type="submit"
            className="bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
        {isSuccess && <p className="text-green-500 text-sm">Profile updated!</p>}
        {error && <p className="text-red-500 text-sm">Update failed.</p>}
      </form>
    </>
  );
}
