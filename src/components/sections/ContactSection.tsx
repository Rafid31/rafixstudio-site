import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface ContactSectionProps {
  title?: string
  subtext?: string
  email?: string
  social?: any[]
  availabilityText?: string
}

export function ContactSection({ title, subtext, email, social, availabilityText }: ContactSectionProps) {
  const mail = email || 'hello@rafid.design'
  const heading = title || "Let's Work Together"
  const sub = subtext || "I'm available for freelance projects and collaborations. Drop me a line and let's create something great."

  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8A97E]/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          {/* Availability tag */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#C8A97E] animate-pulse" />
            <span className="text-[#888] text-[11px] tracking-[0.25em] uppercase font-body">
              {availabilityText || 'Available for new projects'}
            </span>
          </div>

          {/* Big heading */}
          <h2
            className="font-display font-bold text-[#F0F0F0] leading-[0.9] mb-10"
            style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
          >
            {heading}
          </h2>

          {/* Subtext */}
          <p className="text-[#555] text-base max-w-md leading-relaxed font-body mb-12">{sub}</p>

          {/* Email link */}
          <a
            href={`mailto:${mail}`}
            className="inline-flex items-center gap-4 text-[#F0F0F0] hover:text-[#C8A97E] transition-colors group"
          >
            <span
              className="font-body underline underline-offset-4 decoration-white/20 group-hover:decoration-[#C8A97E]"
              style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}
            >
              {mail}
            </span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* Social links */}
          {social && social.length > 0 && (
            <div className="flex items-center gap-6 mt-12">
              {social.map((s: any, i: number) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444] hover:text-[#C8A97E] text-xs tracking-widest uppercase transition-colors font-body"
                >
                  {s.label || s.platform}
                </a>
              ))}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
