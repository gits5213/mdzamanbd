import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import VisionSection from "@/components/VisionSection";
import SocialActivities from "@/components/SocialActivities";
import ConstituencyInfo from "@/components/ConstituencyInfo";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <VisionSection />
      <SocialActivities />
      <ConstituencyInfo />
      <CallToAction />
    </>
  );
}

