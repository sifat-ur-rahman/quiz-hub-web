'use client';

import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips to Ace Your Online Exams',
      excerpt:
        'Learn proven strategies to improve your performance in online assessments.',
      author: 'Sarah Johnson',
      date: 'Oct 25, 2024',
      category: 'Study Tips',
      image: '🎓',
    },
    {
      id: 2,
      title: 'The Future of Online Learning',
      excerpt:
        'Exploring how AI and technology are transforming education globally.',
      author: 'Mike Chen',
      date: 'Oct 20, 2024',
      category: 'Technology',
      image: '🚀',
    },
    {
      id: 3,
      title: 'Effective Time Management for Students',
      excerpt: 'Master the art of balancing studies, work, and personal life.',
      author: 'Emma Davis',
      date: 'Oct 15, 2024',
      category: 'Productivity',
      image: '⏰',
    },
    {
      id: 4,
      title: 'Success Stories from QuizHub Students',
      excerpt:
        'Real stories of students who achieved their dreams with QuizHub.',
      author: 'Admin',
      date: 'Oct 10, 2024',
      category: 'Success',
      image: '⭐',
    },
    {
      id: 5,
      title: 'Creating Engaging Quizzes: Best Practices',
      excerpt:
        'Guide for educators on designing effective and interactive quizzes.',
      author: 'James Wilson',
      date: 'Oct 5, 2024',
      category: 'Education',
      image: '📚',
    },
    {
      id: 6,
      title: 'Mental Health While Studying Online',
      excerpt:
        'Tips to maintain mental wellness during intense online learning periods.',
      author: 'Dr. Lisa',
      date: 'Sep 30, 2024',
      category: 'Wellness',
      image: '🧠',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            QuizHub Blog
          </h1>
          <p className="text-xl text-slate-700">
            Insights, tips, and stories from our learning community
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="h-48 bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="space-y-2 pb-4 border-b border-slate-200 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FiUser className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FiCalendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-100 transition-colors">
                    Read More
                    <FiArrowRight className="w-4 h-4" />
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
