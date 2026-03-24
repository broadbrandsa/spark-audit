import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import ExecutiveSummarySection from "@/components/sections/ExecutiveSummarySection";
import SEOAuditSection from "@/components/sections/SEOAuditSection";
import PPCAuditSection from "@/components/sections/PPCAuditSection";
import MarketingContextSection from "@/components/sections/MarketingContextSection";
import RecommendationsSection from "@/components/sections/RecommendationsSection";
import ProposalBridgeSection from "@/components/sections/ProposalBridgeSection";
import { PhotoStrip } from "@/components/PhotoStrip";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <main>
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
              Forensic Digital Audit · March 2026 · Built on 12 months of real account data · GSC, GA4, Google Ads, Meta Ads
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
