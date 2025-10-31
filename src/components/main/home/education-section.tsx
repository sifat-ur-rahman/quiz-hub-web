import { FiBook, FiAward, FiTarget } from "react-icons/fi";

export default function EducationSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Education
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Learning Platform
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Empower educators and students with tools designed for modern
              learning and skill development.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Courses
            </button>
          </div>

          {/* Stacked Feature Boxes */}
          <div className="space-y-4">
            <div className="p-6 bg-linear-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow animate-fade-in-up">
              <div className="flex items-start gap-4">
                <FiBook className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Rich Learning Content
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Access comprehensive study materials, video tutorials, and
                    interactive resources.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 bg-linear-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-start gap-4">
                <FiAward className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Certification Programs
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Earn recognized certificates upon completion of courses and
                    assessments.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 bg-linear-to-r from-pink-50 to-pink-100 rounded-xl border-l-4 border-pink-600 hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-start gap-4">
                <FiTarget className="w-6 h-6 text-pink-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Personalized Learning Paths
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Customized recommendations based on your progress and
                    learning style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
