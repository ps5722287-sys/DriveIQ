import React, { useState } from 'react';
import { X, AlertTriangle, FileText, CheckCircle2, Building2, ExternalLink, Mail, Phone, GraduationCap } from 'lucide-react';
import type { Student } from '../types';

interface StudentProfileModalProps {
  student: Student | null;
  onClose: () => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({ student, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'applications' | 'readiness'>('overview');

  if (!student) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-md"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl font-black tracking-tight">{student.name}</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-400/30">
                  {student.id}
                </span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                    student.placementStatus === 'Placed'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                      : student.placementStatus === 'In Process'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                  }`}
                >
                  {student.placementStatus} {student.companyPlaced ? `at ${student.companyPlaced}` : ''}
                </span>
              </div>

              <p className="text-xs text-slate-300 mt-1 flex items-center gap-3 flex-wrap">
                <span>{student.department} • Batch {student.batch}</span>
                <span>•</span>
                <span className="font-mono font-bold text-blue-400">CGPA: {student.cgpa}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-slate-400" /> {student.email}</span>
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-slate-400" /> {student.phone}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 flex gap-6 text-xs font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview' ? 'border-blue-600 text-blue-700 font-extrabold' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Overview & Education
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'skills' ? 'border-blue-600 text-blue-700 font-extrabold' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Skills & Skill Gaps
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'applications' ? 'border-blue-600 text-blue-700 font-extrabold' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Applications & Interviews ({student.applicationsHistory.length})
          </button>
          <button
            onClick={() => setActiveTab('readiness')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'readiness' ? 'border-blue-600 text-blue-700 font-extrabold' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            AI Placement Insights
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Summary Metrics */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">CGPA</span>
                  <p className="text-xl font-black text-slate-900 mt-0.5">{student.cgpa}</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Readiness</span>
                  <p className="text-xl font-black text-blue-600 mt-0.5">{student.readinessScore}%</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Risk Level</span>
                  <p className={`text-xl font-black mt-0.5 ${student.riskLevel === 'High' ? 'text-red-600' : student.riskLevel === 'Medium' ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {student.riskLevel}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Active Backlogs</span>
                  <p className="text-xl font-black text-slate-900 mt-0.5">{student.backlogs}</p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-600" /> Education Background
                </h3>
                <div className="space-y-2">
                  {student.education.map((edu, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{edu.degree}</h4>
                        <p className="text-[11px] text-slate-500">{edu.institution} • {edu.year}</p>
                      </div>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                        {edu.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume File Card */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{student.name}_ATS_Verified_Resume.pdf</h4>
                    <p className="text-[11px] text-slate-500">Parsed by DriveIQ Engine • Verified by TPO</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer">
                  <span>View Resume PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Verified Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {student.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Identified Skill Gaps</h3>
                <div className="flex flex-wrap gap-2">
                  {student.missingSkills.length > 0 ? (
                    student.missingSkills.map((mSkill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs font-semibold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-600" />
                        {mSkill}
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-emerald-600 font-semibold">No critical skill gaps identified!</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">TPO Recommended Actions</h3>
                <div className="space-y-2">
                  {student.recommendedActions.map((act, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Drive Application Timeline</h3>
              {student.applicationsHistory.map((app, idx) => (
                <div key={idx} className="p-4 border border-slate-200 rounded-xl bg-white shadow-2xs flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                      <Building2 className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{app.company} — <span className="text-slate-600">{app.role}</span></h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Applied: {app.appliedDate} • Stage: <strong className="text-slate-700">{app.currentRound}</strong></p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      app.status === 'Selected'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : app.status === 'Shortlisted' || app.status === 'In Interview'
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : app.status === 'Rejected'
                        ? 'bg-red-100 text-red-800 border border-red-200'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'readiness' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs mb-1">
                  <FileText className="w-4 h-4 text-blue-600" /> AI Placement Intelligence Assessment
                </div>
                <p className="text-xs text-blue-800">
                  Student readiness evaluated based on historical hiring patterns of 14 campus recruiter profiles.
                </p>
              </div>

              {student.riskReason && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <h4 className="text-xs font-bold text-amber-900 mb-1">Risk Factors Detected</h4>
                  <p className="text-xs text-amber-800">{student.riskReason}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-900 mb-2">Technical Competency Score</h4>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-1">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${student.readinessScore}%` }}></div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-700">{student.readinessScore}% Readiness</span>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-900 mb-2">Target Role Suitability</h4>
                  <p className="text-xs text-slate-700 font-semibold">Software Developer / Cloud & Data Roles</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs text-slate-500">Student Profile STU-2026-VERIFIED</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold cursor-pointer"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
