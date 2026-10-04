import React, { useState } from 'react';
import { FileUp, CheckCircle2, FileText, Loader2, Sparkles, RefreshCw, Save } from 'lucide-react';
import { mockParsedResumes } from '../data/mockData';
import type { ParsedResume } from '../types';

export const ResumeProcessing: React.FC = () => {
  const [resumes, setResumes] = useState<ParsedResume[]>(mockParsedResumes);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setUploadProgress(15);
    setTimeout(() => setUploadProgress(50), 400);
    setTimeout(() => setUploadProgress(85), 800);
    setTimeout(() => {
      setUploadProgress(100);
      setIsUploading(false);
      const newResume: ParsedResume = {
        id: `RES00${resumes.length + 1}`,
        fileName: 'Devansh_Saxena_CSE_Resume.pdf',
        fileSize: '460 KB',
        uploadTime: 'Just now',
        studentName: 'Devansh Saxena',
        email: 'devansh.saxena@iet.ac.in',
        phone: '+91 98990 11223',
        cgpa: 8.70,
        department: 'CSE',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'SQL'],
        education: 'B.Tech CSE (8.70 CGPA)',
        experience: 'Web Development Intern (6 Months)',
        parseConfidence: 97,
        status: 'Completed'
      };
      setResumes([newResume, ...resumes]);
    }, 1200);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Bulk Resume Processing & Parser</h1>
          <p className="text-xs text-slate-500 mt-1">
            Upload PDF/DOCX resumes for automated optical extraction of CGPA, skills, projects & experience.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>OCR AI Model v4.2 Active</span>
          </span>
        </div>
      </div>

      {/* UPLOAD DRAG AND DROP ZONE */}
      <div
        onClick={handleSimulatedUpload}
        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all bg-white shadow-2xs hover:border-blue-500 hover:bg-blue-50/20 ${
          isUploading ? 'border-blue-500 bg-blue-50/30' : 'border-slate-300'
        }`}
      >
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-3">
            {isUploading ? (
              <Loader2 className="w-7 h-7 animate-spin text-blue-600" />
            ) : (
              <FileUp className="w-7 h-7 text-blue-600" />
            )}
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            {isUploading ? 'Extracting Resume Metadata...' : 'Drop Student Resumes here or click to browse'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Supports PDF, DOCX batch uploads (Up to 50 resumes simultaneously)
          </p>

          {isUploading && (
            <div className="w-full mt-4 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Parsing PDF Tokens & Formatting Skills...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PARSED RESUMES TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Recently Extracted Resumes ({resumes.length})
          </h3>
          <button
            onClick={() => setResumes(mockParsedResumes)}
            className="text-xs text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset List</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">File Name</th>
                <th className="py-3 px-4">Extracted Student</th>
                <th className="py-3 px-4">Dept</th>
                <th className="py-3 px-4">CGPA</th>
                <th className="py-3 px-4">Extracted Skills</th>
                <th className="py-3 px-4">Confidence</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {resumes.map((res) => (
                <tr key={res.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <p className="font-bold text-slate-900">{res.fileName}</p>
                        <p className="text-[10px] text-slate-400">{res.fileSize} • {res.uploadTime}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-bold text-slate-900">{res.studentName}</p>
                    <p className="text-[10px] text-slate-400">{res.email}</p>
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-700">{res.department}</td>
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">{res.cgpa}</td>
                  <td className="py-3 px-4 max-w-[220px]">
                    <div className="flex flex-wrap gap-1">
                      {res.skills.map((sk, idx) => (
                        <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-medium border border-blue-100">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {res.parseConfidence}%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-max">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{res.status}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="px-2.5 py-1 bg-blue-600 text-white rounded font-bold text-xs hover:bg-blue-700 transition-colors flex items-center gap-1 ml-auto cursor-pointer">
                      <Save className="w-3 h-3" />
                      <span>Save Profile</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
