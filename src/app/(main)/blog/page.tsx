"use client";

import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips to Ace Your Online Exams",
      excerpt:
        "Learn proven strategies to improve your performance in online assessments.",
      author: "Sarah Johnson",
      date: "Oct 25, 2024",
      category: "Study Tips",
      image: "🎓",
    },
    {
      id: 2,
      title: "The Future of Online Learning",
      excerpt:
        "Exploring how AI and technology are transforming education globally.",
      author: "Mike Chen",
      date: "Oct 20, 2024",
      category: "Technology",
      image: "🚀",
    },
    {
      id: 3,
      title: "Effective Time Management for Students",
      excerpt: "Master the art of balancing studies, work, and personal life.",
      author: "Emma Davis",
      date: "Oct 15, 2024",
      category: "Productivity",
      image: "⏰",
    },
    {
      id: 4,
      title: "Success Stories from QuizHub Students",
      excerpt:
        "Real stories of students who achieved their dreams with QuizHub.",
      author: "Admin",
      date: "Oct 10, 2024",
      category: "Success",
      image: "⭐",
    },
    {
      id: 5,
      title: "Creating Engaging Quizzes: Best Practices",
      excerpt:
        "Guide for educators on designing effective and interactive quizzes.",
      author: "James Wilson",
      date: "Oct 5, 2024",
      category: "Education",
      image: "📚",
    },
    {
      id: 6,
      title: "Mental Health While Studying Online",
      excerpt:
        "Tips to maintain mental wellness during intense online learning periods.",
      author: "Dr. Lisa",
      date: "Sep 30, 2024",
      category: "Wellness",
      image: "🧠",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-slate-900 md:text-6xl">
            QuizHub Blog
          </h1>
          <p className="text-xl text-slate-700">
            Insights, tips, and stories from our learning community
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group animate-fade-in-up overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="flex h-48 items-center justify-center overflow-hidden bg-linear-to-br from-emerald-100 to-teal-100">
                  <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                    {post.image}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {post.category}
                  </span>
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-slate-600">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mb-4 space-y-2 border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FiUser className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FiCalendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-50 px-4 py-2 font-semibold text-emerald-600 transition-colors hover:bg-emerald-100">
                    Read More
                    <FiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
