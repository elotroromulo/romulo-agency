const reasons = [
  {
    icon: (
      <svg className="w-6 h-6 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Resultados en 30 días',
    desc: 'Estrategias diseñadas para generar resultados medibles desde el primer mes.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Soporte Dedicado',
    desc: 'Acompañamiento personalizado con respuesta garantizada en menos de 24h.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Decisiones Data-Driven',
    desc: 'Cada estrategia respaldada por datos y métricas reales de rendimiento.',
  },
]

const metrics = [
  ['3x', 'ROI promedio de nuestros clientes'],
  ['85%', 'De clientes renuevan cada año'],
  ['7d', 'Tiempo promedio de entrega web'],
  ['24h', 'Respuesta garantizada en soporte'],
]

export default function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="orb"
        style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(217,119,6,0.2),transparent)', top: 0, right: -150 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="fade-up">
            <p className="section-label mb-4">Por qué elegirnos</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">
              Resultados Reales,<br />
              <span className="gradient-text">No Solo Promesas</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Trabajamos con estrategias probadas y tecnología de punta para garantizar el crecimiento medible de tu negocio digital.
            </p>

            <div className="space-y-7">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 items-start">
                  <div className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{r.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4 fade-up delay-3">
            {metrics.map(([num, label]) => (
              <div key={label} className="glass-card rounded-2xl p-7 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{num}</div>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
