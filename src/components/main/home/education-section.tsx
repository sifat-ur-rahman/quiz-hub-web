import { FiBook, FiAward, FiTarget } from "react-icons/fi";

export default function EducationSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="mb-4 inline-block">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Education
              </span>
            </div>
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Comprehensive Learning Platform
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Empower educators and students with tools designed for modern
              learning and skill development.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 group flex items-center justify-center gap-2 rounded-lg px-8 py-3 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
              Explore Courses
            </button>
          </div>

          {/* Stacked Feature Boxes */}
          <div className="space-y-4">
            <div className="animate-fade-in-up rounded-xl border-l-4 border-blue-600 bg-linear-to-r from-blue-50 to-blue-100 p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-start gap-4">
                <FiBook className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
                <div>
                  <h3 className="text-foreground mb-1 text-lg font-bold">
                    Rich Learning Content
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Access comprehensive study materials, video tutorials, and
                    interactive resources.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-in-up rounded-xl border-l-4 border-purple-600 bg-linear-to-r from-purple-50 to-purple-100 p-6 transition-shadow hover:shadow-lg"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-start gap-4">
                <FiAward className="mt-1 h-6 w-6 shrink-0 text-purple-600" />
                <div>
                  <h3 className="text-foreground mb-1 text-lg font-bold">
                    Certification Programs
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Earn recognized certificates upon completion of courses and
                    assessments.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-in-up rounded-xl border-l-4 border-pink-600 bg-linear-to-r from-pink-50 to-pink-100 p-6 transition-shadow hover:shadow-lg"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-start gap-4">
                <FiTarget className="mt-1 h-6 w-6 shrink-0 text-pink-600" />
                <div>
                  <h3 className="text-foreground mb-1 text-lg font-bold">
                    Personalized Learning Paths
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
