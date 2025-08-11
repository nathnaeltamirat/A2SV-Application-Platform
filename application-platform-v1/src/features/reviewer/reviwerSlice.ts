
export type Application = {
  id: string;
  applicantName: string;
  submissionDate: string;
  status: 'Under Review' | 'Complete' | 'New';
  school: string;
  degreeProgram: string;
  codingProfiles: {
    github?: string;
    linkedin?: string;
    codeforces?: string;
  };
  essays: {
    essay1: string;
    essay2: string;
  };
  resumeLink: string;
  activityCheckNotes?: string;
  resumeScore?: number;
  essayScore?: number;
};

// Dummy data for applications
export const applications: Application[] = [
  {
    id: 'app-1',
    applicantName: 'Abel Tadesse',
    submissionDate: 'Oct 23, 2023',
    status: 'Under Review',
    school: 'Addis Ababa Institute of Technology',
    degreeProgram: 'Software Engineering',
    codingProfiles: {
      github: 'https://github.com/abeltadesse',
      linkedin: 'https://linkedin.com/in/abeltadesse',
      codeforces: 'https://codeforces.com/profile/abeltadesse',
    },
    essays: {
      essay1: 'Tell us about your self: I am passionate about solving complex problems...',
      essay2: 'Why do you want to join us?: I want to join because this is a place where I can learn to solve my problems and grow as a software engineer...',
    },
    resumeLink: 'https://example.com/resumes/abel_tadesse_resume.pdf',
    activityCheckNotes: 'Reviewed initial application, need to check coding profiles.',
    resumeScore: 85,
    essayScore: 90,
  },
  {
    id: 'app-2',
    applicantName: 'Bethlehem Tadesse',
    submissionDate: 'Oct 24, 2023',
    status: 'Complete',
    school: 'Addis Ababa University',
    degreeProgram: 'Computer Science',
    codingProfiles: {
      github: 'https://github.com/bethlehemtadesse',
    },
    essays: {
      essay1: 'My journey into tech began with a curiosity for how things work...',
      essay2: 'I am drawn to this opportunity because of its innovative approach...',
    },
    resumeLink: 'https://example.com/resumes/bethlehem_tadesse_resume.pdf',
    activityCheckNotes: 'All sections reviewed. Ready for final approval.',
    resumeScore: 92,
    essayScore: 88,
  },
  {
    id: 'app-3',
    applicantName: 'Caleb Alemayehu',
    submissionDate: 'Oct 25, 2023',
    status: 'New',
    school: 'Unity University',
    degreeProgram: 'Information Systems',
    codingProfiles: {
      linkedin: 'https://linkedin.com/in/calebalemayehu',
    },
    essays: {
      essay1: 'From a young age, I\'ve been fascinated by technology...',
      essay2: 'This program aligns perfectly with my career aspirations...',
    },
    resumeLink: 'https://example.com/resumes/caleb_alemayehu_resume.pdf',
  },
  {
    id: 'app-4',
    applicantName: 'Abel Tadesse',
    submissionDate: 'Oct 23, 2023',
    status: 'New',
    school: 'Addis Ababa Institute of Technology',
    degreeProgram: 'Software Engineering',
    codingProfiles: {
      github: 'https://github.com/abeltadesse',
    },
    essays: {
      essay1: 'Tell us about your self: I am passionate about solving complex problems...',
      essay2: 'Why do you want to join us?: I want to join because this is a place where I can learn to solve my problems and grow as a software engineer...',
    },
    resumeLink: 'https://example.com/resumes/abel_tadesse_resume.pdf',
  },
  {
    id: 'app-5',
    applicantName: 'Bethlehem Tadesse',
    submissionDate: 'Oct 24, 2023',
    status: 'New',
    school: 'Addis Ababa University',
    degreeProgram: 'Computer Science',
    codingProfiles: {
      github: 'https://github.com/bethlehemtadesse',
    },
    essays: {
      essay1: 'My journey into tech began with a curiosity for how things work...',
      essay2: 'I am drawn to this opportunity because of its innovative approach...',
    },
    resumeLink: 'https://example.com/resumes/bethlehem_tadesse_resume.pdf',
  },
  {
    id: 'app-6',
    applicantName: 'Caleb Alemayehu',
    submissionDate: 'Oct 25, 2023',
    status: 'New',
    school: 'Unity University',
    degreeProgram: 'Information Systems',
    codingProfiles: {
      linkedin: 'https://linkedin.com/in/calebalemayehu',
    },
    essays: {
      essay1: 'From a young age, I\'ve been fascinated by technology...',
      essay2: 'This program aligns perfectly with my career aspirations...',
    },
    resumeLink: 'https://example.com/resumes/caleb_alemayehu_resume.pdf',
  },
];

// Function to simulate fetching an application by ID
export const getApplicationById = (id: string): Application | undefined => {
  return applications.find(app => app.id === id);
};
