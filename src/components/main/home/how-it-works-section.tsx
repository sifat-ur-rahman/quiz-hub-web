import { FiUserPlus, FiBookOpen, FiBarChart2 } from "react-icons/fi";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Create Your Free Account",
      description:
        "Sign up in minutes with your email and get instant access to all features",
      icon: FiUserPlus,
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: 2,
      title: "Choose Subject & Start Test",
      description:
        "Browse through various subjects and topics, then take your first test",
      icon: FiBookOpen,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      title: "See Your Performance Instantly",
      description:
        "Get detailed analytics and insights to track your progress and improve",
      icon: FiBarChart2,
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with QuizHub in three simple steps and begin your
            learning journey today.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line */}

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative animate-fade-in-up bg-secondary/20 border border-secondary/50 hover:border-secondary p-4 rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number Circle */}
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 rounded-full bg-linear-to-br ${step.color} mx-auto flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center font-bold text-emerald-600 text-lg">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Animation Box */}
                <div className="absolute inset-0 bg-emerald-50 rounded-2xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
