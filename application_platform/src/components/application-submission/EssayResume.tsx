'use client'

import { RootState } from "@/store/store";
import { codingProfile, essayResume } from "@/types/applicant.types";
import { useForm } from "react-hook-form";
import React, { ChangeEvent, forwardRef, RefObject, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_coding_profile, set_essay_resumes } from "@/features/applicant/applicantSlice";
import sendApplicantData from "@/utils/sendAppliants";

interface Props{
    onNext:()=>void,
      ref?: RefObject<HTMLFormElement>;

}
export interface EssayHandle {
  submitForm: () => Promise<boolean>;
}
const EssayProfile = forwardRef<EssayHandle,Props>(({onNext},ref) => {

  const dispatch = useDispatch();
  const essayInfo = useSelector((state: RootState) => state.applicant);
  const [values, setValues] = useState<essayResume>({
    essay_about_you:essayInfo.essay_about_you,
    essay_why_a2sv:essayInfo.essay_why_a2sv,
    resume:essayInfo.resume
  });
//   const [errorMessage,setErrorMessage] = useState<string>('')
  const onChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    const {name,value} = e.target;
    setValues((prev)=>({
        ...prev,
        [name]:value
    }))
  }
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<essayResume>({
    mode: "onTouched",
    defaultValues: essayInfo,
  });

useImperativeHandle(ref, () => ({
  async submitForm() {
    const isValid = await trigger();  
    if (isValid) {
      handleSubmit(submitHandler)(); 
    }
    return isValid; 
  },
}));

  const submitHandler = async (data: essayResume) => {
        dispatch(set_essay_resumes(data));
        const res = await sendApplicantData(essayInfo);
        alert(res)
        console.log(res)
        if(onNext) onNext();
 
    


  };
//   const errorHandler = (errors: FieldErrors<personalInfo>) => {
//     setErrorMessage(errors.)
//   };
  return (
    <div className="width-[740] p-3">
      <h2 className='text-md my-2 font-semibold '>Essays & Resume</h2>
      <form noValidate>
        <div className="flex  j
    flex-column flex-wrap gap-10">

          <div>
            <label htmlFor="education" className="block ">Tell us about your self.</label>
            <textarea
          
              value={values.essay_about_you}
              className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              {...register("essay_about_you", {
                required: {
                  value: true,
                  message: "Message required",
                },
              })}
              id="education"
               onChange = {(e)=>onChange(e)}
            />
            <p className="text-red-600">{errors.essay_about_you?.message}</p>
          </div>
          <div>
            <label htmlFor="degree_program block" className="block">Why do you want to Join us?</label>
            <textarea
          
              value={values.essay_why_a2sv}
              className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              id="degree_program"
              {...register("essay_why_a2sv", {
                required: { value: true, message: "leetcode is required" },
              })}
              onChange = {(e)=>onChange(e)}
            />
            <p className="text-red-600">{errors.essay_why_a2sv?.message}</p>
          </div>
        </div>
        <div>
            <input type="file" {...register("resume",{
                required:{value:true,message:"required"}
            })} id="" />
        </div>

      </form>
    </div>
  );
});
EssayProfile.displayName='EssayProfile'

export default EssayProfile;
