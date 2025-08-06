import {
  applicationState,
  codingProfile,
  essayResume,
  personalInfo,

} from "@/types/applicant.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: applicationState = {
  resume: "", //file
  student_id:"",
  school: "",
  degree: "",
  leetcode_handle: "",
  codeforces_handle: "",
  essay_why_a2sv: "",
  essay_about_you: "",
};

const applicantSlice = createSlice({
  name: "applicant",
  initialState,
  reducers: {
    set_coding_profile: (state, action: PayloadAction<codingProfile>) => {
      const { leetcode_handle, codeforces_handle } = action.payload;
      state.leetcode_handle = leetcode_handle;
      state.codeforces_handle = codeforces_handle;
    },
    set_personal_info: (state, action: PayloadAction<personalInfo>) => {
      const { degree, school,student_id } = action.payload;
      state.degree = degree;
      state.school = school;
      state.student_id=student_id;
    },
    set_essay_resumes: (state, action: PayloadAction<essayResume>) => {
      const { essay_why_a2sv, resume, essay_about_you,  } = action.payload;
      state.essay_about_you = essay_about_you;
      state.essay_why_a2sv = essay_why_a2sv;
      state.resume = resume;
    },
  },
});

export default applicantSlice.reducer;
export const { set_coding_profile, set_essay_resumes, set_personal_info } =
  applicantSlice.actions;
