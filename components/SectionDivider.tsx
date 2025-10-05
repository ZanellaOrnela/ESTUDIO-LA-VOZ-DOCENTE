'use client'

const SectionDivider = () => {
  return (
    <div className="relative my-6 md:my-10" aria-hidden>
      {/* Línea central con degradado */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* Destello sutil en el centro */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(248,217,72,0.35) 0%, rgba(243,112,33,0.15) 35%, transparent 70%)',
          filter: 'blur(18px)'
        }}
      />
    </div>
  )
}

export default SectionDivider


