'use client';
import CountUp from 'react-countup';
import { FiArrowRight } from 'react-icons/fi';
import { MdAutoAwesome } from 'react-icons/md';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 animate-fade-in-up max-w-3xl mx-auto text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <MdAutoAwesome className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Welcome to QuizHub
            </span>
          </div> */}

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Master Learning with
            <span className="text-primary"> Interactive Quizzes</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            QuizHub is a comprehensive platform designed for educators and
            students. Create engaging quizzes, manage assessments, and track
            progress all in one place.
          </p>

          <div className="flex flex-row gap-4 pt-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              Start Learning
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div>
              <p className="text-2xl font-bold text-primary">
                {' '}
                <CountUp
                  enableScrollSpy
                  duration={5}
                  separator=""
                  className="counter"
                  end={10}
                />
                K+
              </p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">
                <CountUp
                  enableScrollSpy
                  duration={5}
                  separator=""
                  className="counter"
                  end={5}
                />
                K+
              </p>
              <p className="text-sm text-muted-foreground">Quizzes Created</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">
                <CountUp
                  enableScrollSpy
                  duration={5}
                  separator=""
                  className="counter"
                  end={98}
                />
                %
              </p>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
