import React, { useState } from 'react';
import { Download } from 'lucide-react';

export const ResumeCreator: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: 'Aarav Sharma',
    email: 'aarav.sharma@iet.ac.in',
    phone: '+91 98765 43210',
    location: 'New Delhi, India',
    linkedin: 'linkedin.com/in/aaravsharma',
    summary: 'High-performing Computer Science undergraduate (9.15 CGPA) with expertise in React, Node.js, and Data Structures. Proven track record in full-stack web architectures.',
    degree: 'B.Tech in Computer Science & Engineering',
    college: 'National Institute of Technology & Engineering',
    cgpa: '9.15 CGPA',
    skills: 'React, TypeScript, Node.js, Python, SQL, Data Structures, Algorithms, Docker',
    projectTitle: 'DriveIQ Placement Platform',
    projectDesc: 'Engineered an AI placement intelligence portal using React, Vite, and Tailwind CSS.',
    expTitle: 'Software Developer Intern',
    expCompany: 'TechCorp Solutions',
    expDesc: 'Optimized REST API endpoints reducing query latency by 32%.'
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">ATS-Friendly Student Resume Creator</h1>
          <p className="text-xs text-slate-500 mt-1">
            Build clean corporate resumes optimized for ATS parser compliance.
          </p>
        </div>
        <button
          onClick={() => alert('Exporting ATS Resume as PDF...')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Download className="w-4 h-4" />
          <span>Download ATS Resume PDF</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Form Inputs */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Personal & Education Details</h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase">Email</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase">Professional Summary</label>
            <textarea
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              rows={3}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
            ></textarea>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase">Technical Skills (Comma separated)</label>
            <input
              type="text"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-blue-700"
            />
          </div>
        </div>

        {/* Right Live Resume Preview */}
        <div className="bg-white border border-slate-300 rounded-xl p-8 shadow-md font-sans text-slate-900 text-xs space-y-4 min-h-[500px]">
          <div className="text-center border-b border-slate-300 pb-3">
            <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide">{formData.fullName}</h2>
            <p className="text-[11px] text-slate-600 mt-0.5">{formData.email} • {formData.phone} • {formData.location}</p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-1">
              Professional Summary
            </h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">{formData.summary}</p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-1">
              Education
            </h4>
            <div className="flex justify-between font-bold text-[11px]">
              <span>{formData.degree}</span>
              <span className="text-blue-700">{formData.cgpa}</span>
            </div>
            <p className="text-[10px] text-slate-500">{formData.college}</p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-1">
              Technical Skills
            </h4>
            <p className="text-[11px] text-slate-700">{formData.skills}</p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-1">
              Key Projects
            </h4>
            <p className="font-bold text-[11px] text-slate-900">{formData.projectTitle}</p>
            <p className="text-[11px] text-slate-600">{formData.projectDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
