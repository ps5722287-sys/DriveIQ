import type { Student, CompanyDrive, MatchingResult, RecruiterFeedback, PredictionVsActual, ParsedResume, UserProfile } from '../types';

export const currentUser: UserProfile = {
  name: 'Dr. Rajesh Vardhan',
  email: 'tpo.head@iet-university.ac.in',
  role: 'Placement Director / TPO Lead',
  title: 'Head of Training & Placement Cell',
  department: 'University Placement Division',
  collegeName: 'National Institute of Technology & Engineering',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
};

export const mockStudents: Student[] = [
  {
    id: 'STU2026001',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150',
    department: 'CSE',
    cgpa: 9.15,
    email: 'aarav.sharma@iet.ac.in',
    phone: '+91 98765 43210',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['React', 'Node.js', 'Python', 'Data Structures', 'System Design', 'SQL', 'TypeScript'],
    placementStatus: 'Placed',
    companyPlaced: 'Deloitte',
    packageOffered: '8.2 LPA',
    readinessScore: 92,
    riskLevel: 'Low',
    applicationsCount: 4,
    interviewsCount: 3,
    missingSkills: ['Kubernetes', 'GraphQL'],
    recommendedActions: ['Advanced System Design Mock', 'Leadership prep for manager rounds'],
    education: [
      { degree: 'B.Tech Computer Science', institution: 'NIT & Engineering', year: '2022-2026', score: '9.15 CGPA' },
      { degree: 'Class XII (CBSE)', institution: 'Delhi Public School', year: '2022', score: '95.4%' }
    ],
    applicationsHistory: [
      { company: 'Deloitte', role: 'USI Consulting Analyst', appliedDate: '2026-08-15', status: 'Selected', currentRound: 'Offer Letter Issued' },
      { company: 'TCS', role: 'Digital Software Engineer', appliedDate: '2026-08-01', status: 'Shortlisted', currentRound: 'HR Interview Completed' },
      { company: 'Infosys', role: 'Specialist Programmer', appliedDate: '2026-07-20', status: 'Shortlisted', currentRound: 'Tech Round 2' }
    ]
  },
  {
    id: 'STU2026002',
    name: 'Priya Verma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    department: 'IT',
    cgpa: 8.85,
    email: 'priya.verma@iet.ac.in',
    phone: '+91 98123 45678',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['Java', 'Spring Boot', 'SQL', 'Microservices', 'Git', 'AWS Basics'],
    placementStatus: 'In Process',
    readinessScore: 88,
    riskLevel: 'Low',
    applicationsCount: 5,
    interviewsCount: 2,
    missingSkills: ['Docker', 'Next.js'],
    recommendedActions: ['Practice timed Aptitude tests', 'Review OS concepts'],
    education: [
      { degree: 'B.Tech Information Technology', institution: 'NIT & Engineering', year: '2022-2026', score: '8.85 CGPA' },
      { degree: 'Class XII (CBSE)', institution: 'DAV Public School', year: '2022', score: '93.2%' }
    ],
    applicationsHistory: [
      { company: 'TCS', role: 'Software Engineer', appliedDate: '2026-08-10', status: 'In Interview', currentRound: 'Technical Round 2' },
      { company: 'Accenture', role: 'Advanced App Assoc', appliedDate: '2026-08-02', status: 'Shortlisted', currentRound: 'Aptitude Cleared' }
    ]
  },
  {
    id: 'STU2026003',
    name: 'Rahul Mehta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    department: 'ECE',
    cgpa: 6.90,
    email: 'rahul.mehta@iet.ac.in',
    phone: '+91 97654 32109',
    batch: '2022-2026',
    backlogs: 1,
    skills: ['C++', 'Embedded Systems', 'Basic Python', 'VLSI Design'],
    placementStatus: 'Unplaced',
    readinessScore: 48,
    riskLevel: 'High',
    riskReason: 'Low CGPA (6.90), 1 Active Backlog, Low DSA problem solving scores',
    applicationsCount: 3,
    interviewsCount: 0,
    missingSkills: ['Data Structures', 'SQL', 'System Design', 'Web Fundamentals'],
    recommendedActions: ['Mandatory DSA Remedial Workshop', 'Clear Active Backlog in re-exam', 'Aptitude practice cohort'],
    education: [
      { degree: 'B.Tech Electronics & Comm', institution: 'NIT & Engineering', year: '2022-2026', score: '6.90 CGPA' }
    ],
    applicationsHistory: [
      { company: 'Cognizant', role: 'GenC Engineer', appliedDate: '2026-08-12', status: 'Rejected', currentRound: 'Aptitude Test' },
      { company: 'Wipro', role: 'Project Engineer', appliedDate: '2026-07-28', status: 'Pending', currentRound: 'Eligibility Audit' }
    ]
  },
  {
    id: 'STU2026004',
    name: 'Ananya Singh',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    department: 'CSE',
    cgpa: 9.42,
    email: 'ananya.singh@iet.ac.in',
    phone: '+91 99887 76655',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['Python', 'Machine Learning', 'PyTorch', 'C++', 'Data Structures', 'Algorithms', 'FastAPI'],
    placementStatus: 'Placed',
    companyPlaced: 'Infosys',
    packageOffered: '9.5 LPA',
    readinessScore: 96,
    riskLevel: 'Low',
    applicationsCount: 3,
    interviewsCount: 3,
    missingSkills: ['Cloud Deployment'],
    recommendedActions: ['Prepare for high-package off-campus drives'],
    education: [
      { degree: 'B.Tech Computer Science', institution: 'NIT & Engineering', year: '2022-2026', score: '9.42 CGPA' }
    ],
    applicationsHistory: [
      { company: 'Infosys', role: 'Specialist Programmer', appliedDate: '2026-07-25', status: 'Selected', currentRound: 'Offer Letter Issued' }
    ]
  },
  {
    id: 'STU2026005',
    name: 'Rohan Gupta',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    department: 'EEE',
    cgpa: 7.20,
    email: 'rohan.gupta@iet.ac.in',
    phone: '+91 98450 11223',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['MATLAB', 'Electrical CAD', 'Basic C++', 'Python Basics'],
    placementStatus: 'Unplaced',
    readinessScore: 56,
    riskLevel: 'Medium',
    riskReason: 'Non-CS branch attempting IT roles without strong portfolio projects',
    applicationsCount: 4,
    interviewsCount: 1,
    missingSkills: ['Java', 'SQL', 'DBMS', 'Web Development'],
    recommendedActions: ['Complete Full-Stack Web Development Bootcamp', 'Add 2 Github Projects'],
    education: [
      { degree: 'B.Tech Electrical & Electronics', institution: 'NIT & Engineering', year: '2022-2026', score: '7.20 CGPA' }
    ],
    applicationsHistory: [
      { company: 'Capgemini', role: 'Senior Analyst', appliedDate: '2026-08-05', status: 'Rejected', currentRound: 'Technical Interview 1' }
    ]
  },
  {
    id: 'STU2026006',
    name: 'Sneha Kapoor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    department: 'CSE',
    cgpa: 8.60,
    email: 'sneha.kapoor@iet.ac.in',
    phone: '+91 97112 33445',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git'],
    placementStatus: 'Placed',
    companyPlaced: 'TCS',
    packageOffered: '7.0 LPA',
    readinessScore: 86,
    riskLevel: 'Low',
    applicationsCount: 4,
    interviewsCount: 2,
    missingSkills: ['Docker', 'Java'],
    recommendedActions: ['Upskill for Product Companies'],
    education: [
      { degree: 'B.Tech Computer Science', institution: 'NIT & Engineering', year: '2022-2026', score: '8.60 CGPA' }
    ],
    applicationsHistory: [
      { company: 'TCS', role: 'Digital Software Engineer', appliedDate: '2026-08-01', status: 'Selected', currentRound: 'Offer Letter Issued' }
    ]
  },
  {
    id: 'STU2026007',
    name: 'Karan Malhotra',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150',
    department: 'Mechanical',
    cgpa: 6.75,
    email: 'karan.malhotra@iet.ac.in',
    phone: '+91 96543 21098',
    batch: '2022-2026',
    backlogs: 2,
    skills: ['AutoCAD', 'SolidWorks', 'Basic C', 'MS Excel'],
    placementStatus: 'Not Eligible',
    readinessScore: 42,
    riskLevel: 'High',
    riskReason: '2 Active Backlogs, CGPA < 7.0, Low communication assessment rating',
    applicationsCount: 1,
    interviewsCount: 0,
    missingSkills: ['Python', 'SQL', 'Aptitude Mastery', 'Spoken English'],
    recommendedActions: ['Clear 2 backlogs immediately', 'Communication & Soft Skill Bootcamps'],
    education: [
      { degree: 'B.Tech Mechanical Eng', institution: 'NIT & Engineering', year: '2022-2026', score: '6.75 CGPA' }
    ],
    applicationsHistory: []
  },
  {
    id: 'STU2026008',
    name: 'Neha Yadav',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    department: 'IT',
    cgpa: 8.30,
    email: 'neha.yadav@iet.ac.in',
    phone: '+91 98711 22334',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
    placementStatus: 'Placed',
    companyPlaced: 'Accenture',
    packageOffered: '6.5 LPA',
    readinessScore: 82,
    riskLevel: 'Low',
    applicationsCount: 3,
    interviewsCount: 2,
    missingSkills: ['React', 'AWS'],
    recommendedActions: ['Explore internal higher package upgrade drives'],
    education: [
      { degree: 'B.Tech Information Tech', institution: 'NIT & Engineering', year: '2022-2026', score: '8.30 CGPA' }
    ],
    applicationsHistory: [
      { company: 'Accenture', role: 'Advanced App Assoc', appliedDate: '2026-08-03', status: 'Selected', currentRound: 'Offer Accepted' }
    ]
  },
  {
    id: 'STU2026009',
    name: 'Vikramaditya Rao',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    department: 'ECE',
    cgpa: 8.10,
    email: 'vikram.rao@iet.ac.in',
    phone: '+91 99112 23344',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['C++', 'IoT', 'Python', 'Arduino', 'Networking Basics'],
    placementStatus: 'In Process',
    readinessScore: 78,
    riskLevel: 'Medium',
    riskReason: 'Needs stronger problem-solving score in LeetCode level DS/Algo',
    applicationsCount: 4,
    interviewsCount: 1,
    missingSkills: ['SQL', 'Web Frameworks'],
    recommendedActions: ['DSA Speed Coding Workshops'],
    education: [
      { degree: 'B.Tech Electronics & Comm', institution: 'NIT & Engineering', year: '2022-2026', score: '8.10 CGPA' }
    ],
    applicationsHistory: [
      { company: 'Cognizant', role: 'GenC Next', appliedDate: '2026-08-14', status: 'In Interview', currentRound: 'HR & Technical Round' }
    ]
  },
  {
    id: 'STU2026010',
    name: 'Pooja Hegde',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    department: 'CSE',
    cgpa: 8.95,
    email: 'pooja.hegde@iet.ac.in',
    phone: '+91 98877 66554',
    batch: '2022-2026',
    backlogs: 0,
    skills: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'Redis'],
    placementStatus: 'Placed',
    companyPlaced: 'Deloitte',
    packageOffered: '8.2 LPA',
    readinessScore: 94,
    riskLevel: 'Low',
    applicationsCount: 2,
    interviewsCount: 2,
    missingSkills: ['Kubernetes'],
    recommendedActions: ['Mentoring junior batch'],
    education: [
      { degree: 'B.Tech Computer Science', institution: 'NIT & Engineering', year: '2022-2026', score: '8.95 CGPA' }
    ],
    applicationsHistory: [
      { company: 'Deloitte', role: 'USI Consulting Analyst', appliedDate: '2026-08-15', status: 'Selected', currentRound: 'Offer Accepted' }
    ]
  }
];

export const mockCompanyDrives: CompanyDrive[] = [
  {
    id: 'COMP001',
    companyName: 'TCS',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120',
    jobRole: 'Digital Software Engineer & Ninja Developer',
    packageLPA: 7.0,
    driveDate: '2026-10-12',
    cgpaCutoff: 7.0,
    eligibleDepartments: ['CSE', 'IT', 'ECE'],
    registeredCount: 240,
    shortlistedCount: 45,
    placedCount: 28,
    openings: 35,
    status: 'Active',
    requiredSkills: ['C++', 'Java', 'Python', 'Data Structures', 'SQL', 'Aptitude'],
    jobDescription: 'TCS Digital is hiring bright engineering graduates for high-impact software engineering roles involving Cloud, Full Stack, Data Analytics, and AI solutions.',
    location: 'Pan India (Bengaluru / Pune / Hyderabad)'
  },
  {
    id: 'COMP002',
    companyName: 'Deloitte',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=120',
    jobRole: 'USI Consulting Analyst',
    packageLPA: 8.2,
    driveDate: '2026-10-18',
    cgpaCutoff: 7.5,
    eligibleDepartments: ['CSE', 'IT', 'ECE', 'EEE'],
    registeredCount: 180,
    shortlistedCount: 32,
    placedCount: 14,
    openings: 20,
    status: 'Upcoming',
    requiredSkills: ['Python', 'SQL', 'Communication', 'Business Analytics', 'Problem Solving'],
    jobDescription: 'Deloitte US India Consulting is seeking tech-savvy analytical minds for IT Advisory, Cloud Consulting, and Enterprise Transformation projects.',
    location: 'Hyderabad / Gurugram'
  },
  {
    id: 'COMP003',
    companyName: 'Infosys',
    logo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=120',
    jobRole: 'Specialist Programmer & SE',
    packageLPA: 9.5,
    driveDate: '2026-10-22',
    cgpaCutoff: 6.5,
    eligibleDepartments: ['CSE', 'IT', 'ECE'],
    registeredCount: 310,
    shortlistedCount: 88,
    placedCount: 42,
    openings: 50,
    status: 'Active',
    requiredSkills: ['Java', 'Python', 'Data Structures', 'Algorithms', 'SQL', 'OOPs'],
    jobDescription: 'Infosys Specialist Programmer role focuses on complex algorithms, cloud architectures, AI models, and enterprise full-stack development.',
    location: 'Bengaluru / Mysuru'
  },
  {
    id: 'COMP004',
    companyName: 'Accenture',
    logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=120',
    jobRole: 'Advanced Application Engineering Associate',
    packageLPA: 6.5,
    driveDate: '2026-09-28',
    cgpaCutoff: 6.5,
    eligibleDepartments: ['CSE', 'IT', 'ECE', 'EEE', 'Mechanical'],
    registeredCount: 290,
    shortlistedCount: 95,
    placedCount: 65,
    openings: 70,
    status: 'Completed',
    requiredSkills: ['Java', 'C++', 'Cloud Basics', 'Agile Methodologies', 'Verbal Ability'],
    jobDescription: 'Join Accenture Technology as an Application Development Associate to build web applications, API integrations, and modern cloud services.',
    location: 'Mumbai / Pune / Chennai'
  },
  {
    id: 'COMP005',
    companyName: 'Wipro',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120',
    jobRole: 'Turbo Developer',
    packageLPA: 6.5,
    driveDate: '2026-10-25',
    cgpaCutoff: 7.0,
    eligibleDepartments: ['CSE', 'IT', 'ECE'],
    registeredCount: 195,
    shortlistedCount: 40,
    placedCount: 0,
    openings: 25,
    status: 'Upcoming',
    requiredSkills: ['Python', 'Java', 'SQL', 'Logical Reasoning', 'C++'],
    jobDescription: 'Wipro Turbo hiring drive for high-potential engineering graduates with strong algorithmic coding speed.',
    location: 'Bengaluru / Noida'
  },
  {
    id: 'COMP006',
    companyName: 'Cognizant',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=120',
    jobRole: 'GenC Next Engineer',
    packageLPA: 6.75,
    driveDate: '2026-09-15',
    cgpaCutoff: 6.8,
    eligibleDepartments: ['CSE', 'IT', 'ECE', 'EEE'],
    registeredCount: 210,
    shortlistedCount: 50,
    placedCount: 38,
    openings: 40,
    status: 'Completed',
    requiredSkills: ['Full Stack Web', 'Python', 'SQL', 'Analytical Reasoning'],
    jobDescription: 'GenC Next offers tech professionals opportunities in AI engineering, digital experience platforms, and microservices.',
    location: 'Kolkata / Hyderabad'
  },
  {
    id: 'COMP007',
    companyName: 'Capgemini',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=120',
    jobRole: 'Senior Analyst - Tech Solutions',
    packageLPA: 7.5,
    driveDate: '2026-11-02',
    cgpaCutoff: 7.2,
    eligibleDepartments: ['CSE', 'IT', 'ECE'],
    registeredCount: 165,
    shortlistedCount: 28,
    placedCount: 0,
    openings: 20,
    status: 'Upcoming',
    requiredSkills: ['Java', 'Spring Boot', 'React', 'AWS', 'Database Systems'],
    jobDescription: 'Capgemini technology consulting team is hiring engineering graduates for enterprise software modernization.',
    location: 'Pune / Bengaluru'
  }
];

export const mockMatchingResults: MatchingResult[] = [
  {
    id: 'MATCH001',
    studentId: 'STU2026001',
    studentName: 'Aarav Sharma',
    department: 'CSE',
    cgpa: 9.15,
    companyId: 'COMP002',
    companyName: 'Deloitte',
    jobRole: 'USI Consulting Analyst',
    matchScore: 94,
    skillMatch: 95,
    qualificationMatch: 100,
    cgpaEligible: true,
    missingSkills: ['GraphQL'],
    aiReasoning: 'Exceptional fit. Student possesses Python, System Design, SQL, and strong communication scores matching Deloitte Consulting requirements.',
    tpoApproved: true,
    tpoNotes: 'Approved for priority shortlist.'
  },
  {
    id: 'MATCH002',
    studentId: 'STU2026002',
    studentName: 'Priya Verma',
    department: 'IT',
    cgpa: 8.85,
    companyId: 'COMP001',
    companyName: 'TCS',
    jobRole: 'Digital Software Engineer',
    matchScore: 89,
    skillMatch: 90,
    qualificationMatch: 95,
    cgpaEligible: true,
    missingSkills: ['C++'],
    aiReasoning: 'Strong candidate. Has Java, Spring Boot, SQL, and clean academic history exceeding TCS cutoff of 7.0 CGPA.',
    tpoApproved: true
  },
  {
    id: 'MATCH003',
    studentId: 'STU2026003',
    studentName: 'Rahul Mehta',
    department: 'ECE',
    cgpa: 6.90,
    companyId: 'COMP002',
    companyName: 'Deloitte',
    jobRole: 'USI Consulting Analyst',
    matchScore: 42,
    skillMatch: 35,
    qualificationMatch: 50,
    cgpaEligible: false,
    missingSkills: ['Python', 'SQL', 'Business Analytics'],
    aiReasoning: 'Ineligible due to CGPA (6.90 < 7.50 cutoff) and active backlog. Lacks core required programming skills for consulting role.',
    tpoApproved: false,
    tpoNotes: 'Override denied by TPO due to backlog policy.'
  },
  {
    id: 'MATCH004',
    studentId: 'STU2026004',
    studentName: 'Ananya Singh',
    department: 'CSE',
    cgpa: 9.42,
    companyId: 'COMP003',
    companyName: 'Infosys',
    jobRole: 'Specialist Programmer',
    matchScore: 98,
    skillMatch: 98,
    qualificationMatch: 100,
    cgpaEligible: true,
    missingSkills: [],
    aiReasoning: 'Top 1% candidate fit. Advanced Python ML skills, 9.42 CGPA, and flawless coding assessment results.',
    tpoApproved: true
  },
  {
    id: 'MATCH005',
    studentId: 'STU2026005',
    studentName: 'Rohan Gupta',
    department: 'EEE',
    cgpa: 7.20,
    companyId: 'COMP007',
    companyName: 'Capgemini',
    jobRole: 'Senior Analyst',
    matchScore: 65,
    skillMatch: 55,
    qualificationMatch: 75,
    cgpaEligible: fillCgpaEligibility(7.20, 7.2),
    missingSkills: ['Java', 'Spring Boot', 'React'],
    aiReasoning: 'Moderate fit. Meets CGPA cutoff but needs hands-on Java/React web project credentials.',
    tpoApproved: null
  }
];

function fillCgpaEligibility(cgpa: number, cutoff: number) {
  return cgpa >= cutoff;
}

export const mockRecruiterFeedback: RecruiterFeedback[] = [
  {
    id: 'FB001',
    companyName: 'TCS',
    role: 'Digital Software Engineer',
    studentName: 'Aarav Sharma',
    studentId: 'STU2026001',
    interviewDate: '2026-08-14',
    technicalRating: 5,
    communicationRating: 4,
    problemSolvingRating: 5,
    softSkillsRating: 5,
    overallRating: 4.8,
    selectionResult: 'Selected',
    comments: 'Aarav demonstrated exemplary knowledge of Data Structures and System Design. Solved the live coding challenge with optimal space-time complexity.',
    strengths: ['DSA Mastery', 'Code Readability', 'System Design Thinking'],
    improvements: ['Could elaborate more on cloud deployment pipelines']
  },
  {
    id: 'FB002',
    companyName: 'Deloitte',
    role: 'USI Consulting Analyst',
    studentName: 'Priya Verma',
    studentId: 'STU2026002',
    interviewDate: '2026-08-18',
    technicalRating: 4,
    communicationRating: 5,
    problemSolvingRating: 4,
    softSkillsRating: 5,
    overallRating: 4.5,
    selectionResult: 'Selected',
    comments: 'Priya articulate business logic clearly. Great teamwork attitude and rapid problem decomposition.',
    strengths: ['Communication', 'SQL Queries', 'Agile Mindset'],
    improvements: ['Practice complex join optimization']
  },
  {
    id: 'FB003',
    companyName: 'Accenture',
    role: 'Advanced App Assoc',
    studentName: 'Rahul Mehta',
    studentId: 'STU2026003',
    interviewDate: '2026-08-10',
    technicalRating: 2,
    communicationRating: 3,
    problemSolvingRating: 2,
    softSkillsRating: 3,
    overallRating: 2.5,
    selectionResult: 'Rejected',
    comments: 'Candidate struggled with basic array manipulation and pointer concepts in C++. Needs structured practice.',
    strengths: ['Polite demeanor'],
    improvements: ['Core DSA', 'OOP Principles', 'Time Management']
  }
];

export const mockPredictionVsActual: PredictionVsActual[] = [
  {
    studentId: 'STU2026001',
    studentName: 'Aarav Sharma',
    companyName: 'Deloitte',
    role: 'Consulting Analyst',
    predictedProbability: 92,
    actualResult: 'Selected',
    accuracy: true,
    varianceNotes: 'Predicted high likelihood (92%). Actual selection validated skill match.'
  },
  {
    studentId: 'STU2026004',
    studentName: 'Ananya Singh',
    companyName: 'Infosys',
    role: 'Specialist Programmer',
    predictedProbability: 95,
    actualResult: 'Selected',
    accuracy: true,
    varianceNotes: 'Accurate model prediction. Top scoring candidate in campus drive.'
  },
  {
    studentId: 'STU2026003',
    studentName: 'Rahul Mehta',
    companyName: 'Accenture',
    role: 'App Assoc',
    predictedProbability: 38,
    actualResult: 'Rejected',
    accuracy: true,
    varianceNotes: 'Predicted low probability due to skill gaps. Candidate was eliminated in tech round 1.'
  },
  {
    studentId: 'STU2026008',
    studentName: 'Neha Yadav',
    companyName: 'Accenture',
    role: 'Advanced App Assoc',
    predictedProbability: 80,
    actualResult: 'Selected',
    accuracy: true,
    varianceNotes: 'Clean match based on Python & DBMS background.'
  }
];

export const mockParsedResumes: ParsedResume[] = [
  {
    id: 'RES001',
    fileName: 'Aarav_Sharma_Resume_2026.pdf',
    fileSize: '420 KB',
    uploadTime: '2026-10-04 10:15 AM',
    studentName: 'Aarav Sharma',
    email: 'aarav.sharma@iet.ac.in',
    phone: '+91 98765 43210',
    cgpa: 9.15,
    department: 'CSE',
    skills: ['React', 'Node.js', 'Python', 'SQL', 'TypeScript', 'Data Structures'],
    education: 'B.Tech CSE, NIT & Engineering (9.15 CGPA)',
    experience: 'Software Engineering Intern at TechCorp (3 months)',
    parseConfidence: 98,
    status: 'Completed'
  },
  {
    id: 'RES002',
    fileName: 'Priya_Verma_IT_CV.pdf',
    fileSize: '380 KB',
    uploadTime: '2026-10-04 10:18 AM',
    studentName: 'Priya Verma',
    email: 'priya.verma@iet.ac.in',
    phone: '+91 98123 45678',
    cgpa: 8.85,
    department: 'IT',
    skills: ['Java', 'Spring Boot', 'SQL', 'Microservices', 'Git'],
    education: 'B.Tech IT, NIT & Engineering (8.85 CGPA)',
    experience: 'Java Backend Intern at CloudSys',
    parseConfidence: 95,
    status: 'Completed'
  },
  {
    id: 'RES003',
    fileName: 'Rahul_Mehta_ECE_2026.pdf',
    fileSize: '510 KB',
    uploadTime: '2026-10-04 10:22 AM',
    studentName: 'Rahul Mehta',
    email: 'rahul.mehta@iet.ac.in',
    phone: '+91 97654 32109',
    cgpa: 6.90,
    department: 'ECE',
    skills: ['C++', 'Embedded Systems', 'VLSI'],
    education: 'B.Tech ECE (6.90 CGPA)',
    experience: 'Academic Mini Project on Microcontrollers',
    parseConfidence: 91,
    status: 'Completed'
  }
];

export const placementTrendData = [
  { month: 'Jan', placed: 85, target: 80, avgPackage: 6.2 },
  { month: 'Feb', placed: 160, target: 150, avgPackage: 6.4 },
  { month: 'Mar', placed: 290, target: 280, avgPackage: 6.8 },
  { month: 'Apr', placed: 410, target: 400, avgPackage: 7.1 },
  { month: 'May', placed: 495, target: 500, avgPackage: 7.2 },
  { month: 'Jun', placed: 560, target: 580, avgPackage: 7.4 },
  { month: 'Jul', placed: 620, target: 630, avgPackage: 7.6 },
  { month: 'Aug', placed: 684, target: 670, avgPackage: 7.8 }
];

export const departmentPlacementData = [
  { name: 'CSE', total: 340, placed: 298, rate: 87.6, avgPackage: 8.4 },
  { name: 'IT', total: 280, placed: 235, rate: 83.9, avgPackage: 7.8 },
  { name: 'ECE', total: 310, placed: 220, rate: 71.0, avgPackage: 6.8 },
  { name: 'EEE', total: 160, placed: 99, rate: 61.8, avgPackage: 6.2 },
  { name: 'Mechanical', total: 158, placed: 84, rate: 53.1, avgPackage: 5.6 }
];

export const packageDistributionData = [
  { range: '< 4 LPA', count: 120, color: '#94a3b8' },
  { range: '4.0 - 6.5 LPA', count: 285, color: '#3b82f6' },
  { range: '6.5 - 9.0 LPA', count: 210, color: '#2563eb' },
  { range: '9.0 - 12.0 LPA', count: 54, color: '#1d4ed8' },
  { range: '> 12.0 LPA', count: 15, color: '#0f172a' }
];

export const placementFunnelData = [
  { stage: 'Total Registered Students', count: 1248 },
  { stage: 'CGPA & Policy Eligible', count: 936 },
  { stage: 'Drive Registered', count: 850 },
  { stage: 'Aptitude & Technical Shortlist', count: 740 },
  { stage: 'Interview Cleared', count: 710 },
  { stage: 'Final Offers Received', count: 684 }
];
