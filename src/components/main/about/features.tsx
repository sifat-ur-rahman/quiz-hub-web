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
    <section id="features" className="px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Powerful Features
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Everything you need to create, manage, and excel with online
            assessments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border-border hover:border-primary/50 animate-fade-in-up rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                  <Icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
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
