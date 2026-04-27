import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationObserver from '@/components/AnimationObserver'

/* ── SEO ── */
export const metadata: Metadata = {
  title: 'Diseño Web Profesional en WordPress y Next.js | Romulo Agency',
  description:
    'Creamos sitios web profesionales en WordPress o Next.js / React. Rápidos, responsivos y optimizados para SEO. Elige la tecnología que más se adapta a tu negocio y tu presupuesto.',
  keywords: [
    'diseño web profesional',
    'diseño web wordpress',
    'diseño web next.js',
    'desarrollo web react colombia',
    'agencia diseño web',
    'crear sitio web profesional',
    'diseño web para negocios',
    'desarrollo web a medida',
    'sitio web rapido seo',
    'diseño web colombia latinoamerica',
  ],
  openGraph: {
    title: 'Diseño Web en WordPress o Next.js — Romulo Agency',
    description:
      'Sitios web rápidos, responsivos y orientados a resultados. Desarrollamos en WordPress o Next.js según lo que tu negocio necesita.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Romulo Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Profesional — Romulo Agency',
    description: 'Sitios web en WordPress o Next.js. Rápidos, responsivos, SEO. Cotización en 24h.',
  },
  alternates: { canonical: '/servicios/diseno-web' },
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
        { '@type': 'ListItem', position: 3, name: 'Diseño Web', item: 'https://romulo.agency/servicios/diseno-web' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Diseño Web Profesional en WordPress y Next.js',
      description:
        'Desarrollamos sitios web profesionales en WordPress o Next.js / React según las necesidades del cliente. Entrega rápida, código limpio, optimizado para SEO y velocidad.',
      provider: { '@type': 'Organization', name: 'Romulo Agency', url: 'https://romulo.agency' },
      areaServed: { '@type': 'Place', name: 'Latinoamérica' },
      serviceType: 'Diseño y Desarrollo Web',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Diseño Web',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Diseño Web en WordPress',
            description: 'Sitio web profesional con WordPress. CMS intuitivo, fácil de gestionar, con SEO, plugins y diseño a medida.',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Diseño Web en Next.js / React',
            description: 'Sitio web de alto rendimiento con Next.js y React. Ultrarrápido, código a medida, máximo control sobre diseño y rendimiento.',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre WordPress y Next.js?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WordPress es un CMS (sistema de gestión de contenido) ideal para sitios que necesitan actualización frecuente de contenido sin tocar código. Next.js / React es un framework de desarrollo a medida que ofrece mayor rendimiento, flexibilidad y velocidad, ideal para negocios que priorizan conversión y rendimiento técnico.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tarda en entregarse un sitio web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un sitio en WordPress se entrega en 7 a 14 días hábiles. Un sitio en Next.js / React tarda entre 10 y 21 días según la complejidad del proyecto.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuál es mejor para SEO, WordPress o Next.js?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ambas son excelentes para SEO cuando están bien configuradas. WordPress con Yoast SEO ofrece herramientas visuales fáciles de usar. Next.js tiene ventaja en velocidad de carga (Core Web Vitals), que es un factor de ranking importante en Google.',
          },
        },
      ],
    },
  ],
}

/* ── Data ── */

const techOptions = [
  {
    id: 'wordpress',
    name: 'WordPress',
    badge: 'Más popular',
    badgeColor: 'text-blue-300 bg-blue-400/10 border-blue-400/20',
    accentColor: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'border-blue-400/20 hover:border-blue-400/40',
    dotColor: 'bg-blue-400',
    tagline: 'La potencia de un CMS completo',
    description:
      'Construido sobre el CMS más utilizado del mundo. Ideal para negocios que quieren gestionar su propio contenido sin depender de un programador cada vez que necesiten actualizar la página.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.359 12c0-1.092.222-2.132.616-3.082L7.59 19.661A8.647 8.647 0 013.36 12zm8.641 8.641a8.648 8.648 0 01-2.348-.327l2.492-7.239 2.552 6.988c.016.042.037.08.057.118a8.654 8.654 0 01-2.753.46zm1.199-11.932c.522-.027.992-.082.992-.082.468-.055.413-.742-.055-.715 0 0-1.402.11-2.307.11-.85 0-2.28-.11-2.28-.11-.467-.027-.523.687-.055.715 0 0 .442.055.908.082l1.348 3.694-1.894 5.682-3.149-8.63c-.52.82-.028 0-.028 0-.522.027.55.992.082.742-.055-.742-.055 0 0-1.402.11-2.307.11-.85 0-2.28-.11-2.28-.11-.467-.027-.523.687-.055.715 0 0 .442.055.908.082l2.735 8.139 1.602 4.348-3.094-.014 4.31 4.31a8.62 8.62 0 003.367-8.55l-.028-.162zM15.9 19.13l2.541-7.342c.474-1.185.632-2.132.632-2.979 0-.306-.02-.59-.057-.858a8.641 8.641 0 01-3.116 11.18z"/>
      </svg>
    ),
    features: [
      'CMS intuitivo: edita contenido sin tocar código',
      'Más de 60.000 plugins disponibles',
      'SEO con Yoast o Rank Math incluido',
      'WooCommerce para tienda en línea',
      'Diseño 100% personalizado (no plantilla genérica)',
      'Panel de administración fácil de usar',
      'Actualizaciones y mantenimiento simplificados',
      'Blog y gestión de entradas incluido',
    ],
    idealFor: ['Empresas con contenido frecuente', 'Tiendas en línea', 'Blogs corporativos', 'Portfolios con CMS', 'Negocios con bajo presupuesto técnico'],
    delivery: '7–14 días',
    cta: 'Quiero mi sitio en WordPress',
  },
  {
    id: 'nextjs',
    name: 'Next.js / React',
    badge: 'Máximo rendimiento',
    badgeColor: 'text-amber-300 bg-amber-400/10 border-amber-400/20',
    accentColor: 'from-amber-500/20 to-amber-600/5',
    borderColor: 'border-amber-400/20 hover:border-amber-400/40',
    dotColor: 'bg-amber-400',
    tagline: 'La misma tecnología de esta página',
    description:
      'Desarrollo completamente a medida con Next.js y React — el mismo stack con el que construimos este sitio. Sin límites de diseño, sin plantillas, sin plugins que ralentizan. Solo código limpio y rendimiento puro.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/>
      </svg>
    ),
    features: [
      'Código 100% a medida, sin plantillas ni plugins',
      'Velocidad extrema: 95+ en PageSpeed Insights',
      'SEO técnico avanzado (SSR / SSG)',
      'Animaciones y transiciones fluidas',
      'Diseño pixel-perfect sin restricciones',
      'TypeScript + código limpio y escalable',
      'Integración con cualquier API o servicio',
      'Sin límites: si se puede diseñar, se puede construir',
    ],
    idealFor: ['Agencias y profesionales digitales', 'Cursos y productos digitales', 'Sitios corporativos de alto impacto', 'Portfolios premium', 'Proyectos que priorizan rendimiento'],
    delivery: '10–21 días',
    cta: 'Quiero mi sitio en Next.js',
  },
]

const sharedIncludes = [
  'Diseño visual personalizado (no plantillas genéricas)',
  'Diseño mobile-first y 100% responsive',
  'Optimización para velocidad (Core Web Vitals)',
  'SEO on-page: títulos, metas, schema markup',
  'Formulario de contacto o WhatsApp integrado',
  'Google Analytics o GTM configurado',
  'Dominio propio conectado',
  'Certificado SSL incluido',
  'Revisión completa antes de publicar',
  '1 ronda de cambios incluida',
  'Capacitación básica para gestionar el sitio',
  'Soporte post-entrega de 7 días',
]

const process = [
  {
    step: '01',
    title: 'Brief & Propuesta',
    desc: 'Conversamos sobre tu negocio, objetivos y audiencia. Definimos la estructura, tecnología y alcance del proyecto.',
    duration: '1–2 días',
  },
  {
    step: '02',
    title: 'Diseño & Maqueta',
    desc: 'Creamos el diseño visual completo en alta fidelidad. Tú apruebas cómo se verá antes de escribir una sola línea de código.',
    duration: '2–4 días',
  },
  {
    step: '03',
    title: 'Desarrollo',
    desc: 'Construimos el sitio con la tecnología elegida. Código limpio, semántico y optimizado para SEO y velocidad.',
    duration: '4–10 días',
  },
  {
    step: '04',
    title: 'Entrega & Publicación',
    desc: 'Revisión contigo, ronda de cambios, configuración del dominio y publicación. Te entregamos el sitio listo para operar.',
    duration: '1–2 días',
  },
]

const comparison = [
  { feature: 'Gestión de contenido sin código',      wordpress: true,  nextjs: false },
  { feature: 'Velocidad de carga (PageSpeed 95+)',   wordpress: false, nextjs: true  },
  { feature: 'Diseño sin límites ni plantillas',     wordpress: false, nextjs: true  },
  { feature: 'Tienda en línea (WooCommerce)',        wordpress: true,  nextjs: false },
  { feature: 'Blog y gestión de entradas',           wordpress: true,  nextjs: false },
  { feature: 'Animaciones y efectos avanzados',      wordpress: false, nextjs: true  },
  { feature: 'Actualizaciones propias sin técnico',  wordpress: true,  nextjs: false },
  { feature: 'SEO técnico avanzado (SSR/SSG)',       wordpress: false, nextjs: true  },
  { feature: 'Plugins y extensiones del mercado',    wordpress: true,  nextjs: false },
  { feature: 'Código escalable a largo plazo',       wordpress: false, nextjs: true  },
]

const faq = [
  {
    q: '¿Qué diferencia hay entre WordPress y Next.js?',
    a: 'WordPress es un CMS (gestor de contenidos) ideal si quieres actualizar tu sitio sin tocar código — publicar artículos, cambiar precios, subir imágenes. Next.js / React es desarrollo a medida: más rápido, más flexible, sin las limitaciones de un CMS. La misma tecnología que usamos en esta página.',
  },
  {
    q: '¿Cuál es mejor para SEO?',
    a: 'Ambas son excelentes bien configuradas. WordPress con Yoast/Rank Math es muy accesible. Next.js tiene ventaja en Core Web Vitals (velocidad de carga), que Google pondera directamente en el ranking. Para sitios que compiten en búsquedas competitivas, Next.js suele rendir mejor.',
  },
  {
    q: '¿Cuánto cuesta un sitio web?',
    a: 'El precio depende del alcance: número de páginas, funcionalidades y tecnología elegida. Escríbenos por WhatsApp y te damos una cotización exacta en menos de 24 horas, sin compromiso.',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'WordPress: 7 a 14 días hábiles. Next.js / React: 10 a 21 días según complejidad. Tienes visibilidad completa del avance durante todo el proceso.',
  },
  {
    q: '¿Puedo gestionar el contenido del sitio yo mismo?',
    a: 'En WordPress sí, de manera muy sencilla desde el panel de administración. En Next.js, el contenido está en el código — ideal para sitios que no cambian frecuentemente. Si necesitas Next.js con CMS, podemos integrarlo con Sanity, Contentful u otro headless CMS.',
  },
  {
    q: '¿El sitio funciona en móvil?',
    a: 'Sí. Todos nuestros sitios son mobile-first: diseñados primero para celular y luego adaptados a desktop. El 60–70% del tráfico web hoy llega desde móvil.',
  },
  {
    q: '¿Incluye hosting y dominio?',
    a: 'El servicio de diseño y desarrollo no incluye el costo de hosting ni dominio (son servicios de terceros que pagas directamente). Sí te ayudamos a configurarlos y conectarlos al sitio sin costo adicional.',
  },
]

/* ── Page ── */
export default function DisenoWebService() {
  return (
    <>
      <Script id="ld-dw" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnimationObserver />
      <Navbar />

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-12 grid-bg overflow-hidden">
          <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(217,119,6,0.3),transparent)', top: -200, right: -150 }} />
          <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(59,130,246,0.15),transparent)', top: 0, left: -100 }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">Inicio</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <Link href="/servicios" className="hover:text-amber-400 transition-colors">Servicios</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-amber-400/80">Diseño Web</span>
            </nav>

            <div className="inline-flex items-center gap-2 badge rounded-full px-3 py-1.5 mb-5 hero-badge">
              <span className="dot-live w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-xs font-medium">WordPress · Next.js / React · Entrega garantizada</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-5 text-white max-w-3xl">
              Sitios Web que<br />
              <span className="gradient-text">Generan Resultados</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
              Diseñamos y desarrollamos en <strong className="text-white">WordPress</strong> o <strong className="text-white">Next.js / React</strong>.
              Tú eliges la tecnología según tus necesidades. Nosotros nos encargamos del resto.
            </p>

            {/* Two tech pills */}
            <div className="flex flex-wrap gap-3">
              <a href="#wordpress" className="flex items-center gap-2 glass-card rounded-full px-5 py-2.5 text-sm font-semibold text-blue-300 border-blue-400/25 hover:border-blue-400/50 transition-all cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.359 12c0-1.092.222-2.132.616-3.082L7.59 19.661A8.647 8.647 0 013.36 12zm8.641 8.641a8.648 8.648 0 01-2.348-.327l2.492-7.239 2.552 6.988c.016.042.037.08.057.118a8.654 8.654 0 01-2.753.46zm1.199-11.932c.522-.027.992-.082.992-.082.468-.055.413-.742-.055-.715 0 0-1.402.11-2.307.11-.85 0-2.28-.11-2.28-.11-.467-.027-.523.687-.055.715 0 0 .442.055.908.082l1.348 3.694-1.894 5.682-3.149-8.63c.55.82.028 0 .028 0-.522.027.55.992.082.742-.055-.742-.055 0 0-1.402.11-2.307.11-.85 0-2.28-.11-2.28-.11-.467-.027-.523.687-.055.715 0 0 .442.055.908.082l2.735 8.139 1.602 4.348-3.094-.014 4.31 4.31a8.62 8.62 0 003.367-8.55l-.028-.162zM15.9 19.13l2.541-7.342c.474-1.185.632-2.132.632-2.979 0-.306-.02-.59-.057-.858a8.641 8.641 0 01-3.116 11.18z"/></svg>
                WordPress
              </a>
              <a href="#nextjs" className="flex items-center gap-2 glass-card rounded-full px-5 py-2.5 text-sm font-semibold text-amber-300 border-amber-400/25 hover:border-amber-400/50 transition-all cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/></svg>
                Next.js / React
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
        </section>

        {/* ── Two service type cards ── */}
        <section className="py-20" aria-label="Opciones de tecnología">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14 fade-up">
              <p className="section-label mb-3">Dos caminos, un mismo resultado</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Elige la Tecnología que <span className="gradient-text">Más Te Conviene</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
                No hay una opción "mejor". Hay la opción correcta para tu negocio.
                Comparamos las dos para que puedas decidir con claridad.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {techOptions.map((tech, idx) => (
                <div
                  id={tech.id}
                  key={tech.id}
                  className={`glass-card rounded-3xl p-8 border ${tech.borderColor} bg-gradient-to-br ${tech.accentColor} fade-up delay-${idx + 1} transition-all`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white`}
                           style={{ background: tech.id === 'wordpress' ? 'rgba(59,130,246,0.15)' : 'rgba(217,119,6,0.15)' }}>
                        <span className={tech.id === 'wordpress' ? 'text-blue-400' : 'text-amber-400'}>
                          {tech.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{tech.tagline}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${tech.badgeColor} flex-shrink-0`}>
                      {tech.badge}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-7">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-7">
                    {tech.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tech.id === 'wordpress' ? 'text-blue-400' : 'text-amber-400'}`}
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span className="text-sm text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Ideal for */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Ideal para</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.idealFor.map((tag) => (
                        <span key={tag}
                              className={`text-xs px-2.5 py-1 rounded-full border ${tech.id === 'wordpress' ? 'text-blue-300 border-blue-400/20 bg-blue-400/5' : 'text-amber-300 border-amber-400/20 bg-amber-400/5'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer: delivery + CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <div>
                      <p className="text-xs text-gray-500">Entrega estimada</p>
                      <p className={`font-bold text-lg ${tech.id === 'wordpress' ? 'text-blue-400' : 'text-amber-400'}`}>{tech.delivery}</p>
                    </div>
                    <a
                      href="https://wa.me/573000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all ${
                        tech.id === 'wordpress'
                          ? 'bg-blue-500/20 border border-blue-400/30 text-blue-300 hover:bg-blue-500/30 hover:border-blue-400/50'
                          : 'btn-primary text-white'
                      }`}
                    >
                      {tech.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-20" aria-label="Comparación de tecnologías">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">¿Cuál elegir?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                WordPress vs <span className="gradient-text">Next.js / React</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm leading-relaxed">
                Una comparación directa para que elijas sin dudas.
              </p>
            </div>

            <div className="glass-card rounded-3xl overflow-hidden fade-up delay-1">
              {/* Table header */}
              <div className="grid grid-cols-3 px-6 py-4 border-b border-white/5"
                   style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Característica</div>
                <div className="text-center">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">WordPress</span>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Next.js</span>
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors"
                  style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
                >
                  <span className="text-sm text-gray-300 pr-4">{row.feature}</span>
                  <div className="flex justify-center">
                    {row.wordpress ? (
                      <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.nextjs ? (
                      <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Helper tip */}
            <div className="mt-6 glass-card rounded-2xl p-5 flex gap-4 fade-up delay-2">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">¿Todavía no estás seguro cuál elegir?</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  No hay problema. Cuéntanos sobre tu proyecto por WhatsApp y te recomendamos la mejor opción para tu caso específico, gratis y sin compromiso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Shared includes ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-20" aria-label="Qué incluye el servicio">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">Sin sorpresas</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Todo lo que Incluye tu <span className="gradient-text">Sitio Web</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm leading-relaxed">
                Aplica a ambas tecnologías. Un solo precio, todo incluido. Sin cobros ocultos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sharedIncludes.map((item, i) => (
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
        <section className="py-20" aria-label="Proceso de trabajo">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-label mb-3">Proceso de trabajo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                De la Idea al Sitio <span className="gradient-text">Publicado</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm leading-relaxed">
                Proceso claro en 4 etapas. Tú apruebas cada paso antes de avanzar.
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

        {/* ── Stats bar ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-14" aria-label="Resultados">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 fade-up">
              {[
                { value: '95+', label: 'Score en PageSpeed Insights', icon: '⚡' },
                { value: '100%', label: 'Diseños mobile-first responsivos', icon: '📱' },
                { value: '< 2s', label: 'Velocidad de carga promedio', icon: '🚀' },
                { value: '1 ronda', label: 'De cambios incluida siempre', icon: '✅' },
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
        <section className="py-20" aria-labelledby="faq-dw">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-up">
              <p className="section-label mb-3">FAQ</p>
              <h2 id="faq-dw" className="text-3xl sm:text-4xl font-bold text-white">
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
              <div className="orb" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(217,119,6,0.15),transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

              <div className="relative z-10">
                <p className="section-label mb-4">Tu próximo sitio web</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
                  Cotización Gratis en<br />
                  <span className="gradient-text">Menos de 24 Horas</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
                  Cuéntanos tu proyecto por WhatsApp. Te decimos qué tecnología recomendamos,
                  cuánto cuesta y cuándo está listo. Sin formularios. Sin esperas.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm">
                  {['Diseño personalizado', 'SEO incluido', 'Mobile-first', 'Sin costos ocultos'].map((t) => (
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
