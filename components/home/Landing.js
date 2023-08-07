import Hero from "@/components/home/Hero";
import Why from "@/components/home/Why";
import ExploreDestinations from "@/components/home/ExploreDestinations";
import WorkWithUs from "./WorkWithUs";
import Perks from "./Perks";
import Footer from "../globals/Footer";

export default function LandingPage() {
  return (
    <main className="h-screen">
      <Hero />
      <Why />
      <ExploreDestinations />
      <Perks />
      <WorkWithUs />
      <Footer />
    </main>
  );
}
