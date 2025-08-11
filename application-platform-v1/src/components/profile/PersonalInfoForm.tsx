// components/PersonalInfoForm.tsx
"use client";

import { useUpdateProfileMutation } from "@/features/setting/settingSlice";
import { PersonalInfoFormData, PersonalInfoFormProps } from "@/types/profile.type";
import { useState } from "react";
import { useForm } from "react-hook-form";



export default function PersonalInfoForm({ profile }: PersonalInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    defaultValues: {
      full_name: profile.full_name,
      email: profile.email,
    
    },
  });
 const [preview, setPreview] = useState(profile.profile_picture || null);
  const [updateProfile, { isLoading, isSuccess, error }] =
    useUpdateProfileMutation();

  const onSubmit = async (data: PersonalInfoFormData) => {

        const formData = new FormData();
        formData.append("full_name", data.full_name);
        formData.append("email", data.email);

        if (data.profile_picture?.[0]) {
          formData.append("profile_picture", data.profile_picture[0]);
        }

    await updateProfile(formData);
  };

  return (
    <>
      <h3 className="text-md font-semibold mb-4">Personal Information</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            {...register("full_name", { required: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm mt-1">Required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            {...register("email", { required: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile picture
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("profile_picture")}
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setPreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
            className="block w-full text-sm text-gray-500"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-20 h-20 rounded-full object-cover"
            />
          )}
        </div>
        <div className="text-right mt-2">
          <button
            type="submit"
            className="bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
        {isSuccess && (
          <p className="text-green-500 text-sm">Profile updated!</p>
        )}
        {error && <p className="text-red-500 text-sm">Update failed.</p>}
      </form>
    </>
  );
}
