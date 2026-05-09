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
    <div className="relative z-10 min-h-screen font-sans">
      <main className="block">
        {/* ====== HERO ====== */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
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

              {/* Hero Animated Workflow Visual */}
              <div className="flex-1">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl glass-card overflow-hidden glow-primary flex items-center justify-center p-8 border border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                  
                  {/* Neural Grid Background */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }} />

                  <div className="relative w-full h-full flex flex-col items-center justify-between z-10">
                    {/* Top: Brain/Agent */}
                    <div className="relative animate-float">
                      <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center animate-pulse-glow shadow-[0_0_40px_rgba(139,124,255,0.4)] border border-primary/50 relative z-10">
                        <BrainIcon className="w-10 h-10 text-primary" />
                      </div>
                      {/* Radiating rings */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                    </div>

                    {/* Data Flow (Vertical lines) */}
                    <div className="flex-1 flex gap-12 relative my-4">
                      {/* Left flow */}
                      <div className="w-[2px] h-full bg-gradient-to-b from-primary/30 to-accent/30 relative overflow-hidden rounded-full">
                        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-shimmer" style={{ backgroundSize: '100% 200%', animationDuration: '2s' }} />
                      </div>
                      {/* Right flow */}
                      <div className="w-[2px] h-full bg-gradient-to-b from-primary/30 to-secondary/30 relative overflow-hidden rounded-full">
                         <div className="w-full h-full bg-gradient-to-t from-transparent via-secondary to-transparent animate-shimmer delay-300" style={{ backgroundSize: '100% 200%', animationDuration: '2s' }} />
                      </div>
                    </div>

                    {/* Bottom: Game/Action */}
                    <div className="w-full flex justify-between items-end relative px-4">
                      {/* Left: Blockchain/MPP */}
                      <div className="flex flex-col items-center gap-3 animate-float delay-100">
                        <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-accent/40 shadow-[0_0_20px_rgba(255,107,157,0.3)]">
                          <WalletIcon className="w-7 h-7 text-accent" />
                        </div>
                        <div className="text-xs font-mono text-accent/80 glass px-2 py-1 rounded">SIGN TX</div>
                      </div>

                      {/* Right: Unity WebGL */}
                      <div className="flex flex-col items-center gap-3 animate-float delay-300">
                        <div className="w-16 h-16 rounded-xl glass flex items-center justify-center border border-secondary/40 shadow-[0_0_20px_rgba(0,245,212,0.3)]">
                          <GamepadIcon className="w-7 h-7 text-secondary" />
                        </div>
                        <div className="text-xs font-mono text-secondary/80 glass px-2 py-1 rounded">PLAY BLOCK</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== HOW THE AGENT WORKS ====== */}
        <section className="py-24 px-6 relative z-10" id="how-it-works">
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
        <section className="py-24 px-6 relative z-10">
          <div className="section-divider mb-24" />
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Payment Visual - Animated Flow */}
              <div className="flex-1">
                <div className="relative w-full aspect-video rounded-2xl glass-card overflow-hidden glow-secondary flex items-center justify-center border border-secondary/20 p-6 md:p-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-accent/10" />
                  
                  <div className="relative w-full h-full flex items-center justify-between">
                    {/* Left: Agent */}
                    <div className="flex flex-col items-center gap-3 z-10 animate-float delay-100">
                      <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-primary/50 shadow-[0_0_20px_rgba(139,124,255,0.4)]">
                        <CpuIcon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-xs font-mono text-primary-light glass px-2 py-1 rounded">AGENT</div>
                    </div>

                    {/* Middle: Data lines */}
                    <div className="flex-1 relative h-32 flex flex-col justify-between px-4">
                      {/* Top line: Request */}
                      <div className="w-full relative">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-[10px] font-mono text-primary/70">1. GET /api/game</div>
                        <div className="w-full h-[2px] rounded-full bg-primary/10 overflow-hidden">
                           <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%', animationDuration: '2s' }} />
                        </div>
                      </div>
                      {/* Middle line: 402 Response */}
                      <div className="w-full relative">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-[10px] font-mono text-accent/70">2. HTTP 402 REQ</div>
                        <div className="w-full h-[2px] rounded-full bg-accent/10 overflow-hidden">
                           <div className="h-full w-full bg-gradient-to-l from-transparent via-accent/80 to-transparent animate-shimmer delay-100" style={{ backgroundSize: '200% 100%', animationDuration: '2s' }} />
                        </div>
                      </div>
                      {/* Bottom line: Payment */}
                      <div className="w-full relative">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-[10px] font-mono text-secondary/70">3. MPP TX SIGNED</div>
                        <div className="w-full h-[2px] rounded-full bg-secondary/10 overflow-hidden">
                           <div className="h-full w-full bg-gradient-to-r from-transparent via-secondary/80 to-transparent animate-shimmer delay-200" style={{ backgroundSize: '200% 100%', animationDuration: '2s' }} />
                        </div>
                      </div>
                    </div>

                    {/* Right: API Server */}
                    <div className="flex flex-col items-center gap-3 z-10 animate-float delay-300">
                      <div className="w-16 h-16 rounded-xl glass flex items-center justify-center border border-secondary/50 shadow-[0_0_20px_rgba(0,245,212,0.4)]">
                        <BoltIcon className="w-8 h-8 text-secondary" />
                      </div>
                      <div className="text-xs font-mono text-secondary glass px-2 py-1 rounded">BACKEND</div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-pulse-soft" />
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-secondary/40 animate-pulse-soft delay-200" />
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse-soft delay-500" />
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
        <section className="py-24 px-6 relative z-10">
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
        <section className="py-24 px-6 relative z-10">
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
        <section className="py-24 px-6 relative z-10">
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
        <footer className="py-12 px-6 border-t border-border relative z-10">
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
