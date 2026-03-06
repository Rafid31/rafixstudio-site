import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ProjectCard } from '@/components/ui/ProjectCard'

interface SelectedWorksProps {
  projects: any[]
  title?: string
}

export function SelectedWorks({ projects, title }: SelectedWorksProps) {
  if (!projects || projects.length === 0) return null

  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16 border-b border-white/[0.06] pb-6">
            <div>
              <span className="text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-body">Portfolio</span>
              <h2 className="text-[#F0F0F0] font-display font-bold text-4xl md:text-5xl mt-2">
                {title || 'Selected Work'}
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:flex items-center gap-2 text-[#888] hover:text-[#C8A97E] text-xs tracking-widest uppercase transition-colors font-body"
            >
              All Work <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile see all */}
        <ScrollReveal className="mt-10 sm:hidden">
          <Link
            href="/work"
            className="flex items-center gap-2 text-[#888] hover:text-[#C8A97E] text-xs tracking-widest uppercase transition-colors font-body"
          >
            All Work <span>→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
