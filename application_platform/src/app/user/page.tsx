"use client";

import Application from "@/components/user/application";
import NoApplication from "@/components/user/noApplication";
import { applicationSubmitted } from "@/utils/applicationSubmitted";

import Link from "next/link";
import { useEffect, useState } from "react";

const UserPage = () => {
    const [inProgress,setInProgress] = useState<boolean>(false)
    const [dateAndTime,setDateAndTime] = useState<string | null>('')
    useEffect(()=>{
        const getDate = async ()=>{
            const data = await applicationSubmitted();
            console.log(data)
            if(data){
                setInProgress(true);
            }
            setDateAndTime(data)

        }
        getDate()
    },[])
  return (
    <div className="bg-gray-100 w-full  min-w-full h-screen">
        {
         inProgress?<Application dateAndTime = {dateAndTime}/>
         :<NoApplication/>
        }
 
    </div>
  );
};

export default UserPage;
