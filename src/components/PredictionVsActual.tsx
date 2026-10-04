import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { mockPredictionVsActual } from '../data/mockData';

export const PredictionVsActual: React.FC = () => {
  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">AI Prediction vs Actual Placement Results</h1>
          <p className="text-xs text-slate-500 mt-1">
            Audit historical AI probability forecasts against real-world campus recruitment selection outcomes.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-black">
            Overall AI Model Accuracy: 91.4%
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase">
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Company & Role</th>
                <th className="py-3 px-4">AI Predicted Probability</th>
                <th className="py-3 px-4">Actual Drive Outcome</th>
                <th className="py-3 px-4">Model Validation</th>
                <th className="py-3 px-4">AI Variance Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockPredictionVsActual.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{item.studentName}</td>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-slate-900">{item.companyName}</p>
                    <p className="text-[10px] text-slate-500">{item.role}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-mono font-bold text-blue-700">{item.predictedProbability}%</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        item.actualResult === 'Selected'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {item.actualResult}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    {item.accuracy ? (
                      <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Accurate Prediction
                      </span>
                    ) : (
                      <span className="text-amber-600 font-bold flex items-center gap-1 text-[11px]">
                        <AlertCircle className="w-3.5 h-3.5" /> Variance
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 text-[11px]">{item.varianceNotes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
