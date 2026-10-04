import React, { useState } from 'react';
import { AlertTriangle, Sparkles } from 'lucide-react';
import { mockStudents, mockCompanyDrives } from '../data/mockData';

export const PlacementProbability: React.FC = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(mockStudents[0].id);
  const [selectedCompanyId, setSelectedCompanyId] = useState(mockCompanyDrives[0].id);

  const student = mockStudents.find((s) => s.id === selectedStudentId) || mockStudents[0];
  const company = mockCompanyDrives.find((c) => c.id === selectedCompanyId) || mockCompanyDrives[0];

  // Derived probability calculation
  const cgpaFit = student.cgpa >= company.cgpaCutoff ? 100 : 40;
  const skillReadiness = Math.min(95, student.readinessScore + 4);
  const interviewReadiness = Math.max(50, student.readinessScore - 8);
  const overallProbability = Math.round((cgpaFit * 0.3) + (skillReadiness * 0.4) + (interviewReadiness * 0.3));

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Predictive Placement Probability Engine</h1>
          <p className="text-xs text-slate-500 mt-1">
            Simulate individual candidate probability for target campus drives based on historical selection models.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 font-bold border border-blue-200 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Probability Model 2026</span>
          </span>
        </div>
      </div>

      {/* MANDATORY DISCLAIMER BANNER */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="text-xs text-amber-900 font-semibold">
          AI estimate for decision support, not a guarantee.
        </p>
      </div>

      {/* SELECTION CONTROLS */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Select Student Candidate
          </label>
          <select
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
          >
            {mockStudents.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.department} • CGPA: {s.cgpa})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Select Target Company Drive
          </label>
          <select
            value={selectedCompanyId}
            onChange={(e) => setSelectedCompanyId(e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
          >
            {mockCompanyDrives.map((c) => (
              <option key={c.id} value={c.id}>
                {c.companyName} — {c.jobRole} ({c.packageLPA} LPA)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PROBABILITY BREAKDOWN CARDS */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-5">
            <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm" />
            <div>
              <h3 className="text-lg font-black text-slate-900">{student.name}</h3>
              <p className="text-xs text-slate-500">{student.department} • Batch {student.batch} • CGPA: {student.cgpa}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Targeting {company.companyName}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">{company.packageLPA} LPA Package</span>
              </div>
            </div>
          </div>

          <div className="text-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm min-w-[200px]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Placement Probability</span>
            <div className="text-4xl font-black text-blue-700 mt-1">{overallProbability}%</div>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full mt-2 inline-block ${
              overallProbability >= 75 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
            }`}>
              {overallProbability >= 75 ? 'High Probability' : 'Moderate Likelihood'}
            </span>
          </div>
        </div>

        {/* METRICS PROGRESS BARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skill Readiness */}
          <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-700">Skill Readiness</span>
              <span className="text-blue-700 font-mono font-black">{skillReadiness}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${skillReadiness}%` }}></div>
            </div>
            <p className="text-[11px] text-slate-500">Evaluates programming & domain tech Stack fit</p>
          </div>

          {/* Interview Readiness */}
          <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-700">Interview Readiness</span>
              <span className="text-indigo-700 font-mono font-black">{interviewReadiness}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div className="bg-indigo-600 h-3 rounded-full" style={{ width: `${interviewReadiness}%` }}></div>
            </div>
            <p className="text-[11px] text-slate-500">Soft skills, communication & aptitude speed</p>
          </div>

          {/* CGPA Eligibility Score */}
          <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-700">Academic Criteria Match</span>
              <span className="text-emerald-700 font-mono font-black">{cgpaFit}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div className="bg-emerald-600 h-3 rounded-full" style={{ width: `${cgpaFit}%` }}></div>
            </div>
            <p className="text-[11px] text-slate-500">Student CGPA {student.cgpa} vs Cutoff {company.cgpaCutoff}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
