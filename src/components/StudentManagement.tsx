import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, Eye, UserPlus, Download } from 'lucide-react';
import { mockStudents } from '../data/mockData';
import type { Student } from '../types';
import { StudentProfileModal } from './StudentProfileModal';

export const StudentManagement: React.FC = () => {
  const [students] = useState<Student[]>(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Filters state
  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [riskFilter, setRiskFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'cgpa' | 'name' | 'readiness'>('cgpa');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Filtered & Sorted list
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.id.toLowerCase().includes(search.toLowerCase()) ||
        s.skills.some((sk) => sk.toLowerCase().includes(search.toLowerCase()));

      const matchesDept = departmentFilter === 'All' || s.department === departmentFilter;
      const matchesStatus = statusFilter === 'All' || s.placementStatus === statusFilter;
      const matchesRisk = riskFilter === 'All' || s.riskLevel === riskFilter;

      return matchesSearch && matchesDept && matchesStatus && matchesRisk;
    }).sort((a, b) => {
      let comp = 0;
      if (sortBy === 'cgpa') comp = a.cgpa - b.cgpa;
      if (sortBy === 'name') comp = a.name.localeCompare(b.name);
      if (sortBy === 'readiness') comp = a.readinessScore - b.readinessScore;
      return sortOrder === 'asc' ? comp : -comp;
    });
  }, [students, search, departmentFilter, statusFilter, riskFilter, sortBy, sortOrder]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredStudents.slice(start, start + itemsPerPage);
  }, [filteredStudents, currentPage]);

  const toggleSort = (type: 'cgpa' | 'name' | 'readiness') => {
    if (sortBy === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder('desc');
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Student Directory & Profiles</h1>
          <p className="text-xs text-slate-500 mt-1">
            Comprehensive student cohort database with CGPA, verified skill matrix, readiness scores & risk audit.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer">
            <Download className="w-4 h-4 text-slate-600" />
            <span>Export CSV</span>
          </button>
          <button className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
            <UserPlus className="w-4 h-4" />
            <span>Add Student</span>
          </button>
        </div>
      </div>

      {/* SEARCH AND FILTERS BAR */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative md:col-span-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              placeholder="Search name, ID or skill..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* Department Filter */}
          <div>
            <select
              value={departmentFilter}
              onChange={(e) => { setDepartmentFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
            >
              <option value="All">All Departments</option>
              <option value="CSE">CSE (Computer Science)</option>
              <option value="IT">IT (Information Tech)</option>
              <option value="ECE">ECE (Electronics & Comm)</option>
              <option value="EEE">EEE (Electrical)</option>
              <option value="Mechanical">Mechanical Eng</option>
            </select>
          </div>

          {/* Placement Status Filter */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
            >
              <option value="All">All Placement Statuses</option>
              <option value="Placed">Placed</option>
              <option value="In Process">In Process</option>
              <option value="Unplaced">Unplaced</option>
              <option value="Not Eligible">Not Eligible</option>
            </select>
          </div>

          {/* Risk Level Filter */}
          <div>
            <select
              value={riskFilter}
              onChange={(e) => { setRiskFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
            >
              <option value="All">All Risk Levels</option>
              <option value="Low">Low Risk</option>
              <option value="Medium">Medium Risk</option>
              <option value="High">High Risk</option>
            </select>
          </div>
        </div>
      </div>

      {/* MAIN STUDENTS TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Student ID</th>
                <th
                  onClick={() => toggleSort('name')}
                  className="py-3 px-4 cursor-pointer hover:text-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Student Name</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3 px-4">Dept</th>
                <th
                  onClick={() => toggleSort('cgpa')}
                  className="py-3 px-4 cursor-pointer hover:text-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>CGPA</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3 px-4">Skills</th>
                <th className="py-3 px-4">Placement Status</th>
                <th
                  onClick={() => toggleSort('readiness')}
                  className="py-3 px-4 cursor-pointer hover:text-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Readiness</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3 px-4">Risk Level</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((stu) => (
                  <tr
                    key={stu.id}
                    onClick={() => setSelectedStudent(stu)}
                    className="hover:bg-blue-50/40 cursor-pointer transition-colors group"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-slate-600">{stu.id}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <img src={stu.avatar} alt={stu.name} className="w-7 h-7 rounded-full object-cover border border-slate-200" />
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{stu.name}</p>
                          <p className="text-[10px] text-slate-400">{stu.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700 text-[11px]">
                        {stu.department}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">{stu.cgpa.toFixed(2)}</td>
                    <td className="py-3 px-4 max-w-[200px]">
                      <div className="flex flex-wrap gap-1">
                        {stu.skills.slice(0, 3).map((sk, idx) => (
                          <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-medium">
                            {sk}
                          </span>
                        ))}
                        {stu.skills.length > 3 && (
                          <span className="text-[10px] text-slate-400 font-semibold">+{stu.skills.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 ${
                          stu.placementStatus === 'Placed'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : stu.placementStatus === 'In Process'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : stu.placementStatus === 'Unplaced'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}
                      >
                        {stu.placementStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-24">
                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-0.5">
                          <span>{stu.readinessScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-1.5 rounded-full ${
                              stu.readinessScore >= 85
                                ? 'bg-blue-600'
                                : stu.readinessScore >= 60
                                ? 'bg-amber-500'
                                : 'bg-red-500'
                            }`}
                            style={{ width: `${stu.readinessScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          stu.riskLevel === 'High'
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : stu.riskLevel === 'Medium'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {stu.riskLevel}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStudent(stu);
                        }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-md font-bold text-xs transition-colors flex items-center gap-1 ml-auto cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Profile</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-slate-400">
                    No students match the selected filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-900">{Math.min(filteredStudents.length, (currentPage - 1) * itemsPerPage + 1)}</strong> to{' '}
            <strong className="text-slate-900">{Math.min(filteredStudents.length, currentPage * itemsPerPage)}</strong> of{' '}
            <strong className="text-slate-900">{filteredStudents.length}</strong> students
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2.5 py-1 bg-white border border-slate-200 rounded text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-bold text-slate-700">Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2.5 py-1 bg-white border border-slate-200 rounded text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Student Profile Modal */}
      <StudentProfileModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
    </div>
  );
};
