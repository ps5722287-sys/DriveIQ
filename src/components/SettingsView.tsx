import React, { useState } from 'react';
import { User, Building2, Bell, Cpu, ShieldCheck, Save } from 'lucide-react';
import { currentUser } from '../data/mockData';

export const SettingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'org' | 'notifications' | 'ai' | 'security'>('profile');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Platform Settings & Controls</h1>
          <p className="text-xs text-slate-500 mt-1">
            Configure TPO officer profiles, institution settings, AI matching weights & security.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Save className="w-4 h-4" />
          <span>{saved ? 'Changes Saved!' : 'Save Settings'}</span>
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden flex flex-col md:flex-row">
        {/* Left Tabs */}
        <div className="w-full md:w-56 bg-slate-50 border-r border-slate-200 p-3 space-y-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <User className="w-4 h-4" /> Profile Details
          </button>
          <button
            onClick={() => setActiveTab('org')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'org' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Building2 className="w-4 h-4" /> Organization
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Bell className="w-4 h-4" /> Notifications
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'ai' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-4 h-4" /> AI Matching Model
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'security' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> Security & API
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-6 space-y-4">
          {activeTab === 'profile' && (
            <div className="space-y-4 max-w-lg">
              <h3 className="text-sm font-bold text-slate-900">TPO Officer Information</h3>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase">Name</label>
                <input type="text" defaultValue={currentUser.name} className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase">Email</label>
                <input type="email" defaultValue={currentUser.email} className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase">Designation</label>
                <input type="text" defaultValue={currentUser.title} className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold" />
              </div>
            </div>
          )}

          {activeTab === 'org' && (
            <div className="space-y-4 max-w-lg">
              <h3 className="text-sm font-bold text-slate-900">University Details</h3>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase">Institution Name</label>
                <input type="text" defaultValue={currentUser.collegeName} className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold" />
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-4 max-w-lg">
              <h3 className="text-sm font-bold text-slate-900">AI Model Weights Configuration</h3>
              <p className="text-xs text-slate-500">Adjust how DriveIQ balances CGPA vs Technical Skills in match calculations.</p>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">CGPA Cutoff Weight (40%)</label>
                <input type="range" defaultValue={40} className="w-full accent-blue-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Technical Skills Match Weight (60%)</label>
                <input type="range" defaultValue={60} className="w-full accent-blue-600" />
              </div>
            </div>
          )}

          {(activeTab === 'notifications' || activeTab === 'security') && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 font-semibold">
              Default university security & notifications policies active.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
