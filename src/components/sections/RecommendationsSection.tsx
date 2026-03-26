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
      { number: 1, title: 'Deploy Cloudflare CDN', description: 'Cuts page load from 1.4s to under 0.2s - a CDN caches the site closer to visitors so pages load faster' },
      { number: 2, title: 'Delete 3 legacy sitemaps from Google Search Console', description: 'Outdated sitemap files are sending Google to dead pages instead of live ones' },
      { number: 3, title: 'Redirect 109 broken pages (404 errors)', description: 'Parents and Google hitting dead links - redirect them to the correct live pages' },
      { number: 4, title: 'Add canonical tags to 57 duplicate pages', description: 'Tells Google which version of each page to show in search results, preventing diluted rankings' },
      { number: 5, title: 'Rewrite page titles & descriptions for top 5 pages', description: 'These control what parents see in Google results - better copy means more clicks' },
      { number: 6, title: 'Investigate TikTok Paid zero-conversion issue', description: '41,527 visitors with zero enquiries - either tracking is broken or the landing experience needs fixing' },
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
      { number: 7, title: 'Fix sitemap URL typos', description: '30-minute fix that unblocks pages from Google\'s index' },
      { number: 8, title: 'Add Organisation + School data markup', description: 'Structured data that tells Google "this is a school" - enables rich search results with ratings, locations, etc.' },
      { number: 9, title: 'Speed up page rendering', description: 'Defer JavaScript and CSS that block the page from appearing - directly improves mobile experience' },
      { number: 10, title: 'Increase Google Ads budget to 30%+', description: 'Google Ads delivers enquiries at R64 each vs Meta\'s R71 - shift budget toward the more efficient channel' },
      { number: 11, title: 'Consolidate Facebook & Instagram from 80+ to 15 campaigns', description: '80 fragmented campaigns → 15 focused ones with proper funnel alignment' },
      { number: 12, title: 'Promote /virtual-tours across all channels', description: '5.53% conversion rate - the best-performing page on the site deserves more traffic' },
      { number: 13, title: 'Create "Private Schools Johannesburg" landing page', description: 'SPARK is invisible for this high-intent search - a dedicated page captures parents actively looking' },
      { number: 14, title: 'Reduce Google Ads brand campaign spend', description: 'Parents already searching "SPARK Schools" will find you organically - reallocate this budget to non-brand searches' },
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
      { number: 15, title: 'Add location data markup for each campus', description: 'Tells Google where each SPARK school is - enables "schools near me" results and Google Maps visibility' },
      { number: 16, title: 'Create a page for each campus area', description: 'Parents search by location - dedicated pages for each area capture local search traffic' },
      { number: 17, title: 'Redesign the enquiry form experience', description: '71% of parents abandon the form - simplify fields, add progress indicators, reduce friction' },
      { number: 18, title: 'Add WhatsApp as an enquiry channel', description: 'Parents in SA prefer WhatsApp - offer it as an alternative to forms for higher completion rates' },
      { number: 19, title: 'Submit the site to Bing search engine', description: 'Bing already converts at 3.46% organically - official submission will increase this traffic further' },
      { number: 20, title: 'Create school comparison pages', description: '"SPARK vs [competitor]" pages capture parents actively comparing options' },
      { number: 21, title: 'Add breadcrumb navigation markup', description: 'Helps Google understand site structure and shows page hierarchy in search results' },
      { number: 22, title: 'Add FAQ sections with structured data', description: 'Common parent questions appear directly in Google results - drives clicks without paid ads' },
      { number: 23, title: 'Expand video content for YouTube', description: 'YouTube is the 2nd largest search engine - virtual tours and parent testimonials perform well here' },
      { number: 24, title: 'Implement UTM tracking standardisation', description: 'Broadbrand and AdClick use incompatible UTM formats - standardising enables accurate cross-agency and cross-channel comparison' },
      { number: 25, title: 'Create a dedicated /careers page', description: '7,465 organic clicks (4.2%) are job seekers searching "spark vacancies" - a careers page captures this traffic and removes it from parent conversion metrics' },
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
      { number: 26, title: 'Build content clusters around key topics', description: 'Groups of related articles (e.g., "choosing a school" hub) that establish SPARK as a thought leader and boost search rankings' },
      { number: 27, title: 'Launch digital PR campaign', description: 'Earn mentions and links from education publications - builds Google trust signals and brand awareness' },
      { number: 28, title: 'Promote matric results content', description: 'Seasonal search spike every January - have content ready to capture parents researching school performance' },
      { number: 29, title: 'Run YouTube video ad campaigns', description: 'Video ads showcasing campus life and virtual tours - reaches parents earlier in their school search journey' },
      { number: 30, title: 'Optimise for AI search (ChatGPT, Gemini)', description: 'ChatGPT referrals already convert at 2.65% - ensure SPARK appears in AI-generated school recommendations' },
      { number: 31, title: 'Expand digital presence to SADC markets', description: '875 organic clicks already coming from 12 SADC countries - targeted content for international parents would convert existing demand' },
      { number: 32, title: 'Build strategic partnerships for backlinks', description: 'Partner with education bodies and parenting sites - each quality link improves Google ranking authority' },
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
            32 actions. 4 phases. Starts this week.
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
                                    color: '#4b5563',
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
