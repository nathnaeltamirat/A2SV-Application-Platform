'use client'

import { RootState } from "@/store/store";

import { useForm } from "react-hook-form";
import React, { ChangeEvent, forwardRef, RefObject, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_coding_profile } from "@/features/applicant/applicantSlice";
import { codingProfile } from "@/types/applicant.type";

interface Props{
    onNext:()=>void,
      ref?: RefObject<HTMLFormElement>;

}
export interface CodingProfileHandle {
  submitForm: () => Promise<boolean>;
}
const CodingProfile =forwardRef<CodingProfileHandle,Props>(({onNext},ref) => {

  const dispatch = useDispatch();
  const codingInfo = useSelector((state: RootState) => state.applicant);
  const [values, setValues] = useState<codingProfile>({
    codeforces_handle:codingInfo.codeforces_handle,
    leetcode_handle:codingInfo.leetcode_handle
  });
//   const [errorMessage,setErrorMessage] = useState<string>('')
  const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
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
  } = useForm<codingProfile>({
    mode: "onTouched",
    defaultValues: codingInfo,
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

  const submitHandler = (data: codingProfile) => {

        dispatch(set_coding_profile(data));
        if(onNext) onNext();
 
    


  };
//   const errorHandler = (errors: FieldErrors<personalInfo>) => {
//     setErrorMessage(errors.)
//   };
  return (
    <div className="width-[740] p-3">
      <h2 className='text-md my-2 font-semibold '>Coding Profiles</h2>
      <form noValidate>
        <div className="flex  justify-between flex-wrap gap-10" style={{color:'#374151'}}>

          <div>
            <label htmlFor="education" className="block ">Codeforces</label>
            <input
              type="text"
              value={values.codeforces_handle}
              className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              {...register("codeforces_handle", {
                required: {
                  value: true,
                  message: "Codeforce handle is required",
                },
              })}
              id="education"
               onChange = {(e)=>onChange(e)}
            />
            <p className="text-red-600">{errors.codeforces_handle?.message}</p>
          </div>
          <div>
            <label htmlFor="degree_program block" className="block">Leetcode</label>
            <input
              type="text"
              value={values.leetcode_handle}
              className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              id="degree_program"
              {...register("leetcode_handle", {
                required: { value: true, message: "leetcode is required" },
              })}
              onChange = {(e)=>onChange(e)}
            />
            <p className="text-red-600">{errors.leetcode_handle?.message}</p>
          </div>
        </div>

      </form>
    </div>
  );
});
CodingProfile.displayName='CodingProfile'

export default CodingProfile;
