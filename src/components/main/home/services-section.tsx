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
    <section className="bg-white px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-fade-in-up mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Our Services
            </span>
          </div>
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            What We Offer
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Comprehensive services designed to enhance your educational
            experience and maximize learning outcomes.
          </p>
        </div>

        {/* Services Grid with Unique Hover Effects */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all duration-300 hover:border-transparent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`h-16 w-16 rounded-xl bg-linear-to-br ${service.color} mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-foreground mb-3 text-2xl font-bold transition-all group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors group-hover:text-blue-600">
                    Learn more
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-2"
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
