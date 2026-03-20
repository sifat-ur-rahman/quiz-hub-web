import { FiCheckCircle, FiClock, FiLock } from "react-icons/fi";

function OnlineExamSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-in-up mb-16">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Secure Online Exams
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Conduct fair and secure online examinations with advanced
              proctoring and monitoring features.
            </p>
          </div>

          {/* Stacked Feature Boxes */}
          <div className="space-y-4">
            <div className="animate-fade-in-up rounded-xl border-l-4 border-blue-600 bg-linear-to-r from-blue-50 to-blue-100 p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-start gap-4">
                <FiLock className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
                <div>
                  <h3 className="text-foreground mb-1 text-lg font-bold">
                    Advanced Proctoring
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    AI-powered monitoring and secure exam environment to ensure
                    integrity.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-in-up rounded-xl border-l-4 border-purple-600 bg-linear-to-r from-purple-50 to-purple-100 p-6 transition-shadow hover:shadow-lg"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-start gap-4">
                <FiClock className="mt-1 h-6 w-6 shrink-0 text-purple-600" />
                <div>
                  <h3 className="text-foreground mb-1 text-lg font-bold">
                    Flexible Scheduling
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Schedule exams at convenient times with customizable
                    duration options.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-in-up rounded-xl border-l-4 border-pink-600 bg-linear-to-r from-pink-50 to-pink-100 p-6 transition-shadow hover:shadow-lg"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-start gap-4">
                <FiCheckCircle className="mt-1 h-6 w-6 shrink-0 text-pink-600" />
                <div>
                  <h3 className="text-foreground mb-1 text-lg font-bold">
                    Detailed Results
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive performance analytics and detailed reports for
                    progress tracking.
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

export default OnlineExamSection;
