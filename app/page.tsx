import Hero from "@/components/home/Hero";
import ExpertiseAreas from "@/components/home/ExpertiseAreas";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ComingSoon from "@/components/home/ComingSoon";
import ProcessSection from "@/components/home/ProcessSection";
import CtaBand from "@/components/ui/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseAreas />
      <FeaturedProjects />
      <ComingSoon />
      <ProcessSection tone="dark" />
      <CtaBand
        secondary={{ href: "/sobre-mi", label: "Conocer a Lissy" }}
      />
    </>
  );
}
