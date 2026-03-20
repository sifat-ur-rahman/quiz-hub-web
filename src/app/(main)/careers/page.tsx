"use client";

import {
  FiMapPin,
  FiDollarSign,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      salary: "$120K - $160K",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      salary: "$130K - $170K",
      type: "Full Time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      salary: "$90K - $130K",
      type: "Full Time",
    },
    {
      id: 4,
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      salary: "$50K - $80K",
      type: "Full Time",
    },
    {
      id: 5,
      title: "QA Engineer",
      department: "Quality Assurance",
      location: "Remote",
      salary: "$80K - $110K",
      type: "Full Time",
    },
    {
      id: 6,
      title: "Data Analyst",
      department: "Analytics",
      location: "New York, NY",
      salary: "$100K - $140K",
      type: "Full Time",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-primary-foreground px-4 py-20 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-slate-900 md:text-6xl">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-700">
            Help us revolutionize online learning and education
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Why Join QuizHub?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Flexible Work",
                desc: "Work remotely or from our offices with flexible hours",
              },
              {
                title: "Growth Opportunities",
                desc: "Career development and skill enhancement programs",
              },
              {
                title: "Great Benefits",
                desc: "Competitive salary, health insurance, and more",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 text-center transition-colors hover:bg-emerald-50"
              >
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:border-l-4 hover:border-l-emerald-500 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <FiBriefcase className="h-4 w-4 text-emerald-500" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin className="h-4 w-4 text-emerald-500" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiDollarSign className="h-4 w-4 text-emerald-500" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-2 font-semibold whitespace-nowrap text-white transition-colors hover:bg-emerald-600">
                    Apply Now
                    <FiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
