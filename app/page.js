"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Background from "@/components/Background";
import IntroGate from "@/components/IntroGate";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [entered, setEntered] = useState(false);

  // Returning visitors (same browser session) skip the intro.
  useEffect(() => {
    if (sessionStorage.getItem("intro-seen") === "1") setEntered(true);
  }, []);

  // Lock background scroll while the intro gate is up.
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  const handleEnter = () => {
    sessionStorage.setItem("intro-seen", "1");
    setEntered(true);
  };

  return (
    <>
      <Background />
      <Sidebar />

      <div className="relative z-10">
        <TopNav />
        <main className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:ps-28 lg:pe-8">
          <section id="home" className="scroll-mt-28">
            <Hero />
            <Features />
          </section>
          <section id="work" className="scroll-mt-28 pt-24 sm:pt-32">
            <Work />
          </section>
          <section id="services" className="scroll-mt-28 pt-24 sm:pt-32">
            <Services />
          </section>
          <section id="about" className="scroll-mt-28 pt-24 sm:pt-32">
            <About />
          </section>
          <section id="contact" className="scroll-mt-28 pt-24 sm:pt-32">
            <Contact />
          </section>
        </main>
      </div>

      <AnimatePresence>
        {!entered && <IntroGate key="intro" onEnter={handleEnter} />}
      </AnimatePresence>
    </>
  );
}
