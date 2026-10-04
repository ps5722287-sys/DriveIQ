import React, { useState } from 'react';

export const WhatIfAnalysis: React.FC = () => {
  const [cutoff, setCutoff] = useState(7.5);
  const [requireReact, setRequireReact] = useState(false);
  const [openings, setOpenings] = useState(25);

  const baselineEligible = 936;

  const deltaCutoffEligible = Math.round(baselineEligible + (7.5 - cutoff) * 120);
  const finalEligible = requireReact ? Math.round(deltaCutoffEligible * 0.45) : deltaCutoffEligible;
  const projectedSelections = Math.min(openings, Math.round(finalEligible * 0.28));

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">What-If Policy Analysis Tool</h1>
          <p className="text-xs text-slate-500 mt-1">
            Simulate policy changes (CGPA cutoffs, skill certifications) and observe projected placement shifts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-6">
          <h3 className="text-sm font-bold text-slate-900">Scenario Parameter Toggles</h3>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>Modify CGPA Eligibility Cutoff</span>
              <span className="font-mono text-blue-700">{cutoff.toFixed(2)} CGPA</span>
            </div>
            <input
              type="range"
              min="6.0"
              max="9.0"
              step="0.25"
              value={cutoff}
              onChange={(e) => setCutoff(parseFloat(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>Adjust Target Job Openings</span>
              <span className="font-mono text-blue-700">{openings} Positions</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
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
                checked={requireReact}
                onChange={(e) => setRequireReact(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 border-slate-300"
              />
              <span className="text-xs font-bold text-slate-700">Mandate React / Node.js Certification</span>
            </label>
          </div>
        </div>

        {/* Results Comparison */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-6">
          <h3 className="text-sm font-bold text-slate-900">Baseline vs Scenario Outcome</h3>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Eligible Candidate Pool</span>
                <p className="text-xl font-black text-slate-900 mt-0.5">{finalEligible} Students</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500">Baseline: 936</span>
                <p className={`text-xs font-bold ${finalEligible >= 936 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {finalEligible >= 936 ? `+${finalEligible - 936}` : `${finalEligible - 936}`} difference
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-blue-900 uppercase">Projected Final Selections</span>
                <p className="text-xl font-black text-blue-700 mt-0.5">{projectedSelections} Offers</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-blue-800">Target Fill Rate</span>
                <p className="text-xs font-bold text-blue-900">
                  {Math.round((projectedSelections / openings) * 100)}% Capacity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
