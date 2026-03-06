'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const links = [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled || open ? 'rgba(11,11,11,0.96)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#F0F0F0] font-bold tracking-[0.18em] uppercase text-sm font-display hover:text-[#C8A97E] transition-colors"
        >
          RAFID.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-[13px] tracking-widest uppercase transition-colors pb-0.5 ${
                pathname === href ? 'text-[#F0F0F0]' : 'text-[#888] hover:text-[#F0F0F0]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 bg-[#F0F0F0] transition-all duration-300"
            style={{ transform: open ? 'rotate(45deg) translateY(6px)' : 'none' }}
          />
          <span
            className="block h-px w-6 bg-[#F0F0F0] transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 bg-[#F0F0F0] transition-all duration-300"
            style={{ transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? '280px' : '0px' }}
      >
        <nav className="px-6 pb-8 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#888] hover:text-[#F0F0F0] text-xl font-display font-medium tracking-wide transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
