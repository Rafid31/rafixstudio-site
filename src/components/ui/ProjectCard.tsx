import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: any
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const thumb = project.thumbnail
  const imgUrl = thumb?.url || thumb?.sizes?.card?.url || '/placeholder/project.jpg'

  return (
    <Link href={`/work/${project.slug}`} className="project-card group block overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden rounded-sm">
        {thumb ? (
          <Image
            src={imgUrl}
            alt={thumb.alt || project.title}
            fill
            className="thumb object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="thumb w-full h-full bg-[#1A1A1A] flex items-center justify-center">
            <span className="text-[#333] text-sm tracking-widest uppercase">No image</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="overlay absolute inset-0 bg-black/60 flex items-end p-6">
          <div>
            <span className="inline-block text-[#C8A97E] text-[11px] tracking-[0.2em] uppercase mb-2">
              View Project →
            </span>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[#F0F0F0] font-display font-medium text-base leading-tight group-hover:text-[#C8A97E] transition-colors">
              {project.title}
            </p>
            <p className="text-[#555] text-xs mt-1 tracking-wide">
              {project.category?.replace(/-/g, ' ')} {project.year && `· ${project.year}`}
            </p>
          </div>
          <span className="text-[#333] text-xs font-display shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </Link>
  )
}
