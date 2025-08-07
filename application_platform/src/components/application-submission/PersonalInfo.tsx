"use client";

import { RootState } from "@/store/store";
import { personalInfo } from "@/types/applicant.types";
import { useForm } from "react-hook-form";
import React, {
  ChangeEvent,
  forwardRef,
  RefObject,
  useImperativeHandle,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_personal_info } from "@/features/applicant/applicantSlice";

export interface Props {
  onNext?: () => void;
  ref?: RefObject<HTMLFormElement>;
}

export interface PersonalInfoHandle {
  submitForm: () => Promise<boolean>;
}
const PersonalInfo = forwardRef<PersonalInfoHandle, Props>(
  ({ onNext }, ref) => {
    const dispatch = useDispatch();
    const personalInfoState = useSelector(
      (state: RootState) => state.applicant
    );
    const [values, setValues] = useState<personalInfo>({
      school: personalInfoState.school,
      degree: personalInfoState.degree,
      student_id: personalInfoState.student_id,
      country:personalInfoState.country
    });
    //   const [errorMessage,setErrorMessage] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    const {
      register,
      handleSubmit,
      trigger,
      formState: { errors },
    } = useForm<personalInfo>({
      mode: "onTouched",
      defaultValues: personalInfoState,
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
    const submitHandler = (data: personalInfo) => {
      dispatch(set_personal_info(data));
      if (onNext) {
        onNext();
      }
    };

    return (
      <div className="width-[740] p-3">
        <h2 className="text-md my-2 font-semibold ">Personal Information</h2>
        <form noValidate>
          <div className="flex flex-wrap  justify-between gap-10 " style={{color:'#374151'}}>
            <div>
              <label htmlFor="education" className="block">
                School/ University
              </label>
              <input
                type="text"
                value={values.school}
                className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
                {...register("school", {
                  required: {
                    value: true,
                    message: "School/University is required",
                  },
                })}
                id="education"
                onChange={(e) => onChange(e)}
              />
              <p className="text-red-600">{errors.school?.message}</p>
            </div>
            <div>
              <label htmlFor="degree_program block" className="block">
                Degree Program
              </label>
              <input
                type="text"
                value={values.degree}
                className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
                id="degree_program"
                {...register("degree", {
                  required: { value: true, message: "degree is required" },
                })}
                onChange={(e) => onChange(e)}
              />
              <p className="text-red-600">{errors.degree?.message}</p>
            </div>
            <div>
              <label htmlFor="country block" className="block">
                Country
              </label>
              <input
                type="text"
                value={values.country}
                className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
                id="country"
                {...register("country", {
                  required: { value: true, message: "country is required" },
                })}
                onChange={(e) => onChange(e)}
              />
              <p className="text-red-600">{errors.country?.message}</p>
            </div>
            <div>
              <label htmlFor="degree_program block" className="block">
                Student ID
              </label>
              <input
                type="text"
                value={values.student_id}
                className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
                id="degree_program"
                {...register("student_id", {
                  required: { value: true, message: "ID is required" },
                })}
                onChange={(e) => onChange(e)}
              />
              <p className="text-red-600">{errors.student_id?.message}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
);
PersonalInfo.displayName = "PersonalInfo";

export default PersonalInfo;
