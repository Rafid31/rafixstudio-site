import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface ServicesSectionProps {
  services: any[]
  title?: string
  intro?: string
}

export function ServicesSection({ services, title, intro }: ServicesSectionProps) {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="border-b border-white/[0.06] pb-6 mb-16">
            <span className="text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-body">Services</span>
            <h2 className="text-[#F0F0F0] font-display font-bold text-4xl md:text-5xl mt-2">
              {title || 'What I Do'}
            </h2>
            {intro && (
              <p className="text-[#666] mt-4 max-w-lg leading-relaxed font-body text-sm">{intro}</p>
            )}
          </div>
        </ScrollReveal>

        <div className="divide-y divide-white/[0.05]">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 80}>
              <div className="group py-8 flex items-start gap-8 hover:bg-white/[0.01] transition-colors -mx-2 px-2 cursor-default">
                <span className="text-[#C8A97E]/50 font-display text-sm tracking-widest pt-0.5 shrink-0 w-8">
                  {service.icon || String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-[#F0F0F0] font-display font-semibold text-xl md:text-2xl group-hover:text-[#C8A97E] transition-colors">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-[#555] mt-2 text-sm leading-relaxed font-body">{service.description}</p>
                  )}
                </div>
                <span className="text-[#333] text-xl group-hover:text-[#555] group-hover:translate-x-1 transition-all">→</span>
              </div>
            </ScrollReveal>
          ))}

          {/* Placeholder if no services added */}
          {services.length === 0 && (
            <div className="py-8 text-[#444] text-sm font-body">
              Add services from the admin panel under Collections → Services.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
