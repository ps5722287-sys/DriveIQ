import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';

export const ReportsCenter: React.FC = () => {
  const reports = [
    { id: 1, title: 'Annual Placement Summary Report 2026', type: 'PDF', size: '2.4 MB', date: '2026-10-01', status: 'Verified' },
    { id: 2, title: 'Recruiter Drive Performance Breakdown', type: 'XLSX', size: '1.8 MB', date: '2026-09-28', status: 'Verified' },
    { id: 3, title: 'Student Readiness & Skill Audit', type: 'PDF', size: '3.1 MB', date: '2026-09-25', status: 'Verified' },
    { id: 4, title: 'At-Risk Student Remedial Registry', type: 'CSV', size: '540 KB', date: '2026-10-03', status: 'Active' },
    { id: 5, title: 'Skill Gap Assessment Heatmap', type: 'PDF', size: '4.0 MB', date: '2026-09-20', status: 'Verified' },
  ];

  const handleDownload = (reportTitle: string, format: string) => {
    alert(`Downloading ${reportTitle} in ${format} format...`);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Placement Reports & Management Export Hub</h1>
          <p className="text-xs text-slate-500 mt-1">
            Export comprehensive reports for Academic Council, Deans, & Recruiting Partners.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase">
                <th className="py-3 px-4">Report Name</th>
                <th className="py-3 px-4">Format</th>
                <th className="py-3 px-4">File Size</th>
                <th className="py-3 px-4">Last Generated</th>
                <th className="py-3 px-4">Audit Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reports.map((rep) => (
                <tr key={rep.id} className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>{rep.title}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-700">{rep.type}</td>
                  <td className="py-3.5 px-4 text-slate-500">{rep.size}</td>
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{rep.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[11px]">
                      {rep.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDownload(rep.title, 'PDF')}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3 h-3" /> View
                      </button>
                      <button
                        onClick={() => handleDownload(rep.title, rep.type)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="w-3 h-3" /> Download
                      </button>
                    </div>
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
