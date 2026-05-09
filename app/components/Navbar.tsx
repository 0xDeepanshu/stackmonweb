"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/agents", label: "AI Agents" },
  ];

  return (
    <nav className="backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-4 h-1.5 bg-primary/70 rounded-sm transform rotate-2" />
              <div className="w-5 h-2 bg-primary rounded-sm" />
              <div className="w-6 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-sm transform -rotate-1" />
            </div>
          </div>
          <span className="text-lg font-bold gradient-text">StackMon</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative ${pathname === link.href
                ? "nav-link-active text-primary-light"
                : "text-foreground-muted hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://stackmon.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
          >
            <span>Play Now</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border px-6 py-4 animate-slide-up">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium ${pathname === link.href
                ? "text-primary-light"
                : "text-foreground-muted"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://stackmon.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 btn-primary text-center !text-sm"
          >
            <span>Play Now</span>
          </a>
        </div>
      )}
    </nav>
  );
}
