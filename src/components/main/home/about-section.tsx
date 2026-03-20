"use client";
import CountUp from "react-countup";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

export default function AboutSection() {
  const statsData = [
    { number: "50", numExtra: "K+", label: "Active Users" },
    { number: "10", numExtra: "K+", label: "Quizzes Created" },
    { number: "500", numExtra: "+", label: "Educational Institutions" },
    { number: "98", numExtra: "%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="bg-linear-to-b from-white to-emerald-50 px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-fade-in-up mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
              About Us
            </span>
          </div>
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            About QuizHub
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Revolutionizing education through innovative assessment and learning
            technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Mission */}
          <div className="group animate-fade-in-up">
            <div className="h-full rounded-2xl border-2 border-emerald-200 bg-linear-to-br from-emerald-50 to-teal-50 p-8 transition-all hover:border-emerald-400 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 transition-transform group-hover:scale-110">
                <FiTarget className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower educators and students with cutting-edge tools that
                make learning more engaging, accessible, and effective for
                everyone.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className="group animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="h-full rounded-2xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-cyan-50 p-8 transition-all hover:border-blue-400 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 transition-transform group-hover:scale-110">
                <FiEye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where quality education is accessible to
                everyone, breaking down barriers and fostering a global
                community of learners.
              </p>
            </div>
          </div>

          {/* Values */}
          <div
            className="group animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="h-full rounded-2xl border-2 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50 p-8 transition-all hover:border-purple-400 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500 transition-transform group-hover:scale-110">
                <FiHeart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">
                Our Values
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in innovation, integrity, and inclusivity. We're
                committed to continuous improvement and putting our users first.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-emerald-400 hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-2 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                <CountUp
                  enableScrollSpy
                  duration={5}
                  separator=""
                  className="counter"
                  end={parseInt(stat.number)}
                />
                {stat.numExtra}
              </div>
              <p className="text-muted-foreground font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
