import { getPayload } from 'payload'
import config from '@payload-config'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ProjectCard } from '@/components/ui/ProjectCard'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Work — Rafid',
  description: 'Selected graphic design projects — brand identity, print, packaging, and digital design.',
}

async function getProjects() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'projects',
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return docs
  } catch {
    return []
  }
}

export default async function WorkPage() {
  const projects = await getProjects()

  const categories = ['All', ...Array.from(new Set(projects.map((p: any) => p.category).filter(Boolean)))]

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Page header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-body">Portfolio</span>
            <h1
              className="font-display font-bold text-[#F0F0F0] uppercase leading-[0.88] mt-3"
              style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}
            >
              Work
            </h1>
            <p className="text-[#555] mt-4 text-sm font-body">
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project: any, i: number) => (
              <ScrollReveal key={project.id} delay={i * 60}>
                <ProjectCard project={project} index={i} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="text-[#444] text-sm font-body">
              No projects yet. Add your first project from the{' '}
              <a href="/admin/collections/projects" className="text-[#C8A97E] hover:underline">
                admin panel
              </a>.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
