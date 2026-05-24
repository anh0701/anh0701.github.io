import AboutPanel from "@/components/dashboard/AboutPanel";
import BlogPanel from "@/components/dashboard/BlogPanel";
import ContactPanel from "@/components/dashboard/ContactPanel";
import FeaturedProject from "@/components/dashboard/FeaturedProject";
import HeroPanel from "@/components/dashboard/HeroPanel";
import ProjectGrid from "@/components/dashboard/ProjectGrid";
import StatsPanel from "@/components/dashboard/StatsPanel";
import DashboardLayout from "@/layout/DashboardLayout";

export default function HomePage() {
  return (
    <DashboardLayout>
      <HeroPanel />
      <StatsPanel />
      <FeaturedProject />
      <ProjectGrid />
      <BlogPanel />
      <AboutPanel />
      <ContactPanel />
    </DashboardLayout>
  );
}
