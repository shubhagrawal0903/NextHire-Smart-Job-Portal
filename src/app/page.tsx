"use client";
import FilterSidebar from '@/components/filter-side-bar';
import SearchInput from '@/components/search-input';
import React, { useState, useEffect, useContext } from 'react';
import JobCard from '@/components/cards/job-card';
import JobModal from '@/components/job-modal';
import { Context } from '@/components/context/theme-context';
import data from '@/data';

export default function Home() {
  const jobs = data?.data || [];
  const [search, setSearch] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const themeContext = useContext(Context);
  const { isDark } = themeContext || { isDark: false };

  // Simulate loading spinner for filtering
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [search, employmentType]);

  // Filter jobs by search and employment type
  const filteredJobs = jobs.filter((job: any) => {
    const matchesSearch = search === "" || job.job_title.toLowerCase().includes(search.toLowerCase()) || job.employer_name?.toLowerCase().includes(search.toLowerCase());
    const matchesType = employmentType === "" || job.job_employment_type?.toLowerCase() === employmentType.toLowerCase();
    return matchesSearch && matchesType;
  });

  // Accessibility: main role and aria-label
  return (
    <main className={`min-h-screen flex max-w-screen-2xl mx-auto transition-colors ${
      isDark 
        ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50'
    }`} role="main" aria-label="Job search main content">
      {/* Sidebar */}
      <aside className={`w-64 flex-shrink-0 shadow-xl py-10 px-6 flex flex-col justify-start border-r transition-colors ${
        isDark 
          ? 'bg-gradient-to-b from-gray-900/90 to-purple-900/80 backdrop-blur-lg border-purple-500/30' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl font-semibold mb-6 transition-colors ${
          isDark 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' 
            : 'text-gray-900'
        }`}>Employment type:</h2>
        <FilterSidebar onTypeChange={setEmploymentType} />
      </aside>

      {/* Main Content */}
      <section className="flex-1 min-w-0 px-4 md:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 transition-colors ${
              isDark 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400' 
                : 'text-gray-900'
            }`}>Job Listings</h1>
            <p className={`text-lg transition-colors ${
              isDark ? 'text-blue-200' : 'text-gray-600'
            }`}>Browse and apply for your next opportunity</p>
            <hr className={`mt-6 border-t-2 transition-colors ${
              isDark ? 'border-purple-500' : 'border-gray-200'
            }`} />
          </header>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10' aria-live="polite">
            {loading ? (
              <div className="w-full flex justify-center items-center py-20">
                <div className={`rounded-full h-16 w-16 border-t-4 border-r-4 shadow-lg transition-colors ${
                  isDark ? 'border-purple-500' : 'border-blue-500'
                }`} aria-label="Loading jobs"></div>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className={`text-center text-xl font-medium py-20 transition-colors ${
                isDark ? 'text-blue-200' : 'text-gray-500'
              }`}>No jobs found.</div>
            ) : (
              filteredJobs.map((job, index) => (
                <div 
                  key={job.job_id}
                  className={`rounded-xl shadow-lg p-6 border transition-colors ${
                    isDark 
                      ? 'bg-gradient-to-br from-gray-900/95 to-purple-900/80 backdrop-blur-lg border-purple-500/30' 
                      : 'bg-white border-gray-200 hover:shadow-xl'
                  }`}
                >
                  <JobCard
                    job={job}
                    onViewDetails={(job) => {
                      setSelectedJob(job);
                      setModalOpen(true);
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <JobModal job={selectedJob} open={modalOpen} onClose={() => setModalOpen(false)} />
      </section>
    </main>
  );
}