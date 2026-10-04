import React, { useState } from 'react';
import { BookOpen, Layers, Award } from 'lucide-react';

export const SkillGapAnalysis: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('CSE');

  const skillsDemand = [
    { skill: 'Data Structures & Algorithms', studentProficiency: 82, requiredMarket: 90, gapPct: 8 },
    { skill: 'React & Frontend Frameworks', studentProficiency: 78, requiredMarket: 85, gapPct: 7 },
    { skill: 'System Design & Architecture', studentProficiency: 54, requiredMarket: 80, gapPct: 26 },
    { skill: 'SQL & Database Optimization', studentProficiency: 72, requiredMarket: 88, gapPct: 16 },
    { skill: 'Docker & Kubernetes', studentProficiency: 38, requiredMarket: 75, gapPct: 37 },
    { skill: 'Cloud (AWS / Azure Basics)', studentProficiency: 45, requiredMarket: 78, gapPct: 33 },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Skill Gap Dashboard & Heatmap</h1>
          <p className="text-xs text-slate-500 mt-1">
            Identify technical skill deficiencies across student cohorts vs recruiter hiring requirements.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
          >
            <option value="CSE">CSE Department</option>
            <option value="IT">IT Department</option>
            <option value="ECE">ECE Department</option>
            <option value="EEE">EEE Department</option>
            <option value="Mechanical">Mechanical Eng</option>
          </select>
        </div>
      </div>

      {/* SKILL DEMAND VS PROFICIENCY MATRIX */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-6">
        <h3 className="text-sm font-bold text-slate-900">Cohort Skill Proficiency vs Market Cutoffs</h3>

        <div className="space-y-4">
          {skillsDemand.map((item, idx) => (
            <div key={idx} className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-900">{item.skill}</span>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-blue-700">Cohort Avg: {item.studentProficiency}%</span>
                  <span className="text-slate-500">Recruiter Requirement: {item.requiredMarket}%</span>
                  <span className={`px-2 py-0.5 rounded text-[11px] ${
                    item.gapPct > 25 ? 'bg-red-100 text-red-800 font-extrabold' : 'bg-amber-100 text-amber-800 font-bold'
                  }`}>
                    {item.gapPct}% Skill Gap
                  </span>
                </div>
              </div>

              {/* Stacked Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden relative">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${item.studentProficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED LEARNING AREAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">System Design Bootcamp</h4>
          <p className="text-xs text-slate-500">
            Addressing 26% gap in architecture fundamentals for Product roles.
          </p>
        </div>

        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">Docker & DevOps Cohort</h4>
          <p className="text-xs text-slate-500">
            Bridge 37% containerization gap requested by Deloitte & Infosys.
          </p>
        </div>

        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">Advanced SQL & Indexing</h4>
          <p className="text-xs text-slate-500">
            Remedial queries workshop for service & consulting company drives.
          </p>
        </div>
      </div>
    </div>
  );
};
