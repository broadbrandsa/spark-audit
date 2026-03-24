'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import styles from './SEOAuditSection.module.css';

interface ScoreMetric {
  label: string;
  score: number;
  total: number;
}

interface TabContent {
  title: string;
  metric: string;
  description: string;
  impact: 'Critical' | 'High' | 'Medium';
}

const scoreMetrics: ScoreMetric[] = [
  { label: 'Site Speed', score: 4, total: 10 },
  { label: 'Page Quality', score: 5, total: 10 },
  { label: 'Content Depth', score: 6, total: 10 },
  { label: 'Authority & Links', score: 4, total: 10 },
  { label: 'Competitive Edge', score: 4, total: 10 },
  { label: 'Topic Coverage', score: 6, total: 10 },
];

const tabContents: { [key: string]: TabContent } = {
  performance: {
    title: 'Parents Are Leaving Before the Page Loads',
    metric: 'TTFB: 1.4s (7x target)',
    description:
      'The site takes 1.4 seconds just to start responding — 7x slower than the 200ms target. On mobile, where 74.4% of SPARK\'s traffic comes from, it\'s even worse. Lighthouse scores 52/100 on mobile. The total page weight is 25.6MB. A CDN deployment fixes this in days, not weeks.',
    impact: 'Critical',
  },
  'on-page': {
    title: '4.7 Million Impressions, Almost No Clicks',
    metric: '0.38% CTR',
    description:
      'SPARK\'s four main pages appear in search results 4.7 million times — but only 0.38% of those parents click through. That\'s roughly 4.68 million missed opportunities. The fix: rewrite title tags and meta descriptions to match what parents actually search for.',
    impact: 'Critical',
  },
  content: {
    title: 'Strong Content, Weak Trust Signals',
    metric: 'Trust Score: 6/10',
    description:
      'The 80+ blog posts and T4 Award are genuine authority signals — Google rewards this. But there are no author bios (Google needs to know who wrote the content), and 71% of parents who start a form never finish it. The content gets them there; the experience loses them.',
    impact: 'High',
  },
  keywords: {
    title: 'Page 1 Is Within Reach',
    metric: '145K impressions',
    description:
      'SPARK ranks position 7-9 for high-value "near me" searches — just outside where parents actually click. These keywords represent 145K impressions from parents actively searching for a school. Moving from position 8 to position 3 typically doubles click-through rates.',
    impact: 'High',
  },
};


const performanceMetrics = [
  { metric: 'Core Web Vitals', status: 'FAILED', details: 'FCP, LCP, CLS not optimized' },
  {
    metric: 'Time to First Byte',
    status: '1.4s',
    details: 'Target: 200ms (7x over)',
  },
  { metric: 'Lighthouse Score', status: '56/100', details: 'Mobile: 52/100' },
  { metric: 'Page Weight', status: '25.6MB', details: '74.4% mobile traffic' },
];

const ctrCrisisData = [
  {
    page: '/primary-schools',
    impressions: '2.4M',
    clicks: '9,120',
    ctr: '0.38%',
  },
  {
    page: '/high-schools',
    impressions: '2.3M',
    clicks: '8,740',
    ctr: '0.38%',
  },
  {
    page: '/independent-schools',
    impressions: '1.5M',
    clicks: '5,700',
    ctr: '0.38%',
  },
  {
    page: '/boarding-schools',
    impressions: '900K',
    clicks: '3,420',
    ctr: '0.38%',
  },
];

const contentGapAnalysis = [
  { metric: 'Blog Posts Published', value: '80+', strength: true },
  { metric: 'Author Bios', value: 'None', strength: false },
  { metric: 'Industry Award', value: 'T4 Award', strength: true },
  { metric: 'Form Abandonment Rate', value: '71%', strength: false },
];

const strikingDistanceKeywords = [
  { query: 'private schools near me', impressions: '45K', avgPosition: '8.2' },
  { query: 'best schools near me', impressions: '38K', avgPosition: '7.9' },
  { query: 'independent schools near me', impressions: '32K', avgPosition: '8.5' },
  { query: 'boarding schools near me', impressions: '30K', avgPosition: '8.3' },
];

function getImpactColor(impact: string): string {
  switch (impact) {
    case 'Critical':
      return styles.impactCritical;
    case 'High':
      return styles.impactHigh;
    case 'Medium':
      return styles.impactMedium;
    default:
      return styles.impactMedium;
  }
}

export default function SEOAuditSection() {
  const [activeTab, setActiveTab] = useState('performance');

  return (
    <section id="seo-audit" className={styles.section}>
      <FadeIn>
        <div className={styles.container}>
          <div className={styles.labelRow}>
            <span className="section-label">SEO Audit</span>
          </div>

          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>SPARK is invisible for the searches that matter most</h2>
            <p className={styles.subtitle}>SEO Health: 33 out of 70 — Grade D</p>
          </div>

          {/* Score Breakdown */}
          <div className={styles.scoreBreakdownSection}>
            <h3 className={styles.scoreBreakdownHeading}>Where the 37 lost points went</h3>
            <div className={styles.scoreMetricsContainer}>
              {scoreMetrics.map((metric, idx) => {
                const percentage = (metric.score / metric.total) * 100;
                return (
                  <FadeIn key={idx} delay={idx * 50}>
                    <div className={styles.metricBar}>
                      <div className={styles.metricLabel}>
                        <span className={styles.metricName}>{metric.label}</span>
                        <span className={styles.metricScore}>
                          {metric.score}/{metric.total}
                        </span>
                      </div>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Tabbed Interface */}
          <div className={styles.tabbedSection}>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className={styles.tabsContainer}
            >
              <TabsList className={styles.tabsList}>
                <TabsTrigger value="performance" className={styles.tabTrigger}>
                  Site Speed
                </TabsTrigger>
                <TabsTrigger value="on-page" className={styles.tabTrigger}>
                  Page Quality
                </TabsTrigger>
                <TabsTrigger value="content" className={styles.tabTrigger}>
                  Content Gaps
                </TabsTrigger>
                <TabsTrigger value="keywords" className={styles.tabTrigger}>
                  Search Visibility
                </TabsTrigger>
              </TabsList>

              {/* Performance Tab */}
              <TabsContent value="performance" className={styles.tabContent}>
                <FadeIn>
                  <div
                    className={`${styles.summaryCard} ${getImpactColor(tabContents.performance.impact)}`}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleSection}>
                        <h4 className={styles.cardTitle}>
                          {tabContents.performance.title}
                        </h4>
                        <span
                          className={`${styles.impactBadge} ${getImpactColor(tabContents.performance.impact)}`}
                        >
                          {tabContents.performance.impact}
                        </span>
                      </div>
                      <div className={styles.metricHighlight}>
                        {tabContents.performance.metric}
                      </div>
                    </div>
                    <p className={styles.cardDescription}>
                      {tabContents.performance.description}
                    </p>

                    {/* Performance Metrics Grid */}
                    <div className={styles.metricsGrid}>
                      {performanceMetrics.map((pm, idx) => (
                        <div key={idx} className={styles.metricCard}>
                          <div className={styles.metricCardLabel}>
                            {pm.metric}
                          </div>
                          <div className={styles.metricCardValue}>{pm.status}</div>
                          <div className={styles.metricCardDetails}>{pm.details}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </TabsContent>

              {/* On-Page Tab */}
              <TabsContent value="on-page" className={styles.tabContent}>
                <FadeIn>
                  <div
                    className={`${styles.summaryCard} ${getImpactColor(tabContents['on-page'].impact)}`}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleSection}>
                        <h4 className={styles.cardTitle}>
                          {tabContents['on-page'].title}
                        </h4>
                        <span
                          className={`${styles.impactBadge} ${getImpactColor(tabContents['on-page'].impact)}`}
                        >
                          {tabContents['on-page'].impact}
                        </span>
                      </div>
                      <div className={styles.metricHighlight}>
                        {tabContents['on-page'].metric}
                      </div>
                    </div>
                    <p className={styles.cardDescription}>
                      {tabContents['on-page'].description}
                    </p>

                    {/* CTR Crisis Table */}
                    <div className={styles.issuesTable}>
                      <div className={styles.tableHeader}>
                        <div className={styles.tableColPage}>Page</div>
                        <div className={styles.tableCol2}>Impressions</div>
                        <div className={styles.tableCol2}>Clicks</div>
                        <div className={styles.tableCol2}>CTR</div>
                      </div>
                      {ctrCrisisData.map((item, idx) => (
                        <div key={idx} className={styles.tableRow}>
                          <div className={styles.tableColPage}>{item.page}</div>
                          <div className={styles.tableCol2}>{item.impressions}</div>
                          <div className={styles.tableCol2}>{item.clicks}</div>
                          <div className={styles.tableCol2}>
                            <span className={styles.ctrBad}>{item.ctr}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.additionalIssues}>
                      <h5 className={styles.issuesHeading}>Additional Issues:</h5>
                      <ul className={styles.issuesList}>
                        <li>Missing meta descriptions — Google shows a blank snippet instead of a reason to click</li>
                        <li>No structured data — SPARK can&apos;t appear in rich results, maps, or knowledge panels</li>
                        <li>Title tags don&apos;t match what parents search for — easy wins left on the table</li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </TabsContent>

              {/* Content Tab */}
              <TabsContent value="content" className={styles.tabContent}>
                <FadeIn>
                  <div
                    className={`${styles.summaryCard} ${getImpactColor(tabContents.content.impact)}`}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleSection}>
                        <h4 className={styles.cardTitle}>
                          {tabContents.content.title}
                        </h4>
                        <span
                          className={`${styles.impactBadge} ${getImpactColor(tabContents.content.impact)}`}
                        >
                          {tabContents.content.impact}
                        </span>
                      </div>
                      <div className={styles.metricHighlight}>
                        {tabContents.content.metric}
                      </div>
                    </div>
                    <p className={styles.cardDescription}>
                      {tabContents.content.description}
                    </p>

                    {/* Content Analysis Grid */}
                    <div className={styles.contentAnalysisGrid}>
                      {contentGapAnalysis.map((item, idx) => (
                        <div
                          key={idx}
                          className={`${styles.contentAnalysisItem} ${item.strength ? styles.strength : styles.weakness}`}
                        >
                          <div className={styles.analysisLabel}>
                            {item.metric}
                          </div>
                          <div className={styles.analysisValue}>{item.value}</div>
                          <div className={styles.analysisIcon}>
                            {item.strength ? '✓' : '✗'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </TabsContent>

              {/* Keywords Tab */}
              <TabsContent value="keywords" className={styles.tabContent}>
                <FadeIn>
                  <div
                    className={`${styles.summaryCard} ${getImpactColor(tabContents.keywords.impact)}`}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleSection}>
                        <h4 className={styles.cardTitle}>
                          {tabContents.keywords.title}
                        </h4>
                        <span
                          className={`${styles.impactBadge} ${getImpactColor(tabContents.keywords.impact)}`}
                        >
                          {tabContents.keywords.impact}
                        </span>
                      </div>
                      <div className={styles.metricHighlight}>
                        {tabContents.keywords.metric}
                      </div>
                    </div>
                    <p className={styles.cardDescription}>
                      {tabContents.keywords.description}
                    </p>

                    {/* Keywords Table */}
                    <div className={styles.issuesTable}>
                      <div className={styles.tableHeader}>
                        <div className={styles.tableColKeyword}>Query</div>
                        <div className={styles.tableCol2}>Impressions</div>
                        <div className={styles.tableCol2}>Avg Position</div>
                      </div>
                      {strikingDistanceKeywords.map((item, idx) => (
                        <div key={idx} className={styles.tableRow}>
                          <div className={styles.tableColKeyword}>{item.query}</div>
                          <div className={styles.tableCol2}>{item.impressions}</div>
                          <div className={styles.tableCol2}>#{item.avgPosition}</div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.opportunityNote}>
                      These searches happen every day. SPARK is on page 1 but below the fold — most parents never scroll that far. Local schema, content optimisation, and targeted link building can push these into the top 3 where 60% of clicks happen. We&apos;d start here in week one.
                    </div>
                  </div>
                </FadeIn>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
