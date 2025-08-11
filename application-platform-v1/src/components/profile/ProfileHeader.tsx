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
      {/* Cover Image */}
      <div className="h-40 w-full">
        <img
          src={profile_image}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile section: Avatar + Name/Email (lifted up) */}
      <div className="flex items-center gap-5 px-6 -mt-8">
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={profile_image}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

        {/* Name & Email beside avatar */}
        <div className="pt-2">
          <h2 className="text-lg font-bold text-gray-900">{fullName}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Bottom spacer to separate from next section */}
      <div className="mt-4 border-t border-gray-100" />
    </div>
  );
};

export default ProfileHeader;
