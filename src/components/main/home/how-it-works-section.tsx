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
    <section className="bg-linear-to-b from-white via-emerald-50 to-white px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-fade-in-up mb-20 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Simple Process
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Get started with QuizHub in three simple steps and begin your
            learning journey today.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Connection Line */}

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="animate-fade-in-up bg-secondary/20 border-secondary/50 hover:border-secondary relative rounded-lg border p-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number Circle */}
                <div className="relative mb-8">
                  <div
                    className={`h-20 w-20 rounded-full bg-linear-to-br ${step.color} mx-auto flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-emerald-500 bg-white text-lg font-bold text-emerald-600">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Hover Animation Box */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-emerald-50 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="rounded-lg bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
