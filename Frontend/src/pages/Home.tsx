import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoWall from "@/components/LogoWall";
import BentoGrid from "@/components/BentoGrid";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <LogoWall />
        <BentoGrid />
        <CTASection />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
