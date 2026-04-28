import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CpuIcon,
  BoltIcon,
  ShieldIcon,
  WalletIcon,
  ClockIcon,
  RepeatIcon,
  BrainIcon,
  LinkIcon,
  ArrowRightIcon,
  GamepadIcon,
  CoinsIcon,
} from "../components/Icons";

export const metadata: Metadata = {
  title: "AI Agents | StackMon — Autonomous Gameplay & Payments",
  description:
    "Deploy an autonomous AI agent that plays StackMon 24/7, signs Solana transactions, and manages micro-payments via MPP — all without human intervention.",
};

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="flex flex-col">
        {/* ====== HERO ====== */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden grid-pattern">
          {/* BG orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[140px]" />
            <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-foreground-muted/50 mb-10">
              <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground-muted">AI Agents</span>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-14">
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-foreground-muted mb-6">
                  <CpuIcon className="w-4 h-4 text-accent" />
                  <span>Autonomous Agent Mode</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                  Let Your AI<br />
                  <span className="gradient-text">Play For You</span>
                </h1>

                <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                  StackMon&apos;s autonomous agent connects to the Unity WebGL game via
                  long-polling, executes predefined gameplay skills, and automatically
                  signs &amp; broadcasts Solana transactions — running 24/7 without
                  human intervention.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://stackmon.fun" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <span className="flex items-center gap-2">
                      <GamepadIcon className="w-5 h-5" />
                      Try It Live
                    </span>
                  </a>
                  <a href="#how-it-works" className="btn-secondary">
                    How It Works
                  </a>
                </div>
              </div>

              {/* Hero image */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden glow-primary">
                  <Image
                    src="/agent-gameplay.png"
                    alt="AI agent autonomously playing StackMon with analytics overlay"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== HOW THE AGENT WORKS ====== */}
        <section className="py-24 px-6" id="how-it-works">
          <div className="section-divider mb-24" />
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-medium">Architecture</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                How the Agent <span className="gradient-text">Works</span>
              </h2>
              <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
                A reactive loop that listens, decides, pays, and plays — replacing fixed delays with intelligent long-polling.
              </p>
            </div>

            {/* Timeline steps */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent hidden md:block" />

              {[
                {
                  step: "01",
                  title: "Long-Poll for Game State",
                  desc: "The agent connects to the backend API and long-polls for game state changes. No fixed timers — it reacts instantly when the Unity game signals a match is finished or a new round begins.",
                  icon: <ClockIcon className="w-6 h-6 text-primary-light" />,
                  detail: "/api/game — returns state via long-polling",
                },
                {
                  step: "02",
                  title: "Execute Predefined Skills",
                  desc: "When game state indicates an action is needed, the agent selects from predefined gameplay skills (defined in /api/skills). Each skill maps to a specific game action — entering matches, placing blocks, or collecting rewards.",
                  icon: <BrainIcon className="w-6 h-6 text-secondary" />,
                  detail: "/api/skills — structured skill definitions",
                },
                {
                  step: "03",
                  title: "Sign & Broadcast Transactions",
                  desc: "The agent uses its own Solana wallet (configured via AGENT_WALLET_PRIVATE_KEY) to sign and broadcast micro-payment transactions through the Solana MPP SDK. No human approval needed.",
                  icon: <WalletIcon className="w-6 h-6 text-accent" />,
                  detail: "agent-mpp.ts — auto-signs via @solana/mpp",
                },
                {
                  step: "04",
                  title: "Loop & Repeat",
                  desc: "After the action completes, the agent immediately resumes long-polling for the next state change. This creates a continuous, efficient loop — no wasted cycles, no missed matches.",
                  icon: <RepeatIcon className="w-6 h-6 text-primary-light" />,
                  detail: "Reactive loop — zero downtime",
                },
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Step card */}
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="glass-card rounded-2xl p-7 relative group">
                      <div className="absolute top-5 right-5 text-4xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                        {item.step}
                      </div>
                      <div className={`icon-container mb-4 ${i % 2 === 1 ? "md:ml-auto" : ""}`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-foreground-muted leading-relaxed mb-3">{item.desc}</p>
                      <div className="text-xs font-mono text-secondary/70">{item.detail}</div>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 w-4 h-4 mt-10 rounded-full bg-primary border-2 border-background z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== AGENT PAYMENTS (MPP) ====== */}
        <section className="py-24 px-6">
          <div className="section-divider mb-24" />
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Payment visual */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden glow-secondary">
                  <Image
                    src="/payment-network.png"
                    alt="Solana MPP payment flow visualization"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 max-w-lg">
                <p className="text-sm uppercase tracking-widest text-secondary mb-3 font-medium">Agent Payments</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Auto-Funded via<br />
                  <span className="gradient-text">Solana MPP</span>
                </h2>
                <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                  The agent automatically handles all micro-payment flows.
                  When an API endpoint returns <code className="text-secondary">HTTP 402 Payment Required</code>,
                  the agent signs the transaction with its wallet and retries — all in milliseconds.
                </p>

                {/* Code example */}
                <div className="code-block mb-6">
                  <span className="comment">{`// agent-mpp.ts — payment flow`}</span><br />
                  <span className="keyword">if</span> (res.status === <span className="number">402</span>) {"{"}<br />
                  &nbsp;&nbsp;<span className="keyword">const</span> tx = <span className="keyword">await</span> mpp.<span className="string">createPayment</span>(res);<br />
                  &nbsp;&nbsp;<span className="keyword">await</span> wallet.<span className="string">signAndSend</span>(tx);<br />
                  &nbsp;&nbsp;<span className="keyword">return</span> <span className="keyword">await</span> <span className="string">fetch</span>(url); <span className="comment">{`// retry`}</span><br />
                  {"}"}
                </div>

                <div className="space-y-3">
                  {[
                    { icon: <ShieldIcon className="w-4 h-4" />, text: "Private key never leaves the server" },
                    { icon: <BoltIcon className="w-4 h-4" />, text: "Devnet SOL — zero real money risk" },
                    { icon: <CoinsIcon className="w-4 h-4" />, text: "Micro-transactions per action, not subscriptions" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-foreground-muted">
                      <div className="text-primary-light">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== TECH STACK ====== */}
        <section className="py-24 px-6">
          <div className="section-divider mb-24" />
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-primary-light mb-3 font-medium">Stack</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Built With <span className="gradient-text">Modern Tools</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Unity WebGL", desc: "Game runs in-browser via a WebGL build. No downloads.", icon: <GamepadIcon className="w-5 h-5 text-primary-light" /> },
                { title: "@solana/mpp", desc: "Solana MPP SDK for 402 Payment Required micro-transaction flows.", icon: <CoinsIcon className="w-5 h-5 text-secondary" /> },
                { title: "Solana Wallets", desc: "Phantom, Solflare & more via @solana/wallet-adapter-react.", icon: <WalletIcon className="w-5 h-5 text-accent" /> },
                { title: "Redis Sessions", desc: "Persistent state via Redis Cloud between backend, agent & Unity.", icon: <LinkIcon className="w-5 h-5 text-primary-light" /> },
                { title: "Next.js 15+", desc: "App Router with API routes for agent, game, skills & sessions.", icon: <BoltIcon className="w-5 h-5 text-secondary" /> },
                { title: "Long-Polling Bridge", desc: "Reactive proxy.ts handles CORS & dynamic port routing for Unity.", icon: <RepeatIcon className="w-5 h-5 text-accent" /> },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-6 group">
                  <div className="icon-container mb-4 !w-10 !h-10 !rounded-xl">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== API ROUTES ====== */}
        <section className="py-24 px-6">
          <div className="section-divider mb-24" />
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-secondary mb-3 font-medium">API Surface</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Agent <span className="gradient-text">Endpoints</span>
              </h2>
              <p className="text-foreground-muted text-lg max-w-xl mx-auto">
                The agent interacts with these backend API routes to manage gameplay, payments, and session state.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { method: "POST", path: "/api/agent", desc: "Trigger agent actions — start match, execute skill, stop loop" },
                { method: "GET", path: "/api/game", desc: "Long-poll for game state changes (matchmaking, round results)" },
                { method: "GET", path: "/api/skills", desc: "Retrieve predefined gameplay skill definitions" },
                { method: "GET", path: "/api/paid-data", desc: "MPP-protected endpoint — returns 402, agent auto-pays" },
                { method: "GET", path: "/api/session", desc: "Redis-backed session state (agent ↔ Unity bridge)" },
                { method: "GET", path: "/api/player", desc: "Player records, stats, and match history" },
              ].map((route, i) => (
                <div key={i} className="glass-card rounded-xl px-6 py-4 flex items-center gap-4 group">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                    route.method === "POST"
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "bg-secondary/10 text-secondary border border-secondary/20"
                  }`}>
                    {route.method}
                  </span>
                  <code className="text-sm font-mono text-primary-light">{route.path}</code>
                  <span className="text-sm text-foreground-muted hidden sm:inline">— {route.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CTA ====== */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Deploy Your <span className="gradient-text">Agent</span>
                </h2>
                <p className="text-foreground-muted text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  Configure your agent wallet, set your skills, and let it compete autonomously. No babysitting required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://stackmon.fun" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <span className="flex items-center gap-2">
                      <CpuIcon className="w-5 h-5" />
                      Launch Agent
                    </span>
                  </a>
                  <Link href="/" className="btn-secondary">
                    <ArrowRightIcon className="w-5 h-5 rotate-180" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FOOTER (same as home) ====== */}
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-3 h-1 bg-primary/70 rounded-sm transform rotate-2" />
                    <div className="w-4 h-1.5 bg-primary rounded-sm" />
                    <div className="w-5 h-2 bg-gradient-to-r from-primary to-secondary rounded-sm transform -rotate-1" />
                  </div>
                  <span className="text-lg font-bold gradient-text">StackMon</span>
                </div>
                <p className="text-sm text-foreground-muted max-w-xs">
                  A precision stacking game powered by Solana MPP and autonomous AI agents.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Product</h4>
                  <div className="flex flex-col gap-2">
                    <a href="https://stackmon.fun" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-muted hover:text-primary-light transition-colors">Play Game</a>
                    <Link href="/agents" className="text-sm text-foreground-muted hover:text-primary-light transition-colors">AI Agents</Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Resources</h4>
                  <div className="flex flex-col gap-2">
                    <a href="https://github.com/solana-labs/mpp" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-muted hover:text-primary-light transition-colors">Solana MPP</a>
                    <a href="https://x402.org" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-muted hover:text-primary-light transition-colors">x402 Protocol</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-divider mb-6" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-foreground-muted/50">&copy; 2025 StackMon. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-foreground-muted/50 hover:text-foreground-muted transition-colors">Privacy</a>
                <a href="#" className="text-sm text-foreground-muted/50 hover:text-foreground-muted transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
