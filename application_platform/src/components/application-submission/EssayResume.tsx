'use client'

import { RootState } from "@/store/store";
import { essayResume } from "@/types/applicant.types";
import { useForm } from "react-hook-form";
import React, { ChangeEvent, forwardRef, RefObject, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_essay_resumes } from "@/features/applicant/applicantSlice";
import { setResumeFile } from "@/utils/fileStore";
import sendApplicantData from "@/utils/sendAppliants";

interface Props {
  onNext: () => void;
  ref?: RefObject<HTMLFormElement>;
}

export interface EssayHandle {
  submitForm: () => Promise<boolean>;
}

const EssayProfile = forwardRef<EssayHandle, Props>(({ onNext }, ref) => {
  const dispatch = useDispatch();
  const essayInfo = useSelector((state: RootState) => state.applicant);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm<essayResume>({
    mode: "onTouched",
    defaultValues: essayInfo,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
  };

  useImperativeHandle(ref, () => ({
    async submitForm() {
      if (isSubmitting) return false;
      setIsSubmitting(true);
      setErrorMessage(null);

      try {
        const isValid = await trigger();
        if (!isValid) return false;

        await handleSubmit(submitHandler)();
        return true;
      } finally {
        setIsSubmitting(false);
      }
    },
  }));

  const submitHandler = async (data: essayResume) => {
    try {
      dispatch(set_essay_resumes({
        essay_about_you: data.essay_about_you,
        essay_why_a2sv: data.essay_why_a2sv,
      }));

      const applicationData = {
        ...essayInfo,
        essay_about_you: data.essay_about_you,
        essay_why_a2sv: data.essay_why_a2sv,
      };

      const res = await sendApplicantData(applicationData);
      if (!res.success) {
        setErrorMessage(res.message || 'Submission failed. Please try again.');
        return;
      }

      setResumeFile(null); // Clear file after successful submission
      reset(); // Reset form
      if (onNext) onNext();
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="width-[740] p-3">
      <h2 className="text-md my-2 font-semibold">Essays & Resume</h2>
      {errorMessage && (
        <div className="text-red-600 mb-2">
          {errorMessage}
          {errorMessage.includes('already submitted') && (
            <p>
              <a href="/view-application" className="text-blue-500 underline">
                View your existing application
              </a>
            </p>
          )}
        </div>
      )}
      <form noValidate>
        <div className="flex flex-column flex-wrap gap-10">
          <div>
            <label htmlFor="essay_about_you" className="block">Tell us about yourself.</label>
            <textarea
              {...register('essay_about_you', {
                required: { value: true, message: 'Message required' },
              })}
              className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              id="essay_about_you"
              disabled={isSubmitting}
            />
            <p className="text-red-600">{errors.essay_about_you?.message}</p>
          </div>
          <div>
            <label htmlFor="essay_why_a2sv" className="block">Why do you want to join us?</label>
            <textarea
              {...register('essay_why_a2sv', {
                required: { value: true, message: 'This field is required' },
              })}
              className="border-b mb-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              id="essay_why_a2sv"
              disabled={isSubmitting}
            />
            <p className="text-red-600">{errors.essay_why_a2sv?.message}</p>
          </div>
        </div>
        <div>
          <input
            className="bg-blue-600 w-20 text-white rounded-md p-2"
            type="file"
            {...register('resume', {
              required: { value: true, message: 'Resume is required' },
            })}
            onChange={handleFileChange}
            id="resume"
            disabled={isSubmitting}
          />
          <p className="text-red-600">{errors.resume?.message}</p>
        </div>
      </form>
    </div>
  );
});

EssayProfile.displayName = 'EssayProfile';

export default EssayProfile;