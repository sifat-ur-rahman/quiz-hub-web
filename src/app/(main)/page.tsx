'use client';

import AboutSection from '@/src/components/main/home/about-section';
import BestStudentsSection from '@/src/components/main/home/best-students-section';
import EducationSection from '@/src/components/main/home/education-section';
import Hero from '@/src/components/main/home/hero';
import HowItWorksSection from '@/src/components/main/home/how-it-works-section';
import QuizSection from '@/src/components/main/home/quiz-section';
import ServicesSection from '@/src/components/main/home/services-section';

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
