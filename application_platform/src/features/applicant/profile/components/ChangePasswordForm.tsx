// components/ChangePasswordForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { useChangePasswordMutation } from '@/lib/redux/api/profileApi';

interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();

  const [changePassword, { isLoading, isSuccess, error }] =
    useChangePasswordMutation();

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
    await changePassword({
      old_password: data.currentPassword,
      new_password: data.newPassword,
    }).unwrap();
  } catch (err) {
    console.error('Change password failed:', err);
  }
  };

  return (
    <>
      <h3 className="text-md font-semibold mb-4">Change Password</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
          <input
            type="password"
            {...register('currentPassword', { required: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.currentPassword && <p className="text-red-500 text-sm mt-1">Current password is required.</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            {...register('newPassword', { required: true, minLength: 6 })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.newPassword && <p className="text-red-500 text-sm mt-1">New password must be at least 6 characters.</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <input
            type="password"
            {...register('confirmPassword', {
              validate: (value) => value === watch('newPassword') || 'Passwords do not match',
            })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="text-right mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            {isLoading ? 'Changing...' : 'Change Password'}
          </button>
        </div>

        {isSuccess && <p className="text-green-500 text-sm">Password changed!</p>}
        {error && <p className="text-red-500 text-sm">Error changing password</p>}
      </form>
    </>
  );
}
