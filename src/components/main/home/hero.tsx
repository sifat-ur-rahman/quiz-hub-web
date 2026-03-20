"use client";
import CountUp from "react-countup";
import { FiArrowRight } from "react-icons/fi";
import { MdAutoAwesome } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      {/* Background gradient elements */}
      <div className="bg-primary/10 animate-float absolute top-0 right-0 -z-10 h-96 w-96 rounded-full blur-3xl"></div>
      <div className="bg-accent/10 absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-in-up mx-auto max-w-3xl space-y-6 text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <MdAutoAwesome className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Welcome to QuizHub
            </span>
          </div> */}

          <h1 className="text-foreground text-5xl leading-tight font-bold md:text-6xl">
            Master Learning with
            <span className="text-primary"> Interactive Quizzes</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            QuizHub is a comprehensive platform designed for educators and
            students. Create engaging quizzes, manage assessments, and track
            progress all in one place.
          </p>

          <div className="flex flex-row justify-center gap-4 pt-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 group flex items-center justify-center gap-2 rounded-lg px-8 py-3 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
              Start Learning
              <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div>
              <p className="text-primary text-2xl font-bold">
                {" "}
                <CountUp
                  enableScrollSpy
                  duration={5}
                  separator=""
                  className="counter"
                  end={10}
                />
                K+
              </p>
              <p className="text-muted-foreground text-sm">Active Users</p>
            </div>
            <div>
              <p className="text-primary text-2xl font-bold">
                <CountUp
                  enableScrollSpy
                  duration={5}
                  separator=""
                  className="counter"
                  end={5}
                />
                K+
              </p>
              <p className="text-muted-foreground text-sm">Quizzes Created</p>
            </div>
            <div>
              <p className="text-primary text-2xl font-bold">
                <CountUp
                  enableScrollSpy
                  duration={5}
                  separator=""
                  className="counter"
                  end={98}
                />
                %
              </p>
              <p className="text-muted-foreground text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
