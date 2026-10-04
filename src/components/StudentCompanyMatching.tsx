import React, { useState } from 'react';
import { Sparkles, Edit3 } from 'lucide-react';
import { mockMatchingResults } from '../data/mockData';
import type { MatchingResult } from '../types';

export const StudentCompanyMatching: React.FC = () => {
  const [matchResults, setMatchResults] = useState<MatchingResult[]>(mockMatchingResults);
  const [selectedMatchForOverride, setSelectedMatchForOverride] = useState<MatchingResult | null>(null);
  const [overrideNotes, setOverrideNotes] = useState('');

  const handleApprove = (id: string) => {
    setMatchResults((prev) =>
      prev.map((item) => (item.id === id ? { ...item, tpoApproved: true, tpoNotes: 'Approved by TPO Lead' } : item))
    );
  };

  const handleSaveOverrideModal = () => {
    if (selectedMatchForOverride) {
      setMatchResults((prev) =>
        prev.map((item) =>
          item.id === selectedMatchForOverride.id
            ? { ...item, tpoApproved: !item.tpoApproved, tpoNotes: overrideNotes || 'TPO Manual Override Applied' }
            : item
        )
      );
      setSelectedMatchForOverride(null);
      setOverrideNotes('');
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Student-Company AI Matching Engine</h1>
          <p className="text-xs text-slate-500 mt-1">
            Evaluate candidate-role compatibility matrices with automated skill scoring & mandatory TPO approval override.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 font-bold border border-blue-200 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI Neural Matcher v3.8</span>
          </span>
        </div>
      </div>

      {/* MATCHING RESULTS TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Matching Evaluation Matrix ({matchResults.length})
          </h3>
          <span className="text-xs text-slate-500 font-medium">TPO Manual Override Enabled</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Target Company</th>
                <th className="py-3 px-4">Overall Match Score</th>
                <th className="py-3 px-4">Skill Match</th>
                <th className="py-3 px-4">CGPA Eligibility</th>
                <th className="py-3 px-4">Missing Skills</th>
                <th className="py-3 px-4">AI Reasoning & Notes</th>
                <th className="py-3 px-4">TPO Status</th>
                <th className="py-3 px-4 text-right">TPO Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {matchResults.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-slate-900">{item.studentName}</p>
                    <p className="text-[10px] text-slate-400">{item.department} • CGPA: {item.cgpa}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-slate-900">{item.companyName}</p>
                    <p className="text-[10px] text-slate-500">{item.jobRole}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="w-28">
                      <div className="flex justify-between text-xs font-black text-slate-900 mb-0.5">
                        <span>{item.matchScore}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${
                            item.matchScore >= 80 ? 'bg-emerald-600' : item.matchScore >= 60 ? 'bg-blue-600' : 'bg-red-500'
                          }`}
                          style={{ width: `${item.matchScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-blue-700">{item.skillMatch}%</td>
                  <td className="py-3.5 px-4">
                    {item.cgpaEligible ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
                        Pass
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold text-[11px] border border-red-200">
                        Ineligible
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 max-w-[150px]">
                    <div className="flex flex-wrap gap-1">
                      {item.missingSkills.length > 0 ? (
                        item.missingSkills.map((sk, idx) => (
                          <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                            {sk}
                          </span>
                        ))
                      ) : (
                        <span className="text-[10px] text-emerald-600 font-bold">None</span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 max-w-[220px]">
                    <p className="text-[11px] text-slate-600 line-clamp-2">{item.aiReasoning}</p>
                    {item.tpoNotes && (
                      <p className="text-[10px] font-bold text-blue-700 mt-0.5">Note: {item.tpoNotes}</p>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    {item.tpoApproved === true ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Approved
                      </span>
                    ) : item.tpoApproved === false ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200">
                        Overridden
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        Pending TPO
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleApprove(item.id)}
                        className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded font-bold text-[11px] cursor-pointer"
                        title="Approve AI Recommendation"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => setSelectedMatchForOverride(item)}
                        className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                        title="Manual Override"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Override</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TPO Manual Override Modal */}
      {selectedMatchForOverride && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">TPO Manual Recommendation Override</h3>
            <p className="text-xs text-slate-500">
              You are manually adjusting the AI match outcome for <strong className="text-slate-900">{selectedMatchForOverride.studentName}</strong> ({selectedMatchForOverride.companyName}).
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                TPO Override Justification Notes
              </label>
              <textarea
                value={overrideNotes}
                onChange={(e) => setOverrideNotes(e.target.value)}
                placeholder="Enter justification e.g. Special academic waiver granted by Placement Director..."
                rows={3}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedMatchForOverride(null)}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveOverrideModal}
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Confirm Override
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
