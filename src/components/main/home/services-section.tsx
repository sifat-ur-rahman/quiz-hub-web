import { FiCode, FiUsers, FiBarChart2, FiHeadphones } from "react-icons/fi";

export default function ServicesSection() {
  const services = [
    {
      icon: FiCode,
      title: "Custom Quiz Builder",
      description:
        "Create unlimited quizzes with our intuitive drag-and-drop interface and advanced customization options.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiUsers,
      title: "Team Collaboration",
      description:
        "Work together with educators and students in real-time with our collaborative learning environment.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiBarChart2,
      title: "Advanced Analytics",
      description:
        "Get detailed insights into student performance with comprehensive reports and data visualization.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Support",
      description:
        "Our dedicated support team is always available to help you with any questions or issues.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services designed to enhance your educational
            experience and maximize learning outcomes.
          </p>
        </div>

        {/* Services Grid with Unique Hover Effects */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white border-2 border-gray-200 hover:border-transparent transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors">
                    Learn more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
