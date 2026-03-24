"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const mainLinks = [
  { label: "Home", href: "/" },
];

const auditSections = [
  { label: "Executive Summary", href: "/#executive-summary" },
  { label: "SEO Audit", href: "/#seo-audit" },
  { label: "PPC Audit", href: "/#ppc-audit" },
  { label: "Marketing Context", href: "/#marketing-context" },
  { label: "Competitors", href: "/#competitors" },
  { label: "Recommendations", href: "/#recommendations" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = () => setSectionsOpen(false);
    if (sectionsOpen) document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [sectionsOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-spark-purple/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-spark h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-0 flex-shrink-0">
          <div className="relative w-44 h-16 pb-1">
            <Image
              src="/Logos/SPARK.webp"
              alt="SPARK Schools"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="relative w-36 h-8 -ml-6">
            <Image
              src="/Logos/Broadbrand.png"
              alt="Broadbrand"
              fill
              className="object-contain object-left"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200"
                style={{
                  color: active ? "#fff" : "rgba(255,255,255,0.45)",
                  background: active ? "rgba(255,255,255,0.12)" : "transparent",
                  border: active ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
                }}
              >
                {link.label}
              </a>
            );
          })}

          {/* Audit sections dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSectionsOpen(!sectionsOpen)}
              className="relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 flex items-center gap-1"
              style={{
                color: sectionsOpen ? "#fff" : "rgba(255,255,255,0.45)",
                background: sectionsOpen ? "rgba(255,255,255,0.12)" : "transparent",
                border: sectionsOpen ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
              }}
            >
              Sections
              <span className={`transition-transform duration-200 ${sectionsOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {sectionsOpen && (
              <div
                className="absolute top-full mt-2 left-0 rounded-2xl py-2 w-52 shadow-2xl"
                style={{ background: "rgba(31,73,201,0.97)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)" }}
              >
                {auditSections.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-150 hover:bg-white/10"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onClick={() => setSectionsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Performance Report link — external */}
          <a
            href="https://spark2025-pi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.95)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
          >
            ↗ View 2025 Performance Report
          </a>

          {/* Proposal link — external */}
          <a
            href="https://sparkrfq.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.95)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
          >
            ↗ View Proposal
          </a>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:mikee@dsg.co.za"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300"
            style={{ background: "#ff4800", color: "#fff" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#e03f00"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#ff4800"; }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t border-white/10 backdrop-blur-xl px-6 py-4 space-y-1 max-h-[85vh] overflow-y-auto"
          style={{ background: "rgba(31,73,201,0.97)" }}
        >
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold py-2 uppercase tracking-wide rounded-lg px-3 transition-all duration-200"
              style={{ color: pathname === link.href ? "#fff" : "rgba(255,255,255,0.6)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 pb-1">
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase px-3 mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Audit Sections</p>
            {auditSections.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm py-1.5 rounded-lg px-3 transition-all duration-200 hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://spark2025-pi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold py-2 uppercase tracking-wide rounded-lg px-3"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onClick={() => setMenuOpen(false)}
          >
            ↗ View 2025 Performance Report
          </a>
          <a
            href="https://sparkrfq.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold py-2 uppercase tracking-wide rounded-lg px-3"
            style={{ color: "#ff4800" }}
            onClick={() => setMenuOpen(false)}
          >
            ↗ View Proposal
          </a>
          <a
            href="mailto:mikee@dsg.co.za"
            className="block text-sm font-bold text-center py-3 rounded-full mt-2"
            style={{ background: "#ff4800", color: "#fff" }}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
