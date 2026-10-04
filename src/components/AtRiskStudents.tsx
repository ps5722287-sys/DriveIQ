import React, { useState } from 'react';
import { mockStudents } from '../data/mockData';
import type { Student } from '../types';

export const AtRiskStudents: React.FC = () => {
  const [students] = useState<Student[]>(mockStudents);
  const [filterRisk, setFilterRisk] = useState<'All' | 'High' | 'Medium'>('All');

  const atRiskList = students.filter((s) => {
    if (filterRisk === 'All') return s.riskLevel === 'High' || s.riskLevel === 'Medium';
    return s.riskLevel === filterRisk;
  });

  const handleInterventionTrigger = (studentId: string) => {
    alert(`TPO Remedial Alert sent to student ${studentId} & assigned Mentor!`);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">At-Risk Student Placement Radar</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-200">
              86 Total At-Risk Cohort
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Proactive identification of candidates lagging in CGPA, coding speed, aptitude tests or active backlogs.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filterRisk}
            onChange={(e) => setFilterRisk(e.target.value as any)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
          >
            <option value="All">All At-Risk Levels</option>
            <option value="High">High Risk Only</option>
            <option value="Medium">Medium Risk Only</option>
          </select>
        </div>
      </div>

      {/* AT-RISK TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Dept</th>
                <th className="py-3 px-4">CGPA</th>
                <th className="py-3 px-4">Backlogs</th>
                <th className="py-3 px-4">Identified Risk Reason</th>
                <th className="py-3 px-4">Risk Level</th>
                <th className="py-3 px-4">Recommended TPO Intervention</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {atRiskList.map((stu) => (
                <tr key={stu.id} className="hover:bg-amber-50/20 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <img src={stu.avatar} alt={stu.name} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                      <div>
                        <p className="font-bold text-slate-900">{stu.name}</p>
                        <p className="text-[10px] text-slate-400">{stu.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-700">{stu.department}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{stu.cgpa.toFixed(2)}</td>
                  <td className="py-3.5 px-4 font-bold text-red-600">{stu.backlogs} Active</td>
                  <td className="py-3.5 px-4 max-w-[220px]">
                    <p className="text-[11px] text-amber-900 font-medium">{stu.riskReason || 'Skill gap & aptitude failures'}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        stu.riskLevel === 'High'
                          ? 'bg-red-100 text-red-800 border border-red-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {stu.riskLevel} Risk
                    </span>
                  </td>
                  <td className="py-3.5 px-4 max-w-[200px]">
                    <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5">
                      {stu.recommendedActions.map((act, i) => (
                        <li key={i} className="truncate">{act}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleInterventionTrigger(stu.id)}
                      className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-[11px] shadow-2xs transition-colors cursor-pointer"
                    >
                      Trigger Alert
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
