interface MarqueeSectionProps {
  text?: string
}

export function MarqueeSection({ text }: MarqueeSectionProps) {
  const content = text || 'GRAPHIC DESIGNER · BASED IN DUBAI · BRAND IDENTITY · PRINT DESIGN · PACKAGING · AVAILABLE ·'
  const repeated = Array(6).fill(content + ' ').join('')

  return (
    <div className="border-y border-white/[0.06] py-4 overflow-hidden bg-[#0B0B0B]">
      <div className="marquee-track text-[#333] text-[11px] tracking-[0.3em] uppercase font-body">
        <span>{repeated}</span>
        <span aria-hidden>{repeated}</span>
      </div>
    </div>
  )
}
