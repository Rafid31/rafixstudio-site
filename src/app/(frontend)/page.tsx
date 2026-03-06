import { getPayload } from 'payload'
import config from '@payload-config'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { SelectedWorks } from '@/components/sections/SelectedWorks'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export const dynamic = 'force-dynamic'

async function getData() {
  try {
    const payload = await getPayload({ config })

    const [homeData, siteSettings, projectsResult, servicesResult, testimonialsResult] =
      await Promise.all([
        payload.findGlobal({ slug: 'home-page' }).catch(() => null),
        payload.findGlobal({ slug: 'site-settings' }).catch(() => null),
        payload.find({
          collection: 'projects',
          where: { featured: { equals: true } },
          sort: 'order',
          limit: 6,
          depth: 1,
        }).catch(() => ({ docs: [] })),
        payload.find({
          collection: 'services',
          sort: 'order',
          limit: 10,
          depth: 0,
        }).catch(() => ({ docs: [] })),
        payload.find({
          collection: 'testimonials',
          sort: 'order',
          limit: 6,
          depth: 1,
        }).catch(() => ({ docs: [] })),
      ])

    return {
      homeData,
      siteSettings,
      projects: projectsResult.docs,
      services: servicesResult.docs,
      testimonials: testimonialsResult.docs,
    }
  } catch (e) {
    // Return fallback data if DB not yet initialised
    return { homeData: null, siteSettings: null, projects: [], services: [], testimonials: [] }
  }
}

export default async function HomePage() {
  const { homeData, siteSettings, projects, services, testimonials } = await getData()

  return (
    <>
      <HeroSection hero={homeData?.hero || {}} />
      <MarqueeSection text={homeData?.marqueeText} />
      <SelectedWorks projects={projects} title={homeData?.selectedWorksTitle} />
      <ServicesSection
        services={services}
        title={homeData?.servicesTitle}
        intro={homeData?.servicesIntro}
      />
      <TestimonialsSection
        testimonials={testimonials}
        title={homeData?.testimonialsTitle}
      />
      <ContactSection
        title={homeData?.contactTitle}
        subtext={homeData?.contactSubtext}
        email={siteSettings?.email}
        social={siteSettings?.socialLinks}
        availabilityText={siteSettings?.availabilityText}
      />
    </>
  )
}
