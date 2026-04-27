import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationObserver from '@/components/AnimationObserver'
import PortfolioShowcase from '@/components/PortfolioShowcase'

/* ── SEO ── */
export const metadata: Metadata = {
  title: 'Landing Pages de Alta Conversión | Diseño Profesional | Romulo Agency',
  description:
    'Diseñamos landing pages que convierten visitantes en clientes. Responsive, ultrarrápidas, con copy persuasivo y entrega en 5–7 días. Resultados comprobados con clientes reales.',
  keywords: [
    'landing page alta conversión',
    'diseño landing page profesional',
    'landing page para curso digital',
    'landing page para meta ads',
    'crear landing page venta infoproductos',
    'agencia landing pages colombia',
    'landing page responsive rapida',
    'landing page con copy persuasivo',
  ],
  openGraph: {
    title: 'Landing Pages de Alta Conversión — Romulo Agency',
    description:
      'Landing pages que venden. Responsive, rápidas, con copy persuasivo. Entrega en 5–7 días. Ve nuestro portafolio de páginas reales.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Romulo Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages de Alta Conversión — Romulo Agency',
    description: 'Landing pages que convierten. Responsive, rápidas, copy incluido. Entrega 5–7 días.',
  },
  alternates: { canonical: '/servicios/landing-pages' },
  robots: { index: true, follow: true },
}

/* ── JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',    item: 'https://romulo.agency' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://romulo.agency/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Landing Pages', item: 'https://romulo.agency/servicios/landing-pages' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Diseño de Landing Pages de Alta Conversión',
      description:
        'Creamos landing pages profesionales, responsive y ultrarrápidas con copy persuasivo y optimización para conversión. Entrega garantizada en 5 a 7 días hábiles.',
      provider: { '@type': 'Organization', name: 'Romulo Agency', url: 'https://romulo.agency' },
      areaServed: { '@type': 'Place', name: 'Latinoamérica' },
      serviceType: 'Diseño Web · Conversión',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://romulo.agency/servicios/landing-pages',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto tarda en entregarse una landing page?',
          acceptedAnswer: { '@type': 'Answer', text: 'Entre 5 y 7 días hábiles desde la aprobación del brief y el pago.' },
        },
        {
          '@type': 'Question',
          name: '¿Incluye el copy (los textos) de la landing page?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. El servicio incluye redacción de copy persuasivo basado en tu oferta y audiencia objetivo.' },
        },
        {
          '@type': 'Question',
          name: '¿La landing page es compatible con Meta Ads y Google Ads?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Instalamos Pixel de Meta y Google Tag Manager para que puedas rastrear conversiones desde cualquier plataforma de publicidad.' },
        },
      ],
    },
  ],
}

/* ── Benefits data ── */
const benefits = [
  { icon: '⚡', title: 'Velocidad de carga < 2s', desc: 'Puntuación 90+ en PageSpeed. Carga rápida = más conversiones y mejor Quality Score en tus anuncios.' },
  { icon: '📱', title: '100% Responsive', desc: 'Diseño perfecto en móvil, tablet y desktop. El 70% de los clics en anuncios vienen desde celular.' },
  { icon: '✍️', title: 'Copy persuasivo incluido', desc: 'Redactamos los textos con psicología de ventas, AIDA y frameworks probados de copywriting.' },
  { icon: '🎯', title: 'Orientada a conversión', desc: 'Cada elemento —headline, CTA, formulario, colores— está posicionado para que el visitante tome acción.' },
  { icon: '🔌', title: 'Integraciones incluidas', desc: 'Pixel de Meta, Google Tag Manager, Calendly, GoHighLevel, Mailchimp o cualquier CRM que uses.' },
  { icon: '🧪', title: 'A/B testing inicial', desc: 'Probamos variantes en el headline y el CTA durante los primeros 7 días para maximizar la tasa de conversión.' },
]

const process = [
  {
    step: '01',
    title: 'Brief & Estrategia',
    desc: 'Analizamos tu oferta, tu audiencia ideal y la competencia. Definimos la propuesta de valor que va a convertir.',
    duration: '1 día',
  },
  {
    step: '02',
    title: 'Copy & Estructura',
    desc: 'Redactamos el headline, subtítulo, cuerpo y CTA con frameworks de copywriting de alta conversión (AIDA, PAS, etc.).',
    duration: '1–2 días',
  },
  {
    step: '03',
    title: 'Diseño & Desarrollo',
    desc: 'Construimos la landing con el diseño aprobado: mobile-first, rápida y visualmente alineada con tu marca.',
    duration: '2–3 días',
  },
  {
    step: '04',
    title: 'Tracking & Publicación',
    desc: 'Instalamos el Pixel, GTM y conectamos tu CRM. Revisión final contigo y publicación en tu dominio.',
    duration: '1 día',
  },
]

const stats = [
  { value: '3x', label: 'Más conversiones vs. página estándar' },
  { value: '5–7d', label: 'Tiempo de entrega garantizado' },
  { value: '90+', label: 'Score en PageSpeed Insights' },
  { value: '50+', label: 'Landing pages entregadas' },
]

const includes = [
  'Diseño visual 100% personalizado',
  'Copy persuasivo completo (headline, CTA, cuerpo)',
  'Diseño mobile-first y responsive',
  'Velocidad optimizada (Core Web Vitals)',
  'Pixel de Meta instalado y verificado',
  'Google Tag Manager configurado',
  'Formulario o botón de WhatsApp integrado',
  'Integración con tu CRM o GHL',
  'Dominio propio conectado',
  'A/B testing en headline y CTA (7 días)',
  'Revisión post-lanzamiento a los 7 días',
  '1 ronda de cambios incluida',
]

const faq = [
  {
    q: '¿Cuánto cuesta una landing page?',
    a: 'El precio varía según la complejidad. Escríbenos por WhatsApp y te damos una cotización exacta en menos de 24 horas.',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'Entre 5 y 7 días hábiles desde la aprobación del brief y el pago. Para proyectos urgentes tenemos modalidad express.',
  },
  {
    q: '¿El servicio incluye el copy (textos)?',
    a: 'Sí. El copy persuasivo está incluido: headline, subtítulo, descripción de beneficios, testimonios y llamadas a la acción.',
  },
  {
    q: '¿Puedo usar la landing para Meta Ads o Google Ads?',
    a: 'Perfectamente. Instalamos el Pixel de Meta y Google Tag Manager para que puedas rastrear conversiones y optimizar tus campañas.',
  },
  {
    q: '¿La landing conecta con GoHighLevel?',
    a: 'Sí. Podemos integrar el formulario directamente con tu pipeline de GHL, de manera que cada lead entre automáticamente a tu CRM.',
  },
  {
    q: '¿Qué pasa si no me gusta el diseño?',
    a: 'Incluimos una ronda completa de revisiones. Primero aprobas la maqueta estática antes de que construyamos el sitio real.',
  },
]

/* ── Page ── */
export default function LandingPagesService() {
  return (
    <>
      <Script id="ld-lp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnimationObserver />
      <Navbar />

      <main>

        {/* ── Compact hero ── */}
        <section className="relative pt-40 pb-10 grid-bg overflow-hidden">
          <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(217,119,6,0.35),transparent)', top: -150, right: -100 }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">Inicio</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <Link href="/servicios" className="hover:text-amber-400 transition-colors">Servicios</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-amber-400/80">Landing Pages</span>
            </nav>

            <div className="inline-flex items-center gap-2 badge rounded-full px-3 py-1.5 mb-5 hero-badge">
              <span className="dot-live w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-xs font-medium">Entrega en 5–7 días · Copy incluido · Resultados comprobados</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-5 text-white max-w-3xl">
              Landing Pages que<br />
              <span className="gradient-text">Convierten Visitantes</span><br />
              <span className="gradient-text">en Clientes</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              No solo diseñamos páginas bonitas. Construimos máquinas de conversión
              con copy persuasivo, velocidad extrema y tracking completo.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
        </section>

        {/* ── SPLIT: Benefits + Portfolio ── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">

              {/* LEFT: Benefits card (sticky) */}
              <div className="lg:col-span-2 lg:sticky lg:top-24 fade-up">
                <div className="glass-card rounded-3xl p-8 border-amber-400/25">

                  {/* Label + title */}
                  <p className="section-label mb-3">Por qué funciona</p>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    La Landing Page que<br />
                    <span className="gradient-text">Tu Negocio Merece</span>
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-7">
                    Cada landing que entregamos está construida sobre una sola premisa:
                    <strong className="text-white"> que el visitante convierta</strong>. Nada decorativo, todo estratégico.
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-4 mb-8">
                    {benefits.map((b) => (
                      <li key={b.title} className="flex gap-3">
                        <span className="text-lg flex-shrink-0 mt-0.5">{b.icon}</span>
                        <div>
                          <span className="text-sm font-semibold text-white">{b.title}</span>
                          <p className="text-gray-400 text-xs leading-relaxed mt-0.5">{b.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    {stats.map((s) => (
                      <div key={s.label} className="stat-card rounded-xl p-3 text-center">
                        <div className="text-xl font-bold gradient-text">{s.value}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-white w-full py-4 rounded-full font-semibold text-sm cursor-pointer flex items-center justify-center gap-2.5"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Quiero mi landing page
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-3">Cotización gratis · Respuesta en &lt;24h</p>
                </div>
              </div>

              {/* RIGHT: Portfolio showcase */}
              <div className="lg:col-span-3 fade-up delay-3">
                <div className="mb-5">
                  <p className="section-label mb-2">Portafolio en vivo</p>
                  <h2 className="text-2xl font-bold text-white">
                    Landing Pages que <span className="gradient-text">Hemos Creado</span>
                  </h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Explora páginas reales que hemos diseñado y que están generando resultados ahora mismo.
                  </p>
                </div>

                <PortfolioShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* ── What's included ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-20" aria-label="Qué incluye el servicio">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">Sin sorpresas</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Todo lo que Incluye tu <span className="gradient-text">Landing Page</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm leading-relaxed">
                Un solo precio. Todo incluido. Sin cobros ocultos por copy, tracking o integraciones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {includes.map((item, i) => (
                <div
                  key={item}
                  className={`glass-card rounded-xl px-5 py-4 flex items-center gap-3 fade-up delay-${(i % 5) + 1}`}
                >
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20" aria-label="Cómo funciona el proceso">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-label mb-3">Proceso de trabajo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                De Cero a Publicado en <span className="gradient-text">5–7 Días</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm leading-relaxed">
                Un proceso ágil y transparente. Tú apruebas cada etapa antes de avanzar a la siguiente.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px"
                   style={{ background: 'linear-gradient(90deg, rgba(217,119,6,0.15), rgba(217,119,6,0.5), rgba(245,158,11,0.5), rgba(217,119,6,0.15))' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((p, i) => (
                  <div key={p.step} className={`flex flex-col items-center text-center fade-up delay-${i + 1}`}>
                    {/* Step circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg"
                         style={{ boxShadow: '0 0 24px rgba(217,119,6,0.3)' }}>
                      {p.step}
                    </div>

                    <span className="text-xs text-amber-400/80 font-semibold uppercase tracking-wider mb-2">{p.duration}</span>
                    <h3 className="font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Social proof bar ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-14" aria-label="Resultados comprobados">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 fade-up">
              {[
                { value: '50+', label: 'Landing pages entregadas', icon: '🚀' },
                { value: '< 2s', label: 'Velocidad de carga promedio', icon: '⚡' },
                { value: '3x', label: 'Más conversiones vs. estándar', icon: '📈' },
                { value: '100%', label: 'Responsivas y testeadas', icon: '📱' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-6 text-center">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                  <p className="text-gray-400 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20" aria-labelledby="faq-lp">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">FAQ</p>
              <h2 id="faq-lp" className="text-3xl sm:text-4xl font-bold text-white">
                Preguntas <span className="gradient-text">Frecuentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className={`glass-card rounded-2xl p-6 fade-up delay-${(i % 5) + 1}`}>
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="cta-section rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden fade-up">
              <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(217,119,6,0.18),transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

              <div className="relative z-10">
                <p className="section-label mb-4">Empecemos hoy</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
                  Tu Próxima Landing Page<br />
                  <span className="gradient-text">Lista en 5–7 Días</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
                  Escríbenos ahora. Te damos precio y tiempos exactos en menos de 24 horas.
                  Sin formularios largos. Sin esperas.
                </p>

                {/* Urgency / trust signals */}
                <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm">
                  {['Copy incluido', 'Pixel instalado', 'Revisión incluida', '1 ronda de cambios'].map((t) => (
                    <span key={t} className="flex items-center gap-1.5 text-gray-300">
                      <svg className="w-4 h-4 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-white px-10 py-4 rounded-full font-bold text-base cursor-pointer inline-flex items-center justify-center gap-2.5"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Pedir cotización ahora
                  </a>
                  <Link
                    href="/servicios"
                    className="btn-outline text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Ver todos los servicios
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>

                <p className="text-gray-500 text-sm mt-6">Sin compromiso · Cotización gratis · Respuesta en &lt;24h</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
