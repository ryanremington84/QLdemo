"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Productivity from "@/components/landing/productivity";
import { HeroSection } from "@/components/landing/hero";
import { features } from "@/db/features";
import { ChevronRight } from "lucide-react";
import Features from "@/components/landing/features";
import Explainer from "@/components/landing/explainer";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.3;
      setIsScrolled(window.scrollY > triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="w-full min-h-[200vh] cursor-pointer select-none">

      {/* Background */}
      <div className="w-full h-screen fixed top-0 left-0 bg-linear-to-b from-white to-slate-200 -z-10"></div>
      <div className="fixed z-0 bg-slate-400/10 w-[500px] h-[500px] blur-3xl top-40 left-40 animate-bounce"></div>
      <div className="fixed z-0 bg-slate-400/10 w-[500px] h-[500px] blur-3xl bottom-10 right-40 animate-bounce"></div>
      <div className="fixed z-0 bg-slate-400/10 w-[500px] h-[500px] blur-3xl top-60 left-180 animate-bounce"></div>
      <div className="fixed z-0 bg-slate-400/10 w-[500px] h-[500px] blur-3xl -bottom-80 left-80 animate-bounce"></div>
      {/* Navbar */}
      <div
        className={`w-full h-[70px] fixed top-0 left-0 z-50 transition-all duration-500 ${isScrolled ? "glass backdrop-blur-md bg-white/40 shadow-md border-b border-slate-200/40" : ""
          }`}
      >
        <div className="flex items-center justify-between container mx-auto h-full px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/assets/seo/ql_logo.png" className="w-8" />
              <img src="/images/assets/seo/ql_text.png" className="w-30" />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 duration-200"
              >
                Solutions
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 duration-200"
              >
                Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <HeroSection />
      <Productivity />
      <Features />
      <Explainer />
      <CTA />
      <Footer />
    </div>
  );
}