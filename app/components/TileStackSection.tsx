"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TileStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
        defaults: { ease: "power2.out" },
      });

      // ── Phase 0: Ambient intro ──
      tl.addLabel("intro", 0);
      tl.from(".ts-ambient-glow", { autoAlpha: 0, scale: 0.8, duration: 0.3 }, "intro");
      tl.from(".ts-title", { y: 40, autoAlpha: 0, duration: 0.4 }, "intro+=0.1");

      // ── Phase 1: Tiles drop in one by one ──
      tl.addLabel("stack", 0.5);

      const tiles = gsap.utils.toArray<HTMLElement>(".ts-tile");
      tiles.forEach((tile, i) => {
        const delay = i * 0.35;
        // Tile drops from above
        tl.fromTo(
          tile,
          { y: -300, rotation: gsap.utils.random(-12, 12), autoAlpha: 0, scale: 0.9 },
          { y: 0, rotation: 0, autoAlpha: 1, scale: 1, duration: 0.4, ease: "bounce.out" },
          `stack+=${delay}`
        );
        // Screen shake on landing
        tl.to(
          containerRef.current,
          { x: 3, duration: 0.04, ease: "power4.out" },
          `stack+=${delay + 0.35}`
        );
        tl.to(
          containerRef.current,
          { x: -2, duration: 0.04, ease: "power4.out" },
          `stack+=${delay + 0.39}`
        );
        tl.to(
          containerRef.current,
          { x: 0, duration: 0.06, ease: "power2.out" },
          `stack+=${delay + 0.43}`
        );
        // Glow pulse on landing
        tl.fromTo(
          `.ts-glow-${i}`,
          { autoAlpha: 0, scale: 0.5 },
          { autoAlpha: 0.7, scale: 1.2, duration: 0.15, ease: "power2.out" },
          `stack+=${delay + 0.3}`
        );
        tl.to(
          `.ts-glow-${i}`,
          { autoAlpha: 0, scale: 1.5, duration: 0.2 },
          `stack+=${delay + 0.45}`
        );
        // Shadow compression
        tl.fromTo(
          `.ts-shadow-${i}`,
          { scaleX: 0.6, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 0.4, duration: 0.15, ease: "power2.out" },
          `stack+=${delay + 0.35}`
        );
      });

      // Particle bursts for each tile
      tl.fromTo(
        ".ts-particle",
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: 1, duration: 0.3, stagger: { each: 0.35, from: "start" }, ease: "back.out(1.7)" },
        "stack+=0.35"
      );
      tl.to(
        ".ts-particle",
        { autoAlpha: 0, y: -20, duration: 0.2, stagger: { each: 0.35 } },
        "stack+=0.65"
      );

      // ── Phase 2: Stack glows and transforms ──
      tl.addLabel("transform", 3.5);
      // Energy glow around stack
      tl.to(".ts-energy-glow", { autoAlpha: 1, scale: 1.3, duration: 0.5 }, "transform");
      // Title fades out
      tl.to(".ts-title", { autoAlpha: 0, y: -30, duration: 0.3 }, "transform");
      // Tiles separate and rotate in 3D
      tiles.forEach((tile, i) => {
        const spreadY = (i - 3) * 60;
        const rotateY = (i % 2 === 0 ? 1 : -1) * 25;
        tl.to(
          tile,
          { y: spreadY, rotationY: rotateY, rotationX: 15, scale: 0.8, duration: 0.5, ease: "power3.inOut" },
          "transform+=0.2"
        );
      });
      // Tiles converge and morph into payment card
      tl.addLabel("morph", 4.5);
      tiles.forEach((tile) => {
        tl.to(
          tile,
          { autoAlpha: 0, scale: 0.3, rotationY: 0, rotationX: 0, y: 0, duration: 0.4, ease: "power3.in" },
          "morph"
        );
      });
      tl.to(".ts-energy-glow", { autoAlpha: 0, duration: 0.3 }, "morph");
      // Payment card appears
      tl.fromTo(
        ".ts-payment-card",
        { autoAlpha: 0, scale: 0.6, rotationY: -30, y: 40 },
        { autoAlpha: 1, scale: 1, rotationY: 0, y: 0, duration: 0.6, ease: "back.out(1.4)" },
        "morph+=0.2"
      );

      // ── Phase 3: Payment sequence ──
      tl.addLabel("payment", 5.5);
      // Card number reveal
      tl.from(".ts-card-details > div", { autoAlpha: 0, x: -20, duration: 0.3, stagger: 0.1 }, "payment");
      // Button pulse
      tl.fromTo(
        ".ts-pay-btn",
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(2)" },
        "payment+=0.4"
      );
      // Button tap ripple
      tl.to(".ts-pay-btn", { scale: 0.95, duration: 0.1 }, "payment+=0.9");
      tl.to(".ts-pay-btn", { scale: 1, duration: 0.1 }, "payment+=1.0");
      tl.fromTo(
        ".ts-ripple",
        { scale: 0, autoAlpha: 0.6 },
        { scale: 3, autoAlpha: 0, duration: 0.4, ease: "power2.out" },
        "payment+=0.9"
      );
      // Processing spinner
      tl.to(".ts-pay-btn-text", { autoAlpha: 0, duration: 0.15 }, "payment+=1.2");
      tl.fromTo(
        ".ts-spinner",
        { autoAlpha: 0, rotation: 0 },
        { autoAlpha: 1, rotation: 360, duration: 0.5 },
        "payment+=1.3"
      );
      // Success check
      tl.to(".ts-spinner", { autoAlpha: 0, duration: 0.15 }, "payment+=1.9");
      tl.fromTo(
        ".ts-check",
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(3)" },
        "payment+=2.0"
      );
      // Success particles burst
      tl.fromTo(
        ".ts-success-particle",
        { autoAlpha: 0, scale: 0, x: 0, y: 0 },
        {
          autoAlpha: 1,
          scale: 1,
          x: (i: number) => Math.cos((i * Math.PI * 2) / 12) * 120,
          y: (i: number) => Math.sin((i * Math.PI * 2) / 12) * 120,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.out",
        },
        "payment+=2.1"
      );
      tl.to(
        ".ts-success-particle",
        { autoAlpha: 0, scale: 0, duration: 0.3, stagger: 0.03 },
        "payment+=2.7"
      );
      // Final glow
      tl.fromTo(
        ".ts-final-glow",
        { autoAlpha: 0, scale: 0.5 },
        { autoAlpha: 0.8, scale: 1.5, duration: 0.5, ease: "power2.out" },
        "payment+=2.1"
      );
      tl.to(".ts-final-glow", { autoAlpha: 0, duration: 0.5 }, "payment+=2.8");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tileColors = [
    "from-[#8B5CF6] to-[#B88CFF]",
    "from-[#B88CFF] to-[#DFF6FF]",
    "from-[#5FD4FF] to-[#86F7E8]",
    "from-[#8B5CF6] to-[#5FD4FF]",
    "from-[#5FD4FF] to-[#F7FBFF]",
    "from-[#B88CFF] to-[#8B5CF6]",
    "from-[#86F7E8] to-[#5FD4FF]",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative !z-0 w-full h-screen overflow-hidden"
      id="tile-stack-animation"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ts-ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(184,140,255,0.15)_0%,transparent_70%)]" />
      </div>

      {/* Main container for shake effect */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center justify-center h-full"
        style={{ perspective: "1200px" }}
      >
        {/* Title */}
        <div className="ts-title absolute top-16 text-center z-20">
          <p className="text-sm uppercase tracking-widest text-primary mb-3 font-medium">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            The <span className="gradient-text">Stack</span> In Action
          </h2>
        </div>

        {/* ── Tile Stack ── */}
        <div className="relative flex flex-col-reverse items-center gap-1" style={{ transformStyle: "preserve-3d" }}>
          {tileColors.map((gradient, i) => (
            <div key={i} className="relative">
              {/* Glow pulse */}
              <div className={`ts-glow-${i} absolute -inset-4 rounded-2xl bg-[rgba(184,140,255,0.4)] blur-xl pointer-events-none`} style={{ opacity: 0 }} />
              {/* Shadow */}
              <div className={`ts-shadow-${i} absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 rounded-full bg-primary/20 blur-sm`} style={{ opacity: 0 }} />
              {/* Particle */}
              <div className="ts-particle absolute -right-6 -top-2 w-2 h-2 rounded-full bg-secondary" style={{ opacity: 0 }} />
              {/* Tile */}
              <div
                className={`ts-tile w-40 md:w-56 h-8 md:h-10 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}
                style={{
                  opacity: 0,
                  willChange: "transform, opacity",
                  boxShadow: "0 4px 20px rgba(139,124,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              />
            </div>
          ))}
          {/* Energy glow around stack */}
          <div
            className="ts-energy-glow absolute -inset-12 rounded-3xl pointer-events-none"
            style={{
              opacity: 0,
              background: "radial-gradient(circle, rgba(184,140,255,0.3) 0%, rgba(95,212,255,0.15) 50%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </div>

        {/* ── Payment Card ── */}
        <div
          className="ts-payment-card absolute flex flex-col items-center"
          style={{ opacity: 0, willChange: "transform, opacity", transformStyle: "preserve-3d" }}
        >
          <div className="relative w-72 md:w-96 rounded-3xl overflow-hidden glass-card p-6 md:p-8">
            {/* Card gradient top bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B5CF6] via-[#B88CFF] to-[#5FD4FF]" />

            <div className="ts-card-details space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-foreground-muted">StackMon Pay</span>
                <div className="flex gap-1">
                  <div className="w-6 h-4 rounded-sm bg-gradient-to-r from-[#86F7E8] to-[#5FD4FF]" />
                  <div className="w-6 h-4 rounded-sm bg-gradient-to-r from-[#8B5CF6] to-[#B88CFF]" />
                </div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-mono font-bold text-foreground tracking-wider">
                  •••• •••• •••• 4242
                </div>
              </div>
              <div className="flex justify-between text-xs text-foreground-muted">
                <div>
                  <div className="text-[10px] uppercase tracking-wider mb-0.5">Amount</div>
                  <div className="text-secondary font-bold text-base">0.05 SOL</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider mb-0.5">Network</div>
                  <div className="text-primary-light font-medium text-base">Devnet</div>
                </div>
              </div>
            </div>

            {/* Pay button */}
            <div className="relative mt-6 flex justify-center">
              <button className="ts-pay-btn relative w-full py-3 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#B88CFF] text-white font-semibold overflow-hidden shadow-lg shadow-primary/20">
                <span className="ts-pay-btn-text relative z-10">Confirm Payment</span>
                <div className="ts-spinner absolute inset-0 flex items-center justify-center" style={{ opacity: 0 }}>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                </div>
                <div className="ts-check absolute inset-0 flex items-center justify-center" style={{ opacity: 0 }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ts-ripple absolute inset-0 rounded-2xl bg-white/40" style={{ opacity: 0 }} />
              </button>
            </div>
          </div>

          {/* Success particles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="ts-success-particle absolute w-2.5 h-2.5 rounded-full"
                style={{
                  opacity: 0,
                  background: i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "var(--secondary)" : "var(--accent)",
                  boxShadow: `0 0 8px ${i % 3 === 0 ? "var(--glow-primary)" : "var(--glow-secondary)"}`,
                }}
              />
            ))}
          </div>

          {/* Final glow */}
          <div
            className="ts-final-glow absolute -inset-20 rounded-full pointer-events-none"
            style={{
              opacity: 0,
              background: "radial-gradient(circle, rgba(95,212,255,0.2) 0%, rgba(184,140,255,0.15) 40%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
