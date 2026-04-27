export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Orbs */}
      <div className="orb float-orb-a" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(217,119,6,0.45),transparent)', top: -250, right: -150 }} />
      <div className="orb float-orb-b" style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(245,158,11,0.35),transparent)', bottom: 50, left: -150 }} />
      <div className="orb" style={{ width: 280, height: 280, background: 'radial-gradient(circle,rgba(252,211,77,0.25),transparent)', top: '45%', left: '45%' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 badge rounded-full px-4 py-2 mb-8 hero-badge">
            <span className="dot-live w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
            <span className="text-sm font-medium">Agencia de Marketing Digital · Resultados Garantizados</span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
            Haz Crecer Tu{' '}
            <span className="hidden sm:inline"><br /></span>
            Negocio Con<br />
            <span className="gradient-text">Marketing Que</span><br />
            <span className="gradient-text">Convierte</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cursos, asesorías, diseño web y automatización con GoHighLevel.
            Todo lo que necesitas para escalar tu negocio digital.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contacto" className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2">
              Comenzar Ahora
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#servicios" className="btn-outline text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2">
              Ver Servicios
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            {[['50+', 'Clientes'], ['200+', 'Proyectos'], ['98%', 'Satisfacción']].map(([num, label]) => (
              <div key={label} className="stat-card rounded-2xl py-4 px-3 text-center">
                <div className="text-2xl font-bold gradient-text">{num}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade to next */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
    </section>
  )
}
