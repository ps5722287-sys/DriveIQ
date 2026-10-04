import React, { useState } from 'react';
import { Cpu, AlertTriangle, Sliders, Users } from 'lucide-react';
import { mockCompanyDrives, mockStudents } from '../data/mockData';

export const DriveSimulator: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(mockCompanyDrives[0].id);
  const [cgpaCutoff, setCgpaCutoff] = useState(7.0);
  const [allowBacklogs, setAllowBacklogs] = useState(false);
  const [openings, setOpenings] = useState(30);

  // Simulation calculations
  const totalInDept = mockStudents.length * 80; // Scaled mock universe ~1000
  const eligible = Math.round(totalInDept * (1 - (cgpaCutoff - 6.0) * 0.18) * (allowBacklogs ? 1.15 : 1.0));
  const expectedRegistrations = Math.round(eligible * 0.88);
  const expectedShortlist = Math.round(expectedRegistrations * 0.22);
  const estimatedSelections = Math.min(openings, Math.round(expectedShortlist * 0.65));

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Placement Drive Simulator</h1>
          <p className="text-xs text-slate-500 mt-1">
            Model drive parameters to project candidate funnels and recruitment yield.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 font-bold border border-indigo-200 rounded-full flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>Monte Carlo Simulation Engine</span>
          </span>
        </div>
      </div>

      {/* MANDATORY ESTIMATE DISCLAIMER */}
      <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0" />
        <p className="text-xs text-blue-900 font-semibold">
          Simulated estimation based on historical campus drive data for decision support.
        </p>
      </div>

      {/* TWO COLUMN INTERACTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inputs Panel */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-5">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-600" /> Drive Input Parameters
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Target Recruiting Partner</label>
            <select
              value={selectedCompanyId}
              onChange={(e) => setSelectedCompanyId(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
            >
              {mockCompanyDrives.map((c) => (
                <option key={c.id} value={c.id}>{c.companyName} — {c.jobRole}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>CGPA Cutoff threshold</span>
              <span className="font-mono text-blue-700">{cgpaCutoff.toFixed(2)} CGPA</span>
            </div>
            <input
              type="range"
              min="6.0"
              max="9.0"
              step="0.1"
              value={cgpaCutoff}
              onChange={(e) => setCgpaCutoff(parseFloat(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>Target Openings / Seats</span>
              <span className="font-mono text-blue-700">{openings} Positions</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={openings}
              onChange={(e) => setOpenings(parseInt(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={allowBacklogs}
                onChange={(e) => setAllowBacklogs(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 border-slate-300"
              />
              <span className="text-xs font-bold text-slate-700">Allow 1 Active Backlog</span>
            </label>
          </div>
        </div>

        {/* Outputs Panel */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-6">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-600" /> Projected Yield Estimates
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Eligible Students</span>
              <p className="text-2xl font-black text-slate-900 mt-1">{eligible}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Meets CGPA cutoff</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Expected Registrations</span>
              <p className="text-2xl font-black text-blue-700 mt-1">{expectedRegistrations}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">88% turnout rate</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Expected Shortlist</span>
              <p className="text-2xl font-black text-indigo-700 mt-1">{expectedShortlist}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Post test clearing</p>
            </div>

            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span className="text-[10px] font-bold text-emerald-800 uppercase">Estimated Selections</span>
              <p className="text-2xl font-black text-emerald-700 mt-1">{estimatedSelections}</p>
              <p className="text-[10px] text-emerald-800 font-semibold mt-0.5">Final Offers Yield</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
