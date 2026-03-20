"use client";
import CountUp from "react-countup";

function AboutStats() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          <div className="animate-fade-in-up text-white">
            <p className="mb-2 text-5xl font-bold">
              <CountUp
                enableScrollSpy
                duration={5}
                separator=""
                className="counter"
                end={500}
              />
              K+
            </p>
            <p className="text-emerald-100">Active Students</p>
          </div>
          <div className="animate-fade-in-up text-white">
            <p className="mb-2 text-5xl font-bold">
              <CountUp
                enableScrollSpy
                duration={5}
                separator=""
                className="counter"
                end={50}
              />
              K+
            </p>
            <p className="text-emerald-100">Quizzes Created</p>
          </div>
          <div className="animate-fade-in-up text-white">
            <p className="mb-2 text-5xl font-bold">
              <CountUp
                enableScrollSpy
                duration={5}
                separator=""
                className="counter"
                end={150}
              />
              +
            </p>
            <p className="text-emerald-100">Countries</p>
          </div>
          <div className="animate-fade-in-up text-white">
            <p className="mb-2 text-5xl font-bold">
              <CountUp
                enableScrollSpy
                duration={5}
                separator=""
                className="counter"
                end={98}
              />
              %
            </p>
            <p className="text-emerald-100">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;
