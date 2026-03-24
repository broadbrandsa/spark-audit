import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import ExecutiveSummarySection from "@/components/sections/ExecutiveSummarySection";
import SEOAuditSection from "@/components/sections/SEOAuditSection";
import PPCAuditSection from "@/components/sections/PPCAuditSection";
import MarketingContextSection from "@/components/sections/MarketingContextSection";
import RecommendationsSection from "@/components/sections/RecommendationsSection";
import ProposalBridgeSection from "@/components/sections/ProposalBridgeSection";
import UnlaunchedProposalsSection from "@/components/sections/UnlaunchedProposalsSection";
import { PhotoStrip } from "@/components/PhotoStrip";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <main>
        {/* How to Read This Audit */}
        <section
          style={{
            backgroundColor: '#f0f4ff',
            padding: '40px 20px',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <div className="container-spark">
            <FadeIn>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1f49c9',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  How to read this audit
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#374151',
                    lineHeight: '1.7',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  This audit examines three areas of SPARK&apos;s digital marketing: <strong>SEO</strong> (how easily parents find SPARK through Google and other search engines), <strong>PPC</strong> (how effectively SPARK&apos;s paid advertising budget is being spent), and <strong>Marketing Channels</strong> (which platforms and pages are actually driving parent enquiries).
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#374151',
                    lineHeight: '1.7',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Throughout this document, <strong>&quot;conversion&quot;</strong> means a parent completing an enquiry form or starting an application — the key action that turns a website visitor into a prospective enrolment.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap' as const,
                    gap: '12px',
                    marginTop: '12px',
                  }}
                >
                  <span style={{ fontSize: '13px', color: '#22c55e', fontWeight: '600', backgroundColor: '#f0fdf4', padding: '4px 12px', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
                    Green = Strong
                  </span>
                  <span style={{ fontSize: '13px', color: '#eab308', fontWeight: '600', backgroundColor: '#fefce8', padding: '4px 12px', borderRadius: '20px', border: '1px solid #fde68a' }}>
                    Yellow = Needs Attention
                  </span>
                  <span style={{ fontSize: '13px', color: '#ef4444', fontWeight: '600', backgroundColor: '#fef2f2', padding: '4px 12px', borderRadius: '20px', border: '1px solid #fecaca' }}>
                    Red = Urgent
                  </span>
                  <span style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600', backgroundColor: '#eff6ff', padding: '4px 12px', borderRadius: '20px', border: '1px solid #bfdbfe' }}>
                    Blue = Emerging Opportunity
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Executive Summary */}
        <ExecutiveSummarySection />

        {/* SPARK Campus Photos — Classroom */}
        <PhotoStrip
          images={[
            { src: "/images/IMG_1561_EDITED.JPG", alt: "SPARK students learning with technology" },
            { src: "/images/IMG_1596_EDITED.JPG", alt: "SPARK students in classroom" },
            { src: "/images/IMG_1853_EDITED.JPG", alt: "SPARK student building with blocks" },
          ]}
        />

        {/* SEO Audit */}
        <SEOAuditSection />

        {/* PPC Audit */}
        <PPCAuditSection />

        {/* SPARK Campus Photos — Sports & Activity */}
        <PhotoStrip
          images={[
            { src: "/images/IMG_2525_EDITED_1.jpg", alt: "SPARK student in sports activity" },
            { src: "/images/IMG_2395_EDITED_1.jpg", alt: "SPARK students playing on the field" },
            { src: "/images/IMG_2542_EDITED_1.jpg", alt: "SPARK student running obstacle course" },
            { src: "/images/IMG_2597_EDITED.JPG", alt: "SPARK student with headphones and camera" },
          ]}
        />

        {/* Marketing Context */}
        <MarketingContextSection />

        {/* Recommendations */}
        <RecommendationsSection />

        {/* Bridge back to proposal */}
        <ProposalBridgeSection />

        {/* Unlaunched Proposals */}
        <UnlaunchedProposalsSection />
      </main>

      {/* Footer */}
      <footer
        className="py-10 px-6"
        style={{
          background: "#1a0120",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container-spark">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative w-[140px] h-[28px]">
                <Image
                  src="/Logos/Broadbrand.png"
                  alt="Broadbrand"
                  fill
                  className="object-contain object-left"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.5 }}
                />
              </div>
              <div className="relative w-[120px] h-[28px]">
                <Image
                  src="/Logos/heart-DSG.png"
                  alt="DSG"
                  fill
                  className="object-contain object-left"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.35 }}
                />
              </div>
            </div>
            <p
              className="text-xs"
              style={{
                color: "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-body)",
              }}
            >
              Digital Mini-Audit · March 2026 · Data sources: Google Search Console, Google Analytics 4, Google Ads, Meta Ads (Facebook &amp; Instagram), PageSpeed Insights
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
