const testimonials = [
  {
    initials: 'CM',
    name: 'Carlos M.',
    role: 'CEO, Inmobiliaria Digital',
    quote: 'El Otro Romulo transformó mi negocio por completo. En 2 meses triplicamos los leads y la instalación de GHL automatizó todo nuestro seguimiento.',
    delay: '',
  },
  {
    initials: 'SR',
    name: 'Sara R.',
    role: 'Emprendedora Digital',
    quote: 'El curso de marketing fue un game-changer. La asesoría personalizada me ayudó a lanzar mi primera campaña exitosa de Meta Ads con resultados reales.',
    delay: 'delay-2',
  },
  {
    initials: 'JL',
    name: 'Juan L.',
    role: 'Coach de Negocios',
    quote: 'Mi landing page convierte al doble desde que la rediseñaron. El equipo es profesional, cumple plazos y los resultados hablan por sí solos.',
    delay: 'delay-4',
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 fade-up">
          <p className="section-label mb-3">Testimonios</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Lo Que Dicen Nuestros<br />
            <span className="gradient-text">Clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className={`testimonial-card rounded-2xl p-8 fade-up ${t.delay}`}>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="avatar w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
