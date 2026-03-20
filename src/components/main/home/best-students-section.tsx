"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiAward } from "react-icons/fi";

export default function BestStudentsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640)
        setItemsPerSlide(2); // very small screens
      else if (window.innerWidth < 1024)
        setItemsPerSlide(2); // mobile/tablet
      else setItemsPerSlide(4); // desktop
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topStudents = [
    {
      id: 1,
      name: "Afsana Rahman",
      score: 98.5,
      courses: 12,
      avatar: "/best-students/14.png",
      badge: "gold",
      streak: 45,
    },
    {
      id: 2,
      name: "Arif Chowdhury",
      score: 97.2,
      courses: 10,
      avatar: "/best-students/02.png",
      badge: "silver",
      streak: 38,
    },
    {
      id: 3,
      name: "Rafiul Islam",
      score: 96.8,
      courses: 11,
      avatar: "/best-students/16.png",
      badge: "bronze",
      streak: 42,
    },
    {
      id: 4,
      name: "Maliha Ahmed",
      score: 95.3,
      courses: 9,
      avatar: "/best-students/04.png",
      badge: "star",
      streak: 35,
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      score: 94.7,
      courses: 8,
      avatar: "/best-students/05.png",
      badge: "star",
      streak: 32,
    },
    {
      id: 6,
      name: "Tareq Hasan",
      score: 93.9,
      courses: 10,
      avatar: "/best-students/06.png",
      badge: "star",
      streak: 30,
    },
    {
      id: 7,
      name: "Mahmudul Karim",
      score: 92.5,
      courses: 7,
      avatar: "/best-students/07.png",
      badge: "star",
      streak: 28,
    },
    {
      id: 8,
      name: "Sakib Rahman",
      score: 91.8,
      courses: 9,
      avatar: "/best-students/08.png",
      badge: "star",
      streak: 25,
    },
    {
      id: 9,
      name: "Tanvir Alam",
      score: 90.6,
      courses: 8,
      avatar: "/best-students/09.png",
      badge: "star",
      streak: 22,
    },
    {
      id: 10,
      name: "Nayeem Uddin",
      score: 89.4,
      courses: 7,
      avatar: "/best-students/10.png",
      badge: "star",
      streak: 20,
    },
    {
      id: 11,
      name: "Rashed Khan",
      score: 91.8,
      courses: 9,
      avatar: "/best-students/11.png",
      badge: "star",
      streak: 25,
    },
    {
      id: 12,
      name: "Fahim Ahmed",
      score: 90.6,
      courses: 8,
      avatar: "/best-students/12.png",
      badge: "star",
      streak: 22,
    },
    {
      id: 13,
      name: "Sumaiya Akter",
      score: 89.4,
      courses: 7,
      avatar: "/best-students/15.png",
      badge: "star",
      streak: 20,
    },
    {
      id: 14,
      name: "Nafisa Haque",
      score: 88.9,
      courses: 7,
      avatar: "/best-students/01.png",
      badge: "star",
      streak: 19,
    },
    {
      id: 15,
      name: "Farhana Islam",
      score: 87.6,
      courses: 7,
      avatar: "/best-students/18.png",
      badge: "star",
      streak: 18,
    },
    {
      id: 17,
      name: "Aminul Hoque",
      score: 86.4,
      courses: 7,
      avatar: "/best-students/17.png",
      badge: "star",
      streak: 17,
    },
  ];

  const totalSlides = Math.ceil(topStudents.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleStudents = topStudents.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide,
  );

  const getBadgeDisplay = (badge: string) => {
    if (badge === "gold") return "🥇";
    if (badge === "silver") return "🥈";
    if (badge === "bronze") return "🥉";
    return "⭐";
  };

  return (
    <section className="bg-linear-to-b from-emerald-50 to-teal-50 px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Top Achievers
          </span>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Best Students
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Celebrate our top performers and their outstanding achievements.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="">
          {/* Student Cards Grid */}
          <div
            className={`grid grid-cols-2 gap-6 lg:grid-cols-${itemsPerSlide}`}
          >
            {visibleStudents.map((student, index) => (
              <div
                key={student.id}
                className="group relative rounded-2xl border border-emerald-200 bg-linear-to-br from-white to-emerald-50 p-6 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/40"
              >
                <div className="absolute -top-4 -right-4 text-3xl">
                  {getBadgeDisplay(student.badge)}
                </div>

                <div className="mb-4 flex justify-center">
                  <div className="h-24 w-24 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={student.avatar}
                      alt={student.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-1 text-lg font-bold text-slate-900 md:text-xl">
                    {student.name}
                  </h3>
                  <p className="mb-4 font-semibold text-emerald-600">
                    {student.score}%
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                      <FiAward className="h-4 w-4 text-emerald-500" />
                      <span>
                        {student.courses} courses
                        <span className="hidden md:inline"> completed</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                      <span className="text-orange-500">🔥</span>
                      <span>{student.streak} day streak</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="rounded-full bg-emerald-500 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-emerald-600"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-emerald-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="rounded-full bg-emerald-500 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-emerald-600"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
