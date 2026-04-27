import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationObserver from '@/components/AnimationObserver'

/* ── SEO ── */
export const metadata: Metadata = {
  title: 'Asesoría Personalizada en Marketing Digital | El Otro Romulo',
  description:
    'Asesoría 1:1 en marketing digital con Rómulo Rodriguez y Jhonathan Hoyos. Aprende Meta Ads, funnels de venta, estrategia digital y más. Sesiones personalizadas según tus objetivos.',
  keywords: [
    'asesoría personalizada marketing digital',
    'mentoría marketing digital',
    'asesoría meta ads',
    'consultoría marketing digital colombia',
    'mentor marketing digital',
    'asesoría 1 a 1 marketing',
    'aprender marketing digital',
    'estrategia digital personalizada',
  ],
  openGraph: {
    title: 'Asesoría Personalizada en Marketing Digital — El Otro Romulo',
    description:
      'Sesiones 1:1 con expertos en marketing digital. Aprende exactamente lo que tu negocio necesita, al ritmo que necesitas.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'El Otro Romulo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asesoría Personalizada en Marketing Digital — El Otro Romulo',
    description: 'Asesoría 1:1 con Rómulo Rodriguez y Jhonathan Hoyos. Agenda tu sesión hoy.',
  },
  alternates: { canonical: '/asesoria-personalizada' },
  robots: { index: true, follow: true },
}

/* ── JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://romulo.agency' },
        { '@type': 'ListItem', position: 2, name: 'Asesoría Personalizada', item: 'https://romulo.agency/asesoria-personalizada' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Asesoría Personalizada en Marketing Digital',
      description:
        'Sesiones de mentoría 1:1 en marketing digital con Rómulo Rodriguez y Jhonathan Hoyos. Enfocadas en Meta Ads, estrategia de ventas, funnels, contenido y crecimiento digital.',
      provider: { '@type': 'Organization', name: 'El Otro Romulo', url: 'https://romulo.agency' },
      areaServed: { '@type': 'Place', name: 'Latinoamérica' },
      serviceType: 'Consultoría · Mentoría Digital',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es una asesoría personalizada de marketing digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es una sesión 1:1 con uno de nuestros mentores donde analizamos tu negocio específico, identificamos oportunidades de crecimiento y te damos un plan de acción concreto. No teoría genérica, sino estrategia aplicada a tu caso.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo agendo una asesoría?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haz clic en el botón "Agendar asesoría", completa el formulario con información sobre tu negocio y objetivos, y elige el horario que mejor te funcione. Nuestro equipo confirmará la sesión en menos de 24 horas.',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      name: 'Rómulo Rodriguez',
      jobTitle: 'Fundador & Mentor Principal',
      worksFor: { '@type': 'Organization', name: 'El Otro Romulo', url: 'https://romulo.agency' },
    },
    {
      '@type': 'Person',
      name: 'Jhonathan Hoyos',
      jobTitle: 'Mentor & Co-Fundador',
      worksFor: { '@type': 'Organization', name: 'El Otro Romulo', url: 'https://romulo.agency' },
    },
  ],
}

/* ── Data ── */

const mentors = [
  {
    id: 'romulo',
    name: 'Rómulo Rodriguez',
    initials: 'RR',
    image: '/images/team/Romulorodriguez.png',
    role: 'Fundador & Mentor Principal',
    tagline: 'El que lo construyó primero',
    bio: 'Rómulo es el fundador de El Otro Romulo y la mente detrás de los métodos que hoy usan cientos de estudiantes. Ha invertido y gestionado millones de dólares en publicidad digital, ha lanzado cursos que se venden solos y ha ayudado a negocios a multiplicar sus ingresos con estrategia, no con suerte.',
    bio2: 'En cada asesoría te habla directo: sin rodeos, sin teorías vacías. Solo lo que funciona hoy en el mercado real.',
    specialties: [
      'Meta Ads & Google Ads',
      'Lanzamiento de infoproductos',
      'Funnels y embudos de venta',
      'Escalamiento de campañas',
      'Estrategia de contenido',
      'Ventas de alto ticket',
    ],
    highlight: 'Mentor Principal',
    highlightColor: 'text-amber-300 bg-amber-400/10 border-amber-400/25',
    avatarGradient: 'from-amber-500 to-orange-600',
    accentBorder: 'border-amber-400/30',
    accentBg: 'from-amber-500/10 to-transparent',
    checkColor: 'text-amber-400',
    isPrimary: true,
  },
  {
    id: 'jhonathan',
    name: 'Jhonathan Hoyos',
    initials: 'JH',
    image: '/images/team/jhonathan.png',
    role: 'Mentor & Co-Fundador',
    tagline: 'Estrategia con visión técnica',
    bio: 'Jhonathan combina visión estratégica con ejecución técnica. Especialista en marketing digital y desarrollo web, ayuda a negocios a construir sistemas que funcionan: desde el tráfico hasta la conversión, pasando por la automatización.',
    bio2: 'Su enfoque en las asesorías es sistemático: analiza, estructura y te entrega un plan claro que puedes ejecutar desde el día siguiente.',
    specialties: [
      'Estrategia de marketing digital',
      'Automatización y CRM (GHL)',
      'Diseño web y conversión',
      'Email marketing y nurturing',
      'Análisis de métricas y KPIs',
      'Construcción de marca digital',
    ],
    highlight: 'Co-Fundador',
    highlightColor: 'text-blue-300 bg-blue-400/10 border-blue-400/25',
    avatarGradient: 'from-blue-500 to-indigo-600',
    accentBorder: 'border-blue-400/20',
    accentBg: 'from-blue-500/8 to-transparent',
    checkColor: 'text-blue-400',
    isPrimary: false,
  },
]

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: '100% personalizada',
    desc: 'Nada de respuestas genéricas. Analizamos tu negocio, tu audiencia y tu situación actual antes de hablar.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Plan de acción concreto',
    desc: 'Cada sesión termina con pasos claros que puedes ejecutar esta semana, no teorías para "algún día".',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Tu tiempo, tu ritmo',
    desc: 'Elige el horario que mejor se adapte a ti. Sesiones por videollamada desde donde estés.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Experiencia real en el mercado',
    desc: 'Mentores activos que gestionan campañas y negocios reales. Lo que enseñan, lo viven.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Acompañamiento post-sesión',
    desc: 'Acceso directo por WhatsApp durante 48h después de la sesión para resolver dudas de implementación.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
        <path d="m9 8 3 3 3-3"/>
      </svg>
    ),
    title: 'Grabación incluida',
    desc: 'Todas las sesiones quedan grabadas para que puedas repasar cada recomendación cuantas veces necesites.',
  },
]

const topics = [
  'Publicidad en Meta Ads (Facebook e Instagram)',
  'Google Ads y YouTube Ads',
  'Creación y lanzamiento de infoproductos',
  'Funnels de venta y embudos de conversión',
  'Estrategia de contenido orgánico',
  'Email marketing y automatizaciones',
  'GoHighLevel (CRM y automatización)',
  'Análisis de métricas y optimización',
  'Ventas de alto ticket',
  'Marca personal y posicionamiento',
  'Escalamiento de campañas rentables',
  'Construcción de audiencias y comunidades',
]

const process = [
  {
    step: '01',
    title: 'Agendar',
    desc: 'Haz clic en "Agendar asesoría", llena el formulario breve sobre tu negocio y elige tu horario preferido.',
    duration: '5 min',
  },
  {
    step: '02',
    title: 'Diagnóstico previo',
    desc: 'Te enviamos un cuestionario corto para entender tu situación actual, objetivos y los principales bloqueos que tienes.',
    duration: '10 min',
  },
  {
    step: '03',
    title: 'Sesión 1:1',
    desc: 'Videollamada en vivo con tu mentor. Analizamos tu caso, respondemos tus preguntas y construimos tu plan de acción.',
    duration: '60 min',
  },
  {
    step: '04',
    title: 'Plan de acción',
    desc: 'Recibes un resumen escrito con los pasos concretos acordados + acceso directo por WhatsApp por 48h para acompañamiento.',
    duration: 'Post-sesión',
  },
]

const idealFor = [
  'Emprendedores que quieren escalar su negocio',
  'Dueños de negocio que quieren entender el marketing digital',
  'Freelancers que buscan diferenciarse',
  'Creadores de contenido que quieren monetizar',
  'Estudiantes de marketing que quieren aplicar lo aprendido',
  'Equipos de marketing que necesitan dirección estratégica',
]

const faq = [
  {
    q: '¿La asesoría es grupal o individual?',
    a: 'Es completamente individual (1:1). Solo tú y tu mentor. Nada de grupos, nada de dinámicas compartidas. Toda la sesión está dedicada a tu negocio y tus preguntas.',
  },
  {
    q: '¿Cuánto dura cada sesión?',
    a: 'Las sesiones estándar duran 60 minutos. Si necesitas más tiempo o un acompañamiento más continuo, podemos armar un plan personalizado. Escríbenos para coordinar.',
  },
  {
    q: '¿Puedo elegir con qué mentor quiero la sesión?',
    a: 'Sí. Al agendar puedes indicar si prefieres a Rómulo o a Jhonathan. Si no tienes preferencia, te asignamos al mentor que mejor se adapta a tu área de consulta.',
  },
  {
    q: '¿Las sesiones son en español?',
    a: 'Sí, 100% en español. Trabajamos principalmente con clientes de Latinoamérica y España.',
  },
  {
    q: '¿Qué pasa si tengo dudas después de la sesión?',
    a: 'Incluimos acompañamiento por WhatsApp durante 48 horas post-sesión para que puedas resolver dudas mientras empiezas a implementar. Después de ese período, puedes agendar una sesión de seguimiento.',
  },
  {
    q: '¿Necesito tener experiencia previa en marketing?',
    a: 'No. Las asesorías se adaptan a tu nivel. Si eres principiante, empezamos desde los fundamentos aplicados a tu negocio. Si ya tienes experiencia, vamos directo a optimización y escalamiento.',
  },
]

/* ── Page ── */
export default function AsesoriaPersonalizada() {
  return (
    <>
      <Script id="ld-asesoria" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnimationObserver />
      <Navbar />

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-16 grid-bg overflow-hidden">
          <div className="orb" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(217,119,6,0.28),transparent)', top: -250, right: -150 }} />
          <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(59,130,246,0.12),transparent)', bottom: -100, left: -100 }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">Inicio</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-amber-400/80">Asesoría Personalizada</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 badge rounded-full px-3 py-1.5 mb-5 hero-badge">
                <span className="dot-live w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs font-medium">Sesiones 1:1 · Marketing Digital · Cupos limitados</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-white">
                Aprende de Quienes<br />
                <span className="gradient-text">Lo Hacen de Verdad</span>
              </h1>

              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
                Asesorías personalizadas en marketing digital. Sin teoría vacía, sin respuestas genéricas.
                Solo estrategia concreta aplicada a tu negocio, de la mano de expertos activos en el mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-8 py-4 rounded-full font-bold text-base cursor-pointer inline-flex items-center justify-center gap-2.5"
                >
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Agendar mi asesoría
                </a>
                <a
                  href="#mentores"
                  className="btn-outline text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  Conocer a los mentores
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
        </section>

        {/* ── Why personalized ── */}
        <section className="py-20" aria-label="Por qué una asesoría personalizada">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14 fade-up">
              <p className="section-label mb-3">Por qué funciona</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                No es un Curso. Es tu <span className="gradient-text">Estrategia Personal</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
                Los cursos te enseñan conceptos. Las asesorías te dan el plan exacto para tu negocio,
                con tu producto, tu audiencia y tu contexto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <div key={b.title} className={`glass-card rounded-2xl p-6 fade-up delay-${(i % 5) + 1}`}>
                  <div className="icon-wrap w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-amber-400">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mentors ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section id="mentores" className="py-20" aria-label="Conoce a los mentores">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16 fade-up">
              <p className="section-label mb-3">Tus mentores</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Aprende Directo de <span className="gradient-text">los que Ejecutan</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
                Dos profesionales activos en el mercado. Lo que enseñan, lo aplican en sus propios negocios y los de sus clientes cada semana.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mentors.map((mentor, idx) => (
                <article
                  key={mentor.id}
                  className={`glass-card rounded-3xl overflow-hidden border ${mentor.accentBorder} fade-up delay-${idx + 1}`}
                >
                  {/* Top gradient accent */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${mentor.avatarGradient}`} />

                  <div className="p-8 sm:p-10">
                    {/* Header */}
                    <div className="flex items-start gap-5 mb-7">
                      {/* Avatar */}
                      <div
                        className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
                        style={{ boxShadow: mentor.isPrimary ? '0 0 32px rgba(217,119,6,0.3)' : '0 0 32px rgba(59,130,246,0.2)' }}
                      >
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-white leading-tight">{mentor.name}</h3>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${mentor.highlightColor}`}>
                            {mentor.highlight}
                          </span>
                        </div>
                        <p className={`text-sm font-semibold ${mentor.isPrimary ? 'text-amber-400' : 'text-blue-400'} mb-0.5`}>{mentor.role}</p>
                        <p className="text-xs text-gray-500 italic">&ldquo;{mentor.tagline}&rdquo;</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{mentor.bio}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">{mentor.bio2}</p>

                    {/* Specialties */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Áreas de especialidad</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {mentor.specialties.map((s) => (
                          <div key={s} className="flex items-center gap-2.5">
                            <svg className={`w-4 h-4 flex-shrink-0 ${mentor.checkColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            <span className="text-sm text-gray-300">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://wa.me/573000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-full font-semibold text-sm cursor-pointer inline-flex items-center justify-center gap-2.5 transition-all ${
                        mentor.isPrimary
                          ? 'btn-primary text-white'
                          : 'bg-blue-500/15 border border-blue-400/30 text-blue-300 hover:bg-blue-500/25 hover:border-blue-400/50'
                      }`}
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Agendar con {mentor.name.split(' ')[0]}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Topics ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-20" aria-label="Temas que cubrimos">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">Temáticas disponibles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                ¿Sobre qué Podemos <span className="gradient-text">Asesorarte?</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm leading-relaxed">
                Desde publicidad pagada hasta automatización. Si tiene que ver con hacer crecer un negocio en digital, lo cubrimos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {topics.map((topic, i) => (
                <div
                  key={topic}
                  className={`glass-card rounded-xl px-5 py-4 flex items-center gap-3 fade-up delay-${(i % 5) + 1}`}
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20" aria-label="Cómo funciona">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-label mb-3">Cómo funciona</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                De Cero a tu Plan de <span className="gradient-text">Acción en 4 Pasos</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm leading-relaxed">
                Un proceso simple, rápido y sin fricciones para que empieces a crecer lo antes posible.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px"
                   style={{ background: 'linear-gradient(90deg, rgba(217,119,6,0.15), rgba(217,119,6,0.5), rgba(245,158,11,0.5), rgba(217,119,6,0.15))' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((p, i) => (
                  <div key={p.step} className={`flex flex-col items-center text-center fade-up delay-${i + 1}`}>
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

        {/* ── Ideal for ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-20" aria-label="Para quién es">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div className="fade-up">
                <p className="section-label mb-3">¿Es para ti?</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  La Asesoría es para Quienes<br />
                  <span className="gradient-text">Quieren Resultados Reales</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  No importa en qué etapa estés. Si tienes un negocio o una idea, y quieres
                  acelerar tu crecimiento con la guía correcta, estas sesiones son para ti.
                </p>
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-8 py-4 rounded-full font-bold text-sm cursor-pointer inline-flex items-center gap-2.5"
                >
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Quiero mi asesoría
                </a>
              </div>

              <div className="fade-up delay-2">
                <div className="space-y-3">
                  {idealFor.map((item, i) => (
                    <div key={item} className="glass-card rounded-xl px-5 py-4 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                        {i + 1}
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20" aria-labelledby="faq-asesoria">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">FAQ</p>
              <h2 id="faq-asesoria" className="text-3xl sm:text-4xl font-bold text-white">
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

        {/* ── Final CTA ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="cta-section rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden fade-up">
              <div className="orb" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(217,119,6,0.15),transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

              <div className="relative z-10">
                {/* Mentor avatars stacked */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {mentors.map((m, i) => (
                    <div
                      key={m.id}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#0A0B14]"
                      style={{ marginLeft: i === 0 ? 0 : '-0.75rem' }}
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full glass-card border border-amber-400/30 flex items-center justify-center -ml-3">
                    <svg className="w-5 h-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  </div>
                </div>

                <p className="section-label mb-4">Empieza hoy</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
                  Tu Sesión Está<br />
                  <span className="gradient-text">A un Click de Distancia</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
                  Escríbenos por WhatsApp para coordinar tu sesión. Sin compromiso.
                  Te respondemos en menos de 24 horas.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm">
                  {['Sesión 1:1', 'Plan de acción incluido', 'Grabación de la sesión', 'Seguimiento 48h post-sesión'].map((t) => (
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
                    Agendar mi asesoría ahora
                  </a>
                  <Link
                    href="/cursos-de-marketing"
                    className="btn-outline text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Ver nuestros cursos
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>

                <p className="text-gray-500 text-sm mt-6">Sin compromiso · Cupos limitados · Respuesta en &lt;24h</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
