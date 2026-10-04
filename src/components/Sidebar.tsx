import React from 'react';
import {
  LayoutDashboard,
  Users,
  Building2,
  FileUp,
  FileSearch,
  GitCompare,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Layers,
  Cpu,
  Sliders,
  PieChart,
  CheckCircle2,
  MessageSquareQuote,
  Bot,
  FileSpreadsheet,
  FileText,
  Settings,
  GraduationCap
} from 'lucide-react';
import type { NavigationTab } from '../types';

interface SidebarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  isOpenMobile?: boolean;
}

interface NavItem {
  id: NavigationTab;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onSelectTab }) => {
  const mainNavItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'companies', label: 'Companies', icon: Building2 },
    { id: 'resume-processing', label: 'Resume Processing', icon: FileUp },
    { id: 'jd-analyzer', label: 'JD Analyzer', icon: FileSearch },
    { id: 'matching', label: 'Matching', icon: GitCompare },
    { id: 'placement-probability', label: 'Placement Probability', icon: TrendingUp },
    { id: 'skill-gap', label: 'Skill Gap', icon: BarChart3 },
    { id: 'at-risk', label: 'At-Risk Students', icon: AlertTriangle, badge: '86' },
    { id: 'talent-pools', label: 'Talent Pools', icon: Layers },
    { id: 'drive-simulator', label: 'Drive Simulator', icon: Cpu },
    { id: 'what-if', label: 'What-If Analysis', icon: Sliders },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'prediction-vs-actual', label: 'Prediction vs Actual', icon: CheckCircle2 },
    { id: 'recruiter-feedback', label: 'Recruiter Feedback', icon: MessageSquareQuote },
    { id: 'ai-copilot', label: 'AI Placement Copilot', icon: Bot, badge: 'AI' },
    { id: 'reports', label: 'Reports', icon: FileSpreadsheet },
    { id: 'resume-creator', label: 'Resume Creator', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 z-30 select-none shadow-xs">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-100 flex flex-col justify-center">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm font-bold text-lg">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">Drive<span className="text-blue-600">IQ</span></span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
              AI Placement Intelligence Platform
            </p>
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Placement Modules
        </div>
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 pl-2.5 shadow-xs font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    item.id === 'at-risk'
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* TPO Info Footer */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
            TPO
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-900 truncate">NIT Placement Cell</p>
            <p className="text-[11px] text-slate-500 truncate">Academic Year 2025-26</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
