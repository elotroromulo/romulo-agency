import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationObserver from '@/components/AnimationObserver'

/* ── SEO ── */
export const metadata: Metadata = {
  title: 'Nosotros | El Otro Romulo — Agencia de Marketing Digital',
  description:
    'Conoce a El Otro Romulo: quiénes somos, qué nos mueve y el equipo detrás de los resultados. Una agencia de marketing digital nacida en Colombia para toda Latinoamérica.',
  keywords: [
    'romulo agency nosotros',
    'agencia marketing digital colombia',
    'equipo romulo agency',
    'romulo rodriguez marketing',
    'agencia marketing latinoamerica',
    'sobre romulo agency',
  ],
  openGraph: {
    title: 'Nosotros — El Otro Romulo',
    description: 'Conoce el equipo y la historia detrás de El Otro Romulo. Marketing digital con resultados reales.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'El Otro Romulo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros — El Otro Romulo',
    description: 'El equipo detrás de El Otro Romulo. Marketing digital que genera resultados reales.',
  },
  alternates: { canonical: '/nosotros' },
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
        { '@type': 'ListItem', position: 2, name: 'Nosotros', item: 'https://romulo.agency/nosotros' },
      ],
    },
    {
      '@type': 'Organization',
      name: 'El Otro Romulo',
      url: 'https://romulo.agency',
      email: 'contacto@romulo.agency',
      description:
        'Agencia de marketing digital especializada en publicidad pagada, diseño web, landing pages, automatización con GoHighLevel y formación en marketing digital para emprendedores y negocios de Latinoamérica.',
      areaServed: { '@type': 'Place', name: 'Latinoamérica' },
      foundingLocation: { '@type': 'Place', name: 'Colombia' },
      member: [
        {
          '@type': 'Person',
          name: 'Rómulo Rodriguez',
          jobTitle: 'Fundador & CEO',
        },
        {
          '@type': 'Person',
          name: 'Jhonathan Hoyos',
          jobTitle: 'Especialista en Desarrollo Web',
        },
      ],
    },
  ],
}

/* ── Data ── */

const stats = [
  { value: '3+', label: 'Años en el mercado' },
  { value: '200+', label: 'Clientes atendidos' },
  { value: '50+', label: 'Landing pages entregadas' },
  { value: 'LATAM', label: 'Presencia en toda la región' },
]

const values = [
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Resultados sobre promesas',
    desc: 'No vendemos humo. Medimos cada acción con números reales y tomamos decisiones basadas en datos, no en intuición.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Transparencia total',
    desc: 'Mostramos lo que funciona y lo que no. Sin reportes maquillados, sin excusas. El cliente siempre sabe exactamente qué está pasando.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Ejecución sin excusas',
    desc: 'Los planes valen cero sin ejecución. Somos un equipo que hace, no que solo planea. Cada proyecto tiene fecha de entrega y se cumple.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 5.98 5.98l1.86-1.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Cercanía real',
    desc: 'No somos una empresa fría con tickets de soporte. Hay personas reales detrás de cada mensaje. Te acompañamos durante todo el proceso.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Educación que empodera',
    desc: 'Queremos que nuestros clientes entiendan lo que hacemos. Un cliente informado toma mejores decisiones y logra mejores resultados.',
  },
  {
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    title: 'Impacto en la región',
    desc: 'Creemos en el potencial del emprendimiento latinoamericano. Nuestro trabajo tiene un propósito más grande: ayudar a construir negocios que transformen vidas.',
  },
]

const staff = [
  {
    id: 'romulo',
    name: 'Rómulo Rodriguez',
    initials: 'RR',
    image: '/images/team/Romulorodriguez.png',
    role: 'Fundador & CEO',
    location: 'Colombia',
    avatarGradient: 'from-amber-500 to-orange-600',
    accentColor: 'border-amber-400/25',
    accentBg: 'from-amber-500/8 to-transparent',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    glowColor: '0 0 40px rgba(217,119,6,0.25)',
    checkColor: 'text-amber-400',
    badge: 'Fundador',
    story: [
      'Rómulo comenzó en el marketing digital de la misma manera que muchos emprendedores: aprendiendo por su cuenta, invirtiendo en cursos, cometiendo errores costosos y, sobre todo, no rindiéndose.',
      'Con el tiempo acumuló el conocimiento práctico que nadie enseña en los libros: cómo gestionar presupuestos publicitarios bajo presión, cómo construir funnels que realmente convierten, cómo escalar campañas sin que los costos se disparen.',
      'Fundó El Otro Romulo con una convicción clara: que los emprendedores latinoamericanos merecen acceso a estrategias de marketing de primer nivel, sin tener que pagar precios de agencias internacionales.',
    ],
    expertise: [
      'Meta Ads & Google Ads',
      'Lanzamiento de infoproductos',
      'Funnels de venta',
      'Escalamiento de campañas',
      'Estrategia de contenido',
      'Ventas de alto ticket',
    ],
    links: [
      { label: 'Asesoría 1:1', href: '/asesoria-personalizada' },
      { label: 'Cursos', href: '/cursos-de-marketing' },
    ],
  },
  {
    id: 'jhonathan',
    name: 'Jhonathan Hoyos',
    initials: 'JH',
    image: '/images/team/jhonathan.png',
    role: 'Especialista en Desarrollo Web',
    location: 'Colombia',
    avatarGradient: 'from-blue-500 to-indigo-600',
    accentColor: 'border-blue-400/20',
    accentBg: 'from-blue-500/6 to-transparent',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    glowColor: '0 0 40px rgba(59,130,246,0.2)',
    checkColor: 'text-blue-400',
    badge: 'Especialista en Desarrollo Web',
    story: [
      'Jhonathan es la mente técnica y estratégica que complementa la visión de Rómulo. Su recorrido en el marketing digital viene acompañado de un dominio profundo del desarrollo web y los sistemas de automatización.',
      'Entiende que el marketing moderno no puede separarse de la tecnología: las páginas que cargan lento pierden clientes, los CRMs mal configurados dejan dinero sobre la mesa, y los sistemas de automatización son la diferencia entre escalar y estancarse.',
      'Su rol en El Otro Romulo va más allá de ejecutar: es quien asegura que cada pieza del ecosistema digital del cliente funcione de manera integrada, eficiente y medible.',
    ],
    expertise: [
      'Estrategia digital integral',
      'Desarrollo web (Next.js / WordPress)',
      'GoHighLevel & automatización',
      'Email marketing & nurturing',
      'Análisis de métricas y KPIs',
      'Sistemas de conversión',
    ],
    links: [
      { label: 'Diseño Web', href: '/servicios/diseno-web' },
      { label: 'Asesoría 1:1', href: '/asesoria-personalizada' },
    ],
  },
]

const services = [
  { label: 'Publicidad Digital', icon: '📣', href: '/servicios' },
  { label: 'Landing Pages', icon: '🎯', href: '/servicios/landing-pages' },
  { label: 'Diseño Web', icon: '💻', href: '/servicios/diseno-web' },
  { label: 'GoHighLevel', icon: '⚙️', href: '/servicios' },
  { label: 'Asesorías 1:1', icon: '🎓', href: '/asesoria-personalizada' },
  { label: 'Cursos Online', icon: '📚', href: '/cursos-de-marketing' },
]

/* ── Page ── */
export default function Nosotros() {
  return (
    <>
      <Script id="ld-about" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnimationObserver />
      <Navbar />

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-20 grid-bg overflow-hidden">
          <div className="orb" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(217,119,6,0.22),transparent)', top: -250, right: -150 }} />
          <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(59,130,246,0.1),transparent)', bottom: -100, left: -150 }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">Inicio</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-amber-400/80">Nosotros</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: text */}
              <div className="fade-up">
                <div className="inline-flex items-center gap-2 badge rounded-full px-3 py-1.5 mb-5 hero-badge">
                  <span className="dot-live w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs font-medium">Colombia · Sirviendo toda Latinoamérica</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6 text-white">
                  No somos una<br />
                  agencia más.<br />
                  <span className="gradient-text">Somos los que lo hacen.</span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                  El Otro Romulo nació de la frustración de ver tanto conocimiento
                  de marketing digital inaccesible para los emprendedores latinoamericanos
                  que más lo necesitan.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contacto" className="btn-primary text-white px-7 py-3.5 rounded-full font-bold text-sm cursor-pointer inline-flex items-center gap-2">
                    Trabajar con nosotros
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                  <a href="#equipo" className="btn-outline text-white px-7 py-3.5 rounded-full font-semibold text-sm cursor-pointer inline-flex items-center gap-2">
                    Conocer el equipo
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                  </a>
                </div>
              </div>

              {/* Right: stats grid */}
              <div className="grid grid-cols-2 gap-4 fade-up delay-2">
                {stats.map((s) => (
                  <div key={s.label} className="glass-card rounded-2xl p-7 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">{s.value}</div>
                    <p className="text-gray-400 text-sm leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
        </section>

        {/* ── Our story ── */}
        <section className="py-24" aria-label="Nuestra historia">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: visual accent */}
              <div className="order-2 lg:order-1 fade-up">
                <div className="relative">
                  {/* Large card */}
                  <div className="glass-card rounded-3xl p-10 border-amber-400/20 bg-gradient-to-br from-amber-500/8 to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                      </div>
                      <span className="font-bold text-white text-lg">El Otro Romulo</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      &ldquo;Empecé con cero clientes, cero presupuesto y una computadora vieja. Lo que nunca me faltó fue la certeza de que si yo podía aprender a generar resultados en digital, podía enseñarle a otros a hacerlo también.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">RR</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Rómulo Rodriguez</p>
                        <p className="text-xs text-gray-500">Fundador, El Otro Romulo</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-4 glass-card rounded-2xl px-5 py-4 border-amber-400/30 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-green-400/15 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">200+ clientes</p>
                        <p className="text-gray-500 text-xs">en toda LATAM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: text */}
              <div className="order-1 lg:order-2 fade-up delay-2">
                <p className="section-label mb-3">Nuestra historia</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Nacimos de la Necesidad<br />
                  <span className="gradient-text">de Hacer las Cosas Bien</span>
                </h2>

                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <p>
                    El Otro Romulo nació en Colombia con una misión simple pero poderosa: democratizar el acceso a estrategias de marketing digital de alto nivel para emprendedores y negocios latinoamericanos.
                  </p>
                  <p>
                    Vimos demasiados negocios con gran potencial fracasar no por falta de esfuerzo, sino por falta de dirección. Empresarios trabajando 14 horas al día sin ver resultados, invirtiendo en publicidad sin saber si estaba funcionando, construyendo sitios web que nadie visitaba.
                  </p>
                  <p>
                    Decidimos cambiar eso. No con promesas de resultados mágicos ni con fórmulas genéricas copiadas de gurús extranjeros. Con trabajo real, estrategia probada y un equipo que se involucra en el éxito de cada cliente como si fuera el propio.
                  </p>
                  <p className="text-gray-300 font-medium">
                    Hoy, El Otro Romulo es el resultado de cientos de proyectos ejecutados, cientos de horas de asesoría y una sola obsesión: que nuestros clientes crezcan de verdad.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-24" aria-label="Nuestros valores">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-label mb-3">Lo que nos define</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Nuestros <span className="gradient-text">Valores</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
                No son palabras en una pared de oficina. Son los principios que guían cada decisión que tomamos, cada proyecto que entregamos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <div key={v.title} className={`glass-card rounded-2xl p-7 fade-up delay-${(i % 5) + 1}`}>
                  <div className="icon-wrap w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-amber-400">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2.5">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services quick view ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-20" aria-label="Qué hacemos">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">Qué hacemos</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Todo lo que Necesitas para <span className="gradient-text">Crecer en Digital</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 fade-up delay-1">
              {services.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 text-center cursor-pointer hover:border-amber-400/30 transition-all group"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{s.label}</span>
                  <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-400 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section id="equipo" className="py-24" aria-label="Nuestro equipo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16 fade-up">
              <p className="section-label mb-3">El equipo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Las Personas Detrás de <span className="gradient-text">los Resultados</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
                No hay fachada corporativa aquí. Somos dos personas con nombres y apellidos que se responsabilizan
                personalmente de cada proyecto que aceptamos.
              </p>
            </div>

            <div className="space-y-10">
              {staff.map((person, idx) => (
                <article
                  key={person.id}
                  className={`glass-card rounded-3xl overflow-hidden border ${person.accentColor} fade-up delay-${idx + 1}`}
                >
                  {/* Color bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${person.avatarGradient}`} />

                  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0`}>

                    {/* Left panel: identity */}
                    <div className={`p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-b ${person.accentBg}`}>
                      {/* Avatar */}
                      <div className="flex flex-col items-center text-center mb-8">
                        <div
                          className="w-28 h-28 rounded-3xl overflow-hidden mb-5 shadow-2xl flex-shrink-0"
                          style={{ boxShadow: person.glowColor }}
                        >
                          <Image
                            src={person.image}
                            alt={person.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>

                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border mb-3 ${person.tagColor}`}>
                          {person.badge}
                        </span>

                        <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                        <p className={`text-sm font-semibold mb-1 ${idx === 0 ? 'text-amber-400' : 'text-blue-400'}`}>{person.role}</p>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                          {person.location}
                        </div>
                      </div>

                      {/* Expertise */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 text-center">Especialidades</p>
                        <div className="space-y-2">
                          {person.expertise.map((e) => (
                            <div key={e} className="flex items-center gap-2">
                              <svg className={`w-3.5 h-3.5 flex-shrink-0 ${person.checkColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                              <span className="text-sm text-gray-300">{e}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2 mt-7">
                        {person.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={`flex-1 py-2.5 rounded-full text-xs font-semibold text-center cursor-pointer transition-all ${
                              idx === 0
                                ? 'bg-amber-400/10 border border-amber-400/25 text-amber-300 hover:bg-amber-400/20'
                                : 'bg-blue-400/10 border border-blue-400/25 text-blue-300 hover:bg-blue-400/20'
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right panel: story */}
                    <div className="lg:col-span-2 p-8 sm:p-10 flex flex-col justify-center">
                      <p className="section-label mb-4">Historia</p>
                      <div className="space-y-4">
                        {person.story.map((para, i) => (
                          <p
                            key={i}
                            className={`text-sm leading-relaxed ${i === person.story.length - 1 ? 'text-gray-300' : 'text-gray-400'}`}
                          >
                            {i === 0 ? (
                              <>
                                <span className="float-left text-6xl font-bold leading-none mr-3 mt-1 gradient-text">
                                  {para[0]}
                                </span>
                                {para.slice(1)}
                              </>
                            ) : para}
                          </p>
                        ))}
                      </div>

                      {/* Quote highlight */}
                      <div className={`mt-8 pl-5 border-l-2 ${idx === 0 ? 'border-amber-400/40' : 'border-blue-400/40'}`}>
                        <p className="text-gray-300 text-sm italic leading-relaxed">
                          {idx === 0
                            ? '"El marketing digital no es una caja negra. Es un sistema. Y como todo sistema, se puede aprender, mejorar y escalar."'
                            : '"Un buen sistema digital no se nota cuando funciona bien. Se nota cuando falta."'}
                        </p>
                        <p className="text-xs text-gray-600 mt-2">— {person.name}</p>
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="cta-section rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden fade-up">
              <div className="orb" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(217,119,6,0.14),transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

              <div className="relative z-10">
                {/* Stacked avatars */}
                <div className="flex items-center justify-center mb-6">
                  {staff.map((m, i) => (
                    <div
                      key={m.id}
                      className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0A0B14] shadow-lg"
                      style={{ marginLeft: i === 0 ? 0 : '-1rem' }}
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>

                <p className="section-label mb-4">¿Listo para empezar?</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
                  Trabajemos Juntos en<br />
                  <span className="gradient-text">tu Próximo Gran Paso</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
                  Cuéntanos sobre tu negocio y tus objetivos. Encontramos la forma más rápida de ayudarte a crecer.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacto"
                    className="btn-primary text-white px-10 py-4 rounded-full font-bold text-base cursor-pointer inline-flex items-center justify-center gap-2.5"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Contactar ahora
                  </Link>
                  <Link
                    href="/asesoria-personalizada"
                    className="btn-outline text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Ver asesorías 1:1
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
