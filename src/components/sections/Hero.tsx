"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "176,821", label: "Organic Clicks Analysed" },
  { value: "R3.28M", label: "Ad Spend Reviewed" },
  { value: "37 → 70", label: "SEO Score Target" },
  { value: "32", label: "Revenue-Driving Actions" },
  { value: "4.7M", label: "Impressions Not Converting" },
];

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      // Move the background image at 40% of scroll speed for parallax
      parallaxRef.current.style.transform = `translate3d(0, ${scrollY * 0.4}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden grain">
      {/* Parallax background image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          top: "-20%",
          height: "140%",
          willChange: "transform",
        }}
      >
        <Image
          src="/images/IMG_1561_EDITED.JPG"
          alt="SPARK Schools students in classroom"
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          priority
          quality={85}
        />
      </div>

      {/* Dark overlay - SPARK brand (over the image) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(43,4,48,0.88) 0%, rgba(43,4,48,0.72) 50%, rgba(43,4,48,0.94) 100%)",
        }}
      />

      {/* Radial glow - warm orange accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,72,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-32 pb-12 max-w-7xl mx-auto w-full">

        {/* Badge */}
        <div className="hero-animate-1 flex items-center gap-3 mb-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{
              background: "rgba(31,73,201,0.12)",
              border: "1px solid rgba(31,73,201,0.3)",
              color: "#ffffff",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#1f49c9" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "#1f49c9" }}
              />
            </span>
            Forensic Audit · March 2026
          </span>
        </div>

        {/* Headline */}
        <div className="hero-animate-2">
          <h1
            className="font-bold leading-none tracking-tight mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 9vw, 6.875rem)",
              color: "#ffffff",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
            }}
          >
            R3.28M IN AD SPEND.{" "}
            <span style={{ color: "#ff4800" }}>32 ACTIONS TO MAKE IT WORK HARDER.</span>
          </h1>
        </div>

        <div className="hero-animate-3">
          <p
            className="font-bold leading-none tracking-tight mb-10"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.1rem, 3vw, 1.75rem)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
            }}
          >
            A forensic look at what&apos;s working - and what isn&apos;t.
          </p>
        </div>

        {/* Sub-copy + CTAs */}
        <div className="hero-animate-4 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p
            className="max-w-sm leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.82)",
              fontSize: "1.125rem",
            }}
          >
            An SEO, paid advertising &amp; marketing audit prepared by Broadbrand - the team already inside SPARK&apos;s accounts, with 12 months of real performance data.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#executive-summary"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#ff4800", color: "#fff" }}
            >
              See What We Found
            </a>
            <a
              href="https://sparkrfq.vercel.app/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              Read Our Full Proposal →
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip - single row, no duplication */}
      <div
        className="hero-animate-5 relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex flex-wrap justify-center md:justify-between">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <span
                className="font-bold text-xl tracking-tight whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#ff4800",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-medium uppercase tracking-widest whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
