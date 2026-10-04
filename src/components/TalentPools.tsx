import React, { useState } from 'react';
import { Building2, Download } from 'lucide-react';
import { mockCompanyDrives, mockStudents } from '../data/mockData';

export const TalentPools: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(mockCompanyDrives[0].id);
  const [deptFilter, setDeptFilter] = useState('All');
  const [minCgpa, setMinCgpa] = useState(7.0);

  const selectedCompany = mockCompanyDrives.find((c) => c.id === selectedCompanyId) || mockCompanyDrives[0];

  const poolStudents = mockStudents.filter((s) => {
    const deptMatch = deptFilter === 'All' || s.department === deptFilter;
    const cgpaMatch = s.cgpa >= minCgpa;
    return deptMatch && cgpaMatch;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Company Talent Pools</h1>
          <p className="text-xs text-slate-500 mt-1">
            Pre-curated candidate pools tailored for specific recruiting partners.
          </p>
        </div>
        <button className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer">
          <Download className="w-4 h-4" />
          <span>Export {selectedCompany.companyName} Pool (CSV)</span>
        </button>
      </div>

      {/* COMPANY SELECTOR TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {mockCompanyDrives.map((comp) => (
          <button
            key={comp.id}
            onClick={() => setSelectedCompanyId(comp.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCompanyId === comp.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{comp.companyName} Pool</span>
          </button>
        ))}
      </div>

      {/* FILTER CONTROLS */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Filter Department</label>
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800"
          >
            <option value="All">All Departments</option>
            <option value="CSE">CSE Only</option>
            <option value="IT">IT Only</option>
            <option value="ECE">ECE Only</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
            Min CGPA Cutoff ({minCgpa.toFixed(1)})
          </label>
          <input
            type="range"
            min="6.0"
            max="9.0"
            step="0.1"
            value={minCgpa}
            onChange={(e) => setMinCgpa(parseFloat(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer mt-1"
          />
        </div>

        <div className="flex items-end">
          <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 font-bold w-full text-center">
            {poolStudents.length} Students Qualified for Pool
          </div>
        </div>
      </div>

      {/* CANDIDATE MATRIX TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase">
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Dept</th>
                <th className="py-3 px-4">CGPA</th>
                <th className="py-3 px-4">Key Skills</th>
                <th className="py-3 px-4">Readiness</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {poolStudents.map((stu) => (
                <tr key={stu.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">{stu.name}</td>
                  <td className="py-3 px-4 font-bold text-slate-700">{stu.department}</td>
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">{stu.cgpa}</td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {stu.skills.slice(0, 3).map((sk, i) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100 font-medium">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{stu.readinessScore}%</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[11px] font-bold">
                      Qualified
                    </span>
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
