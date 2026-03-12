import React from 'react';
import { X } from 'lucide-react';

export default function SavedJobs({ savedJobs }) {
  return (
    <div className="w-80 shrink-0">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-[100px]">
        <h2 className="text-2xl font-bold text-gray-900 mb-5 text-center">Saved Jobs</h2>
        <div className="space-y-4">
          {savedJobs.map(job => (
            <div key={job.id} className="relative group bg-white border border-gray-100 rounded-xl p-4 flex gap-4 hover:border-gray-200 hover:shadow-sm transition cursor-pointer">
              <button className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition">
                <X className="w-4 h-4" />
              </button>
              <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-white border border-gray-100 overflow-hidden">
                <img src={job.logo} alt={job.company} className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base">{job.title}</h4>
                <p className="text-[13px] text-gray-500 mb-2">{job.company}</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[11px]">{job.type}</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[11px]">{job.salary.toLocaleString()} {job.currency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
