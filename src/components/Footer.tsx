import Link from 'next/link'

interface FooterProps {
  settings?: any
}

export function Footer({ settings }: FooterProps) {
  const email = settings?.email || 'hello@rafid.design'
  const footerText = settings?.footerText || '© 2025 Rafid. All rights reserved.'
  const social = settings?.socialLinks || []

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/[0.06] py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo & location */}
          <div>
            <Link href="/" className="text-[#F0F0F0] font-bold tracking-[0.18em] uppercase text-sm font-display">
              RAFID.
            </Link>
            <p className="text-[#555] text-xs mt-2 tracking-wide">Dubai, UAE</p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-8">
            {[
              { href: '/work', label: 'Work' },
              { href: '/about', label: 'About' },
              { href: '/#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-[#555] hover:text-[#F0F0F0] text-xs tracking-widest uppercase transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          {social.length > 0 && (
            <div className="flex items-center gap-6">
              {social.map((s: any, i: number) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#555] hover:text-[#C8A97E] text-xs tracking-widest uppercase transition-colors"
                >
                  {s.label || s.platform}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#444] text-xs">{footerText}</p>
          <a href={`mailto:${email}`} className="text-[#555] hover:text-[#C8A97E] text-xs transition-colors">
            {email}
          </a>
        </div>
      </div>
    </footer>
  )
}
