"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiUser, FiLogOut, FiBell } from "react-icons/fi";

const courses = [
  {
    id: 1,
    name: "Mathematics",
    icon: "📐",
    color: "from-blue-400 to-blue-600",
    progress: 65,
  },
  {
    id: 2,
    name: "Physics",
    icon: "⚛️",
    color: "from-purple-400 to-purple-600",
    progress: 48,
  },
  {
    id: 3,
    name: "Chemistry",
    icon: "🧪",
    color: "from-emerald-400 to-emerald-600",
    progress: 72,
  },
  {
    id: 4,
    name: "Biology",
    icon: "🔬",
    color: "from-green-400 to-green-600",
    progress: 55,
  },
  {
    id: 5,
    name: "English",
    icon: "📖",
    color: "from-amber-400 to-amber-600",
    progress: 81,
  },
  {
    id: 6,
    name: "History",
    icon: "📜",
    color: "from-orange-400 to-orange-600",
    progress: 62,
  },
];

export default function StudentDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              Q
            </div>
            <h1 className="text-2xl font-bold text-emerald-600">QuizHub</h1>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-emerald-400 text-lg" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-emerald-200 bg-emerald-50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-emerald-50 rounded-lg transition">
              <FiBell className="text-emerald-600 text-lg" />
            </button>
            <Link
              href="/profile"
              className="p-2 hover:bg-emerald-50 rounded-lg transition"
            >
              <FiUser className="text-emerald-600 text-lg" />
            </Link>
            <button className="p-2 hover:bg-red-50 rounded-lg transition">
              <FiLogOut className="text-red-500 text-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome back, Student!
          </h2>
          <p className="text-slate-600">Choose a subject to start your quiz</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Link
              key={course.id}
              href={`/quiz/${course.id}`}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-gradient-to-br ${course.color} p-8 h-48 flex flex-col justify-between text-white relative overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />

                <div>
                  <span className="text-5xl mb-2">{course.icon}</span>
                  <h3 className="text-2xl font-bold mt-4">{course.name}</h3>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-bold">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              <div className="absolute bottom-4 right-4 bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Start Quiz →
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              No courses found matching "{searchQuery}"
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
