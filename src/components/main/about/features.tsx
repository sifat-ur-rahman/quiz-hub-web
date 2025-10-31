import { FiZap, FiShield, FiTrendingUp, FiClock } from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast quiz creation and instant result processing.",
  },
  {
    icon: FiShield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security to protect all your data and assessments.",
  },
  {
    icon: FiTrendingUp,
    title: "Advanced Analytics",
    description:
      "Detailed insights and reports to track performance and progress.",
  },
  {
    icon: FiClock,
    title: "Real-time Updates",
    description:
      "Live notifications and instant feedback for all participants.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and excel with online
            assessments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
