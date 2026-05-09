# Graph Report - .  (2026-05-08)

## Corpus Check
- 28 files · ~139,489 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 50 nodes · 63 edges · 15 communities (8 shown, 7 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 180,000 input · 2,000 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core UI Icons|Core UI Icons]]
- [[_COMMUNITY_Agent Interface|Agent Interface]]
- [[_COMMUNITY_App Layout & Design|App Layout & Design]]
- [[_COMMUNITY_Tile Stack Animation|Tile Stack Animation]]
- [[_COMMUNITY_Navigation System|Navigation System]]
- [[_COMMUNITY_Scrolling & Root Layout|Scrolling & Root Layout]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Next.js Configuration|Next.js Configuration]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]
- [[_COMMUNITY_Payment Processing UI|Payment Processing UI]]
- [[_COMMUNITY_Animation Engines|Animation Engines]]
- [[_COMMUNITY_Visual Assets|Visual Assets]]

## God Nodes (most connected - your core abstractions)
1. `BoltIcon()` - 3 edges
2. `CpuIcon()` - 3 edges
3. `WalletIcon()` - 3 edges
4. `ShieldIcon()` - 3 edges
5. `ClockIcon()` - 3 edges
6. `ArrowRightIcon()` - 3 edges
7. `GamepadIcon()` - 3 edges
8. `CoinsIcon()` - 3 edges
9. `RootLayout()` - 2 edges
10. `StackIcon()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `SmoothScrollProvider()`  [EXTRACTED]
  app/layout.tsx → app/components/SmoothScrollProvider.tsx

## Communities (15 total, 7 thin omitted)

### Community 0 - "Core UI Icons"
Cohesion: 0.27
Nodes (10): ArrowRightIcon(), BoltIcon(), BrainIcon(), CoinsIcon(), CpuIcon(), GlobeIcon(), SparklesIcon(), StackIcon() (+2 more)

### Community 1 - "Agent Interface"
Cohesion: 0.29
Nodes (6): metadata, ClockIcon(), GamepadIcon(), LinkIcon(), RepeatIcon(), ShieldIcon()

### Community 2 - "App Layout & Design"
Cohesion: 0.33
Nodes (5): Next.js Agent Rules, inter, metadata, outfit, Lumina Core Design System

### Community 3 - "Tile Stack Animation"
Cohesion: 0.4
Nodes (4): containerRef, ctx, sectionRef, tileColors

### Community 4 - "Navigation System"
Cohesion: 0.5
Nodes (3): links, [mobileOpen, setMobileOpen], pathname

## Knowledge Gaps
- **19 isolated node(s):** `eslintConfig`, `nextConfig`, `config`, `outfit`, `inter` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `RootLayout()` connect `Scrolling & Root Layout` to `App Layout & Design`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `BoltIcon()` connect `Core UI Icons` to `Agent Interface`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `CpuIcon()` connect `Core UI Icons` to `Agent Interface`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `config` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._