import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationObserver from '@/components/AnimationObserver'

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: 'Servicios de Marketing Digital | Diseño Web, Landing Pages y GHL | Romulo Agency',
  description:
    'Diseño web profesional, landing pages de alta conversión e instalación completa de GoHighLevel. Servicios de marketing digital para hacer crecer y automatizar tu negocio.',
  keywords: [
    'diseño web profesional',
    'landing pages alta conversión',
    'instalación gohighlevel',
    'configurar ghl',
    'agencia diseño web',
    'landing page marketing',
    'automatización gohighlevel',
    'servicios marketing digital',
    'agencia marketing colombia',
  ],
  openGraph: {
    title: 'Servicios | Diseño Web, Landing Pages y GHL — Romulo Agency',
    description:
      'Diseño web responsive, landing pages que convierten e implementación completa de GoHighLevel. Resultados en 7–14 días.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Romulo Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios | Diseño Web, Landing Pages y GHL — Romulo Agency',
    description: 'Diseño web, landing pages y GoHighLevel. Entrega en 7–14 días.',
  },
  alternates: { canonical: '/servicios' },
  robots: { index: true, follow: true },
}

/* ── Service data ── */
const services = [
  {
    id: 'diseno-web',
    category: 'SITIOS WEB',
    title: 'Diseño Web',
    subtitle: 'Tu presencia profesional en internet',
    description:
      'Creamos sitios web modernos, rápidos y optimizados que reflejan tu marca y convierten visitantes en clientes. Entrega garantizada en 7 a 14 días hábiles.',
    includes: [
      'Diseño 100% personalizado y responsive',
      'Optimización SEO on-page desde el inicio',
      'Integración de formularios de contacto',
      'Velocidad de carga optimizada (Core Web Vitals)',
      'Configuración de Google Analytics y Search Console',
      'Dominio y hosting recomendado incluido en asesoría',
    ],
    process: [
      { step: '01', label: 'Brief', desc: 'Reunión inicial para entender tu marca, objetivos y referencias.' },
      { step: '02', label: 'Diseño', desc: 'Maqueta visual completa para tu aprobación antes de desarrollar.' },
      { step: '03', label: 'Desarrollo', desc: 'Construcción del sitio con código limpio y SEO optimizado.' },
      { step: '04', label: 'Entrega', desc: 'Revisión final, ajustes y publicación del sitio en vivo.' },
    ],
    ideal: ['Negocios locales', 'Coaches y consultores', 'Marcas personales', 'Startups y PyMEs'],
    cta: 'Cotizar mi sitio web',
    href: '/servicios/diseno-web',
    timeframe: '7 – 14 días',
    icon: (
      <svg className="w-8 h-8 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><polyline points="8 10 12 6 16 10"/>
      </svg>
    ),
    accentColor: 'border-amber-400/30 bg-amber-400/5',
    labelColor: 'text-amber-400',
  },
  {
    id: 'landing-pages',
    category: 'CONVERSIÓN',
    title: 'Landing Pages',
    subtitle: 'Páginas que captan leads y venden',
    description:
      'Diseñamos landing pages de alta conversión con copy persuasivo, estructura probada y optimización continua. Cada elemento está pensado para que el visitante tome acción.',
    includes: [
      'Diseño orientado 100% a la conversión',
      'Copy persuasivo y estratégico',
      'Formulario o funnel integrado',
      'Pixel de Meta y Google Tag Manager',
      'A/B testing en los elementos clave',
      'Integración con tu CRM o GHL',
    ],
    process: [
      { step: '01', label: 'Estrategia', desc: 'Definimos objetivo, audiencia y oferta para maximizar conversiones.' },
      { step: '02', label: 'Copy', desc: 'Redacción de textos persuasivos basados en psicología de ventas.' },
      { step: '03', label: 'Diseño', desc: 'Maqueta visual con jerarquía clara y llamadas a la acción estratégicas.' },
      { step: '04', label: 'Activación', desc: 'Publicación, tracking instalado y monitoreo de los primeros resultados.' },
    ],
    ideal: ['Lanzamientos de producto', 'Campañas de publicidad', 'Generación de leads', 'Eventos y webinars'],
    cta: 'Quiero mi landing page',
    href: '/servicios/landing-pages',
    timeframe: '5 – 7 días',
    icon: (
      <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    accentColor: 'border-yellow-400/30 bg-yellow-400/5',
    labelColor: 'text-yellow-400',
  },
  {
    id: 'ghl',
    category: 'AUTOMATIZACIÓN',
    title: 'Instalación de GHL',
    subtitle: 'GoHighLevel configurado y funcionando',
    description:
      'Configuración completa de tu subcuenta en GoHighLevel: CRM, pipelines, automatizaciones de seguimiento, funnels y todo lo que necesitas para nunca perder un lead.',
    includes: [
      'Setup completo de subcuenta GHL',
      'Configuración de pipeline y etapas de ventas',
      'Automatizaciones de seguimiento por SMS, email y WhatsApp',
      'Funnels y landing pages dentro de GHL',
      'Integración con calendario y reservas',
      'Capacitación 1:1 para usar la plataforma',
    ],
    process: [
      { step: '01', label: 'Diagnóstico', desc: 'Analizamos tu proceso de ventas actual para replicarlo en GHL.' },
      { step: '02', label: 'Configuración', desc: 'Setup completo: subcuenta, pipelines, usuarios y conectores.' },
      { step: '03', label: 'Automatizaciones', desc: 'Creamos los flujos de seguimiento automático para cada etapa.' },
      { step: '04', label: 'Capacitación', desc: 'Sesión 1:1 para que tu equipo domine la plataforma desde el día 1.' },
    ],
    ideal: ['Agencias de marketing', 'Coaches y consultores', 'Equipos de ventas', 'Negocios con alto volumen de leads'],
    cta: 'Instalar mi GHL',
    href: null,
    timeframe: '3 – 5 días',
    icon: (
      <svg className="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    accentColor: 'border-orange-400/30 bg-orange-400/5',
    labelColor: 'text-orange-400',
  },
] as const

/* ── JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://romulo.agency' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://romulo.agency/servicios' },
      ],
    },
    ...services.map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
      provider: { '@type': 'Organization', name: 'Romulo Agency', url: 'https://romulo.agency' },
      areaServed: { '@type': 'Place', name: 'Latinoamérica' },
      serviceType: s.category,
    })),
  ],
}

const faq = [
  {
    q: '¿Cuánto tiempo tarda la entrega de un sitio web?',
    a: 'El tiempo de entrega es de 7 a 14 días hábiles dependiendo de la complejidad del proyecto. Las landing pages se entregan en 5 a 7 días.',
  },
  {
    q: '¿Qué necesito para empezar con GHL?',
    a: 'Solo necesitas una cuenta en GoHighLevel (SaaS o agencia). Nos encargamos de todo el setup, configuración y capacitación para que empieces a usar GHL desde el día 1.',
  },
  {
    q: '¿Las landing pages incluyen el copy (textos)?',
    a: 'Sí. Nuestro servicio de landing pages incluye redacción de copy persuasivo basado en la oferta y audiencia de tu negocio.',
  },
  {
    q: '¿Puedo solicitar cambios después de la entrega?',
    a: 'Todos los proyectos incluyen una ronda de revisiones. Cambios adicionales tienen un costo según el alcance, el cual se cotiza por separado.',
  },
  {
    q: '¿Trabajan con clientes fuera de Colombia?',
    a: 'Sí. Trabajamos con clientes en toda Latinoamérica y cualquier parte del mundo. Todo el proceso es 100% remoto.',
  },
]

/* ── Service Card ── */
function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const delay = ['', 'delay-2', 'delay-3'][index] ?? ''
  const isReversed = index % 2 !== 0

  return (
    <article
      id={service.id}
      className={`glass-card rounded-3xl overflow-hidden fade-up ${delay} ${service.accentColor}`}
      aria-label={service.title}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${isReversed ? 'lg:flex lg:flex-row-reverse' : ''}`}>

        {/* Left: Main info */}
        <div className="p-8 sm:p-10 flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="icon-wrap w-16 h-16 rounded-2xl flex items-center justify-center">
              {service.icon}
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className={`section-label text-[0.6rem] ${service.labelColor}`}>{service.category}</span>
              <span className="text-xs text-gray-500 font-medium">
                <svg className="w-3 h-3 inline mr-1 mb-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Entrega en {service.timeframe}
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{service.title}</h2>
          <p className={`text-sm font-semibold mb-4 ${service.labelColor}`}>{service.subtitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-7">{service.description}</p>

          {/* Includes */}
          <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Qué incluye</h3>
          <ul className="space-y-2.5 mb-8 flex-1">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white px-7 py-3.5 rounded-full font-semibold text-sm cursor-pointer inline-flex items-center gap-2"
            >
              {service.cta}
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            {service.href && (
              <Link
                href={service.href}
                className="btn-outline text-white px-6 py-3.5 rounded-full font-semibold text-sm cursor-pointer inline-flex items-center gap-2"
              >
                Ver detalles
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            )}
          </div>
        </div>

        {/* Right: Process + Ideal for */}
        <div className="p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col gap-8">

          {/* Process */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-5">Proceso de trabajo</h3>
            <div className="space-y-5">
              {service.process.map((p) => (
                <div key={p.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {p.step}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">{p.label}</span>
                    <p className="text-gray-400 text-xs leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Ideal para</h3>
            <div className="flex flex-wrap gap-2">
              {service.ideal.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}

/* ── Page ── */
export default function Servicios() {
  return (
    <>
      <Script
        id="ld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimationObserver />
      <Navbar />

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-44 pb-20 grid-bg overflow-hidden">
          <div className="orb float-orb-a" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(217,119,6,0.4),transparent)', top: -200, right: -100 }} />
          <div className="orb float-orb-b" style={{ width: 350, height: 350, background: 'radial-gradient(circle,rgba(245,158,11,0.25),transparent)', bottom: 0, left: -80 }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors cursor-pointer">Inicio</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-amber-400/80">Servicios</span>
            </nav>

            <div className="inline-flex items-center gap-2 badge rounded-full px-4 py-2 mb-6 hero-badge">
              <span className="dot-live w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
              <span className="text-sm font-medium">3 Servicios Disponibles · Entrega Garantizada</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
              Servicios que Hacen<br />
              <span className="gradient-text">Crecer y Automatizar</span><br />
              Tu Negocio
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Diseño web profesional, landing pages que venden y GoHighLevel
              configurado para que no pierdas ni un solo lead.
            </p>

            {/* Quick nav to services */}
            <div className="flex flex-wrap gap-3 justify-center">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="btn-outline text-white px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer inline-flex items-center gap-2"
                >
                  {s.icon &&
                    <span className="w-4 h-4 [&>svg]:w-4 [&>svg]:h-4">
                      {s.icon}
                    </span>
                  }
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
        </section>

        {/* ── Services ── */}
        <section className="py-20" aria-label="Servicios de marketing digital">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </section>

        {/* ── Why Us ── */}
        <div className="glow-divider mx-6 sm:mx-12 my-4" />

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">Nuestra diferencia</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Por Qué Elegir <span className="gradient-text">Romulo Agency</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <svg className="w-6 h-6 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
                  title: 'Entrega rápida',
                  desc: 'Sitios web en 7–14 días. Landing pages en 5–7 días. Sin excusas.',
                },
                {
                  icon: <svg className="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  title: 'Garantía de calidad',
                  desc: 'Si no quedas satisfecho en la primera revisión, lo rehacemos sin costo.',
                },
                {
                  icon: <svg className="w-6 h-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
                  title: 'Orientados a resultados',
                  desc: 'No solo diseñamos. Cada entregable está pensado para generar ROI.',
                },
                {
                  icon: <svg className="w-6 h-6 text-amber-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.42 2 2 0 0 1 3.57 2.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                  title: 'Soporte post-entrega',
                  desc: 'No desaparecemos al entregar. Soporte activo por WhatsApp tras cada proyecto.',
                },
              ].map((item, i) => (
                <div key={item.title} className={`glass-card rounded-2xl p-6 text-center fade-up delay-${i + 1}`}>
                  <div className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20" aria-labelledby="faq-servicios">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">FAQ</p>
              <h2 id="faq-servicios" className="text-3xl sm:text-4xl font-bold text-white">
                Preguntas <span className="gradient-text">Frecuentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className={`glass-card rounded-2xl p-6 fade-up delay-${i + 1}`}>
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="cta-section rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden fade-up">
              <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(217,119,6,0.2),transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative z-10">
                <p className="section-label mb-4">Empecemos hoy</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  ¿Qué Servicio<br />
                  <span className="gradient-text">Necesitas?</span>
                </h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                  Escríbenos por WhatsApp y te damos precio y tiempos exactos en menos de 24 horas. Sin formularios largos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2.5"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Pedir cotización
                  </a>
                  <Link
                    href="/cursos-de-marketing"
                    className="btn-outline text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Ver cursos
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm mt-6">Respuesta en menos de 24h · Sin compromiso</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
