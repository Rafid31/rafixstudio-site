import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface TestimonialsSectionProps {
  testimonials: any[]
  title?: string
}

export function TestimonialsSection({ testimonials, title }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section className="py-24 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="border-b border-white/[0.06] pb-6 mb-16">
            <span className="text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-body">Testimonials</span>
            <h2 className="text-[#F0F0F0] font-display font-bold text-4xl md:text-5xl mt-2">
              {title || 'Client Words'}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 100}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-sm p-8 hover:border-white/[0.12] transition-colors">
                <span className="text-[#C8A97E] text-4xl font-display leading-none mb-4 block">"</span>
                <p className="text-[#888] leading-relaxed text-sm font-body mb-8">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                    <span className="text-[#C8A97E] text-xs font-display font-bold">
                      {t.clientName?.charAt(0)?.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#F0F0F0] text-sm font-display font-medium">{t.clientName}</p>
                    <p className="text-[#555] text-xs font-body">
                      {t.role}{t.company ? ` · ${t.company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
