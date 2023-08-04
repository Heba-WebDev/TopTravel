import Hero from "@/components/home/Hero";
import Why from "@/components/home/Why";
import ExploreDestinations from "@/components/home/ExploreDestinations";

export default function Home() {
  return (
    <main className="h-screen bg-orange-50">
      <Hero />
      <Why />
      <ExploreDestinations />
    </main>
  );
}
