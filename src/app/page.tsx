"use client";
import FilterSidebar from '@/components/filter-side-bar';
import SearchInput from '@/components/search-input';
import React, { useState, useEffect } from 'react';
import JobCard from '@/components/cards/job-card';
import JobModal from '@/components/job-modal';
import data from '@/data';

export default function Home() {
  const jobs = data?.data || [];
  const [search, setSearch] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 flex" role="main" aria-label="Job search main content">
      {/* Sidebar */}
      <aside className="min-w-64 bg-gradient-to-b from-gray-900/90 to-purple-900/80 backdrop-blur-lg shadow-2xl rounded-r-3xl py-10 px-6 flex flex-col justify-start border border-purple-500/30">
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Employment type:</h2>
        <FilterSidebar onTypeChange={setEmploymentType} />
      </aside>

      {/* Main Content */}
      <section className="flex-1 px-4 md:px-12 py-10">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">Job Listings</h1>
            <p className="text-blue-200 text-lg">Browse and apply for your next opportunity</p>
            <hr className="mt-6 border-gradient-to-r from-purple-500 to-cyan-500 border-t-2" />
          </header>
          <div className='flex flex-wrap justify-center gap-10 py-10' aria-live="polite">
            {loading ? (
              <div className="w-full flex justify-center items-center py-20">
                <div className="rounded-full h-16 w-16 border-t-4 border-r-4 border-purple-500 shadow-lg" aria-label="Loading jobs"></div>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center text-blue-200 text-xl font-medium py-20">No jobs found.</div>
            ) : (
              filteredJobs.map((job, index) => (
                <div 
                  key={job.job_id}
                  className="bg-gradient-to-br from-gray-900/95 to-purple-900/80 backdrop-blur-lg border border-purple-500/30 rounded-3xl shadow-2xl p-6 w-[350px]"
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