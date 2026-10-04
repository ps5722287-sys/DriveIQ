import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw } from 'lucide-react';
import { mockStudents } from '../data/mockData';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  tableData?: any[];
}

export const AiCopilot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Hello Dr. Vardhan! I am your DriveIQ AI Placement Copilot. I can query real-time student cohorts, eligibility cutoffs, risk radar, and recruiter requirements. How can I assist your placement cell today?',
      timestamp: 'Just now'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const sampleQuestions = [
    "Which students are at high risk?",
    "Which companies have the largest talent pool?",
    "Which skills are most commonly missing?",
    "Show students eligible for TCS."
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setLoading(true);

    setTimeout(() => {
      let aiText = '';
      let tableData: any[] | undefined = undefined;

      const lower = query.toLowerCase();

      if (lower.includes('high risk') || lower.includes('at risk')) {
        const highRisk = mockStudents.filter((s) => s.riskLevel === 'High');
        aiText = `Found ${highRisk.length} high-risk students in the 2026 batch needing urgent academic & DSA remedial interventions:`;
        tableData = highRisk.map((s) => ({
          Name: s.name,
          Dept: s.department,
          CGPA: s.cgpa,
          Backlogs: s.backlogs,
          Reason: s.riskReason
        }));
      } else if (lower.includes('talent pool') || lower.includes('largest')) {
        aiText = `Infosys and TCS currently hold the largest eligible talent pools in the university:`;
        tableData = [
          { Company: 'Infosys', Role: 'Specialist Programmer', Eligible: '310 Students', Cutoff: '6.5 CGPA' },
          { Company: 'TCS', Role: 'Digital Engineer', Eligible: '240 Students', Cutoff: '7.0 CGPA' },
          { Company: 'Accenture', Role: 'App Assoc', Eligible: '290 Students', Cutoff: '6.5 CGPA' }
        ];
      } else if (lower.includes('missing') || lower.includes('skill')) {
        aiText = `Based on candidate profile audits, the top 3 missing skills across CSE & IT cohorts are System Design (26%), Kubernetes & Docker (37%), and AWS Cloud Basics (33%).`;
      } else if (lower.includes('tcs') || lower.includes('eligible for tcs')) {
        const tcsEligible = mockStudents.filter((s) => s.cgpa >= 7.0 && ['CSE', 'IT', 'ECE'].includes(s.department));
        aiText = `Found ${tcsEligible.length} students meeting the TCS Digital 7.0 CGPA cutoff criteria:`;
        tableData = tcsEligible.map((s) => ({
          Name: s.name,
          Department: s.department,
          CGPA: s.cgpa,
          Readiness: `${s.readinessScore}%`
        }));
      } else {
        aiText = `I have analyzed the query against our placement database. Currently 73.1% of eligible 2026 students are placed across 8 active recruiting drives. Let me know if you would like specific filters applied!`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        tableData
      };

      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md font-bold">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold">DriveIQ AI Placement Copilot</h2>
            <p className="text-xs text-slate-300">Natural language intelligence for university TPO decision support</p>
          </div>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="text-xs text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Clear Chat</span>
        </button>
      </div>

      {/* Suggested Questions Bar */}
      <div className="bg-slate-50 border-b border-slate-200 p-3 flex gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-400 uppercase py-1.5 shrink-0">Sample Queries:</span>
        {sampleQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="px-3 py-1 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 text-xs font-semibold rounded-lg shrink-0 transition-colors shadow-2xs cursor-pointer"
          >
            "{q}"
          </button>
        ))}
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 max-w-3xl ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 ${
                msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-4 rounded-2xl text-xs space-y-3 shadow-2xs ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none font-medium'
                  : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-none'
              }`}
            >
              <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

              {msg.tableData && (
                <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 p-2 mt-2">
                  <table className="w-full text-left text-[11px]">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase">
                        {Object.keys(msg.tableData[0]).map((key) => (
                          <th key={key} className="p-1.5">{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {msg.tableData.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          {Object.values(row).map((val: any, j) => (
                            <td key={j} className="p-1.5 font-semibold text-slate-800">{val}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <span className={`text-[10px] block text-right mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Sparkles className="w-4 h-4 animate-spin text-blue-600" />
            <span>DriveIQ Copilot analyzing data...</span>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask AI Copilot e.g., 'Which students are eligible for TCS?'"
            className="flex-1 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || loading}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <span>Ask AI</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
