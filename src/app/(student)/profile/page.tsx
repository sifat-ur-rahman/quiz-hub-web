"use client"

import { useState } from "react"
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
} from "react-icons/fi"
import Link from "next/link"

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState("personal")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const sidebarItems = [
    { id: "personal", label: "Personal Info", icon: FiUser },
    { id: "analytics", label: "Student Analytics", icon: FiActivity },
    { id: "leaderboard", label: "Leaderboard", icon: FiAward },
    { id: "classes", label: "My Classes", icon: FiBook },
    { id: "requests", label: "Course Request", icon: FiFileText },
    { id: "certificates", label: "Certificates", icon: FiMail },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfoSection />
      case "analytics":
        return <AnalyticsSection />
      case "leaderboard":
        return <LeaderboardSection />
      case "classes":
        return <ClassesSection />
      case "requests":
        return <RequestsSection />
      case "certificates":
        return <CertificatesSection />
      default:
        return <PersonalInfoSection />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 overflow-hidden`}>
          <div className="h-screen bg-gradient-to-b from-emerald-600 to-emerald-700 text-white p-6 fixed w-64 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-emerald-600 font-bold text-lg">
                  Q
                </div>
                <h2 className="text-xl font-bold">QuizHub</h2>
              </div>
            </div>

            <div className="bg-emerald-500/30 rounded-lg p-4 mb-8">
              <p className="text-sm text-emerald-100 mb-1">Welcome Back!</p>
              <p className="text-lg font-bold">John Doe</p>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? "bg-white text-emerald-600 font-semibold shadow-lg"
                        : "text-emerald-100 hover:bg-emerald-500/30"
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            <div className="border-t border-emerald-500 mt-8 pt-8">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-emerald-100 hover:bg-emerald-500/30 transition-all w-full"
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
          <header className="bg-white border-b border-emerald-100 shadow-sm sticky top-0 z-40">
            <div className="px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-emerald-50 rounded-lg transition"
              >
                {sidebarOpen ? (
                  <FiX className="text-2xl text-emerald-600" />
                ) : (
                  <FiMenu className="text-2xl text-emerald-600" />
                )}
              </button>
              <h1 className="text-2xl font-bold text-slate-900">Student Profile</h1>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full" />
            </div>
          </header>

          {/* Content Area */}
          <main className="p-8">{renderContent()}</main>
        </div>
      </div>
    </div>
  )
}

// Personal Info Section
function PersonalInfoSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">John Doe</h2>
            <p className="text-slate-600">Student ID: STU-2024-001</p>
            <p className="text-emerald-600 font-semibold mt-2">Active Member</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm text-slate-600 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-2">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-2">Phone</label>
            <input
              type="tel"
              defaultValue="+1-234-567-8900"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-2">Date of Birth</label>
            <input
              type="date"
              defaultValue="2005-01-15"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-2">School</label>
            <input
              type="text"
              defaultValue="Central High School"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-2">Grade</label>
            <input
              type="text"
              defaultValue="12th Grade"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>

        <button className="mt-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
          Save Changes
        </button>
      </div>
    </div>
  )
}

// Analytics Section
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Quizzes Taken", value: "24", color: "from-blue-500 to-blue-600" },
          { label: "Average Score", value: "78%", color: "from-emerald-500 to-emerald-600" },
          { label: "Study Hours", value: "124h", color: "from-purple-500 to-purple-600" },
          { label: "Rank", value: "#15", color: "from-amber-500 to-amber-600" },
        ].map((stat, index) => (
          <div key={index} className={`bg-gradient-to-br ${stat.color} text-white rounded-xl shadow-lg p-6`}>
            <p className="text-sm text-white/80 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
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
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-900">{item.subject}</span>
                <span className="text-emerald-600 font-bold">{item.score}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full h-2"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Leaderboard Section
function LeaderboardSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <FiAward className="text-emerald-600" />
        Top Students
      </h3>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((rank) => (
          <div
            key={rank}
            className={`flex items-center gap-4 p-4 rounded-lg border-2 ${rank === 1 ? "border-emerald-200 bg-emerald-50" : "border-slate-200"}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
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
              <p className="text-sm text-slate-600">Rank Score: {95 - rank * 5}%</p>
            </div>
            <FiStar className="text-amber-500 text-xl" />
          </div>
        ))}
      </div>
    </div>
  )
}

// Classes Section
function ClassesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { name: "Advanced Mathematics", instructor: "Dr. Smith", members: 28 },
        { name: "Physics Fundamentals", instructor: "Prof. Johnson", members: 32 },
        { name: "Chemistry Lab", instructor: "Dr. Williams", members: 24 },
        { name: "Biology Essentials", instructor: "Prof. Brown", members: 30 },
      ].map((cls, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-bold text-slate-900 mb-2">{cls.name}</h3>
          <p className="text-sm text-slate-600 mb-4">Instructor: {cls.instructor}</p>
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
            <span className="text-sm text-slate-600">Members</span>
            <span className="text-lg font-bold text-emerald-600">{cls.members}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Requests Section
function RequestsSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Course Requests</h3>
      <div className="space-y-4">
        {[
          { course: "Advanced Python", status: "pending", date: "2024-01-15" },
          { course: "Web Development", status: "approved", date: "2024-01-10" },
          { course: "Data Science 101", status: "rejected", date: "2024-01-05" },
        ].map((req, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
            <div>
              <p className="font-semibold text-slate-900">{req.course}</p>
              <p className="text-sm text-slate-600">Requested: {req.date}</p>
            </div>
            <span
              className={`px-4 py-2 rounded-full font-semibold text-sm ${
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
  )
}

// Certificates Section
function CertificatesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { name: "Mathematics Excellence", date: "2024-01-20", score: 95 },
        { name: "Physics Mastery", date: "2024-01-18", score: 88 },
        { name: "Chemistry Pro", date: "2024-01-15", score: 92 },
      ].map((cert, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-8 text-center hover:shadow-lg transition"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <FiAward className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.name}</h3>
          <p className="text-sm text-slate-600 mb-3">Awarded: {cert.date}</p>
          <p className="text-2xl font-bold text-amber-600">{cert.score}%</p>
        </div>
      ))}
    </div>
  )
}
