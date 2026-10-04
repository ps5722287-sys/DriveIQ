import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, Users, Upload } from 'lucide-react';
import { mockStudents } from '../data/mockData';

export const JdAnalyzer: React.FC = () => {
  const sampleJd = `JOB DESCRIPTION: SOFTWARE DEVELOPMENT ENGINEER (FULL STACK)

Role Overview:
We are seeking highly motivated engineering graduates for full-time Software Engineer positions. The candidate will work on building scalable microservices, web applications, and database engines.

Required Qualifications:
- B.Tech / B.E. in Computer Science (CSE), Information Technology (IT), or Electronics (ECE).
- Minimum CGPA Cutoff: 7.50 with no active backlogs.

Key Technical Skill Requirements:
- Programming Languages: Python, Java, C++, TypeScript
- Web & Backend Frameworks: React, Node.js, Spring Boot, FastAPI
- Databases: PostgreSQL, SQL, Redis
- Core CS: Data Structures & Algorithms, System Design, Object-Oriented Programming (OOPs)
- Soft Skills: Strong verbal communication, analytical problem solving, team collaboration.`;

  const [jdText, setJdText] = useState(sampleJd);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 700);
  };

  const eligiblePool = mockStudents.filter((s) => s.cgpa >= 7.5 && ['CSE', 'IT', 'ECE'].includes(s.department));

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">AI Job Description (JD) Analyzer</h1>
          <p className="text-xs text-slate-500 mt-1">
            Extract skill cutoffs, CGPA eligibility & candidate pool matching from recruiter job description files.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setJdText(sampleJd)}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 cursor-pointer"
          >
            Load Sample Recruiter JD
          </button>
        </div>
      </div>

      {/* MANDATORY DISCLAIMER BANNER */}
      <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0" />
        <p className="text-xs text-blue-900 font-semibold">
          AI-generated analysis is for decision support and should be reviewed by the TPO.
        </p>
      </div>

      {/* TWO COLUMN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Textarea / File drop */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">Job Description Input</h3>
              <span className="text-[11px] text-slate-400">Paste text or upload PDF</span>
            </div>
            <textarea
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              rows={14}
              placeholder="Paste raw JD text from TCS, Deloitte, Infosys..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white focus:outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
            <button className="text-xs text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1">
              <Upload className="w-3.5 h-3.5 text-slate-400" />
              <span>Attach File (.pdf, .docx)</span>
            </button>
            <button
              onClick={handleAnalyze}
              disabled={analyzing || !jdText.trim()}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-extrabold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              {analyzing ? (
                <span>Extracting Skills...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Analyze JD with DriveIQ AI</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: AI Analysis Results */}
        {analyzed && (
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Extracted Requirements Summary</h3>
                  <p className="text-[11px] text-slate-400">Confidence Score: 98.2%</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                High Precision Match
              </span>
            </div>

            {/* Extracted Requirements Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Min CGPA Required</span>
                <p className="text-lg font-black text-slate-900 mt-0.5">7.50 CGPA</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Eligible Depts</span>
                <p className="text-sm font-bold text-slate-900 mt-1">CSE, IT, ECE</p>
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Mandatory Required Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'Java', 'Data Structures', 'Algorithms', 'SQL', 'React', 'Node.js'].map((sk, i) => (
                  <span key={i} className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold rounded-lg">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Preferred Skills */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Preferred / Good-to-Have Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {['TypeScript', 'PostgreSQL', 'System Design', 'Redis', 'Spring Boot'].map((sk, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Suggested Student Pool */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <h4 className="text-xs font-bold text-slate-900">Suggested Student Pool Fit</h4>
                </div>
                <span className="text-xs font-extrabold text-blue-700">{eligiblePool.length} Eligible Candidates</span>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Found {eligiblePool.length} students meeting both CGPA ({'>='}7.5) and department branch criteria.
              </p>

              <div className="space-y-2">
                {eligiblePool.slice(0, 3).map((stu) => (
                  <div key={stu.id} className="p-2 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <img src={stu.avatar} alt={stu.name} className="w-6 h-6 rounded-full object-cover" />
                      <span className="font-bold text-slate-900">{stu.name} ({stu.department})</span>
                    </div>
                    <span className="font-mono font-bold text-blue-700">{stu.cgpa} CGPA</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
