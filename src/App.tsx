import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { LoginPage } from './components/LoginPage';
import { TpoDashboard } from './components/TpoDashboard';
import { StudentManagement } from './components/StudentManagement';
import { CompaniesManagement } from './components/CompaniesManagement';
import { ResumeProcessing } from './components/ResumeProcessing';
import { JdAnalyzer } from './components/JdAnalyzer';
import { StudentCompanyMatching } from './components/StudentCompanyMatching';
import { PlacementProbability } from './components/PlacementProbability';
import { SkillGapAnalysis } from './components/SkillGapAnalysis';
import { AtRiskStudents } from './components/AtRiskStudents';
import { TalentPools } from './components/TalentPools';
import { DriveSimulator } from './components/DriveSimulator';
import { WhatIfAnalysis } from './components/WhatIfAnalysis';
import { AnalyticsView } from './components/AnalyticsView';
import { PredictionVsActual } from './components/PredictionVsActual';
import { RecruiterFeedback } from './components/RecruiterFeedback';
import { AiCopilot } from './components/AiCopilot';
import { ReportsCenter } from './components/ReportsCenter';
import { ResumeCreator } from './components/ResumeCreator';
import { SettingsView } from './components/SettingsView';
import type { NavigationTab } from './types';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<NavigationTab>('dashboard');

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderCurrentView = () => {
    switch (currentTab) {
      case 'dashboard':
        return <TpoDashboard onSelectTab={setCurrentTab} />;
      case 'students':
        return <StudentManagement />;
      case 'companies':
        return <CompaniesManagement />;
      case 'resume-processing':
        return <ResumeProcessing />;
      case 'jd-analyzer':
        return <JdAnalyzer />;
      case 'matching':
        return <StudentCompanyMatching />;
      case 'placement-probability':
        return <PlacementProbability />;
      case 'skill-gap':
        return <SkillGapAnalysis />;
      case 'at-risk':
        return <AtRiskStudents />;
      case 'talent-pools':
        return <TalentPools />;
      case 'drive-simulator':
        return <DriveSimulator />;
      case 'what-if':
        return <WhatIfAnalysis />;
      case 'analytics':
        return <AnalyticsView />;
      case 'prediction-vs-actual':
        return <PredictionVsActual />;
      case 'recruiter-feedback':
        return <RecruiterFeedback />;
      case 'ai-copilot':
        return <AiCopilot />;
      case 'reports':
        return <ReportsCenter />;
      case 'resume-creator':
        return <ResumeCreator />;
      case 'settings':
        return <SettingsView />;
      default:
        return <TpoDashboard onSelectTab={setCurrentTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans antialiased">
      {/* Left Sidebar */}
      <Sidebar currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <Navbar
          onSelectTab={setCurrentTab}
          onLogout={() => setIsLoggedIn(false)}
        />

        {/* Dynamic Page Workspace */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {renderCurrentView()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
