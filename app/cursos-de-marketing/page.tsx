import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationObserver from '@/components/AnimationObserver'

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: 'Cursos de Marketing Digital | Romulo Agency',
  description:
    'Domina el marketing digital con cursos especializados: Meta Ads, edición viral con IA, escalamiento de campañas y venta de infoproductos. Cursos online desde $12 USD con resultados garantizados.',
  keywords: [
    'cursos marketing digital',
    'curso meta ads facebook',
    'edición de videos con inteligencia artificial',
    'escalar campañas publicidad',
    'vender infoproductos online',
    'curso marketing digital online',
    'publicidad facebook instagram',
    'curso infoproductos',
  ],
  openGraph: {
    title: 'Cursos de Marketing Digital | Romulo Agency',
    description:
      'Aprende Meta Ads, edición viral con IA, escalamiento PRO y venta de infoproductos. Cursos desde $12 USD con metodologías probadas.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Romulo Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursos de Marketing Digital | Romulo Agency',
    description: 'Meta Ads, edición viral con IA, escalamiento PRO y Método Cashin. Cursos desde $12 USD.',
  },
  alternates: { canonical: '/cursos-de-marketing' },
  robots: { index: true, follow: true },
}

/* ── Course data ── */
const courses = [
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    category: 'PUBLICIDAD DIGITAL',
    title: 'El Mejor Curso de Meta ADS',
    subtitle: 'Facebook & Instagram Ads desde cero',
    description:
      'Domina la publicidad en Meta y crea campañas que generan leads y ventas reales desde el primer día. El punto de partida ideal para cualquier marketer.',
    features: [
      'Configuración completa de Business Manager',
      'Segmentación de audiencias avanzada',
      'Creación de anuncios que convierten',
      'Análisis de métricas y optimización de campaña',
    ],
    price: 12,
    tag: null,
    accent: 'amber',
    icon: (
      <svg className="w-8 h-8 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    id: 'edicion-viral',
    slug: 'edicion-viral',
    category: 'EDICIÓN CON IA',
    title: 'Método Edición Viral',
    subtitle: 'Edición de videos con Inteligencia Artificial',
    description:
      'Aprende a crear contenido viral usando las herramientas de IA más potentes del mercado. Edita rápido, impacta fuerte y domina TikTok, Reels e YouTube.',
    features: [
      'Las mejores herramientas de IA para video',
      'Técnicas de storytelling y gancho visual',
      'Edición profesional en minutos',
      'Estrategias de viralidad por plataforma',
    ],
    price: 12,
    tag: null,
    accent: 'yellow',
    icon: (
      <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    id: 'escalamiento-pro',
    slug: 'escalamiento-pro',
    category: 'CAMPAÑAS AVANZADAS',
    title: 'Método Escalamiento PRO',
    subtitle: 'Multiplica tu ROAS sin perder rentabilidad',
    description:
      'Técnicas avanzadas para escalar campañas publicitarias de $1,000 a $100,000 mensuales. Aprende a crecer sin que el costo por resultado se dispare.',
    features: [
      'Escalamiento horizontal y vertical',
      'Control de CPA y ROAS en escala',
      'Estructura de campañas profesional',
      'Gestión de presupuestos de alto volumen',
    ],
    price: 97,
    tag: 'POPULAR',
    accent: 'orange',
    icon: (
      <svg className="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: 'cashin',
    slug: 'cashin',
    category: 'CURSO PREMIUM',
    title: 'Método Cashin',
    subtitle: 'El sistema completo para vender infoproductos',
    description:
      'Nuestro curso más completo. Desde crear tu primer infoproducto hasta escalar a 6 cifras con embudos automatizados, tráfico pagado y sistema de afiliados.',
    features: [
      'Creación y lanzamiento de infoproductos',
      'Embudos de venta 100% automatizados',
      'Tráfico pagado y orgánico combinado',
      'Sistema de upsells y afiliados',
      'Comunidad privada + soporte directo',
    ],
    price: 500,
    tag: 'MÁS COMPLETO',
    accent: 'gold',
    icon: (
      <svg className="w-8 h-8 text-amber-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
] as const

/* ── JSON-LD structured data ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://romulo.agency' },
        { '@type': 'ListItem', position: 2, name: 'Cursos de Marketing Digital', item: 'https://romulo.agency/cursos-de-marketing' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Cursos de Marketing Digital — Romulo Agency',
      description: 'Cursos especializados en marketing digital: Meta Ads, edición viral, escalamiento y venta de infoproductos.',
      itemListElement: courses.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Course',
          name: c.title,
          description: c.description,
          provider: { '@type': 'Organization', name: 'Romulo Agency', url: 'https://romulo.agency' },
          offers: {
            '@type': 'Offer',
            price: c.price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `https://romulo.agency/cursos-de-marketing/${c.slug}`,
          },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'PT10H',
          },
        },
      })),
    },
  ],
}

const faq = [
  {
    q: '¿Los cursos tienen acceso de por vida?',
    a: 'Sí. Al adquirir cualquier curso obtienes acceso de por vida al contenido y todas sus actualizaciones futuras sin costo adicional.',
  },
  {
    q: '¿Necesito experiencia previa en marketing?',
    a: 'No es necesario. Los cursos de $12 son ideales para principiantes. Los cursos avanzados (Escalamiento PRO y Cashin) son para quienes ya tienen bases.',
  },
  {
    q: '¿Qué incluye el Método Cashin?',
    a: 'Es nuestro programa más completo: creación de infoproducto, embudo de ventas, tráfico pagado y orgánico, sistema de afiliados, soporte directo y comunidad privada.',
  },
  {
    q: '¿Cuál es el mejor curso para empezar?',
    a: '"El Mejor Curso de Meta ADS" es el punto de partida ideal. Por solo $12 aprendes a crear campañas rentables en Facebook e Instagram desde cero.',
  },
  {
    q: '¿Tienen garantía de satisfacción?',
    a: 'Sí, ofrecemos garantía de 7 días. Si el curso no cumple tus expectativas, te devolvemos el 100% de tu inversión sin preguntas.',
  },
]

/* ── Tag badge styles ── */
function TagBadge({ tag, isPremium }: { tag: string; isPremium: boolean }) {
  if (isPremium) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/15 border border-amber-400/40 text-amber-300 uppercase tracking-widest">
        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        {tag}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-400/10 border border-orange-400/30 text-orange-300 uppercase tracking-widest">
      {tag}
    </span>
  )
}

/* ── Course Card ── */
function CourseCard({ course, index }: { course: typeof courses[number]; index: number }) {
  const isPremium = course.id === 'cashin'
  const delay = ['', 'delay-2', 'delay-3', 'delay-4'][index] ?? ''

  return (
    <article
      className={`glass-card rounded-2xl p-8 flex flex-col fade-up ${delay} ${
        isPremium ? 'border-amber-400/35 relative overflow-hidden' : ''
      }`}
      aria-label={course.title}
    >
      {/* Premium glow */}
      {isPremium && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(217,119,6,0.12), transparent 70%)' }} />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className="icon-wrap w-14 h-14 rounded-xl flex items-center justify-center">
            {course.icon}
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="section-label text-[0.6rem]">{course.category}</span>
            {course.tag && <TagBadge tag={course.tag} isPremium={isPremium} />}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-1">{course.title}</h2>
        <p className="text-sm text-amber-400/80 font-medium mb-4">{course.subtitle}</p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{course.description}</p>

        {/* Features */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {course.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {f}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className={`flex items-center justify-between pt-6 border-t ${isPremium ? 'border-amber-400/20' : 'border-white/5'}`}>
          <div>
            <span className="text-3xl font-bold gradient-text">${course.price}</span>
            <span className="text-gray-500 text-sm ml-1">USD</span>
          </div>
          <a
            href="/#contacto"
            className={`btn-primary text-white px-6 py-3 rounded-full font-semibold text-sm cursor-pointer inline-flex items-center gap-2 ${
              isPremium ? 'shadow-lg shadow-amber-500/20' : ''
            }`}
          >
            Inscribirme
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

/* ── Page ── */
export default function CursosDeMarketing() {
  return (
    <>
      <Script
        id="ld-courses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimationObserver />
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative pt-44 pb-20 grid-bg overflow-hidden">
          <div className="orb float-orb-a" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(217,119,6,0.4),transparent)', top: -200, right: -100 }} />
          <div className="orb float-orb-b" style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(245,158,11,0.3),transparent)', bottom: 0, left: -100 }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors cursor-pointer">Inicio</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-amber-400/80">Cursos de Marketing</span>
            </nav>

            <div className="inline-flex items-center gap-2 badge rounded-full px-4 py-2 mb-6 hero-badge">
              <span className="dot-live w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
              <span className="text-sm font-medium">4 Cursos Disponibles · 100% Online</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
              Cursos de Marketing<br />
              <span className="gradient-text">Digital que Generan</span><br />
              <span className="gradient-text">Resultados Reales</span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Desde Meta Ads hasta venta de infoproductos. Metodologías probadas
              con estudiantes que ya generan ingresos reales.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
              {[['500+', 'Estudiantes'], ['4', 'Cursos'], ['7d', 'Garantía']].map(([n, l]) => (
                <div key={l} className="stat-card rounded-2xl py-4 px-3 text-center">
                  <div className="text-xl font-bold gradient-text">{n}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
        </section>

        {/* ── Courses Grid ── */}
        <section className="py-20" aria-label="Lista de cursos de marketing digital">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">Elige tu camino</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Todos Nuestros <span className="gradient-text">Cursos</span>
              </h2>
            </div>

            {/* Entry courses: 2 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {courses.slice(0, 2).map((c, i) => (
                <CourseCard key={c.id} course={c} index={i} />
              ))}
            </div>

            {/* Advanced + Premium: 2 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {courses.slice(2).map((c, i) => (
                <CourseCard key={c.id} course={c} index={i + 2} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Value comparison bar ── */}
        <div className="glow-divider mx-6 sm:mx-12 my-4" />

        <section className="py-16" aria-label="Comparación de cursos">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fade-up text-center mb-10">
              <p className="section-label mb-3">Compara y elige</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                El Curso Correcto Para Tu <span className="gradient-text">Nivel</span>
              </h2>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden fade-up delay-2">
              <div className="grid grid-cols-5 bg-white/5 px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <span className="col-span-2">Curso</span>
                <span className="text-center">Nivel</span>
                <span className="text-center">Precio</span>
                <span className="text-center">Para quién</span>
              </div>
              {[
                { title: 'Meta ADS', level: 'Básico', price: '$12', who: 'Principiantes' },
                { title: 'Edición Viral', level: 'Básico', price: '$12', who: 'Creadores' },
                { title: 'Escalamiento PRO', level: 'Avanzado', price: '$97', who: 'Marketers' },
                { title: 'Método Cashin', level: 'Completo', price: '$500', who: 'Emprendedores' },
              ].map((row, i) => (
                <div
                  key={row.title}
                  className={`grid grid-cols-5 px-6 py-4 items-center text-sm border-t border-white/5 ${i === 3 ? 'bg-amber-400/5' : ''}`}
                >
                  <span className={`col-span-2 font-semibold ${i === 3 ? 'text-amber-300' : 'text-white'}`}>{row.title}</span>
                  <span className="text-center text-gray-400">{row.level}</span>
                  <span className={`text-center font-bold ${i === 3 ? 'gradient-text' : 'text-white'}`}>{row.price}</span>
                  <span className="text-center text-gray-400">{row.who}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">FAQ</p>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white">
                Preguntas <span className="gradient-text">Frecuentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faq.map((item, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-2xl p-6 fade-up delay-${i + 1}`}
                >
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
                <p className="section-label mb-4">¿Tienes dudas?</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Te Ayudamos a Elegir el<br />
                  <span className="gradient-text">Curso Correcto</span>
                </h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                  Habla con nuestro equipo y te diremos exactamente qué curso se adapta a tu nivel y objetivos.
                </p>
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer inline-flex items-center gap-2.5"
                >
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
