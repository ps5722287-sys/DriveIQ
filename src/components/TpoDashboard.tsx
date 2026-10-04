import React from 'react';
import {
  Users,
  UserCheck,
  Award,
  TrendingUp,
  Building2,
  AlertTriangle,
  ArrowUpRight,
  FileText,
  Sparkles,
  ChevronRight,
  FileUp,
  Sliders,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { placementTrendData, placementFunnelData, mockCompanyDrives, mockStudents } from '../data/mockData';
import type { NavigationTab } from '../types';

interface TpoDashboardProps {
  onSelectTab: (tab: NavigationTab) => void;
  onSelectStudent?: (studentId: string) => void;
}

export const TpoDashboard: React.FC<TpoDashboardProps> = ({ onSelectTab, onSelectStudent }) => {
  const atRiskStudentsList = mockStudents.filter((s) => s.riskLevel === 'High' || s.riskLevel === 'Medium');

  return (
    <div className="space-y-6 pb-8">
      {/* Top Banner / Welcome */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Placement Command Center</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
              Batch 2022-2026
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time university placement metrics, AI predictive analytics & student readiness tracking.
          </p>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => onSelectTab('resume-processing')}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
          >
            <FileUp className="w-4 h-4 text-slate-600" />
            <span>Bulk Upload CVs</span>
          </button>
          <button
            onClick={() => onSelectTab('matching')}
            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Run AI Matching</span>
          </button>
        </div>
      </div>

      {/* KPI CARDS GRID (6 Cards required by specs) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Total Students */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Students</span>
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">1,248</p>
          <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>5 Departments</span>
          </p>
        </div>

        {/* Eligible Students */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Eligible</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">936</p>
          <p className="text-[11px] text-blue-600 font-semibold mt-1">75.0% Criteria Fit</p>
        </div>

        {/* Placed Students */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Placed</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">684</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
            <ArrowUpRight className="w-3 h-3" />
            <span>+42 this month</span>
          </p>
        </div>

        {/* Placement Rate */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Placement Rate</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-blue-700 mt-2">73.1%</p>
          <p className="text-[11px] text-slate-500 mt-1">Target: 85.0%</p>
        </div>

        {/* Active Drives */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Drives</span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">8</p>
          <p className="text-[11px] text-sky-600 font-semibold mt-1">TCS, Deloitte, Infosys</p>
        </div>

        {/* At-Risk Students */}
        <div className="bg-white border border-amber-200 bg-amber-50/20 rounded-xl p-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">At-Risk</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-amber-700 mt-2">86</p>
          <p className="text-[11px] text-amber-800 font-semibold mt-1">Needs intervention</p>
        </div>
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placement Trend Chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Placement Trajectory & Monthly Trend</h3>
              <p className="text-xs text-slate-500">Cumulative students placed vs monthly placement cell targets</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span> Placed
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span> Target
              </span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={placementTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPlaced" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={{ stroke: '#cbd5e1' }} />
                <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={{ stroke: '#cbd5e1' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="placed" stroke="#2563eb" strokeWidth={2.5} fillOpacity={1} fill="url(#colorPlaced)" />
                <Area type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 4" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Placement Funnel */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">Placement Funnel</h3>
              <button
                onClick={() => onSelectTab('analytics')}
                className="text-xs text-blue-600 hover:underline font-semibold"
              >
                View Full
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">Conversion pipeline from registration to offer</p>
          </div>

          <div className="space-y-3">
            {placementFunnelData.map((item, idx) => {
              const pct = Math.round((item.count / 1248) * 100);
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700 truncate pr-2">{item.stage}</span>
                    <span className="text-slate-900 font-mono font-bold">{item.count} <span className="text-slate-400 text-[10px]">({pct}%)</span></span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, opacity: 1 - idx * 0.12 }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Overall Conversion: <strong className="text-slate-900">54.8%</strong></span>
            <span className="text-blue-600 font-semibold">High Retention</span>
          </div>
        </div>
      </div>

      {/* UPCOMING DRIVES & AT-RISK ALERTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Company Drives */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Active & Upcoming Company Drives</h3>
              <p className="text-xs text-slate-500">Campus drives currently scheduled or in progress</p>
            </div>
            <button
              onClick={() => onSelectTab('companies')}
              className="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-1"
            >
              <span>Manage All Drives</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-2.5 px-3">Company</th>
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3">Package</th>
                  <th className="py-2.5 px-3">Cutoff</th>
                  <th className="py-2.5 px-3">Drive Date</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockCompanyDrives.slice(0, 5).map((drive) => (
                  <tr key={drive.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">
                          {drive.companyName.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-900">{drive.companyName}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-slate-700 max-w-[150px] truncate">{drive.jobRole}</td>
                    <td className="py-3 px-3 font-semibold text-blue-700">{drive.packageLPA} LPA</td>
                    <td className="py-3 px-3 text-slate-600">{drive.cgpaCutoff} CGPA</td>
                    <td className="py-3 px-3 text-slate-600 font-medium">{drive.driveDate}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
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
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => onSelectTab('companies')}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* At-Risk Alert Widget */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">At-Risk Radar</h3>
              </div>
              <button
                onClick={() => onSelectTab('at-risk')}
                className="text-xs text-amber-700 font-semibold hover:underline"
              >
                View Radar
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              Students needing urgent academic or skill remediation prior to upcoming drives.
            </p>

            <div className="space-y-2.5">
              {atRiskStudentsList.slice(0, 3).map((stu) => (
                <div
                  key={stu.id}
                  onClick={() => onSelectStudent && onSelectStudent(stu.id)}
                  className="p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={stu.avatar} alt={stu.name} className="w-6 h-6 rounded-full object-cover" />
                      <span className="text-xs font-bold text-slate-900">{stu.name}</span>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        stu.riskLevel === 'High'
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {stu.riskLevel} Risk
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{stu.department} • CGPA: {stu.cgpa}</span>
                    <span>Readiness: {stu.readinessScore}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onSelectTab('at-risk')}
            className="w-full mt-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Assign Remedial Bootcamps (86 Students)</span>
          </button>
        </div>
      </div>

      {/* QUICK ACTIONS & PENDING RESUMES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Action Shortcuts */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-900 mb-3">TPO Quick Workflow Shortcuts</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onSelectTab('jd-analyzer')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left transition-all group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Analyze Recruiter JD</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Extract skill cutoffs & pool fit</p>
            </button>

            <button
              onClick={() => onSelectTab('drive-simulator')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left transition-all group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Sliders className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Simulate Drive Cutoff</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Model eligibility & selections</p>
            </button>

            <button
              onClick={() => onSelectTab('talent-pools')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left transition-all group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Company Talent Pools</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Shortlist candidates for TCS, Deloitte</p>
            </button>

            <button
              onClick={() => onSelectTab('reports')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left transition-all group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Export Reports</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Generate PDF/Excel for Management</p>
            </button>
          </div>
        </div>

        {/* Recent TPO Activity Log */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Recent Placement Cell Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-xs">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5"></div>
              <div>
                <p className="font-bold text-slate-800">Deloitte USI Drive Eligibility Approved</p>
                <p className="text-[11px] text-slate-500">180 CSE & IT students matched by DriveIQ AI engine • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5"></div>
              <div>
                <p className="font-bold text-slate-800">TCS Offer Letters Confirmed</p>
                <p className="text-[11px] text-slate-500">28 students received Digital & Ninja offer letters • 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5"></div>
              <div>
                <p className="font-bold text-slate-800">Bulk Resume Batch Processed</p>
                <p className="text-[11px] text-slate-500">45 resumes parsed with 96% AI confidence score • Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
