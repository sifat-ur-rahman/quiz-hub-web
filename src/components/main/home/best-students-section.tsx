"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiAward } from "react-icons/fi";

export default function BestStudentsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topStudents = [
    {
      id: 1,
      name: "Afsana Rahman",
      score: 98.5,
      courses: 12,
      avatar: "/best-students/14.png", // woman
      badge: "gold",
      streak: 45,
    },
    {
      id: 2,
      name: "Arif Chowdhury",
      score: 97.2,
      courses: 10,
      avatar: "/best-students/02.png", // man
      badge: "silver",
      streak: 38,
    },
    {
      id: 3,
      name: "Rafiul Islam",
      score: 96.8,
      courses: 11,
      avatar: "/best-students/06.png", // man
      badge: "bronze",
      streak: 42,
    },
    {
      id: 4,
      name: "Maliha Ahmed",
      score: 95.3,
      courses: 9,
      avatar: "/best-students/04.png", // woman
      badge: "star",
      streak: 35,
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      score: 94.7,
      courses: 8,
      avatar: "/best-students/05.png", // woman
      badge: "star",
      streak: 32,
    },
    {
      id: 6,
      name: "Tareq Hasan",
      score: 93.9,
      courses: 10,
      avatar: "/best-students/06.png", // man
      badge: "star",
      streak: 30,
    },
    {
      id: 7,
      name: "Mahmudul Karim",
      score: 92.5,
      courses: 7,
      avatar: "/best-students/07.png", // man
      badge: "star",
      streak: 28,
    },
    {
      id: 8,
      name: "Sakib Rahman",
      score: 91.8,
      courses: 9,
      avatar: "/best-students/08.png", // man
      badge: "star",
      streak: 25,
    },
    {
      id: 9,
      name: "Tanvir Alam",
      score: 90.6,
      courses: 8,
      avatar: "/best-students/09.png", // man
      badge: "star",
      streak: 22,
    },
    {
      id: 10,
      name: "Nayeem Uddin",
      score: 89.4,
      courses: 7,
      avatar: "/best-students/10.png", // man
      badge: "star",
      streak: 20,
    },
    {
      id: 11,
      name: "Rashed Khan",
      score: 91.8,
      courses: 9,
      avatar: "/best-students/11.png", // man
      badge: "star",
      streak: 25,
    },
    {
      id: 12,
      name: "Fahim Ahmed",
      score: 90.6,
      courses: 8,
      avatar: "/best-students/12.png", // man
      badge: "star",
      streak: 22,
    },
    {
      id: 13,
      name: "Sumaiya Akter",
      score: 89.4,
      courses: 7,
      avatar: "/best-students/03.png", // woman
      badge: "star",
      streak: 20,
    },
    {
      id: 14,
      name: "Nafisa Haque",
      score: 88.9,
      courses: 7,
      avatar: "/best-students/01.png", // woman
      badge: "star",
      streak: 19,
    },
    {
      id: 15,
      name: "Farhana Islam",
      score: 87.6,
      courses: 7,
      avatar: "/best-students/03.png", // woman
      badge: "star",
      streak: 18,
    },
    {
      id: 17,
      name: "Aminul Hoque",
      score: 86.4,
      courses: 7,
      avatar: "/best-students/09.png", // man
      badge: "star",
      streak: 17,
    },
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(topStudents.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleStudents = topStudents.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  const getBadgeDisplay = (badge: string) => {
    if (badge === "gold") return "🥇";
    if (badge === "silver") return "🥈";
    if (badge === "bronze") return "🥉";
    return "⭐";
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Top Achievers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Best Students
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Celebrate our top performers and their outstanding achievements.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Student Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleStudents.map((student, index) => (
              <div
                key={student.id}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-full bg-linear-to-br from-white to-emerald-50 rounded-2xl p-6 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/40">
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 text-3xl">
                    {getBadgeDisplay(student.badge)}
                  </div>

                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={student.avatar}
                        alt={student.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-4">
                      {student.score}%
                    </p>

                    {/* Stats */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                        <FiAward className="w-4 h-4 text-emerald-500" />
                        <span>{student.courses} courses completed</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                        <span className="text-orange-500">🔥</span>
                        <span>{student.streak} day streak</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-300 to-teal-300 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div
              onClick={prevSlide}
              className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <FiChevronLeft className="w-6 h-6" />
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-emerald-500 w-8"
                      : "bg-slate-300 w-2 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <div
              onClick={nextSlide}
              className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <FiChevronRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
