"use client"

import { FiTarget, FiEye, FiHeart } from "react-icons/fi"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-emerald-600">
            QuizHub
          </a>
          <a href="/" className="text-slate-600 hover:text-emerald-600 transition-colors">
            ← Back Home
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">About QuizHub</h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            QuizHub is a cutting-edge educational platform designed to revolutionize the way students learn, teachers
            teach, and exams are conducted online.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                <FiTarget className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide accessible, affordable, and high-quality online learning and assessment solutions for
                students worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                <FiEye className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the world's leading platform for interactive learning and secure online examinations,
                empowering millions of learners.
              </p>
            </div>

            {/* Values */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                <FiHeart className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                Excellence, Innovation, Integrity, and Inclusivity. We're committed to creating opportunities for all
                learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white animate-fade-in-up">
              <p className="text-5xl font-bold mb-2">500K+</p>
              <p className="text-emerald-100">Active Students</p>
            </div>
            <div className="text-white animate-fade-in-up">
              <p className="text-5xl font-bold mb-2">50K+</p>
              <p className="text-emerald-100">Quizzes Created</p>
            </div>
            <div className="text-white animate-fade-in-up">
              <p className="text-5xl font-bold mb-2">150+</p>
              <p className="text-emerald-100">Countries</p>
            </div>
            <div className="text-white animate-fade-in-up">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-emerald-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
