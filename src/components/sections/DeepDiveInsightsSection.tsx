'use client';

import React from 'react';
import { FadeIn } from '@/components/FadeIn';
import {
  Briefcase,
  Download,
  Search,
  MapPin,
  Building2,
  Globe,
  DollarSign,
  AlertTriangle,
  Smartphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Insight {
  icon: LucideIcon;
  title: string;
  metric: string;
  description: string;
  severity: 'critical' | 'warning' | 'opportunity';
}

const insights: Insight[] = [
  {
    icon: Briefcase,
    title: '4.2% of organic traffic is job seekers, not parents',
    metric: '7,465 clicks wasted',
    description:
      'Queries like "spark schools vacancies" and "spark school jobs" account for 7,465 organic clicks and 114,042 impressions. These visitors will never convert to enrolments. SPARK needs a dedicated careers/vacancies page to capture this traffic separately and keep it out of parent-focused conversion metrics.',
    severity: 'warning',
  },
  {
    icon: Download,
    title: '62,031 parents downloaded files',
    description:
      'File downloads (likely prospectus, fee schedules, application forms) represent the highest-intent parent action after form submission. These 62,031 downloads are not being tracked as a conversion step or used for remarketing - each one is a warm lead that could be nurtured.',
    metric: '62,031 downloads',
    severity: 'opportunity',
  },
  {
    icon: Search,
    title: '16,058 parents used on-site search',
    description:
      'When visitors can\'t find what they need, they search. 16,058 on-site searches suggest the navigation isn\'t guiding parents to key information like fees, applications, and school locations. Analysing what parents search for reveals exactly what content is missing or hard to find.',
    metric: '16,058 searches',
    severity: 'warning',
  },
  {
    icon: MapPin,
    title: '"Near me" searches: 229K impressions, SPARK barely visible',
    description:
      'Parents searching "private schools near me," "primary schools near me," and "high schools near me" generate 228,823 impressions - but SPARK captures only 2,539 clicks (1.1%). Most of these queries show SPARK on page 2 (positions 8–21). Dedicated location pages with LocalBusiness schema would move SPARK onto page 1.',
    metric: '229K impressions, 1.1% captured',
    severity: 'critical',
  },
  {
    icon: Building2,
    title: 'School page conversion rates vary 10x',
    description:
      'Spark Blue Downs Primary converts at 3.23% while Spark Ferndale Primary converts at 2.19% - and /switch-to-spark converts at just 0.10%. The best-performing school pages should be studied and their patterns replicated. The /switch-to-spark landing page needs a complete overhaul - 2,916 visitors with only 26 enquiries.',
    metric: 'Blue Downs 3.23% vs Switch 0.10%',
    severity: 'warning',
  },
  {
    icon: Globe,
    title: 'SADC parents are already searching for SPARK',
    description:
      'Organic search interest from Zimbabwe (232 clicks), Mozambique (134), Eswatini (95), Lesotho (93), Botswana (91), and Zambia (62) - totalling 875 clicks from 12 SADC countries without any marketing effort. These are families actively considering South African private schools. Targeted content for international parents would convert this existing demand.',
    metric: '875 organic clicks from 12 SADC countries',
    severity: 'opportunity',
  },
  {
    icon: DollarSign,
    title: '"Switch to SPARK" campaign: R401 per lead',
    description:
      'The Meta "Switch to SPARK" campaign spent R61,419 to generate just 153 leads - R401 per lead, making it the most expensive campaign in the portfolio. By contrast, "Schools | Instant Forms" delivers leads at R53 each. This campaign should be paused immediately and the budget redirected.',
    metric: 'R401/lead vs R53/lead best performer',
    severity: 'critical',
  },
  {
    icon: AlertTriangle,
    title: 'UTM tracking is broken - agencies use different formats',
    description:
      'Broadbrand and AdClick (the other agency) use incompatible UTM structures. BroadBrand puts its name in utm_term (wrong field), AdClick uses pipe characters that break analytics parsing, and both use click IDs instead of keywords in utm_term. This means Google Analytics can\'t accurately compare agency performance, channel costs, or keyword ROI. Broadbrand has already created a standardisation plan - it just needs to be implemented.',
    metric: 'Can\'t compare agencies or channels',
    severity: 'critical',
  },
  {
    icon: Smartphone,
    title: 'Desktop scores 93/100 - the entire problem is mobile',
    description:
      'The PageSpeed desktop score is 93/100 (excellent), but the mobile score is 56/100 (poor). With 74.4% of SPARK\'s traffic on mobile, this means 3 in 4 parents experience the slow, broken version of the site. The CDN deployment and render-blocking fixes should prioritise mobile performance exclusively.',
    metric: 'Desktop 93 vs Mobile 56',
    severity: 'critical',
  },
];

function getSeverityStyles(severity: string) {
  switch (severity) {
    case 'critical':
      return { bg: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.15)', badge: '#ef4444', badgeBg: 'rgba(239, 68, 68, 0.1)' };
    case 'warning':
      return { bg: 'rgba(234, 179, 8, 0.06)', border: '1px solid rgba(234, 179, 8, 0.15)', badge: '#eab308', badgeBg: 'rgba(234, 179, 8, 0.1)' };
    case 'opportunity':
      return { bg: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.15)', badge: '#22c55e', badgeBg: 'rgba(34, 197, 94, 0.1)' };
    default:
      return { bg: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)', badge: '#6b7280', badgeBg: 'rgba(0,0,0,0.05)' };
  }
}

export default function DeepDiveInsightsSection() {
  return (
    <section
      id="deep-dive"
      style={{
        backgroundColor: '#ffffff',
        padding: '80px 20px',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <FadeIn>
          {/* Section Header */}
          <div style={{ marginBottom: '48px' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Deep Dive
            </span>
            <h2
              style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '16px',
                lineHeight: '1.2',
                fontFamily: 'var(--font-heading)',
              }}
            >
              9 findings from analytics reports
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#4b5563',
                maxWidth: '700px',
                lineHeight: '1.6',
                fontFamily: 'var(--font-body)',
              }}
            >
              We didn&apos;t just look at the dashboard numbers. We dug into every CSV export, every URL slug, every UTM parameter, and every event log. Here&apos;s what we found beneath the surface.
            </p>
          </div>
        </FadeIn>

        {/* Insights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '20px',
          }}
        >
          {insights.map((insight, index) => {
            const styles = getSeverityStyles(insight.severity);
            const IconComponent = insight.icon;
            return (
              <FadeIn key={index} delay={index * 0.05}>
                <div
                  style={{
                    backgroundColor: styles.bg,
                    border: styles.border,
                    borderRadius: '8px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    height: '100%',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Top row: icon + severity badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <IconComponent size={24} color={styles.badge} strokeWidth={2} />
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.5px',
                        color: styles.badge,
                        backgroundColor: styles.badgeBg,
                        padding: '3px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {insight.severity}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#111827',
                      margin: '0 0 8px 0',
                      lineHeight: '1.3',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {insight.title}
                  </h3>

                  {/* Metric */}
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: styles.badge,
                      margin: '0 0 12px 0',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {insight.metric}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4b5563',
                      lineHeight: '1.6',
                      margin: '0',
                      flex: '1',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {insight.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
