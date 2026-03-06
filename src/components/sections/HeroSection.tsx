'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

interface HeroProps {
  hero: {
    headline?: string
    subheadline?: string
    availabilityText?: string
    ctaLabel?: string
    ctaUrl?: string
  }
}

export function HeroSection({ hero }: HeroProps) {
  const headline = hero?.headline || 'GRAPHIC DESIGNER'
  const subheadline = hero?.subheadline || 'Crafting bold visual identities'
  const availability = hero?.availabilityText || 'Available for projects'
  const ctaLabel = hero?.ctaLabel || 'See my work'
  const ctaUrl = hero?.ctaUrl || '/work'

  const words = headline.split(' ')

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#C8A97E]/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
        {/* Availability badge */}
        <div className="flex items-center gap-3 mb-10 animate-[fadeUp_0.6s_ease_forwards]">
          <span className="w-2 h-2 rounded-full bg-[#C8A97E] animate-pulse" />
          <span className="text-[#888] text-[11px] tracking-[0.25em] uppercase font-body">
            {availability}
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-bold uppercase leading-[0.88] tracking-tight text-[#F0F0F0]"
          style={{ fontSize: 'clamp(64px, 11vw, 160px)' }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="block"
              style={{
                animationDelay: `${i * 120}ms`,
                animation: 'fadeUp 0.8s ease forwards',
                opacity: 0,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subline + CTA row */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          style={{ animation: 'fadeUp 0.8s ease 0.4s forwards', opacity: 0 }}
        >
          <p className="text-[#888] text-base font-body max-w-xs leading-relaxed">
            {subheadline}
            <span className="text-[#444]"> · Dubai, UAE</span>
          </p>

          <Link
            href={ctaUrl}
            className="group flex items-center gap-3 text-[#F0F0F0] text-sm tracking-widest uppercase font-body border-b border-[#C8A97E] pb-0.5 hover:text-[#C8A97E] transition-colors"
          >
            {ctaLabel}
            <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-3 opacity-30"
          style={{ animation: 'fadeUp 0.8s ease 0.8s forwards', opacity: 0 }}
        >
          <div className="w-px h-10 bg-[#888]" />
          <span className="text-[#888] text-[10px] tracking-[0.3em] uppercase rotate-90 origin-left ml-2">Scroll</span>
        </div>
      </div>
    </section>
  )
}
