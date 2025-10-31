"use client";

import AboutSection from "../components/about-section";
import BestStudentsSection from "../components/best-students-section";
import EducationSection from "../components/education-section";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import HowItWorksSection from "../components/how-it-works-section";
import QuizSection from "../components/quiz-section";
import ServicesSection from "../components/services-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <QuizSection />
      <EducationSection />
      <HowItWorksSection />
      <BestStudentsSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
