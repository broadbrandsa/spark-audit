# Project Structure

## Folder Layout

```
spark-audit-site/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, brand tokens, animations
│   │   ├── layout.tsx           # Root layout with fonts and metadata
│   │   ├── page.tsx             # Main page composing all sections
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Nav.tsx              # Fixed navigation with scroll effect
│   │   ├── FadeIn.tsx           # Scroll-triggered animation wrapper
│   │   ├── ParallaxImage.tsx    # Parallax scroll image component
│   │   ├── ui/                  # shadcn UI primitives
│   │   │   ├── accordion.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── separator.tsx
│   │   │   └── tabs.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── ExecutiveSummarySection.tsx
│   │       ├── ExecutiveSummarySection.module.css
│   │       ├── SEOAuditSection.tsx
│   │       ├── SEOAuditSection.module.css
│   │       ├── PPCAuditSection.tsx
│   │       ├── MarketingContextSection.tsx
│   │       ├── RecommendationsSection.tsx
│   │       └── ProposalBridgeSection.tsx
│   └── lib/
│       └── utils.ts             # cn() utility for class merging
├── public/
│   ├── Logos/
│   │   ├── SPARK.webp
│   │   ├── Broadbrand.png
│   │   └── heart-DSG.png
│   └── images/
├── docs/                        # Project documentation
├── package.json
├── tsconfig.json
├── next.config.ts
├── components.json              # shadcn configuration
└── postcss.config.mjs
```

## Section Composition

All sections are imported and composed in `src/app/page.tsx` in this order:

```
Nav → Hero → Executive Summary → SEO Audit → PPC Audit →
Marketing Context → Recommendations → Proposal Bridge → Footer
```

## Styling Approaches

Two styling patterns are used:

1. **CSS Modules** — ExecutiveSummarySection and SEOAuditSection use `.module.css` files for scoped styles
2. **Inline styles** — PPCAuditSection, MarketingContextSection, RecommendationsSection, and ProposalBridgeSection use inline style objects

## Content Management

All audit data is hardcoded directly in component files. To update data:

- Score cards → `ExecutiveSummarySection.tsx`
- SEO metrics → `SEOAuditSection.tsx`
- PPC metrics → `PPCAuditSection.tsx`
- Channel data → `MarketingContextSection.tsx`
- Recommendations → `RecommendationsSection.tsx`
- Strategy connections → `ProposalBridgeSection.tsx`
