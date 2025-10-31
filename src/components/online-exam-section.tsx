"use client"

import { FiLock, FiClock, FiCheckCircle } from "react-icons/fi"

export default function OnlineExamSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold">
              Secure Exams
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Secure Online Exams</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Conduct fair and secure online examinations with advanced proctoring and monitoring features.
          </p>
        </div>

        {/* Circular Feature Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800 rounded-full p-8 border border-slate-700 group-hover:border-amber-500 transition-colors flex flex-col items-center justify-center min-h-64">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/40 transition-colors">
                  <FiLock className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">Advanced Proctoring</h3>
                <p className="text-slate-300 text-center text-sm">
                  AI-powered monitoring and secure exam environment to ensure integrity.
                </p>
              </div>
            </div>
          </div>

          <div className="group animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800 rounded-full p-8 border border-slate-700 group-hover:border-cyan-500 transition-colors flex flex-col items-center justify-center min-h-64">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/40 transition-colors">
                  <FiClock className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">Flexible Scheduling</h3>
                <p className="text-slate-300 text-center text-sm">
                  Schedule exams at convenient times with customizable duration options.
                </p>
              </div>
            </div>
          </div>

          <div className="group animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800 rounded-full p-8 border border-slate-700 group-hover:border-green-500 transition-colors flex flex-col items-center justify-center min-h-64">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/40 transition-colors">
                  <FiCheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">Detailed Results</h3>
                <p className="text-slate-300 text-center text-sm">
                  Comprehensive performance analytics and detailed reports for progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
