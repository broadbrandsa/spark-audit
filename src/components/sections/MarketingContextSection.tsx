"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";

const MarketingContextSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const channelData = [
    { name: "Broadbrand Social", rate: 9.54, sessions: "3,322", conversions: "317", label: "Top performer", color: "#22c55e" },
    { name: "/virtual-tours page", rate: 5.53, sessions: "9,293", conversions: "514", label: "Best-converting page on the site", color: "#22c55e" },
    { name: "Google Ads (Search)", rate: 4.40, sessions: "185,000", conversions: "8,146", label: "Highest volume paid channel", color: "#22c55e" },
    { name: "Bing Organic", rate: 3.46, sessions: "27,977", conversions: "969", label: "Highest organic conversion rate", color: "#22c55e" },
    { name: "ChatGPT Referral", rate: 2.65, sessions: "453", conversions: "12", label: "Emerging AI channel", color: "#3b82f6" },
    { name: "Google Organic", rate: 1.92, sessions: "197,495", conversions: "3,790", label: "", color: "#eab308" },
    { name: "TikTok Referral", rate: 1.91, sessions: "4,614", conversions: "88", label: "Organic TikTok content", color: "#eab308" },
    { name: "Facebook & Instagram Ads", rate: 1.54, sessions: "175,783", conversions: "2,702", label: "84% of ad budget goes here", color: "#ff4800" },
    { name: "X / Twitter", rate: 0.22, sessions: "13,070", conversions: "29", label: "", color: "#ef4444" },
    { name: "TikTok Paid Ads", rate: 0, sessions: "41,527", conversions: "0", label: "41K visitors, zero enquiries", color: "#ef4444" },
  ];

  const funnelStages = [
    { stage: "page_view", count: 1639863, label: "Page View" },
    { stage: "scroll", count: 436531, label: "Scroll", drop: "73%" },
    { stage: "click", count: 133686, label: "Click", drop: "69%" },
    { stage: "form_start", count: 54325, label: "Form Start", drop: "59%" },
    { stage: "form_submit", count: 15818, label: "Form Submit", drop: "71%" },
    { stage: "application", count: 16085, label: "Application" },
  ];

  const maxCount = funnelStages[0].count;

  return (
    <section
      id="marketing-context"
      style={{
        backgroundColor: "white",
        padding: "60px 20px",
      }}
    >
      <div className="container-spark">
        <FadeIn>
          <div style={{ marginBottom: "48px" }}>
            <div className="section-label">Marketing Context</div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#000",
                marginTop: "12px",
              }}
            >
              The channels that actually convert - and the ones burning budget
            </h2>
          </div>
        </FadeIn>

        {/* Channel Performance Matrix */}
        <FadeIn>
          <div style={{ marginBottom: "60px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#000",
                marginBottom: "8px",
              }}
            >
              Which channels actually drive parent enquiries?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "24px",
                lineHeight: "1.6",
              }}
            >
              The percentage of visitors from each channel who complete an enquiry form or start an application. Higher is better - anything above 3% is strong.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {channelData.map((channel) => (
                <div
                  key={channel.name}
                  className="card-spark rounded-2xl p-7"
                  style={{
                    backgroundColor: "#f9f9f9",
                    border: `2px solid ${channel.color}20`,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ marginBottom: "4px" }}>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#333",
                      }}
                    >
                      {channel.name}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.08em",
                      color: "#6b7280",
                      marginBottom: "6px",
                    }}
                  >
                    Conversion Rate
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: channel.color,
                      marginBottom: "8px",
                    }}
                  >
                    {channel.rate}%
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      marginBottom: "8px",
                    }}
                  >
                    {channel.sessions} visitors → {channel.conversions} enquiries
                  </div>
                  {channel.label && (
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: channel.color,
                        backgroundColor: `${channel.color}15`,
                        padding: "4px 8px",
                        borderRadius: "4px",
                        display: "inline-block",
                      }}
                    >
                      {channel.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* The Funnel Breakdown - Visual Funnel */}
        <FadeIn>
          <div style={{ marginBottom: "60px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#000",
                marginBottom: "8px",
              }}
            >
              Where SPARK Loses Parents
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "36px",
                lineHeight: "1.6",
              }}
            >
              1.6 million page views enter the top. Only 16,085 applications come out the bottom. Here&apos;s where they drop off.
            </p>

            {/* Funnel Visualization - True Trapezoid Funnel */}
            <div style={{ maxWidth: "820px", margin: "0 auto" }}>
              {(() => {
                // Calculate widths - use cube-root scale so smaller stages stay readable
                // Round to 2 decimal places to prevent SSR/client hydration mismatch
                const widths = funnelStages.map((s) =>
                  Math.round(Math.max(28, Math.pow(s.count / maxCount, 0.38) * 100) * 100) / 100
                );
                const stageColors = [
                  "#1f49c9", // Page View - primary blue
                  "#2952cc", // Scroll
                  "#3661cf", // Click
                  "#5a5bbf", // Form Start - transitioning
                  "#ff4800", // Form Submit - DANGER orange
                  "#1f49c9", // Application - back to blue (they made it)
                ];

                return funnelStages.map((stage, i) => {
                  const topW = i === 0 ? 100 : widths[i - 1];
                  const botW = widths[i];
                  const nextW = i < funnelStages.length - 1 ? widths[i + 1] : botW;
                  const isBottleneck = stage.stage === "form_submit";
                  const isLast = i === funnelStages.length - 1;
                  const color = stageColors[i];

                  // Trapezoid clip path: wider top, narrower bottom
                  // Round all values to 2 decimal places for SSR/client consistency
                  const r = (v: number) => Math.round(v * 100) / 100;
                  const topLeft = r((100 - topW) / 2);
                  const topRight = r(topLeft + topW);
                  const botLeft = r((100 - botW) / 2);
                  const botRight = r(botLeft + botW);
                  const clipPath = `polygon(${topLeft}% 0%, ${topRight}% 0%, ${botRight}% 100%, ${botLeft}% 100%)`;

                  // Connector trapezoid between this stage's bottom and next stage's top
                  const connBotLeft = r((100 - nextW) / 2);
                  const connBotRight = r(connBotLeft + nextW);
                  const connClip = `polygon(${botLeft}% 0%, ${botRight}% 0%, ${connBotRight}% 100%, ${connBotLeft}% 100%)`;

                  return (
                    <div key={stage.stage}>
                      {/* Stage trapezoid */}
                      <div style={{ position: "relative" }}>
                        <div
                          style={{
                            width: "100%",
                            height: i === 0 ? "64px" : "54px",
                            clipPath,
                            background: isBottleneck
                              ? "linear-gradient(180deg, #ff4800 0%, #d63b00 100%)"
                              : `linear-gradient(180deg, ${color} 0%, ${color}e6 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            boxShadow: isBottleneck
                              ? "0 4px 24px rgba(255,72,0,0.3)"
                              : "none",
                            overflow: "visible",
                          }}
                        >
                          {/* Inner content */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              zIndex: 1,
                            }}
                          >
                            <span
                              style={{
                                color: "rgba(255,255,255,0.55)",
                                fontSize: "12px",
                                fontWeight: "600",
                                textTransform: "uppercase" as const,
                                letterSpacing: "0.08em",
                                fontFamily: "var(--font-body)",
                              }}
                            >
                              {stage.label}
                            </span>
                            <span
                              style={{
                                color: "#fff",
                                fontSize: i === 0 ? "22px" : "18px",
                                fontWeight: "700",
                                fontFamily: "var(--font-heading)",
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {stage.count.toLocaleString()}
                            </span>
                            {stage.drop && (
                              <span
                                style={{
                                  color: isBottleneck ? "#fff" : "rgba(255,255,255,0.9)",
                                  fontSize: "13px",
                                  fontWeight: "700",
                                  background: isBottleneck
                                    ? "rgba(0,0,0,0.25)"
                                    : "rgba(0,0,0,0.15)",
                                  padding: "2px 10px",
                                  borderRadius: "20px",
                                  fontFamily: "var(--font-body)",
                                }}
                              >
                                ↓ {stage.drop}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Connector trapezoid to next stage */}
                      {!isLast && (
                        <div
                          style={{
                            width: "100%",
                            height: "6px",
                            clipPath: connClip,
                            background:
                              funnelStages[i + 1].stage === "form_submit"
                                ? "linear-gradient(180deg, rgba(255,72,0,0.25) 0%, rgba(255,72,0,0.4) 100%)"
                                : `linear-gradient(180deg, ${color}44 0%, ${stageColors[i + 1]}33 100%)`,
                          }}
                        />
                      )}
                    </div>
                  );
                });
              })()}
            </div>

            {/* Bottleneck Callout */}
            <div
              style={{
                marginTop: "32px",
                background: "linear-gradient(135deg, #2B0430 0%, #1a0120 100%)",
                borderRadius: "12px",
                padding: "24px 28px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  background: "#ff4800",
                  borderRadius: "12px 0 0 12px",
                }}
              />
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(255, 72, 0, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "20px" }}>⚠️</span>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#ff4800",
                    marginBottom: "6px",
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Biggest Opportunity
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: "1.65",
                  }}
                >
                  71% of parents who start an enquiry form don&apos;t finish it. For every{" "}
                  <strong style={{ color: "#fff" }}>100 parents</strong> who
                  begin, only{" "}
                  <strong style={{ color: "#ff4800" }}>29 complete it</strong>.
                  This is the single highest-leverage fix available.
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Emerging Signals */}
        <FadeIn>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                className="card-spark rounded-2xl p-7"
                style={{
                  backgroundColor: "#f0f4ff",
                  border: "2px solid #3b82f6",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#3b82f6",
                    backgroundColor: "#dbeafe",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  Emerging Channel
                </div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000",
                    marginBottom: "8px",
                  }}
                >
                  ChatGPT Referrals
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginBottom: "12px",
                  }}
                >
                  453 visitors • 2.65% enquiry rate
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#3b82f6",
                    fontWeight: "500",
                  }}
                >
                  Parents are already asking AI for school recommendations
                </p>
              </div>

              <div
                className="card-spark rounded-2xl p-7"
                style={{
                  backgroundColor: "#f0fdf4",
                  border: "2px solid #22c55e",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#22c55e",
                    backgroundColor: "#dcfce7",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  Hidden Gem
                </div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000",
                    marginBottom: "8px",
                  }}
                >
                  Bing Organic
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginBottom: "12px",
                  }}
                >
                  27,977 visitors • 3.46% enquiry rate
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#22c55e",
                    fontWeight: "500",
                  }}
                >
                  Under-invested - 2x Google Organic&apos;s conversion rate
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default MarketingContextSection;
