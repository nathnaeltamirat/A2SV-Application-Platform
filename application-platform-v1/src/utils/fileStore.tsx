let resumeFile: File | null = null;

export const setResumeFile = (file: File | null) => {
  resumeFile = file;
};

export const getResumeFile = (): File | null => {
  return resumeFile;
};