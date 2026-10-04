import React, { useState } from 'react';
import { Search, PlusCircle, X } from 'lucide-react';
import { mockCompanyDrives } from '../data/mockData';
import type { CompanyDrive } from '../types';

export const CompaniesManagement: React.FC = () => {
  const [drives] = useState<CompanyDrive[]>(mockCompanyDrives);
  const [selectedDrive, setSelectedDrive] = useState<CompanyDrive | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredDrives = drives.filter((d) => {
    const matchesSearch =
      d.companyName.toLowerCase().includes(search.toLowerCase()) ||
      d.jobRole.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || d.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Recruiter Companies & Placement Drives</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage recruiting partners, job profiles, compensation packages, cutoffs & candidate shortlists.
          </p>
        </div>
        <button className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
          <PlusCircle className="w-4 h-4" />
          <span>Add New Drive</span>
        </button>
      </div>

      {/* Filter controls */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company name, role..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
          >
            <option value="All">All Drive Statuses</option>
            <option value="Active">Active Drives</option>
            <option value="Upcoming">Upcoming Drives</option>
            <option value="Completed">Completed Drives</option>
          </select>
        </div>
      </div>

      {/* Drives Grid / Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Job Role</th>
                <th className="py-3 px-4">Package (LPA)</th>
                <th className="py-3 px-4">Drive Date</th>
                <th className="py-3 px-4">Eligibility Cutoff</th>
                <th className="py-3 px-4">Registered</th>
                <th className="py-3 px-4">Shortlisted</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDrives.map((drive) => (
                <tr
                  key={drive.id}
                  onClick={() => setSelectedDrive(drive)}
                  className="hover:bg-blue-50/40 cursor-pointer transition-colors group"
                >
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-700">
                        {drive.companyName.charAt(0)}
                      </div>
                      <div>
                        <p className="group-hover:text-blue-600 transition-colors">{drive.companyName}</p>
                        <p className="text-[10px] text-slate-400 font-normal">{drive.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">{drive.jobRole}</td>
                  <td className="py-3.5 px-4 font-extrabold text-blue-700">{drive.packageLPA.toFixed(1)} LPA</td>
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{drive.driveDate}</td>
                  <td className="py-3.5 px-4 text-slate-700">
                    <span className="font-bold text-slate-900">{drive.cgpaCutoff} CGPA</span>
                    <p className="text-[10px] text-slate-400">{drive.eligibleDepartments.join(', ')}</p>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-800">{drive.registeredCount}</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">{drive.shortlistedCount}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        drive.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : drive.status === 'Upcoming'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {drive.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDrive(drive);
                      }}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Company Details Modal */}
      {selectedDrive && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
            <div className="bg-slate-900 text-white p-6 relative">
              <button
                onClick={() => setSelectedDrive(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-2xl">
                  {selectedDrive.companyName.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-black">{selectedDrive.companyName}</h2>
                  <p className="text-xs text-slate-300 mt-0.5">{selectedDrive.jobRole} • <strong className="text-blue-400">{selectedDrive.packageLPA} LPA</strong></p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5 text-xs text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-1">Role Description</h4>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">{selectedDrive.jobDescription}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">CGPA Cutoff</span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">{selectedDrive.cgpaCutoff} CGPA</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Drive Date</span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">{selectedDrive.driveDate}</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Openings</span>
                  <p className="text-base font-bold text-blue-700 mt-0.5">{selectedDrive.openings} Positions</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDrive.requiredSkills.map((sk, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-800 font-bold rounded-lg">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2">Eligible Departments</h4>
                <div className="flex gap-2">
                  {selectedDrive.eligibleDepartments.map((dept, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-lg">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
              <span className="text-xs text-slate-500">Drive ID: {selectedDrive.id}</span>
              <button
                onClick={() => setSelectedDrive(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg font-bold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
