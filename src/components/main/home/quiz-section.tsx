import { FiHelpCircle, FiBarChart2, FiUsers } from "react-icons/fi";

export default function QuizSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Quiz Management
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Create & Manage Quizzes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Build engaging quizzes with multiple question types, instant
            grading, and comprehensive analytics.
          </p>
        </div>

        {/* Horizontal Timeline Style Cards */}
        <div className="space-y-6">
          <div className="flex gap-4 md:gap-6 items-start group animate-fade-in-up">
            <div className="shrink-0">
              <div className="flex items-center justify-center h-10  md:h-16 w-10 md:w-16 rounded-full bg-emerald-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                <FiHelpCircle className="md:w-8 w-5 h-5 md:h-8" />
              </div>
            </div>
            <div className="grow p-4 md:p-6 bg-white rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all group-hover:shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Multiple Question Types
              </h3>
              <p className="text-muted-foreground">
                Support for multiple choice, true/false, short answer, and essay
                questions to create diverse assessments.
              </p>
            </div>
          </div>

          <div
            className="flex gap-4 md:gap-6 items-start group animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="shrink-0">
              <div className="flex items-center justify-center h-10  md:h-16 w-10 md:w-16 rounded-full bg-emerald-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                <FiBarChart2 className="md:w-8 w-5 h-5 md:h-8" />
              </div>
            </div>
            <div className="grow p-4 md:p-6 bg-white rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all group-hover:shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Instant Grading
              </h3>
              <p className="text-muted-foreground">
                Automatic scoring and immediate feedback to help students learn
                faster and improve their performance.
              </p>
            </div>
          </div>

          <div
            className="flex gap-4 md:gap-6 items-start group animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="shrink-0">
              <div className="flex items-center justify-center h-10  md:h-16 w-10 md:w-16 rounded-full bg-emerald-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                <FiUsers className="md:w-8 w-5 h-5 md:h-8" />
              </div>
            </div>
            <div className="grow p-4 md:p-6 bg-white rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all group-hover:shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Collaborative Learning
              </h3>
              <p className="text-muted-foreground">
                Share quizzes with classmates, compare results, and learn
                together in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
