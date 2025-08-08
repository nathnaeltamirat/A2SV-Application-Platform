
// app/page.tsx
'use client';

import ProfilePage from '../features/applicant/profile/page';

'use client';


import  UserManagement from "@/features/admin/page";
export default function Home() {

 
  return ( <div> 
    <UserManagement />
    <ProfilePage />
    </div>
  );

}
