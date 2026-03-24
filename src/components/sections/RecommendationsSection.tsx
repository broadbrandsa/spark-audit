'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';

interface Recommendation {
  number: number;
  title: string;
  description: string;
}

interface Tier {
  id: string;
  title: string;
  label: string;
  color: string;
  borderColor: string;
  badgeColor: string;
  items: Recommendation[];
}

const tiers: Tier[] = [
  {
    id: 'tier1',
    title: 'CRITICAL',
    label: 'This Week',
    color: '#ff4800',
    borderColor: '#ff4800',
    badgeColor: '#ff4800',
    items: [
      { number: 1, title: 'Deploy Cloudflare CDN', description: 'Cuts load time from 1.4s to under 200ms — mobile parents stop bouncing' },
      { number: 2, title: 'Delete 3 legacy sitemaps from GSC', description: '2-minute fix that unblocks Google from crawling dead URLs' },
      { number: 3, title: '301-redirect 109 x 404 pages', description: 'Every broken URL is a parent hitting a dead end' },
      { number: 4, title: 'Add canonical tags', description: '57 duplicate pages confusing Google about which version to rank' },
      { number: 5, title: 'Rewrite title tags + meta descriptions', description: 'Top 5 pages have 4.7M impressions — better copy = more clicks' },
      { number: 6, title: 'Investigate TikTok paid zero-conversion issue', description: '41K sessions, zero tracked conversions — something is broken' },
    ],
  },
  {
    id: 'tier2',
    title: 'HIGH IMPACT',
    label: 'This Month',
    color: '#1f49c9',
    borderColor: '#1f49c9',
    badgeColor: '#1f49c9',
    items: [
      { number: 7, title: 'Fix sitemap URL typos', description: '30-minute fix that unblocks dozens of pages from Google\'s index' },
      { number: 8, title: 'Implement Organisation + School schema', description: 'Unlocks rich results, knowledge panels, and maps visibility' },
      { number: 9, title: 'Defer render-blocking JS/CSS', description: 'Shaves seconds off load time — directly impacts mobile conversion' },
      { number: 10, title: 'Increase Google Ads budget to 30%+', description: 'Shift R150K/month from Meta where CPL is 3.5x lower' },
      { number: 11, title: 'Consolidate Meta from 80+ to 15 campaigns', description: '80 fragmented campaigns → 15 focused ones with proper funnel alignment' },
      { number: 12, title: 'Promote /virtual-tours', description: 'Already converts at 4.33% — 6x better than /high-schools' },
      { number: 13, title: 'Create "Private Schools Johannesburg" page', description: 'SPARK is invisible for this high-intent search. This page fixes that.' },
      { number: 14, title: 'Reduce brand campaign on Google Ads', description: 'R225/conversion vs R64 on Search General — reallocate the difference' },
    ],
  },
  {
    id: 'tier3',
    title: 'GROWTH',
    label: '60 Days',
    color: '#00a8e1',
    borderColor: '#00a8e1',
    badgeColor: '#00a8e1',
    items: [
      { number: 15, title: 'Implement LocalBusiness schema', description: 'Every campus appears in Google Maps and local search results' },
      { number: 16, title: 'Create location hub pages', description: '"SPARK Schools Sandton", "SPARK Schools Fourways" — own local search' },
      { number: 17, title: 'Redesign enquiry form UX', description: 'Fixing the 71% abandonment rate is worth more than any ad budget increase' },
      { number: 18, title: 'Add WhatsApp as a conversion path', description: 'Parents prefer messaging — WhatsApp Video already converts at R63.84' },
      { number: 19, title: 'Submit to Bing Webmaster Tools', description: 'Bing organic already converts at 3.46% with zero effort — imagine with effort' },
      { number: 20, title: 'Create comparison pages', description: '"SPARK vs [competitor]" pages capture parents in decision mode' },
      { number: 21, title: 'Implement breadcrumb schema', description: 'Better site navigation in search results = higher CTR from Google' },
      { number: 22, title: 'Create FAQ schema', description: 'Answers parent questions directly in Google results — free real estate' },
      { number: 23, title: 'Expand video content', description: 'Virtual tours convert at 4.33% — more video = more conversions' },
    ],
  },
  {
    id: 'tier4',
    title: 'STRATEGIC',
    label: 'Quarterly',
    color: '#801078',
    borderColor: '#801078',
    badgeColor: '#801078',
    items: [
      { number: 24, title: 'Build content clusters', description: 'Establish SPARK as the topical authority for private education in SA' },
      { number: 25, title: 'Launch digital PR campaign', description: 'Earn backlinks and brand mentions from education publications' },
      { number: 26, title: 'Promote matric results content', description: 'Seasonal search spike in Jan/Feb — be ready with optimised content' },
      { number: 27, title: 'Run YouTube pre-roll ads', description: 'Parents already engage with SPARK video — meet them on YouTube' },
      { number: 28, title: 'Optimize for AI Search (ChatGPT, Perplexity)', description: '453 sessions already coming from ChatGPT — this channel is growing fast' },
      { number: 29, title: 'Expand targeting to SADC markets', description: 'Regional parents searching for SA private schools — untapped demand' },
      { number: 30, title: 'Build strategic content partnerships', description: 'Co-branded content with education platforms builds authority Google rewards' },
    ],
  },
];

export default function RecommendationsSection() {
  const [expandedTier, setExpandedTier] = useState<string>('tier1');

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? '' : tierId);
  };

  return (
    <section
      id="recommendations"
      style={{
        backgroundColor: '#f9fafb',
        padding: '80px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <FadeIn>
          {/* Section Label */}
          <div
            style={{
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              The Roadmap
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '48px',
              lineHeight: '1.2',
            }}
          >
            30 actions. 4 phases. Starts this week.
          </h2>

          {/* Tiers Container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px',
            }}
          >
            {tiers.map((tier, tierIdx) => (
              <FadeIn key={tier.id} delay={tierIdx * 100}>
                <div
                  style={{
                    borderLeft: `4px solid ${tier.borderColor}`,
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 1px 3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Tier Header */}
                  <button
                    onClick={() => toggleTier(tier.id)}
                    style={{
                      width: '100%',
                      padding: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        '#f3f4f6';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        '#ffffff';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {/* Tier Badge */}
                      <div
                        style={{
                          padding: '4px 12px',
                          backgroundColor: tier.badgeColor,
                          color: '#ffffff',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tier.label}
                      </div>

                      {/* Tier Title and Count */}
                      <div style={{ textAlign: 'left' }}>
                        <div
                          style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#111827',
                          }}
                        >
                          {tier.title}
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            color: '#6b7280',
                            marginTop: '2px',
                          }}
                        >
                          {tier.items.length} actions
                        </div>
                      </div>
                    </div>

                    {/* Chevron Icon */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280',
                        fontSize: '18px',
                        fontWeight: '700',
                        transition: 'transform 0.3s ease, background-color 0.2s ease',
                        transform:
                          expandedTier === tier.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      ▼
                    </div>
                  </button>

                  {/* Tier Content - Expandable */}
                  {expandedTier === tier.id && (
                    <div
                      style={{
                        padding: '0 24px 24px 24px',
                        borderTop: '1px solid #e5e7eb',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr',
                          gap: '12px',
                        }}
                      >
                        {tier.items.map((item, itemIdx) => (
                          <FadeIn key={item.number} delay={itemIdx * 30}>
                            <div
                              style={{
                                padding: '12px',
                                backgroundColor: '#f9fafb',
                                borderRadius: '6px',
                                display: 'flex',
                                gap: '12px',
                              }}
                            >
                              {/* Item Number */}
                              <div
                                style={{
                                  minWidth: '28px',
                                  height: '28px',
                                  borderRadius: '50%',
                                  backgroundColor: tier.borderColor,
                                  color: '#ffffff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '12px',
                                  fontWeight: '700',
                                  flexShrink: 0,
                                }}
                              >
                                {item.number}
                              </div>

                              {/* Item Content */}
                              <div style={{ flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '2px',
                                  }}
                                >
                                  {item.title}
                                </div>
                                <div
                                  style={{
                                    fontSize: '13px',
                                    color: '#6b7280',
                                  }}
                                >
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </FadeIn>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
