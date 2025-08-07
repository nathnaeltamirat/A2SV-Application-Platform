"use client";

import Application from "@/components/user/application";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const UserPage = () => {
  //   const [name, setName] = useState<string>("");
  //   const [numberOfCycles, setNumberOfCycles] = useState<number>(0);
  //   const [numberApplicants, setNumberOfApplicants] = useState<number>(0);
  //   const [recentCycle, setRecentCycle] = useState<Recent | null>(null);
  //   useEffect(() => {
  //     const numberRes = async () => {
  //       const numberOfUsers: number = await numberUsers();
  //       const numberOfCycles: number = await numberCycle();
  //       const numberOfApplications: number = await numberOfApplicants();
  //       const recentCycleNameTime = await recent();
  //       setNumberOfUsers(numberOfUsers);
  //       setNumberOfCycles(numberOfCycles);
  //       setNumberOfApplicants(numberOfApplications);
  //       setRecentCycle({
  //         name: recentCycleNameTime[0],
  //         ago: recentCycleNameTime[1],
  //       });
  //     };
  //     numberRes();
  //   }, []);

  return (
    <div className="bg-gray-100 w-full  min-w-full h-screen">
        <Application/>
    </div>
  );
};

export default UserPage;
