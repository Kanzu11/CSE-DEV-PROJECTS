import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FiltersSidebar from '../components/FiltersSidebar';
import JobListings from '../components/JobListings';
import SavedJobs from '../components/SavedJobs';
import { jobs, savedJobs } from '../data/dummyData';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Job Search');

  // Search bar state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  // Sidebar filters state
  const [filters, setFilters] = useState({
    jobTypes: [],
    location: '',
    experienceLevel: '',
    salaryFrom: '',
    salaryTo: ''
  });

  const filteredJobs = jobs.filter(job => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      if (!job.title.toLowerCase().includes(q) &&
        !job.company.toLowerCase().includes(q) &&
        !job.description.toLowerCase().includes(q)) {
        return false;
      }
    }

    if (searchLocation) {
      if (!job.location.toLowerCase().includes(searchLocation.toLowerCase())) return false;
    }

    if (filters.location) {
      if (!job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    }

    if (filters.jobTypes.length > 0) {
      if (!filters.jobTypes.includes(job.type)) return false;
    }

    if (filters.experienceLevel && filters.experienceLevel !== 'Any') {
      if (job.experienceLevel !== filters.experienceLevel) return false;
    }

    if (filters.salaryFrom) {
      if (job.salary < Number(filters.salaryFrom)) return false;
    }

    if (filters.salaryTo) {
      if (job.salary > Number(filters.salaryTo)) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FC] font-sans">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeroSection />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
        />
        <div className="flex gap-8 items-start -mt-8">
          <FiltersSidebar filters={filters} setFilters={setFilters} />
          <JobListings jobs={filteredJobs} />
          <SavedJobs savedJobs={savedJobs} />
        </div>
      </div>
    </div>
  );
}
