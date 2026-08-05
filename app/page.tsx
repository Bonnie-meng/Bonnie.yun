import { Hero } from "@/components/sections/Hero";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { EducationBackground } from "@/components/sections/EducationBackground";
import { FeaturedBuild } from "@/components/sections/FeaturedBuild";
import { ProfessionalProof } from "@/components/sections/ProfessionalProof";
import { SelectedExperience } from "@/components/sections/SelectedExperience";
import { SelectedProfessionalWork } from "@/components/sections/SelectedProfessionalWork";
import { VibeCodingJourney } from "@/components/sections/VibeCodingJourney";
import { WhyAIProduct } from "@/components/sections/WhyAIProduct";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAIProduct />
      <ProfessionalProof />
      <SelectedExperience />
      <FeaturedBuild />
      <SelectedProfessionalWork />
      <AIWorkflow />
      <VibeCodingJourney />
      <EducationBackground />
      <Footer />
    </main>
  );
}
