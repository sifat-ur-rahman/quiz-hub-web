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
    course.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-lg font-bold text-white">
              Q
            </div>
            <h1 className="text-2xl font-bold text-emerald-600">QuizHub</h1>
          </div>

          <div className="mx-8 max-w-md flex-1">
            <div className="relative">
              <FiSearch className="absolute top-3 left-3 text-lg text-emerald-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-emerald-200 bg-emerald-50 py-2 pr-4 pl-10 text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 transition hover:bg-emerald-50">
              <FiBell className="text-lg text-emerald-600" />
            </button>
            <Link
              href="/profile"
              className="rounded-lg p-2 transition hover:bg-emerald-50"
            >
              <FiUser className="text-lg text-emerald-600" />
            </Link>
            <button className="rounded-lg p-2 transition hover:bg-red-50">
              <FiLogOut className="text-lg text-red-500" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            Welcome back, Student!
          </h2>
          <p className="text-slate-600">Choose a subject to start your quiz</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <Link
              key={course.id}
              href={`/quiz/${course.id}`}
              className="group animate-fade-in-up relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-gradient-to-br ${course.color} relative flex h-48 flex-col justify-between overflow-hidden p-8 text-white`}
              >
                {/* Background decoration */}
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />

                <div>
                  <span className="mb-2 text-5xl">{course.icon}</span>
                  <h3 className="mt-4 text-2xl font-bold">{course.name}</h3>
                </div>

                <div className="relative z-10">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-bold">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/20">
                    <div
                      className="h-2 rounded-full bg-white transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
              <div className="absolute right-4 bottom-4 translate-y-2 transform rounded-lg bg-white px-4 py-2 font-semibold text-emerald-600 opacity-0 transition-opacity group-hover:translate-y-0 group-hover:opacity-100">
                Start Quiz →
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-slate-500">
              No courses found matching "{searchQuery}"
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
