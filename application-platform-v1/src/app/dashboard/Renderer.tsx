"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Renderer = () => {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    switch (role) {
      case "applicant":
        router.push("/applicant");
        break;
      case "admin":
        router.push("/admin");
        break;
      case "manager":
        router.push("/manager");
        break;
      case "reviewer":
        router.push("/reviewer");
        break;
      default:
        router.push("/auth/login"); 
    }
  }, [router]);

  return null; 
};

export default Renderer;
