import React from 'react';
import { Star, Building2 } from 'lucide-react';
import { mockRecruiterFeedback } from '../data/mockData';

export const RecruiterFeedback: React.FC = () => {
  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Recruiter Interview Feedback Repository</h1>
          <p className="text-xs text-slate-500 mt-1">
            Qualitative and quantitative feedback provided by HR panels and technical interviewers.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {mockRecruiterFeedback.map((fb) => (
          <div key={fb.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{fb.companyName} — <span className="text-slate-600">{fb.role}</span></h3>
                  <p className="text-xs text-slate-500">Candidate: <strong className="text-slate-800">{fb.studentName}</strong> ({fb.studentId}) • {fb.interviewDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{fb.overallRating} / 5.0</span>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  fb.selectionResult === 'Selected' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {fb.selectionResult}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 text-xs">
              <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Technical Rating</span>
                <p className="font-bold text-slate-900 mt-0.5">{fb.technicalRating} / 5</p>
              </div>
              <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Communication</span>
                <p className="font-bold text-slate-900 mt-0.5">{fb.communicationRating} / 5</p>
              </div>
              <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Problem Solving</span>
                <p className="font-bold text-slate-900 mt-0.5">{fb.problemSolvingRating} / 5</p>
              </div>
              <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Soft Skills</span>
                <p className="font-bold text-slate-900 mt-0.5">{fb.softSkillsRating} / 5</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900">Recruiter Notes: </span>"{fb.comments}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
