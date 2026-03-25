'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function PPCAuditSection() {
  const [activeTab, setActiveTab] = useState('best-performers');

  return (
    <section
      id="ppc-audit"
      style={{
        background: '#2B0430',
        padding: '4rem 0',
      }}
    >
      <FadeIn>
        <div className="container-spark">
          {/* Section Label */}
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-label">PPC Audit</span>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                color: '#FFFFFF',
                marginBottom: '0.5rem',
              }}
            >
              R3.28M spent. Here&apos;s what&apos;s working — and what isn&apos;t.
            </h2>
          </div>

          {/* 1. CROSS-PLATFORM OVERVIEW */}
          <div style={{ marginBottom: '3rem' }}>
            <FadeIn>
              <div style={{ marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: '1.5rem',
                    color: 'rgba(200,218,227,0.95)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Google Ads vs Facebook &amp; Instagram: The Full Picture
                </h3>
              </div>

              {/* Metric Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                {/* Google Ads Card */}
                <FadeIn>
                  <div
                    className="card-spark rounded-2xl p-7"
                    style={{
                      background: '#FFFFFF',
                      border: '2px solid rgba(31,73,201,0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: '#1f49c9',
                      }}
                    />
                    <div style={{ paddingTop: '0.5rem' }}>
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: '1.25rem',
                          color: '#1f49c9',
                          marginBottom: '1rem',
                          fontWeight: 700,
                        }}
                      >
                        Google Ads
                      </h4>
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Spend
                          </span>
                          <span
                            style={{
                              fontWeight: 700,
                              color: '#1f49c9',
                              fontSize: '1.1rem',
                            }}
                          >
                            R530K
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Clicks
                          </span>
                          <span style={{ fontWeight: 700, color: '#000', fontSize: '1.1rem' }}>
                            186K
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Cost/Conversion
                          </span>
                          <span
                            style={{
                              fontWeight: 700,
                              color: '#00a8e1',
                              fontSize: '1.1rem',
                            }}
                          >
                            R64
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Conv. Rate
                          </span>
                          <span
                            style={{
                              fontWeight: 700,
                              background: 'rgba(0,168,225,0.15)',
                              color: '#00a8e1',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '20px',
                              fontSize: '0.95rem',
                            }}
                          >
                            4.40%
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: '1rem',
                          padding: '0.75rem',
                          background: 'rgba(0,168,225,0.1)',
                          borderLeft: '3px solid #00a8e1',
                          fontSize: '0.85rem',
                          color: '#00a8e1',
                          fontWeight: 600,
                          borderRadius: '4px',
                        }}
                      >
                        ✓ Most efficient channel
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Meta Ads Card */}
                <FadeIn>
                  <div
                    className="card-spark rounded-2xl p-7"
                    style={{
                      background: '#FFFFFF',
                      border: '2px solid rgba(255,72,0,0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: '#FF4800',
                      }}
                    />
                    <div style={{ paddingTop: '0.5rem' }}>
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: '1.25rem',
                          color: '#FF4800',
                          marginBottom: '1rem',
                          fontWeight: 700,
                        }}
                      >
                        Meta Ads
                      </h4>
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Spend
                          </span>
                          <span
                            style={{
                              fontWeight: 700,
                              color: '#FF4800',
                              fontSize: '1.1rem',
                            }}
                          >
                            R2.75M
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Impressions
                          </span>
                          <span style={{ fontWeight: 700, color: '#000', fontSize: '1.1rem' }}>
                            96.6M
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Cost/Lead Range
                          </span>
                          <span
                            style={{
                              fontWeight: 700,
                              color: '#FF4800',
                              fontSize: '1.1rem',
                            }}
                          >
                            R71–R220
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '0.75rem',
                          }}
                        >
                          <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.95rem' }}>
                            Campaigns
                          </span>
                          <span style={{ fontWeight: 700, color: '#000', fontSize: '1.1rem' }}>
                            80+
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: '1rem',
                          padding: '0.75rem',
                          background: 'rgba(255,72,0,0.1)',
                          borderLeft: '3px solid #FF4800',
                          fontSize: '0.85rem',
                          color: '#FF4800',
                          fontWeight: 600,
                          borderRadius: '4px',
                        }}
                      >
                        ⚠ Needs consolidation
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Budget Split Visualization */}
              <div
                className="card-spark rounded-2xl p-7"
                style={{
                  background: '#FFFFFF',
                  marginBottom: '2rem',
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: '1rem',
                    color: '#2B0430',
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  Budget Allocation
                </h4>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <div style={{ display: 'flex', height: '40px', borderRadius: '8px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: '84%',
                          background: '#FF4800',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                        }}
                      >
                        84% Meta
                      </div>
                      <div
                        style={{
                          width: '16%',
                          background: '#1f49c9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                        }}
                      >
                        16% Google
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <p
                      style={{
                        color: 'rgba(0,0,0,0.7)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      <strong>84% of budget goes to Meta</strong> where cost per lead runs R71–R220. Google Ads delivers at R64 with a 4.40% conversion rate. Shifting even 15% of spend to Google could generate the same leads for significantly less.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 2. GOOGLE ADS DETAIL */}
          <div style={{ marginBottom: '3rem' }}>
            <FadeIn>
              <div
                className="card-spark rounded-2xl p-7"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(31,73,201,0.2)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: '1.25rem',
                    color: '#1f49c9',
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  Google Ads: The Efficient Channel
                </h3>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {/* Search General */}
                  <div
                    style={{
                      padding: '1rem',
                      background: 'rgba(31,73,201,0.05)',
                      borderRadius: '8px',
                      borderLeft: '4px solid #1f49c9',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: '1rem',
                        color: '#2B0430',
                        marginBottom: '1rem',
                        fontWeight: 700,
                      }}
                    >
                      Search General
                    </h4>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '1rem',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                          Clicks
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: '#1f49c9',
                          }}
                        >
                          185K
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                          CTR
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: '#1f49c9',
                          }}
                        >
                          13.48%
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                          CPC
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: '#1f49c9',
                          }}
                        >
                          R2.82
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                          Conversions
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: '#1f49c9',
                          }}
                        >
                          8,146
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Campaign */}
                  <div
                    style={{
                      padding: '1rem',
                      background: 'rgba(255,72,0,0.05)',
                      borderRadius: '8px',
                      borderLeft: '4px solid #FF4800',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: '1rem',
                        color: '#2B0430',
                        marginBottom: '1rem',
                        fontWeight: 700,
                      }}
                    >
                      Brand Campaign
                    </h4>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '1rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                          Clicks
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: '#FF4800',
                          }}
                        >
                          1,405
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                          CPC
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: '#FF4800',
                          }}
                        >
                          R5.32
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                          Cost/Conversion
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: '#FF4800',
                          }}
                        >
                          R225
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '0.75rem',
                        background: '#FFF',
                        borderLeft: '3px solid #FF4800',
                        fontSize: '0.85rem',
                        color: '#FF4800',
                        fontWeight: 600,
                        borderRadius: '4px',
                      }}
                    >
                      ⚠ 3.5x more expensive than Search General — we&apos;d reallocate this budget immediately
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 3. META ADS TOP CAMPAIGNS - TABBED VIEW */}
          <div style={{ marginBottom: '3rem' }}>
            <FadeIn>
              <div
                className="card-spark rounded-2xl p-7"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(200,218,227,0.3)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: '1.25rem',
                    color: '#2B0430',
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  Meta Ads: Winners &amp; Money Pits
                </h3>

                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  style={{
                    width: '100%',
                  }}
                >
                  <TabsList
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      marginBottom: '1.5rem',
                      background: 'rgba(0,0,0,0.05)',
                      padding: '0.25rem',
                      borderRadius: '8px',
                      width: '100%',
                    }}
                  >
                    <TabsTrigger
                      value="best-performers"
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        background: activeTab === 'best-performers' ? '#1f49c9' : 'transparent',
                        color: activeTab === 'best-performers' ? 'white' : '#2B0430',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem',
                      }}
                    >
                      Best Performers
                    </TabsTrigger>
                    <TabsTrigger
                      value="underperformers"
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        background: activeTab === 'underperformers' ? '#FF4800' : 'transparent',
                        color: activeTab === 'underperformers' ? 'white' : '#2B0430',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem',
                      }}
                    >
                      Underperformers
                    </TabsTrigger>
                  </TabsList>

                  {/* Best Performers Tab */}
                  <TabsContent value="best-performers">
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <FadeIn>
                        <div
                          style={{
                            padding: '1rem',
                            background: 'rgba(31,73,201,0.05)',
                            borderRadius: '8px',
                            borderLeft: '4px solid #1f49c9',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <h4
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: '1rem',
                                  color: '#2B0430',
                                  marginBottom: '0.25rem',
                                  fontWeight: 700,
                                }}
                              >
                                Schools Instant Forms
                              </h4>
                              <p
                                style={{
                                  fontSize: '0.85rem',
                                  color: 'rgba(0,0,0,0.6)',
                                }}
                              >
                                Top performing lead gen campaign
                              </p>
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                color: '#1f49c9',
                                textAlign: 'right',
                              }}
                            >
                              <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                                Cost/Lead
                              </div>
                              R40.94
                            </div>
                          </div>
                        </div>
                      </FadeIn>

                      <FadeIn>
                        <div
                          style={{
                            padding: '1rem',
                            background: 'rgba(0,168,225,0.05)',
                            borderRadius: '8px',
                            borderLeft: '4px solid #00a8e1',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <h4
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: '1rem',
                                  color: '#2B0430',
                                  marginBottom: '0.25rem',
                                  fontWeight: 700,
                                }}
                              >
                                WhatsApp Video
                              </h4>
                              <p
                                style={{
                                  fontSize: '0.85rem',
                                  color: 'rgba(0,0,0,0.6)',
                                }}
                              >
                                Strong engagement via messaging
                              </p>
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                color: '#00a8e1',
                                textAlign: 'right',
                              }}
                            >
                              <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                                Cost/Convo
                              </div>
                              R63.84
                            </div>
                          </div>
                        </div>
                      </FadeIn>

                      <FadeIn>
                        <div
                          style={{
                            padding: '1rem',
                            background: 'rgba(31,73,201,0.05)',
                            borderRadius: '8px',
                            borderLeft: '4px solid #1f49c9',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <h4
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: '1rem',
                                  color: '#2B0430',
                                  marginBottom: '0.25rem',
                                  fontWeight: 700,
                                }}
                              >
                                High Schools IF
                              </h4>
                              <p
                                style={{
                                  fontSize: '0.85rem',
                                  color: 'rgba(0,0,0,0.6)',
                                }}
                              >
                                Instant forms for high school segment
                              </p>
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                color: '#1f49c9',
                                textAlign: 'right',
                              }}
                            >
                              <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                                Cost/Lead
                              </div>
                              R102
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </TabsContent>

                  {/* Underperformers Tab */}
                  <TabsContent value="underperformers">
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <FadeIn>
                        <div
                          style={{
                            padding: '1rem',
                            background: 'rgba(255,72,0,0.05)',
                            borderRadius: '8px',
                            borderLeft: '4px solid #FF4800',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <h4
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: '1rem',
                                  color: '#2B0430',
                                  marginBottom: '0.25rem',
                                  fontWeight: 700,
                                }}
                              >
                                Switch to SPARK
                              </h4>
                              <p
                                style={{
                                  fontSize: '0.85rem',
                                  color: 'rgba(0,0,0,0.6)',
                                }}
                              >
                                Campaign messaging not resonating
                              </p>
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                color: '#FF4800',
                                textAlign: 'right',
                              }}
                            >
                              <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                                Cost/Lead
                              </div>
                              R400+
                            </div>
                          </div>
                        </div>
                      </FadeIn>

                      <FadeIn>
                        <div
                          style={{
                            padding: '1rem',
                            background: 'rgba(255,72,0,0.05)',
                            borderRadius: '8px',
                            borderLeft: '4px solid #FF4800',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <h4
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: '1rem',
                                  color: '#2B0430',
                                  marginBottom: '0.25rem',
                                  fontWeight: 700,
                                }}
                              >
                                Landing Page Campaigns
                              </h4>
                              <p
                                style={{
                                  fontSize: '0.85rem',
                                  color: 'rgba(0,0,0,0.6)',
                                }}
                              >
                                Conversion friction on LP
                              </p>
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                color: '#FF4800',
                                textAlign: 'right',
                              }}
                            >
                              <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                                Avg Cost/Lead
                              </div>
                              R220
                            </div>
                          </div>
                        </div>
                      </FadeIn>

                      <FadeIn>
                        <div
                          style={{
                            padding: '1rem',
                            background: 'rgba(255,72,0,0.05)',
                            borderRadius: '8px',
                            borderLeft: '4px solid #FF4800',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <h4
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: '1rem',
                                  color: '#2B0430',
                                  marginBottom: '0.25rem',
                                  fontWeight: 700,
                                }}
                              >
                                TikTok Paid
                              </h4>
                              <p
                                style={{
                                  fontSize: '0.85rem',
                                  color: 'rgba(0,0,0,0.6)',
                                }}
                              >
                                Complete conversion failure
                              </p>
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                color: '#FF4800',
                                textAlign: 'right',
                              }}
                            >
                              <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', marginBottom: '0.25rem' }}>
                                Conversions
                              </div>
                              0 from 41K sessions
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </FadeIn>
          </div>

          {/* Budget Waste Spotlight */}
          <FadeIn>
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem 2rem',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: '#ef4444', fontWeight: 700, margin: 0 }}>
                  Campaign Spending Spotlight
                </h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.6)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ef4444', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px 0' }}>Worst Performer</p>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: '0 0 2px 0' }}>Switch to SPARK</p>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563', margin: 0 }}>R61,419 spent → 153 leads = <strong style={{ color: '#ef4444' }}>R401/lead</strong></p>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.6)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ef4444', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px 0' }}>Also Overspending</p>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: '0 0 2px 0' }}>Phase Campaign</p>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563', margin: 0 }}>R66,447 spent → 159 leads = <strong style={{ color: '#ef4444' }}>R418/lead</strong></p>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.6)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#22c55e', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px 0' }}>Best Performer</p>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: '0 0 2px 0' }}>Schools | Instant Forms</p>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563', margin: 0 }}>R144,148 spent → 2,732 leads = <strong style={{ color: '#22c55e' }}>R53/lead</strong></p>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#374151', marginTop: '1rem', lineHeight: 1.6, marginBottom: 0 }}>
                The cost-per-lead gap between the best and worst Meta campaigns is <strong>7.5x</strong>. Pausing Switch to SPARK and Phase Campaign alone would free up R127,866 — enough to generate <strong>2,412 additional leads</strong> at the best performer&apos;s rate.
              </p>
            </div>
          </FadeIn>

          {/* 4. KEY INSIGHT CALLOUT */}
          <FadeIn>
            <div
              className="card-spark rounded-2xl p-7"
              style={{
                background: 'linear-gradient(135deg, #2B0430 0%, #1a0120 100%)',
                border: '2px solid #FF4800',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255,72,0,0.1)',
                  borderRadius: '50%',
                  transform: 'translate(40px, -40px)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.5rem',
                      color: '#FF4800',
                    }}
                  >
                    💡
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: '1.25rem',
                      color: '#FF4800',
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Key Insight
                  </h3>
                </div>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    margin: '0.5rem 0 0 0',
                  }}
                >
                  <strong>Broadbrand&apos;s own campaigns outperform</strong> most paid advertising. The{' '}
                  <code
                    style={{
                      background: 'rgba(255,72,0,0.15)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      color: '#FF4800',
                      fontFamily: 'monospace',
                      fontSize: '0.9rem',
                    }}
                  >
                    broadbrand_social
                  </code>{' '}
                  campaign achieves a <strong style={{ color: '#FF4800' }}>9.54% conversion rate</strong> — the{' '}
                  <strong>highest of any campaign at scale</strong>. The message is clear: internal expertise converts better
                  than media spend alone. This is the model we&apos;d scale across every channel.
                </p>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,72,0,0.08)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
                    <strong>WhatsApp update:</strong> WhatsApp conversation campaigns generated 2,660 conversations at R92 each (R244,295 total). Video-format WhatsApp ads significantly outperform image-format — R64/conversation vs R111/conversation. If SPARK enables WhatsApp as an enquiry channel (see our proposal), this becomes a direct lead source, not just a conversation starter.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}
