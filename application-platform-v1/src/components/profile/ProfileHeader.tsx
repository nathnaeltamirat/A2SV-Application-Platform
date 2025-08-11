"use client";
import { ProfileHeaderProps } from "@/types/profile.type";
import React from "react";

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  fullName,
  email,
  profile_image,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cover Image - responsive height */}
      <div className="h-32 sm:h-40 w-full">
        <img
          src={profile_image}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile section - responsive layout */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 px-4 sm:px-6 -mt-8">
        {/* Avatar - responsive size */}
        <div className="shrink-0">
          <img
            src={profile_image}
            alt="Avatar"
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

        {/* Name & Email - responsive text and alignment */}
        <div className="text-center sm:text-left pt-0 sm:pt-2">
          <h2 className="text-base sm:text-lg font-bold text-gray-900">
            {fullName}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="mt-3 sm:mt-4 border-t border-gray-100" />
    </div>
  );
};

export default ProfileHeader;
