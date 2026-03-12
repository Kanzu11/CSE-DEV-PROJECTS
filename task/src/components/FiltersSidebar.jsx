import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

export default function FiltersSidebar({ filters, setFilters }) {
  const handleJobTypeChange = (type) => {
    setFilters((prev) => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(type)
        ? prev.jobTypes.filter((t) => t !== type)
        : [...prev.jobTypes, type],
    }));
  };

  return (
    <div className="w-72 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 shrink-0">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Filter</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">Date Posted</label>
          <div className="relative">
            <select className="w-full appearance-none border border-gray-200 rounded-lg py-2.5 px-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0034d1]/20">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">Job Type</label>
          <div className="border border-gray-200 rounded-lg p-3 space-y-3">
            {['Full-time', 'Part-time', 'Contract', 'Volunteer', 'Internship', 'Remote', 'Hybrid', 'On-Site'].map(type => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters?.jobTypes?.includes(type) || false}
                  onChange={() => handleJobTypeChange(type)}
                  className="custom-checkbox w-4 h-4 rounded text-[#0034d1] focus:ring-[#0034d1] cursor-pointer"
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your location"
              value={filters?.location || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0034d1]/20"
            />
          </div>
        </div>
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">Experience Level</label>
          <div className="relative">
            <select
              value={filters?.experienceLevel || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, experienceLevel: e.target.value }))}
              className="w-full appearance-none border border-gray-200 rounded-lg py-2.5 px-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0034d1]/20">
              <option value="">Any</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-4">Salary Range</label>
          <div className="relative h-1 bg-gray-200 rounded-full mb-6 mt-6">
            <div className="absolute left-[10%] right-[30%] h-full bg-[#0034d1] rounded-full"></div>
            <div className="absolute left-[10%] -top-1.5 w-4 h-4 bg-[#0034d1] rounded-full shadow border-2 border-white cursor-pointer transform -translate-x-1/2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-medium">20</div>
            </div>
            <div className="absolute right-[30%] -top-1.5 w-4 h-4 bg-[#0034d1] rounded-full shadow border-2 border-white cursor-pointer transform translate-x-1/2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-medium">2,000</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-gray-600 font-medium tracking-wide">Input Manually</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 flex-1">
                <span className="text-sm text-gray-500">From</span>
                <input
                  type="number"
                  value={filters?.salaryFrom || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, salaryFrom: e.target.value }))}
                  className="w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-[#0034d1]"
                />
              </div>
              <div className="flex items-center gap-1.5 flex-1">
                <span className="text-sm text-gray-500">To</span>
                <input
                  type="number"
                  value={filters?.salaryTo || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, salaryTo: e.target.value }))}
                  className="w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-[#0034d1]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <label className="block text-[15px] font-medium text-gray-700 mb-2">Currency</label>
          <div className="relative">
            <select className="w-full appearance-none border border-gray-200 rounded-lg py-2.5 px-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0034d1]/20">
              <option>Dollar</option>
              <option>Euro</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <button
          onClick={() => setFilters({ jobTypes: [], location: '', experienceLevel: '', salaryFrom: '', salaryTo: '' })}
          className="w-full py-3 bg-[#0034d1] text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Reset all filter
        </button>
      </div>
    </div>
  );
}
