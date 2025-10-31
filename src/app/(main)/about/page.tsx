import AboutHero from "@/src/components/main/about/AboutHero";
import AboutMission from "@/src/components/main/about/AboutMission";
import AboutStats from "@/src/components/main/about/AboutStats";
import Features from "@/src/components/main/about/features";
import OnlineExamSection from "@/src/components/main/about/online-exam-section";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <Features />
      <OnlineExamSection />
    </>
  );
}
