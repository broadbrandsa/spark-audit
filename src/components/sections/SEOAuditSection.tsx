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
  { label: 'Site Speed', score: 5, total: 10 },
  { label: 'Page Quality', score: 5, total: 10 },
  { label: 'Content Strength', score: 7, total: 10 },
  { label: 'External Links', score: 4, total: 10 },
  { label: 'Competitor Position', score: 5, total: 10 },
  { label: 'Content Gaps', score: 6, total: 10 },
];

const tabContents: { [key: string]: TabContent } = {
  performance: {
    title: 'The Website Is Too Slow',
    metric: '1.4 seconds to start loading (target: 0.2s)',
    description:
      'The site takes 1.4 seconds before it even begins to appear - 7x slower than Google\'s benchmark. Google\'s speed test (Lighthouse) scores the site 56 out of 100. The total page size is 25.6MB, and 74.4% of visitors are on mobile where this slow speed is most painful. Slow sites lose visitors and rank lower in search results.',
    impact: 'Critical',
  },
  'on-page': {
    title: 'Parents See SPARK in Google But Don\'t Click',
    metric: '0.38% click-through rate',
    description:
      '4 key school pages appear in Google results 4.7 million times, but only 0.38% of parents click through to the site. That means for every 1,000 times SPARK appears in search results, only about 4 parents click. The page titles and descriptions shown in Google aren\'t compelling enough to drive clicks.',
    impact: 'Critical',
  },
  content: {
    title: 'Content Trust Signals Are Weak',
    metric: 'Trust Score: 6/10',
    description:
      'Strengths: 80+ blog posts and T4 Award recognition give SPARK some credibility online. Weaknesses: No author bios on articles (Google rewards content with named, credible authors), and 71% of parents who start an enquiry form abandon it before finishing - suggesting the content isn\'t building enough confidence to complete the action.',
    impact: 'High',
  },
  keywords: {
    title: 'Parents Searching "Near Me" Can\'t Find SPARK',
    metric: '145,000 search appearances',
    description:
      'When parents search "private schools near me" or "best schools near me," SPARK appears but sits on page 2 of Google (positions 7–9). These are parents actively looking for a school right now. Moving from page 2 to page 1 would dramatically increase parent visits and enquiries.',
    impact: 'High',
  },
};


const performanceMetrics = [
  { metric: 'Core Web Vitals', status: 'FAILED', details: 'LCP >2.5s on 63 URLs (mobile)' },
  {
    metric: 'Time to First Byte',
    status: '1.4s',
    details: 'Target: 200ms (7x over)',
  },
  { metric: 'Lighthouse (Mobile)', status: '56/100', details: '74.4% of visitors are on mobile' },
  { metric: 'Lighthouse (Desktop)', status: '93/100', details: 'Desktop is fine - the problem is mobile' },
  { metric: 'Page Weight', status: '25.6MB', details: 'Blocks mobile rendering completely' },
];

const ctrCrisisData = [
  {
    page: '/primary-schools',
    impressions: '1.38M',
    clicks: '6,259',
    ctr: '0.45%',
  },
  {
    page: '/high-schools',
    impressions: '1.36M',
    clicks: '5,608',
    ctr: '0.41%',
  },
  {
    page: '/contact',
    impressions: '1.13M',
    clicks: '4,571',
    ctr: '0.40%',
  },
  {
    page: '/apply',
    impressions: '948K',
    clicks: '4,205',
    ctr: '0.44%',
  },
  {
    page: '/open-days',
    impressions: '823K',
    clicks: '1,374',
    ctr: '0.17%',
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
            <h2 className={styles.heading}>SEO Health: Grade D+</h2>
            <p className={styles.subtitle}>SPARK is invisible for the searches that matter most</p>
          </div>

          {/* Score Breakdown */}
          <div className={styles.scoreBreakdownSection}>
            <h3 className={styles.scoreBreakdownHeading}>Where the 33 lost points went</h3>
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
                        <li>Missing meta descriptions - Google shows a blank snippet instead of a reason to click</li>
                        <li>No structured data - SPARK can&apos;t appear in rich results, maps, or knowledge panels</li>
                        <li>Title tags don&apos;t match what parents search for - easy wins left on the table</li>
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
                      These searches happen every day. SPARK is on page 1 but below the fold - most parents never scroll that far. Local schema, content optimisation, and targeted link building can push these into the top 3 where 60% of clicks happen. We&apos;d start here in week one.
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
