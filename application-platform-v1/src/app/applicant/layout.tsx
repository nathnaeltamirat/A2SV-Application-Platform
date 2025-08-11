"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "applicant") {
      router.replace("/unauthorized"); 
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) {
    return null; 
  }

  return <>{children}</>;
}
