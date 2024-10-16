"use client"
import Hero from "@/components/sections/hero";
import Download from "@/components/sections/download";
import HowItWorks from "@/components/sections/howItWorks";
import BuyBravo from "@/components/sections/buyBravo";
import Process from "@/components/sections/process";
import Video from "@/components/sections/video";
import Notebooks from "@/components/sections/notebooks";
import Ai from "@/components/sections/ai";

export default function Home() {
  return (
    <main className="bg-color-white flex flex-col">
      <Hero/>
      <Download/>
      <HowItWorks/>
      <BuyBravo/>
      <Ai/>
      <Process/>
      <Video/>
      <Notebooks/>
    </main>
  );
}
