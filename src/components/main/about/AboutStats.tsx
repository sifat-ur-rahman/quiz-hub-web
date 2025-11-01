'use client';
import CountUp from 'react-countup';

function AboutStats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white animate-fade-in-up">
            <p className="text-5xl font-bold mb-2">
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
          <div className="text-white animate-fade-in-up">
            <p className="text-5xl font-bold mb-2">
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
          <div className="text-white animate-fade-in-up">
            <p className="text-5xl font-bold mb-2">
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
          <div className="text-white animate-fade-in-up">
            <p className="text-5xl font-bold mb-2">
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
