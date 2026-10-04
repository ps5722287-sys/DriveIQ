export type NavigationTab =
  | 'dashboard'
  | 'students'
  | 'companies'
  | 'resume-processing'
  | 'jd-analyzer'
  | 'matching'
  | 'placement-probability'
  | 'skill-gap'
  | 'at-risk'
  | 'talent-pools'
  | 'drive-simulator'
  | 'what-if'
  | 'analytics'
  | 'prediction-vs-actual'
  | 'recruiter-feedback'
  | 'ai-copilot'
  | 'reports'
  | 'resume-creator'
  | 'settings';

export type Department = 'CSE' | 'IT' | 'ECE' | 'EEE' | 'Mechanical';
export type PlacementStatus = 'Placed' | 'In Process' | 'Unplaced' | 'Not Eligible';
export type RiskLevel = 'High' | 'Medium' | 'Low';
export type DriveStatus = 'Upcoming' | 'Active' | 'Completed' | 'On Hold';

export interface Student {
  id: string;
  name: string;
  avatar: string;
  department: Department;
  cgpa: number;
  email: string;
  phone: string;
  batch: string;
  backlogs: number;
  skills: string[];
  placementStatus: PlacementStatus;
  companyPlaced?: string;
  packageOffered?: string; // e.g. "8.5 LPA"
  readinessScore: number; // 0-100%
  riskLevel: RiskLevel;
  riskReason?: string;
  applicationsCount: number;
  interviewsCount: number;
  missingSkills: string[];
  recommendedActions: string[];
  resumeUrl?: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    score: string;
  }[];
  applicationsHistory: {
    company: string;
    role: string;
    appliedDate: string;
    status: 'Shortlisted' | 'In Interview' | 'Selected' | 'Rejected' | 'Pending';
    currentRound: string;
  }[];
}

export interface CompanyDrive {
  id: string;
  companyName: string;
  logo: string;
  jobRole: string;
  packageLPA: number;
  driveDate: string;
  cgpaCutoff: number;
  eligibleDepartments: Department[];
  registeredCount: number;
  shortlistedCount: number;
  placedCount: number;
  openings: number;
  status: DriveStatus;
  requiredSkills: string[];
  jobDescription: string;
  location: string;
}

export interface MatchingResult {
  id: string;
  studentId: string;
  studentName: string;
  department: Department;
  cgpa: number;
  companyId: string;
  companyName: string;
  jobRole: string;
  matchScore: number; // 0-100%
  skillMatch: number; // 0-100%
  qualificationMatch: number; // 0-100%
  cgpaEligible: boolean;
  missingSkills: string[];
  aiReasoning: string;
  tpoApproved: boolean | null; // null = pending, true = approved, false = overridden/rejected
  tpoNotes?: string;
}

export interface RecruiterFeedback {
  id: string;
  companyName: string;
  role: string;
  studentName: string;
  studentId: string;
  interviewDate: string;
  technicalRating: number; // 1-5
  communicationRating: number; // 1-5
  problemSolvingRating: number; // 1-5
  softSkillsRating: number; // 1-5
  overallRating: number; // 1-5
  selectionResult: 'Selected' | 'Rejected' | 'Hold';
  comments: string;
  strengths: string[];
  improvements: string[];
}

export interface PredictionVsActual {
  studentId: string;
  studentName: string;
  companyName: string;
  role: string;
  predictedProbability: number; // %
  actualResult: 'Selected' | 'Rejected';
  accuracy: boolean;
  varianceNotes: string;
}

export interface ParsedResume {
  id: string;
  fileName: string;
  fileSize: string;
  uploadTime: string;
  studentName: string;
  email: string;
  phone: string;
  cgpa: number;
  department: Department;
  skills: string[];
  education: string;
  experience: string;
  parseConfidence: number; // 0-100%
  status: 'Processing' | 'Completed' | 'Failed';
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  title: string;
  department: string;
  collegeName: string;
  avatar: string;
}
