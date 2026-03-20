import { FiEye, FiHeart, FiTarget } from "react-icons/fi";

function AboutHero() {
  return (
    <>
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">About QuizHub</h1>
          <p className="text-xl leading-relaxed text-slate-700">
            QuizHub is a cutting-edge educational platform designed to
            revolutionize the way students learn, teachers teach, and exams are
            conducted online.
          </p>
        </div>
      </div>
      <div className="bg-linear-to-b from-emerald-50 to-teal-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Mission */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-100 transition-colors group-hover:bg-emerald-200">
                <FiTarget className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="leading-relaxed text-slate-600">
                To provide accessible, affordable, and high-quality online
                learning and assessment solutions for students worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal-100 transition-colors group-hover:bg-teal-200">
                <FiEye className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="leading-relaxed text-slate-600">
                To become the world's leading platform for interactive learning
                and secure online examinations, empowering millions of learners.
              </p>
            </div>

            {/* Values */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-100 transition-colors group-hover:bg-emerald-200">
                <FiHeart className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Our Values
              </h3>
              <p className="leading-relaxed text-slate-600">
                Excellence, Innovation, Integrity, and Inclusivity. We're
                committed to creating opportunities for all learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
