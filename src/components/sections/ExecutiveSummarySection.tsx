'use client';

import React from 'react';
import { FadeIn } from '@/components/FadeIn';
import styles from './ExecutiveSummarySection.module.css';

interface ScoreCard {
  label: string;
  score: string;
  status: string;
  tone: 'red' | 'orange' | 'blue';
}

interface Opportunity {
  title: string;
  description: string;
}

interface QuickWin {
  title: string;
  effort: string;
}

const scoreCards: ScoreCard[] = [
  {
    label: 'SEO Health',
    score: '33/70',
    status: 'Grade D',
    tone: 'red',
  },
  {
    label: 'PPC Efficiency',
    score: '5/10',
    status: 'Needs Work',
    tone: 'orange',
  },
  {
    label: 'Marketing Mix',
    score: '6/10',
    status: 'Moderate',
    tone: 'blue',
  },
  {
    label: 'Combined',
    score: '44/90',
    status: 'Grade C-',
    tone: 'blue',
  },
];

const opportunities: Opportunity[] = [
  {
    title: 'Fix the CTR crisis',
    description:
      '/primary-schools and /high-schools have 4.7M impressions at 0.43% CTR',
  },
  {
    title: 'TikTok paid zero-conversion problem',
    description: '41,527 sessions with zero conversions',
  },
  {
    title: 'Deploy CDN to pass Core Web Vitals',
    description: 'TTFB at 1.4s (7x target)',
  },
  {
    title: 'Restructure Meta Ads around the funnel',
    description: 'R2.75M across 80+ campaigns',
  },
  {
    title: 'Build dedicated non-brand landing pages',
    description: 'Invisible for "private schools Johannesburg"',
  },
];

const quickWins: QuickWin[] = [
  {
    title: 'Remove 3 dead legacy sitemaps',
    effort: '2 minutes',
  },
  {
    title: 'Fix sitemap URL typos with 301 redirects',
    effort: 'Quick fix',
  },
  {
    title: 'Add canonical tags',
    effort: '57 duplicates',
  },
  {
    title: 'Rewrite title tags + meta descriptions for top 5 pages',
    effort: 'High impact',
  },
  {
    title: 'Promote /virtual-tours',
    effort: '4.33% conversion rate',
  },
];

export default function ExecutiveSummarySection() {
  return (
    <section id="executive-summary" className={styles.section}>
      <FadeIn>
        <div className={styles.container}>
          <div className={styles.labelRow}>
            <span className="section-label">Executive Summary</span>
          </div>

          <h2 className={styles.heading}>A C-minus. Here&apos;s how we fix it.</h2>

          {/* Score Cards Grid */}
          <div className={styles.scoreGrid}>
            {scoreCards.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div
                  className={`${styles.scoreCard} card-spark ${styles[`tone-${card.tone}`]}`}
                >
                  <div className={styles.scoreLabel}>{card.label}</div>
                  <div className={styles.scoreValue}>{card.score}</div>
                  <div className={styles.scoreStatus}>{card.status}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Top 5 Opportunities */}
          <div className={styles.opportunitiesSection}>
            <h3 className={styles.subheading}>Top 5 Opportunities</h3>
            <div className={styles.opportunitiesGrid}>
              {opportunities.map((opp, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className={`${styles.opportunityCard} card-spark`}>
                    <div className={styles.opportunityNumber}>{idx + 1}</div>
                    <div className={styles.opportunityContent}>
                      <h4 className={styles.opportunityTitle}>
                        {opp.title}
                      </h4>
                      <p className={styles.opportunityDescription}>
                        {opp.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Quick Wins */}
          <div className={styles.quickWinsSection}>
            <h3 className={styles.subheading}>Quick Wins</h3>
            <div className={styles.quickWinsList}>
              {quickWins.map((win, idx) => (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div className={styles.quickWinItem}>
                    <div className={styles.checkIcon}>✓</div>
                    <div className={styles.quickWinContent}>
                      <div className={styles.quickWinTitle}>
                        {win.title}
                      </div>
                      <div className={styles.quickWinEffort}>
                        {win.effort}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
