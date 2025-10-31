"use client"

import { FiUsers, FiBarChart2, FiBook } from "react-icons/fi"

const roles = [
  {
    id: "admin",
    title: "Admin",
    description: "Manage the entire platform, users, and system settings with full control and oversight.",
    icon: FiUsers,
    features: ["User Management", "System Analytics", "Content Moderation", "Reports & Insights"],
    color: "from-primary to-primary/80",
    accentColor: "bg-primary/10",
  },
  {
    id: "examiner",
    title: "Examiner",
    description: "Create and manage quizzes, set questions, and evaluate student performance effectively.",
    icon: FiBarChart2,
    features: ["Create Quizzes", "Set Questions", "Grade Submissions", "Performance Tracking"],
    color: "from-accent to-accent/80",
    accentColor: "bg-accent/10",
  },
  {
    id: "student",
    title: "Student",
    description: "Take quizzes, track your progress, and improve your learning with instant feedback.",
    icon: FiBook,
    features: ["Take Quizzes", "View Results", "Track Progress", "Get Feedback"],
    color: "from-emerald-500 to-emerald-600",
    accentColor: "bg-emerald-100",
  },
]

export default function RoleCards() {
  return (
    <section id="roles" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Choose Your Role</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            QuizHub supports three distinct roles, each with powerful features tailored to their needs.
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <div key={role.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Header with gradient */}
                  <div className={`h-32 bg-gradient-to-r ${role.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-2 right-2 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                    </div>
                    <div className="relative h-full flex items-end p-6">
                      <div
                        className={`w-16 h-16 ${role.accentColor} rounded-xl flex items-center justify-center border-4 border-card`}
                      >
                        <Icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{role.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{role.description}</p>

                    {/* Features List */}
                    <div className="space-y-2 pt-4">
                      {role.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full mt-6 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg">
                      Get Started as {role.title}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
