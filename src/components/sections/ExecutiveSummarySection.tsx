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
    label: 'SEO Health (Search Visibility)',
    score: '33/70',
    status: 'Grade D',
    tone: 'red',
  },
  {
    label: 'PPC Efficiency (Paid Ads ROI)',
    score: '5/10',
    status: 'Needs Work',
    tone: 'orange',
  },
  {
    label: 'Marketing Mix (Channel Balance)',
    score: '6/10',
    status: 'Moderate',
    tone: 'blue',
  },
  {
    label: 'Combined Score',
    score: '44/90',
    status: 'Grade C-',
    tone: 'blue',
  },
];

const opportunities: Opportunity[] = [
  {
    title: 'Fix the click-through rate crisis',
    description:
      'SPARK\'s school pages appear 4.7 million times in Google results but only 0.43% of parents click through — that\'s thousands of missed visits',
  },
  {
    title: 'TikTok Paid: 41K visitors, zero enquiries',
    description: '41,527 visitors from paid TikTok ads resulted in zero tracked enquiries or applications',
  },
  {
    title: 'Speed up the website with a CDN',
    description: 'The site takes 1.4 seconds to start loading (7x slower than the target). A CDN (content delivery network) caches the site closer to visitors for faster loads.',
  },
  {
    title: 'Restructure Facebook & Instagram Ads',
    description: 'R2.75M spread across 80+ campaigns with no clear funnel structure — consolidation would improve efficiency',
  },
  {
    title: 'Create dedicated landing pages for key searches',
    description: 'Parents searching "private schools Johannesburg" can\'t find SPARK — dedicated pages would capture this high-intent traffic',
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
    title: 'Promote /virtual-tours page',
    effort: '5.53% conversion rate — highest on the site',
  },
  {
    title: 'Fix 2 URL slug typos ("pirmary" → "primary")',
    effort: '5 min + 301 redirects — 154K impressions affected',
  },
  {
    title: 'Set up file download remarketing',
    effort: '62,031 high-intent parent actions going un-nurtured',
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

          <h2 className={styles.heading}>What 12 months of data tells us</h2>

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
