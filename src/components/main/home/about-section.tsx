'use client';
import CountUp from 'react-countup';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

export default function AboutSection() {
  const statsData = [
    { number: '50', numExtra: 'K+', label: 'Active Users' },
    { number: '10', numExtra: 'K+', label: 'Quizzes Created' },
    { number: '500', numExtra: '+', label: 'Educational Institutions' },
    { number: '98', numExtra: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About QuizHub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing education through innovative assessment and learning
            technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="group animate-fade-in-up">
            <div className="h-full bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiTarget className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
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
            style={{ animationDelay: '100ms' }}
          >
            <div className="h-full bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiEye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
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
            style={{ animationDelay: '200ms' }}
          >
            <div className="h-full bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiHeart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
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
        <div className="grid md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
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
