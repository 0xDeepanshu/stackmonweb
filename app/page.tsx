import Image from "next/image";
import Link from "next/link";
import {
  StackIcon,
  BoltIcon,
  SparklesIcon,
  TrophyIcon,
  CpuIcon,
  WalletIcon,
  GamepadIcon,
  ArrowRightIcon,
  ShieldIcon,
  GlobeIcon,
  ClockIcon,
  CoinsIcon,
} from "./components/Icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="flex flex-col">
        {/* ====== HERO SECTION ====== */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 grid-pattern">
          {/* Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-primary/4 to-secondary/4 rounded-full blur-[150px]" />
          </div>

          {/* Floating Accent Lines */}
          <div className="absolute left-16 top-1/3 w-px h-64 bg-gradient-to-b from-primary/20 to-transparent hidden lg:block" />
          <div className="absolute right-16 top-1/4 w-px h-80 bg-gradient-to-b from-secondary/15 to-transparent hidden lg:block" />

          {/* Orbiting particles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none">
            <div className="animate-orbit absolute top-1/2 left-1/2">
              <div className="glow-dot" />
            </div>
            <div className="animate-orbit absolute top-1/2 left-1/2" style={{ animationDelay: "-7s", animationDuration: "25s" }}>
              <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30" />
            </div>
            <div className="animate-orbit absolute top-1/2 left-1/2" style={{ animationDelay: "-14s", animationDuration: "30s" }}>
              <div className="w-3 h-3 rounded-full bg-secondary/15 border border-secondary/25" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
            {/* Badge */}
            <div className="animate-slide-up mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-foreground-muted">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
                <span>Now live — Agents can play for you</span>
              </div>
            </div>

            {/* Stacking Icon */}
            <div className="animate-float mb-10 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="relative">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-16 h-6 bg-gradient-to-br from-primary/60 to-primary/40 rounded-lg shadow-lg shadow-primary/20 transform rotate-2" />
                  <div className="w-20 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg shadow-lg shadow-primary/30" />
                  <div className="w-24 h-10 bg-gradient-to-br from-primary via-primary to-secondary/60 rounded-xl shadow-xl shadow-primary/40 transform -rotate-1" />
                </div>
                <div className="absolute -inset-6 border border-primary/15 rounded-full animate-pulse-glow" />
                <div className="absolute -inset-12 border border-secondary/8 rounded-full animate-pulse-soft" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-slide-up" style={{ animationDelay: "200ms" }}>
              <span className="gradient-text">StackMon</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground-muted mb-4 max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: "300ms" }}>
              A precision stacking game where every block matters. Compete against players worldwide, stake on your skills, and let AI agents play on your behalf.
            </p>

            <p className="text-sm text-foreground-muted/60 mb-10 animate-slide-up" style={{ animationDelay: "350ms" }}>
              Powered by <span className="text-primary-light font-medium">Solana Blinks on Steroids</span> · <span className="text-secondary font-medium">MPP</span> · <span className="text-foreground-muted font-medium">Devnet</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <a href="https://stackmon.fun" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="flex items-center gap-2">
                  <GamepadIcon className="w-5 h-5" />
                  Play Now
                </span>
              </a>
              <Link href="/agents" className="btn-secondary">
                <CpuIcon className="w-5 h-5" />
                AI Agent Mode
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted/40 animate-float-slow">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-foreground-muted/30 to-transparent" />
          </div>
        </section>



        {/* ====== HOW IT WORKS ====== */}
        <section className="py-24 px-6 relative" id="how-it-works">
          <div className="section-divider mb-24" />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-primary-light mb-3 font-medium">How It Works</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Stack. Compete. <span className="gradient-text">Earn.</span>
              </h2>
              <p className="text-foreground-muted text-lg max-w-xl mx-auto">
                StackMon is a precision stacking game built for the agentic era.
                Every match is a chance to prove your skill — or your agent&apos;s.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <StackIcon className="w-6 h-6 text-primary-light" />,
                  title: "Stack Blocks",
                  desc: "Tap to place blocks with perfect precision. The more accurate your placement, the higher your score. Miss too many and the tower falls.",
                  step: "01",
                },
                {
                  icon: <TrophyIcon className="w-6 h-6 text-secondary" />,
                  title: "Compete & Stake",
                  desc: "Enter matches with a micro-stake via Solana MPP. Win the round and claim your opponent's stake. Seamless 402 Payment Required flows.",
                  step: "02",
                },
                {
                  icon: <CpuIcon className="w-6 h-6 text-accent" />,
                  title: "Deploy Your Agent",
                  desc: "Can't play right now? Deploy an autonomous AI agent that plays via long-polling, signs Solana transactions, and competes 24/7 on your behalf.",
                  step: "03",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-8 relative group"
                >
                  <div className="absolute top-6 right-6 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {feature.step}
                  </div>
                  <div className="icon-container mb-5">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== GAME FEATURES ====== */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left content */}
              <div className="flex-1 max-w-lg">
                <p className="text-sm uppercase tracking-widest text-secondary mb-3 font-medium">The Game</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Precision <span className="gradient-text">Stacking</span><br />
                  Meets Web3
                </h2>
                <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                  StackMon reimagines the classic stacking game for the Solana ecosystem.
                  Built with Unity WebGL and powered by the Micro-Payment Protocol.
                  Play from your browser — no downloads required.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: <BoltIcon className="w-5 h-5 text-secondary" />, text: "Instant browser-based gameplay — no installs" },
                    { icon: <SparklesIcon className="w-5 h-5 text-primary-light" />, text: "Beautiful visuals with smooth 60fps performance" },
                    { icon: <ShieldIcon className="w-5 h-5 text-accent" />, text: "Secure settlements via Solana MPP on Devnet" },
                    { icon: <GlobeIcon className="w-5 h-5 text-secondary" />, text: "Global leaderboard with real-time rankings" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-surface-card flex items-center justify-center border border-border group-hover:border-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-foreground-muted">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Phone mockup */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-56 h-[440px] rounded-[3rem] bg-surface-card p-3 shadow-2xl glow-primary border border-border">
                    <div className="w-full h-full rounded-[2.5rem] bg-surface overflow-hidden relative">
                      {/* Screen content - game preview */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="flex flex-col items-center gap-1.5 mb-6">
                          <div className="w-10 h-4 bg-primary/50 rounded-md animate-float-slow" style={{ animationDelay: "0s" }} />
                          <div className="w-12 h-5 bg-primary/70 rounded-md animate-float-slow" style={{ animationDelay: "0.3s" }} />
                          <div className="w-14 h-5 bg-primary/80 rounded-md animate-float-slow" style={{ animationDelay: "0.6s" }} />
                          <div className="w-16 h-6 bg-primary rounded-lg animate-float-slow" style={{ animationDelay: "0.9s" }} />
                          <div className="w-14 h-5 bg-gradient-to-r from-primary to-secondary/60 rounded-md animate-float-slow" style={{ animationDelay: "1.2s" }} />
                        </div>
                        <div className="text-xs text-foreground-muted/40 font-medium tracking-wider">SCORE: 2,847</div>
                        <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      </div>
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-surface-card rounded-full" />
                    </div>
                  </div>
                  {/* Decorative rings */}
                  <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] animate-pulse-soft" />
                  <div className="absolute -inset-8 border border-secondary/5 rounded-[3.5rem]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== PAYMENTS / x402 SECTION ====== */}
        <section className="py-24 px-6 relative" id="payments">
          <div className="section-divider mb-24" />
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              {/* Left - Animated Payment Network Visual */}
              <div className="flex-1">
                <div className="relative w-full aspect-video rounded-2xl glass-card overflow-hidden glow-secondary flex items-center justify-center border border-secondary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Center Node */}
                    <div className="absolute z-20 w-20 h-20 rounded-full glass flex items-center justify-center animate-pulse-glow border border-secondary/40 shadow-[0_0_30px_rgba(0,245,212,0.4)]">
                      <WalletIcon className="w-8 h-8 text-secondary" />
                    </div>

                    {/* Orbiting rings */}
                    <div className="absolute w-48 h-48 rounded-full border border-dashed border-foreground-muted/20 animate-spin-slow" />
                    <div className="absolute w-64 h-64 rounded-full border border-dashed border-secondary/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />

                    {/* Orbiting nodes container */}
                    <div className="absolute w-64 h-64 pointer-events-none">
                      <div className="animate-orbit absolute top-1/2 left-1/2" style={{ animationDuration: "20s" }}>
                        <div className="w-12 h-12 -ml-6 -mt-6 rounded-full glass-card flex items-center justify-center border border-primary/30 text-primary">
                          <StackIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="animate-orbit absolute top-1/2 left-1/2" style={{ animationDelay: "-6.6s", animationDuration: "20s" }}>
                        <div className="w-10 h-10 -ml-5 -mt-5 rounded-full glass-card flex items-center justify-center border border-accent/30 text-accent">
                          <BoltIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="animate-orbit absolute top-1/2 left-1/2" style={{ animationDelay: "-13.3s", animationDuration: "20s" }}>
                        <div className="w-14 h-14 -ml-7 -mt-7 rounded-full glass-card flex items-center justify-center border border-secondary/30 text-secondary">
                          <CoinsIcon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 max-w-lg">
                <p className="text-sm uppercase tracking-widest text-secondary mb-3 font-medium">Payments</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Solana <span className="gradient-text">MPP</span><br />
                  + x402 Flows
                </h2>
                <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                  StackMon uses the Solana Micro-Payment Protocol with HTTP 402 Payment Required flows.
                  Connect Phantom or Solflare, and micro-transactions happen seamlessly via the <code className="text-secondary">@solana/mpp</code> SDK.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: <WalletIcon className="w-5 h-5 text-secondary" />,
                      title: "Phantom & Solflare",
                      desc: "Connect your Solana wallet with custom-styled wallet UI components. No signups required.",
                    },
                    {
                      icon: <ClockIcon className="w-5 h-5 text-primary-light" />,
                      title: "HTTP 402 Flows",
                      desc: "Endpoints return 402 Payment Required → wallet signs → access granted. Frictionless.",
                    },
                    {
                      icon: <CoinsIcon className="w-5 h-5 text-accent" />,
                      title: "Micro-Payments",
                      desc: "Pay for data and actions with SOL micro-transactions. Agents auto-fund from their own wallets.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
                      <div className="icon-container flex-shrink-0 !w-10 !h-10 !rounded-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== MCP + AGENT TEASER ====== */}
        <section className="py-24 px-6 relative" id="agents">
          <div className="section-divider mb-24" />
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left content */}
              <div className="flex-1 max-w-lg">
                <p className="text-sm uppercase tracking-widest text-accent mb-3 font-medium">AI Agents</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Your Agent<br />
                  <span className="gradient-text">Plays For You</span>
                </h2>
                <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                  Deploy an autonomous AI agent that interacts with the Unity game via long-polling, executes predefined skills, and auto-funds actions using its own Solana wallet.
                </p>

                <div className="code-block mb-8">
                  <span className="comment">{"// Agent long-polls for game state"}</span><br />
                  <span className="keyword">{"const"}</span> agent = <span className="keyword">{"await"}</span> initAgent({"{"}<br />
                  &nbsp;&nbsp;wallet: <span className="string">{'"AGENT_WALLET_PRIVATE_KEY"'}</span>,<br />
                  &nbsp;&nbsp;rpc: <span className="string">{'"devnet"'}</span>,<br />
                  {"}"}); <br />
                  <span className="keyword">{"await"}</span> agent.<span className="string">startLoop</span>();<br />
                  <span className="comment">{"// Signs txns + plays via skills 24/7"}</span>
                </div>

                <Link
                  href="/agents"
                  className="btn-primary inline-flex"
                >
                  <span className="flex items-center gap-2">
                    Learn About AI Agents
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              {/* Right - Animated Agent Dashboard Visual */}
              <div className="flex-1">
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl glass-card overflow-hidden glow-primary border border-primary/20 p-6 flex flex-col gap-4">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                      <span className="text-sm font-mono text-primary-light">AGENT_0x7F...9A</span>
                    </div>
                    <div className="text-xs font-mono text-accent glass px-2 py-1 rounded-md">LIVE</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Left Column: Stats & Graph */}
                    <div className="flex flex-col gap-4">
                      <div className="glass rounded-xl p-4 border border-primary/10">
                        <div className="text-xs text-foreground-muted mb-1">Win Rate</div>
                        <div className="text-2xl font-bold text-secondary">78.4%</div>
                        <div className="mt-2 h-1.5 w-full bg-surface-card rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[78.4%] rounded-full shadow-[0_0_10px_rgba(0,245,212,0.5)]" />
                        </div>
                      </div>
                      <div className="glass rounded-xl p-4 border border-primary/10 flex-1 relative overflow-hidden flex items-end gap-2">
                        {/* Animated Bar Chart */}
                        <div className="w-full h-[60%] bg-primary/40 rounded-t-sm animate-pulse-soft delay-100" />
                        <div className="w-full h-[80%] bg-primary/60 rounded-t-sm animate-pulse-soft delay-200" />
                        <div className="w-full h-[40%] bg-primary/30 rounded-t-sm animate-pulse-soft delay-300" />
                        <div className="w-full h-[90%] bg-primary/80 rounded-t-sm animate-pulse-soft delay-400" />
                        <div className="w-full h-[70%] bg-primary/50 rounded-t-sm animate-pulse-soft delay-500" />
                      </div>
                    </div>

                    {/* Right Column: Terminal */}
                    <div className="glass rounded-xl p-4 border border-primary/10 flex flex-col font-mono text-xs overflow-hidden relative">
                      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-surface-card to-transparent z-10" />
                      <div className="flex flex-col gap-3 mt-auto animate-slide-up">
                        <div className="text-foreground-muted">{">"} scanning state...</div>
                        <div className="text-primary-light">{"[OK] target identified"}</div>
                        <div className="text-foreground-muted">{">"} computing trajectory...</div>
                        <div className="text-secondary">{"[ACTION] PLACED @ x:42"}</div>
                        <div className="text-accent">{"[REWARD] +150 pts"}</div>
                        <div className="text-foreground-muted flex items-center gap-1">{">"} await block<span className="w-1.5 h-3 bg-primary animate-pulse" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== STATS ====== */}
        <section className="py-20 px-6">
          <div className="section-divider mb-20" />
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-12 flex flex-wrap justify-center gap-12 md:gap-16">
              {[
                { value: "10K+", label: "Matches Played" },
                { value: "<1s", label: "Settlement Time" },
                { value: "$0.00", label: "Protocol Fees" },
                { value: "24/7", label: "Agent Uptime" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CTA ====== */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to <span className="gradient-text">Stack</span>?
                </h2>
                <p className="text-foreground-muted text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  Jump into a match right now. No download needed.
                  Connect Phantom or Solflare and start stacking.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://stackmon.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span className="flex items-center gap-2">
                      <GamepadIcon className="w-5 h-5" />
                      Start Playing
                    </span>
                  </a>
                  <Link href="/agents" className="btn-secondary">
                    <CpuIcon className="w-5 h-5" />
                    Deploy Agent
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FOOTER ====== */}
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
              {/* Logo */}
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

              {/* Links */}
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
              <div className="text-sm text-foreground-muted/50">© 2025 StackMon. All rights reserved.</div>
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