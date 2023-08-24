import Hero from "@/components/home/Hero";
import Deals from "@/components/home/Deals";
import HowItWorks from "./HowItWorks";
import Footer from "../globals/Footer";

export default function LandingPage() {
  return (
    <main className="">
      <Hero />
      <Deals />
      <HowItWorks />
    </main>
  );
}
