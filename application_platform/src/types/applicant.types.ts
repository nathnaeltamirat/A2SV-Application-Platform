export interface applicationState {
  resume: string | null | File;
  school: string;
  degree: string;
  leetcode_handle: string;
  codeforces_handle: string;
  essay_why_a2sv: string;
  essay_about_you: string;
  student_id:string;
}

export interface codingProfile {
  leetcode_handle: string;
  codeforces_handle: string;
}

export interface personalInfo {
  school: string;
  degree: string;
  student_id:string;
}

export interface essayResume {
  essay_why_a2sv: string;
  essay_about_you: string;
  resume:string | File |null;
}
