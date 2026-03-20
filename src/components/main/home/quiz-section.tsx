import { FiHelpCircle, FiBarChart2, FiUsers } from "react-icons/fi";

export default function QuizSection() {
  return (
    <section className="bg-linear-to-br from-emerald-50 via-white to-emerald-50/30 px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-fade-in-up mb-16">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Quiz Management
            </span>
          </div>
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            Create & Manage Quizzes
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Build engaging quizzes with multiple question types, instant
            grading, and comprehensive analytics.
          </p>
        </div>

        {/* Horizontal Timeline Style Cards */}
        <div className="space-y-6">
          <div className="group animate-fade-in-up flex items-start gap-4 md:gap-6">
            <div className="shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-shadow group-hover:shadow-xl md:h-16 md:w-16">
                <FiHelpCircle className="h-5 w-5 md:h-8 md:w-8" />
              </div>
            </div>
            <div className="grow rounded-2xl border-2 border-emerald-200 bg-white p-4 transition-all group-hover:shadow-lg hover:border-emerald-400 md:p-6">
              <h3 className="text-foreground mb-2 text-2xl font-bold">
                Multiple Question Types
              </h3>
              <p className="text-muted-foreground">
                Support for multiple choice, true/false, short answer, and essay
                questions to create diverse assessments.
              </p>
            </div>
          </div>

          <div
            className="group animate-fade-in-up flex items-start gap-4 md:gap-6"
            style={{ animationDelay: "100ms" }}
          >
            <div className="shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-shadow group-hover:shadow-xl md:h-16 md:w-16">
                <FiBarChart2 className="h-5 w-5 md:h-8 md:w-8" />
              </div>
            </div>
            <div className="grow rounded-2xl border-2 border-emerald-200 bg-white p-4 transition-all group-hover:shadow-lg hover:border-emerald-400 md:p-6">
              <h3 className="text-foreground mb-2 text-2xl font-bold">
                Instant Grading
              </h3>
              <p className="text-muted-foreground">
                Automatic scoring and immediate feedback to help students learn
                faster and improve their performance.
              </p>
            </div>
          </div>

          <div
            className="group animate-fade-in-up flex items-start gap-4 md:gap-6"
            style={{ animationDelay: "200ms" }}
          >
            <div className="shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-shadow group-hover:shadow-xl md:h-16 md:w-16">
                <FiUsers className="h-5 w-5 md:h-8 md:w-8" />
              </div>
            </div>
            <div className="grow rounded-2xl border-2 border-emerald-200 bg-white p-4 transition-all group-hover:shadow-lg hover:border-emerald-400 md:p-6">
              <h3 className="text-foreground mb-2 text-2xl font-bold">
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
