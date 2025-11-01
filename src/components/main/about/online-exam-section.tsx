import { FiCheckCircle, FiClock, FiLock } from 'react-icons/fi';

function OnlineExamSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className=" mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold  mb-4">
              Secure Online Exams
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conduct fair and secure online examinations with advanced
              proctoring and monitoring features.
            </p>
          </div>

          {/* Stacked Feature Boxes */}
          <div className="space-y-4">
            <div className="p-6 bg-linear-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow animate-fade-in-up">
              <div className="flex items-start gap-4">
                <FiLock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Advanced Proctoring
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered monitoring and secure exam environment to ensure
                    integrity.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 bg-linear-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              <div className="flex items-start gap-4">
                <FiClock className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Flexible Scheduling
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule exams at convenient times with customizable
                    duration options.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 bg-linear-to-r from-pink-50 to-pink-100 rounded-xl border-l-4 border-pink-600 hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-start gap-4">
                <FiCheckCircle className="w-6 h-6 text-pink-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Detailed Results
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
