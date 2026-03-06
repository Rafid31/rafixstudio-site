import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const dynamic = 'force-dynamic'

async function getProject(slug: string) {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      depth: 2,
      limit: 1,
    })
    return docs[0] || null
  } catch {
    return null
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  if (!project) notFound()

  const hero = project.heroImage || project.thumbnail
  const heroUrl = hero?.url || hero?.sizes?.hero?.url || null

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Hero */}
      <div className="relative w-full bg-[#0D0D0D] pt-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8 pb-16">
          <ScrollReveal>
            {/* Breadcrumb */}
            <Link href="/work" className="text-[#555] hover:text-[#C8A97E] text-xs tracking-widest uppercase font-body transition-colors">
              ← Work
            </Link>

            {/* Title */}
            <h1
              className="font-display font-bold text-[#F0F0F0] leading-[0.9] mt-6 uppercase"
              style={{ fontSize: 'clamp(40px, 7vw, 100px)' }}
            >
              {project.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              {project.category && (
                <div>
                  <p className="text-[#444] text-[10px] tracking-[0.25em] uppercase font-body mb-1">Category</p>
                  <p className="text-[#F0F0F0] text-sm font-body capitalize">
                    {project.category.replace(/-/g, ' ')}
                  </p>
                </div>
              )}
              {project.client && (
                <div>
                  <p className="text-[#444] text-[10px] tracking-[0.25em] uppercase font-body mb-1">Client</p>
                  <p className="text-[#F0F0F0] text-sm font-body">{project.client}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-[#444] text-[10px] tracking-[0.25em] uppercase font-body mb-1">Year</p>
                  <p className="text-[#F0F0F0] text-sm font-body">{project.year}</p>
                </div>
              )}
              {project.services && (
                <div>
                  <p className="text-[#444] text-[10px] tracking-[0.25em] uppercase font-body mb-1">Services</p>
                  <p className="text-[#F0F0F0] text-sm font-body">{project.services}</p>
                </div>
              )}
              {project.externalUrl && (
                <div>
                  <p className="text-[#444] text-[10px] tracking-[0.25em] uppercase font-body mb-1">Live Site</p>
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A97E] text-sm font-body hover:underline"
                  >
                    Visit →
                  </a>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        {heroUrl && (
          <ScrollReveal>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-0">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-[#141414]">
                <Image src={heroUrl} alt={hero?.alt || project.title} fill className="object-cover" priority />
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Body */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          {/* Case study */}
          {project.caseStudy && (
            <ScrollReveal>
              <div className="prose-dark">
                <h2 className="text-[#F0F0F0] font-display font-semibold text-2xl mb-8 pb-4 border-b border-white/[0.06]">
                  About the Project
                </h2>
                {/* Rich text is stored as JSON by Lexical; render it as plain text fallback */}
                <RichTextRenderer content={project.caseStudy} />
              </div>
            </ScrollReveal>
          )}

          {/* Short description sidebar */}
          {project.shortDescription && (
            <ScrollReveal delay={100}>
              <div className="lg:sticky lg:top-28">
                <p className="text-[#888] leading-relaxed text-sm font-body">{project.shortDescription}</p>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-20">
            <ScrollReveal>
              <h2 className="text-[#F0F0F0] font-display font-semibold text-2xl mb-10 pb-4 border-b border-white/[0.06]">
                Gallery
              </h2>
            </ScrollReveal>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {project.gallery.map((item: any, i: number) => {
                const gUrl = item.image?.url || item.image?.sizes?.card?.url
                if (!gUrl) return null
                return (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="break-inside-avoid relative overflow-hidden rounded-sm bg-[#141414]">
                      <Image
                        src={gUrl}
                        alt={item.caption || `Gallery image ${i + 1}`}
                        width={800}
                        height={600}
                        className="w-full object-cover"
                      />
                      {item.caption && (
                        <p className="text-[#555] text-xs font-body p-3">{item.caption}</p>
                      )}
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Next project */}
      {project.nextProject && (
        <div className="border-t border-white/[0.06]">
          <Link
            href={`/work/${project.nextProject.slug}`}
            className="group max-w-[1400px] mx-auto px-6 lg:px-12 py-16 flex items-center justify-between hover:bg-white/[0.01] transition-colors block"
          >
            <div>
              <p className="text-[#444] text-[11px] tracking-[0.25em] uppercase font-body mb-2">Next Project</p>
              <h3 className="text-[#F0F0F0] font-display font-bold text-2xl md:text-4xl group-hover:text-[#C8A97E] transition-colors">
                {project.nextProject.title}
              </h3>
            </div>
            <span className="text-4xl text-[#333] group-hover:text-[#C8A97E] group-hover:translate-x-3 transition-all">
              →
            </span>
          </Link>
        </div>
      )}
    </div>
  )
}

// Simple rich text renderer (Lexical JSON → paragraphs)
function RichTextRenderer({ content }: { content: any }) {
  if (!content) return null
  if (typeof content === 'string') {
    return <p className="text-[#888] leading-relaxed">{content}</p>
  }
  try {
    const nodes = content?.root?.children || []
    return (
      <div className="space-y-4">
        {nodes.map((node: any, i: number) => {
          const text = extractText(node)
          if (!text) return null
          if (node.type === 'heading') {
            const Tag = node.tag || 'h2'
            return <Tag key={i} className="text-[#F0F0F0] font-display font-semibold text-xl mt-6 mb-2">{text}</Tag>
          }
          return <p key={i} className="text-[#888] leading-relaxed font-body">{text}</p>
        })}
      </div>
    )
  } catch {
    return null
  }
}

function extractText(node: any): string {
  if (node.text) return node.text
  if (node.children) return node.children.map(extractText).join('')
  return ''
}
