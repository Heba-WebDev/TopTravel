import Hero from "@/components/home/Hero";
import Why from "@/components/home/Why";
import ExploreDestinations from "@/components/home/ExploreDestinations";

export default function LandingPage() {
  return (
    <main className="h-screen">
      <Hero />
      <Why />
      <ExploreDestinations />
    </main>
  );
}
