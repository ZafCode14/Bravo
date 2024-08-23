"use client"
import Section from "@/components/sections";
import Image from "next/image";
import useWindowWidth from "@/hooks/width";
import Link from "next/link";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Download from "@/components/sections/download";
import HowItWorks from "@/components/sections/howItWorks";
import BuyBravo from "@/components/sections/buyBravo";
import Process from "@/components/sections/process";
import Video from "@/components/sections/video";
import Notebooks from "@/components/sections/notebooks";
import Footer from "@/components/sections/footer";

export default function Home() {
  const width = useWindowWidth();

  return (
    <main className="bg-color-white flex flex-col">
      <Header/>
      <Hero/>
      <Download/>
      <HowItWorks/>
      <BuyBravo/>
      <Process/>
      <Video/>
      <Notebooks/>
      <Footer/>
    </main>
  );
}
