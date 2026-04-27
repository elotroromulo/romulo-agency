const services = [
  {
    icon: (
      <svg className="w-7 h-7 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Cursos Digitales',
    desc: 'Aprende marketing digital desde cero o escala tus habilidades con cursos prácticos y actualizados.',
    features: ['Marketing en redes sociales', 'Publicidad pagada (Meta Ads)', 'Embudos de ventas'],
    cta: 'Ver cursos',
    color: 'text-amber-400 hover:text-amber-300',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Asesorías Personalizadas',
    desc: 'Sesiones 1 a 1 con expertos para diseñar y optimizar tu estrategia de marketing digital.',
    features: ['Auditoría de tu negocio', 'Plan de acción personalizado', 'Seguimiento mensual'],
    cta: 'Reservar sesión',
    color: 'text-yellow-400 hover:text-yellow-300',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><polyline points="8 10 12 6 16 10"/>
      </svg>
    ),
    title: 'Diseño Web',
    desc: 'Sitios web modernos, rápidos y optimizados que convierten visitantes en clientes reales.',
    features: ['Diseño 100% responsive', 'Optimizado para SEO', 'Entrega en 7–14 días'],
    cta: 'Ver portafolio',
    color: 'text-pink-400 hover:text-pink-300',
  },
]

const servicesRow2 = [
  {
    icon: (
      <svg className="w-7 h-7 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    title: 'Landing Pages',
    desc: 'Páginas de aterrizaje optimizadas para captación de leads y máxima conversión.',
    features: ['Alta tasa de conversión', 'A/B testing incluido', 'Integración con CRM'],
    cta: 'Solicitar landing',
    color: 'text-amber-400 hover:text-amber-300',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Instalación de GHL',
    desc: 'Configuración completa de GoHighLevel: CRM, automatizaciones y funnels para tu negocio.',
    features: ['Setup completo de subcuenta', 'Automatizaciones de seguimiento', 'Capacitación incluida'],
    cta: 'Instalar GHL',
    color: 'text-cyan-400 hover:text-cyan-300',
  },
]

function ServiceCard({ service, delay = '' }: { service: typeof services[0]; delay?: string }) {
  const ArrowIcon = () => (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
  const CheckIcon = () => (
    <svg className="w-4 h-4 text-green-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )

  return (
    <div className={`glass-card rounded-2xl p-8 fade-up ${delay}`}>
      <div className="icon-wrap w-14 h-14 rounded-xl flex items-center justify-center mb-6">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
      <ul className="space-y-2.5 mb-7">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
            <CheckIcon /> {f}
          </li>
        ))}
      </ul>
      <a href="#contacto" className={`${service.color} text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5`}>
        {service.cta} <ArrowIcon />
      </a>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 fade-up">
          <p className="section-label mb-3">Lo que ofrecemos</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Servicios Diseñados Para<br />
            <span className="gradient-text">Tu Crecimiento</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Soluciones integrales de marketing digital para llevar tu negocio al siguiente nivel.
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i === 1 ? 'delay-2' : i === 2 ? 'delay-4' : ''} />
          ))}
        </div>

        {/* Row 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-3xl lg:mx-auto">
          {servicesRow2.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i === 1 ? 'delay-2' : ''} />
          ))}
        </div>

      </div>
    </section>
  )
}
