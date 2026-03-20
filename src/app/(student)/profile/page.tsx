"use client";

import { useState } from "react";
import {
  FiUser,
  FiActivity,
  FiAward,
  FiBook,
  FiFileText,
  FiMail,
  FiLogOut,
  FiMenu,
  FiX,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";
import Link from "next/link";

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { id: "personal", label: "Personal Info", icon: FiUser },
    { id: "analytics", label: "Student Analytics", icon: FiActivity },
    { id: "leaderboard", label: "Leaderboard", icon: FiAward },
    { id: "classes", label: "My Classes", icon: FiBook },
    { id: "requests", label: "Course Request", icon: FiFileText },
    { id: "certificates", label: "Certificates", icon: FiMail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfoSection />;
      case "analytics":
        return <AnalyticsSection />;
      case "leaderboard":
        return <LeaderboardSection />;
      case "classes":
        return <ClassesSection />;
      case "requests":
        return <RequestsSection />;
      case "certificates":
        return <CertificatesSection />;
      default:
        return <PersonalInfoSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${sidebarOpen ? "w-64" : "w-0"} overflow-hidden transition-all duration-300`}
        >
          <div className="fixed h-screen w-64 overflow-y-auto bg-gradient-to-b from-emerald-600 to-emerald-700 p-6 text-white">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg font-bold text-emerald-600">
                  Q
                </div>
                <h2 className="text-xl font-bold">QuizHub</h2>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-emerald-500/30 p-4">
              <p className="mb-1 text-sm text-emerald-100">Welcome Back!</p>
              <p className="text-lg font-bold">John Doe</p>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                      activeTab === item.id
                        ? "bg-white font-semibold text-emerald-600 shadow-lg"
                        : "text-emerald-100 hover:bg-emerald-500/30"
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-emerald-500 pt-8">
              <Link
                href="/"
                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-emerald-100 transition-all hover:bg-emerald-500/30"
              >
                <FiLogOut className="text-lg" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Header */}
          <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="rounded-lg p-2 transition hover:bg-emerald-50"
              >
                {sidebarOpen ? (
                  <FiX className="text-2xl text-emerald-600" />
                ) : (
                  <FiMenu className="text-2xl text-emerald-600" />
                )}
              </button>
              <h1 className="text-2xl font-bold text-slate-900">
                Student Profile
              </h1>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600" />
            </div>
          </header>

          {/* Content Area */}
          <main className="p-8">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
}

// Personal Info Section
function PersonalInfoSection() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-8 flex items-start gap-6">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">John Doe</h2>
            <p className="text-slate-600">Student ID: STU-2024-001</p>
            <p className="mt-2 font-semibold text-emerald-600">Active Member</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-600">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-600">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-600">Phone</label>
            <input
              type="tel"
              defaultValue="+1-234-567-8900"
              className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-600">
              Date of Birth
            </label>
            <input
              type="date"
              defaultValue="2005-01-15"
              className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-600">School</label>
            <input
              type="text"
              defaultValue="Central High School"
              className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-600">Grade</label>
            <input
              type="text"
              defaultValue="12th Grade"
              className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <button className="mt-8 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3 font-semibold text-white transition hover:shadow-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}

// Analytics Section
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            label: "Quizzes Taken",
            value: "24",
            color: "from-blue-500 to-blue-600",
          },
          {
            label: "Average Score",
            value: "78%",
            color: "from-emerald-500 to-emerald-600",
          },
          {
            label: "Study Hours",
            value: "124h",
            color: "from-purple-500 to-purple-600",
          },
          { label: "Rank", value: "#15", color: "from-amber-500 to-amber-600" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg`}
          >
            <p className="mb-2 text-sm text-white/80">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
          <FiTrendingUp className="text-emerald-600" />
          Subject Performance
        </h3>
        <div className="space-y-4">
          {[
            { subject: "Mathematics", score: 85 },
            { subject: "Physics", score: 72 },
            { subject: "Chemistry", score: 88 },
            { subject: "Biology", score: 76 },
            { subject: "English", score: 92 },
          ].map((item, index) => (
            <div key={index}>
              <div className="mb-2 flex justify-between">
                <span className="font-semibold text-slate-900">
                  {item.subject}
                </span>
                <span className="font-bold text-emerald-600">
                  {item.score}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Leaderboard Section
function LeaderboardSection() {
  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
        <FiAward className="text-emerald-600" />
        Top Students
      </h3>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((rank) => (
          <div
            key={rank}
            className={`flex items-center gap-4 rounded-lg border-2 p-4 ${rank === 1 ? "border-emerald-200 bg-emerald-50" : "border-slate-200"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${
                rank === 1
                  ? "bg-yellow-400 text-yellow-900"
                  : rank === 2
                    ? "bg-gray-400 text-white"
                    : rank === 3
                      ? "bg-orange-400 text-white"
                      : "bg-slate-300 text-slate-700"
              }`}
            >
              {rank}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Student {rank}</p>
              <p className="text-sm text-slate-600">
                Rank Score: {95 - rank * 5}%
              </p>
            </div>
            <FiStar className="text-xl text-amber-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Classes Section
function ClassesSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[
        { name: "Advanced Mathematics", instructor: "Dr. Smith", members: 28 },
        {
          name: "Physics Fundamentals",
          instructor: "Prof. Johnson",
          members: 32,
        },
        { name: "Chemistry Lab", instructor: "Dr. Williams", members: 24 },
        { name: "Biology Essentials", instructor: "Prof. Brown", members: 30 },
      ].map((cls, index) => (
        <div
          key={index}
          className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl"
        >
          <h3 className="mb-2 text-lg font-bold text-slate-900">{cls.name}</h3>
          <p className="mb-4 text-sm text-slate-600">
            Instructor: {cls.instructor}
          </p>
          <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-3">
            <span className="text-sm text-slate-600">Members</span>
            <span className="text-lg font-bold text-emerald-600">
              {cls.members}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Requests Section
function RequestsSection() {
  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h3 className="mb-6 text-xl font-bold text-slate-900">Course Requests</h3>
      <div className="space-y-4">
        {[
          { course: "Advanced Python", status: "pending", date: "2024-01-15" },
          { course: "Web Development", status: "approved", date: "2024-01-10" },
          {
            course: "Data Science 101",
            status: "rejected",
            date: "2024-01-05",
          },
        ].map((req, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
          >
            <div>
              <p className="font-semibold text-slate-900">{req.course}</p>
              <p className="text-sm text-slate-600">Requested: {req.date}</p>
            </div>
            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                req.status === "approved"
                  ? "bg-emerald-100 text-emerald-700"
                  : req.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"
              }`}
            >
              {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Certificates Section
function CertificatesSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[
        { name: "Mathematics Excellence", date: "2024-01-20", score: 95 },
        { name: "Physics Mastery", date: "2024-01-18", score: 88 },
        { name: "Chemistry Pro", date: "2024-01-15", score: 92 },
      ].map((cert, index) => (
        <div
          key={index}
          className="rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 text-center transition hover:shadow-lg"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-500">
            <FiAward className="text-2xl text-white" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-slate-900">{cert.name}</h3>
          <p className="mb-3 text-sm text-slate-600">Awarded: {cert.date}</p>
          <p className="text-2xl font-bold text-amber-600">{cert.score}%</p>
        </div>
      ))}
    </div>
  );
}
