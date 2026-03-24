'use client';

import React from 'react';
import { FadeIn } from '@/components/FadeIn';

const ProposalBridgeSection: React.FC = () => {
  const themes = [
    {
      proposal: 'The data proves CPL is costing SPARK leads',
      evidence:
        'Google Ads delivers leads at R64 (4.40% conv) while Meta instant forms cost R71 with lower intent. The 84/16 budget split favoring Meta means more spend on lower-quality leads. Our proposal shifts measurement from cost-per-lead to cost-per-actual-enrolment.',
      visual: 'CPL → CPA',
    },
    {
      proposal: 'Instant forms are cheap — but 71% abandon',
      evidence:
        'Landing page campaigns cost 3x more (R220/lead) but generate higher-intent enquiries. The 71% form abandonment rate confirms what we flagged: the current form experience is losing motivated parents.',
      visual: 'Forms',
    },
    {
      proposal: '41K sessions. Zero tracked conversions. CRM fixes this.',
      evidence:
        'TikTok Paid drove 41,527 sessions with zero tracked conversions. Without CRM data flowing back to ad platforms, campaigns optimise for clicks — not enrolments. Our CRM integration closes this loop.',
      visual: 'CRM ↔',
    },
    {
      proposal: 'Your warmest audiences convert 7x better',
      evidence:
        'Organic TikTok converts at 7.91% vs paid at 0%. Broadbrand social at 7.45%. The pattern is unmistakable: warm, engaged audiences convert at multiples of cold traffic. Our retention system builds this at scale.',
      visual: 'Retain',
    },
  ];

  return (
    <section
      id="proposal-bridge"
      style={{
        backgroundColor: '#2B0430',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section Label */}
        <FadeIn>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.5px',
                color: 'rgba(200, 218, 227, 0.6)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              From Audit to Action
            </p>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#C8DAE3',
                margin: '0',
                lineHeight: '1.2',
              }}
            >
              Everything we proposed? The data backs it up.
            </h2>
          </div>
        </FadeIn>

        {/* Theme Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '64px',
          }}
        >
          {themes.map((theme, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 72, 0, 0.05)',
                  border: '1px solid rgba(255, 72, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Visual indicator */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FF4800',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#2B0430',
                    textAlign: 'center',
                    padding: '8px',
                  }}
                >
                  {theme.visual}
                </div>

                {/* Proposal heading */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#C8DAE3',
                    margin: '0 0 16px 0',
                    lineHeight: '1.4',
                  }}
                >
                  {theme.proposal}
                </h3>

                {/* Evidence */}
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(200, 218, 227, 0.8)',
                    lineHeight: '1.6',
                    margin: '0',
                    flex: '1',
                  }}
                >
                  {/* Highlight numbers in orange */}
                  {theme.evidence.split(/(R\d+|[\d.]+%)/g).map((part, i) => {
                    if (/(R\d+|[\d.]+%)/.test(part)) {
                      return (
                        <span
                          key={i}
                          style={{
                            color: '#FF4800',
                            fontWeight: '600',
                          }}
                        >
                          {part}
                        </span>
                      );
                    }
                    return part;
                  })}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn delay={0.4}>
          <div
            style={{
              backgroundColor: 'rgba(255, 72, 0, 0.08)',
              border: '1px solid rgba(255, 72, 0, 0.15)',
              borderRadius: '8px',
              padding: '60px 40px',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#C8DAE3',
                margin: '0 0 32px 0',
              }}
            >
              30 actions. We&apos;re ready to start this week.
            </h3>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                marginBottom: '48px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://sparkrfq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 32px',
                  backgroundColor: '#FF4800',
                  color: '#2B0430',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor = '#E63A00';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor = '#FF4800';
                }}
              >
                View Full Proposal
              </a>

              <a
                href="mailto:mikee@dsg.co.za"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 32px',
                  backgroundColor: 'transparent',
                  color: '#FF4800',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: '2px solid #FF4800',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor = 'rgba(255, 72, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                }}
              >
                Let's Talk
              </a>
            </div>

            {/* Logo Strip */}
            <div
              style={{
                display: 'flex',
                gap: '48px',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'rgba(200, 218, 227, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Broadbrand
              </div>
              <div
                style={{
                  width: '1px',
                  height: '24px',
                  backgroundColor: 'rgba(200, 218, 227, 0.2)',
                }}
              />
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'rgba(200, 218, 227, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                DSG
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProposalBridgeSection;
