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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-foreground">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-700">
            Help us revolutionize online learning and education
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Join QuizHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="text-center p-6 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-l-4 hover:border-l-emerald-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <FiBriefcase className="w-4 h-4 text-emerald-500" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4 text-emerald-500" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiDollarSign className="w-4 h-4 text-emerald-500" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2 whitespace-nowrap">
                    Apply Now
                    <FiArrowRight className="w-4 h-4" />
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
