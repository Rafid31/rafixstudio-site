import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactSection } from '@/components/sections/ContactSection'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'About — Rafid',
  description: 'Learn more about Rafid, a graphic designer based in Dubai.',
}

async function getData() {
  try {
    const payload = await getPayload({ config })
    const [about, siteSettings] = await Promise.all([
      payload.findGlobal({ slug: 'about-page' }).catch(() => null),
      payload.findGlobal({ slug: 'site-settings' }).catch(() => null),
    ])
    return { about, siteSettings }
  } catch {
    return { about: null, siteSettings: null }
  }
}

export default async function AboutPage() {
  const { about, siteSettings } = await getData()

  const imgUrl = about?.profileImage?.url || about?.profileImage?.sizes?.card?.url || null

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0B0B0B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <span className="text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-body">About</span>
            <h1
              className="font-display font-bold text-[#F0F0F0] leading-[0.88] mt-3 uppercase"
              style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}
            >
              {about?.introHeadline || 'About Me'}
            </h1>
            {about?.tagline && (
              <p className="text-[#888] mt-4 text-lg font-body">{about.tagline}</p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Bio + Image */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Bio text */}
            <ScrollReveal>
              <div className="prose-dark">
                {about?.bio ? (
                  <BioRenderer content={about.bio} />
                ) : (
                  <p className="text-[#888] leading-relaxed font-body">
                    Hi! I'm Rafid, a graphic designer based in Dubai with a passion for creating
                    bold, purposeful visual identities. I help brands communicate clearly and
                    beautifully — from print to digital and everything in between.
                  </p>
                )}
              </div>

              {/* Stats */}
              {about?.stats && about.stats.length > 0 && (
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/[0.06]">
                  {about.stats.map((stat: any, i: number) => (
                    <div key={i}>
                      <p className="font-display font-bold text-3xl text-[#F0F0F0]">{stat.value}</p>
                      <p className="text-[#555] text-xs mt-1 font-body tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </ScrollReveal>

            {/* Profile image */}
            {imgUrl && (
              <ScrollReveal delay={100}>
                <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm bg-[#141414]">
                  <Image
                    src={imgUrl}
                    alt={about?.profileImageAlt || 'Rafid — Graphic Designer'}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {about?.timeline && about.timeline.length > 0 && (
        <section className="py-20 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="border-b border-white/[0.06] pb-6 mb-12">
                <span className="text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-body">Experience</span>
                <h2 className="text-[#F0F0F0] font-display font-bold text-3xl mt-2">Timeline</h2>
              </div>
            </ScrollReveal>
            <div className="divide-y divide-white/[0.05]">
              {about.timeline.map((entry: any, i: number) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="py-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4">
                    <span className="text-[#555] text-sm font-body">{entry.year}</span>
                    <div>
                      <p className="text-[#F0F0F0] font-display font-semibold text-lg">{entry.role}</p>
                      {entry.company && <p className="text-[#C8A97E] text-sm font-body mt-0.5">{entry.company}</p>}
                      {entry.description && <p className="text-[#666] text-sm mt-2 font-body leading-relaxed">{entry.description}</p>}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awards */}
      {about?.awards && about.awards.length > 0 && (
        <section className="py-20 bg-[#0B0B0B]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="border-b border-white/[0.06] pb-6 mb-12">
                <span className="text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-body">Recognition</span>
                <h2 className="text-[#F0F0F0] font-display font-bold text-3xl mt-2">Awards</h2>
              </div>
            </ScrollReveal>
            <div className="divide-y divide-white/[0.05]">
              {about.awards.map((award: any, i: number) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="py-6 flex items-center justify-between">
                    <div>
                      <p className="text-[#F0F0F0] font-display font-medium">{award.award}</p>
                      {award.organisation && (
                        <p className="text-[#555] text-sm font-body mt-0.5">{award.organisation}</p>
                      )}
                    </div>
                    <span className="text-[#444] text-sm font-body">{award.year}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {about?.gallery && about.gallery.length > 0 && (
        <section className="py-20 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <h2 className="text-[#F0F0F0] font-display font-bold text-3xl mb-12 pb-4 border-b border-white/[0.06]">
                Gallery
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {about.gallery.map((item: any, i: number) => {
                const gUrl = item.image?.url
                if (!gUrl) return null
                return (
                  <ScrollReveal key={i} delay={i * 60}>
                    <div className="relative aspect-square overflow-hidden rounded-sm bg-[#141414]">
                      <Image src={gUrl} alt={item.caption || `Gallery ${i + 1}`} fill className="object-cover" />
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <ContactSection
        email={siteSettings?.email}
        social={siteSettings?.socialLinks}
        availabilityText={siteSettings?.availabilityText}
      />
    </div>
  )
}

function BioRenderer({ content }: { content: any }) {
  if (!content) return null
  if (typeof content === 'string') return <p className="text-[#888] leading-relaxed font-body">{content}</p>
  try {
    const nodes = content?.root?.children || []
    return (
      <div className="space-y-4">
        {nodes.map((node: any, i: number) => {
          const text = extractText(node)
          if (!text) return null
          return <p key={i} className="text-[#888] leading-relaxed font-body text-base">{text}</p>
        })}
      </div>
    )
  } catch {
    return <p className="text-[#888] leading-relaxed font-body">Bio coming soon.</p>
  }
}

function extractText(node: any): string {
  if (node.text) return node.text
  if (node.children) return node.children.map(extractText).join('')
  return ''
}
