"use client";

import AboutSection from "@/src/components/about-section";
import BestStudentsSection from "@/src/components/best-students-section";
import EducationSection from "@/src/components/education-section";
import Hero from "@/src/components/hero";
import HowItWorksSection from "@/src/components/how-it-works-section";
import QuizSection from "@/src/components/quiz-section";
import ServicesSection from "@/src/components/services-section";

export default function Home() {
  return (
    <>
      <Hero />
      <QuizSection />
      <EducationSection />
      <HowItWorksSection />
      <BestStudentsSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}
