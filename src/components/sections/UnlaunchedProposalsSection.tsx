'use client';

import React from 'react';
import { FadeIn } from '@/components/FadeIn';

interface Proposal {
  title: string;
  status: string;
  description: string;
  impact: string;
  icon: string;
}

const proposals: Proposal[] = [
  {
    title: 'PPC Campaign Restructure',
    status: 'Proposed Sept 2024',
    description:
      'Consolidate Meta from 80+ campaigns to ~15 with proper funnel structure (top-of-funnel awareness → mid-funnel consideration → bottom-of-funnel conversion). Introduce parent testimonials, founder story ads, and value-driven creative at the top of funnel. Rebalance budget toward Google Ads which delivers enquiries at R64 vs Meta\'s R71.',
    impact: 'Projected 30–50% reduction in cost-per-lead through better funnel alignment and creative rotation',
    icon: '📊',
  },
  {
    title: 'CRM-to-Platform Feedback Loop',
    status: 'Proposed Sept 2024',
    description:
      'Connect SPARK\'s CRM to ad platforms (Meta, Google, TikTok) so campaigns can optimise toward actual enrolments — not just form fills. Currently there is no data flowing back on which leads convert to enrolments, making it impossible to distinguish a R64 lead that enrols from one that doesn\'t.',
    impact: 'Enables campaign optimisation based on lead quality, not just volume — the single biggest efficiency unlock available',
    icon: '🔄',
  },
  {
    title: 'Enhanced WhatsApp Integration',
    status: 'Proposed Sept 2024',
    description:
      'Grade + school pre-fill, smart redirects, and conversion tracking via WhatsApp. Parents in South Africa overwhelmingly prefer WhatsApp — offering it as an enquiry channel alongside forms would capture parents who abandon the current 71%-dropout form process.',
    impact: 'Directly addresses the 71% form abandonment bottleneck by offering parents their preferred communication channel',
    icon: '💬',
  },
  {
    title: 'AI-Optimised Display + DOOH Billboards',
    status: 'Proposed to SPARK',
    description:
      'Integrate AI-optimised display ads with Digital Out-of-Home (DOOH) billboards near SPARK campuses across Gauteng and Pretoria. AI-driven audience targeting continuously analyses user behaviour to determine the best-performing creatives, then extends those winning ads to physical billboard locations at peak commute times. Locations identified include Alberton/Meyersdal, Kyalami/Midrand, Grayston/Sandton, Cresta, Randburg, Tembisa, Soweto, Benmore, Fourways, Roodepoort, Bruma/Eastgate, The Glen, Kempton Park, Wynberg/Sandton, and Prinshof/Pretoria.',
    impact: 'Omnichannel consistency between digital and physical — parents see the same messaging online and on their commute to school',
    icon: '📍',
  },
  {
    title: 'Newsroom AI Brand Stories',
    status: 'Ready to launch',
    description:
      'Deploy Newsroom AI\'s Brand Stories platform to create immersive, mobile-first story experiences for SPARK — think Instagram Stories but on the open web, embeddable anywhere and distributable programmatically. Brand Stories achieve up to 15x higher engagement than standard display ads. Content formats include video scenes, interactive polls, shoppable CTAs, and swipeable campus tours. These stories can be amplified across premium publisher inventory via programmatic distribution, extending SPARK\'s reach beyond social media into news sites, parenting portals, and education content.',
    impact: 'A new creative format that meets parents where they browse — immersive, mobile-native, and measurable across the open web',
    icon: '📱',
  },
];

export default function UnlaunchedProposalsSection() {
  return (
    <section
      id="unlaunched-proposals"
      style={{
        background: 'linear-gradient(180deg, #1a0120 0%, #2B0430 100%)',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at 100% 20%, rgba(31,73,201,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section Label */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.5px',
                color: 'rgba(200, 218, 227, 0.75)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              What&apos;s Been Waiting in the Wings
            </p>
            <h2
              style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#C8DAE3',
                margin: '0 0 16px 0',
                lineHeight: '1.2',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Strategies we&apos;ve proposed — ready to launch
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(200, 218, 227, 0.82)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontFamily: 'var(--font-body)',
              }}
            >
              These initiatives were developed specifically for SPARK but haven&apos;t yet received the green light. Every one of them addresses a gap identified in this audit — and every one is ready to go.
            </p>
          </div>
        </FadeIn>

        {/* Proposal Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {proposals.map((proposal, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  height: '100%',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 72, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                {/* Icon + Status */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span style={{ fontSize: '32px' }}>{proposal.icon}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.5px',
                      color: '#ff4800',
                      backgroundColor: 'rgba(255, 72, 0, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 72, 0, 0.2)',
                    }}
                  >
                    {proposal.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#C8DAE3',
                    margin: '0 0 12px 0',
                    lineHeight: '1.3',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {proposal.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(200, 218, 227, 0.88)',
                    lineHeight: '1.6',
                    margin: '0 0 16px 0',
                    flex: '1',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {proposal.description}
                </p>

                {/* Impact */}
                <div
                  style={{
                    backgroundColor: 'rgba(31, 73, 201, 0.08)',
                    border: '1px solid rgba(31, 73, 201, 0.15)',
                    borderRadius: '6px',
                    padding: '12px 16px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.5px',
                      color: '#7ba4f7',
                      margin: '0 0 4px 0',
                    }}
                  >
                    Expected Impact
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(200, 218, 227, 0.85)',
                      lineHeight: '1.5',
                      margin: '0',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {proposal.impact}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom message */}
        <FadeIn delay={0.5}>
          <div
            style={{
              textAlign: 'center',
              padding: '32px',
              backgroundColor: 'rgba(255, 72, 0, 0.06)',
              border: '1px solid rgba(255, 72, 0, 0.12)',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#C8DAE3',
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-heading)',
              }}
            >
              None of these require starting from scratch.
            </p>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(200, 218, 227, 0.82)',
                margin: '0',
                fontFamily: 'var(--font-body)',
              }}
            >
              Every strategy above was built with SPARK&apos;s data, accounts, and audience in mind. They&apos;re ready to deploy — all they need is the go-ahead.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
