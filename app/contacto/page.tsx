import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationObserver from '@/components/AnimationObserver'
import ContactForm from '@/components/ContactForm'

/* ── SEO ── */
export const metadata: Metadata = {
  title: 'Contacto | Romulo Agency — Marketing Digital',
  description:
    'Contáctanos para solicitar una cotización o agendar tu asesoría de marketing digital. Diseño web, landing pages, GoHighLevel y cursos. Respondemos en menos de 24 horas.',
  keywords: [
    'contacto romulo agency',
    'cotización marketing digital',
    'agendar asesoría marketing',
    'agencia marketing digital colombia',
    'contratar diseño web',
    'solicitar landing page',
  ],
  openGraph: {
    title: 'Contacto — Romulo Agency',
    description: 'Escríbenos para cotizaciones, asesorías o cualquier consulta. Respondemos en menos de 24 horas.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Romulo Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto — Romulo Agency',
    description: 'Cotizaciones y asesorías de marketing digital. Respuesta en &lt;24h.',
  },
  alternates: { canonical: '/contacto' },
  robots: { index: true, follow: true },
}

/* ── JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto — Romulo Agency',
  description: 'Página de contacto de Romulo Agency. Cotizaciones y asesorías de marketing digital.',
  url: 'https://romulo.agency/contacto',
  mainEntity: {
    '@type': 'Organization',
    name: 'Romulo Agency',
    url: 'https://romulo.agency',
    email: 'contacto@romulo.agency',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: 'Spanish',
        areaServed: 'Latinoamérica',
      },
    ],
  },
}

/* ── Contact methods ── */
const contactMethods = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+57 300 000 0000',
    description: 'Canal principal. Respuesta garantizada en menos de 24 horas hábiles.',
    badge: 'Más rápido',
    badgeColor: 'text-green-300 bg-green-400/10 border-green-400/20',
    href: 'https://wa.me/573000000000',
    external: true,
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    iconBg: 'bg-green-400/10 text-green-400',
    ctaLabel: 'Abrir WhatsApp',
    ctaStyle: 'bg-green-500/15 border border-green-400/25 text-green-300 hover:bg-green-500/25 hover:border-green-400/40',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'contacto@romulo.agency',
    description: 'Para propuestas formales, proyectos grandes o colaboraciones.',
    badge: 'Formal',
    badgeColor: 'text-blue-300 bg-blue-400/10 border-blue-400/20',
    href: 'mailto:contacto@romulo.agency',
    external: false,
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    iconBg: 'bg-blue-400/10 text-blue-400',
    ctaLabel: 'Enviar email',
    ctaStyle: 'bg-blue-500/15 border border-blue-400/25 text-blue-300 hover:bg-blue-500/25 hover:border-blue-400/40',
  },
]

const quickLinks = [
  { label: 'Asesoría Personalizada', href: '/asesoria-personalizada', desc: 'Sesiones 1:1 con nuestros mentores' },
  { label: 'Landing Pages', href: '/servicios/landing-pages', desc: 'Páginas de alta conversión' },
  { label: 'Diseño Web', href: '/servicios/diseno-web', desc: 'WordPress o Next.js / React' },
  { label: 'Cursos de Marketing', href: '/cursos-de-marketing', desc: 'Aprende a tu ritmo' },
]

const hours = [
  { day: 'Lunes — Viernes', time: '9:00 am – 6:00 pm' },
  { day: 'Sábado', time: '10:00 am – 2:00 pm' },
  { day: 'Domingo', time: 'Cerrado' },
]

/* ── Page ── */
export default function Contacto() {
  return (
    <>
      <Script id="ld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnimationObserver />
      <Navbar />

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-12 grid-bg overflow-hidden">
          <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(217,119,6,0.25),transparent)', top: -200, right: -100 }} />
          <div className="orb" style={{ width: 350, height: 350, background: 'radial-gradient(circle,rgba(16,185,129,0.12),transparent)', bottom: -50, left: -80 }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">Inicio</Link>
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              <span className="text-amber-400/80">Contacto</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge rounded-full px-3 py-1.5 mb-5 hero-badge">
                <span className="dot-live w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs font-medium">Respondemos en menos de 24 horas</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5 text-white">
                Hablemos sobre<br />
                <span className="gradient-text">tu Proyecto</span>
              </h1>

              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Sin formularios complicados. Sin esperas largas. Escríbenos directamente
                y te respondemos con lo que necesitas saber.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A0B14] to-transparent pointer-events-none" />
        </section>

        {/* ── Main content ── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

              {/* LEFT: Info column */}
              <div className="lg:col-span-2 space-y-6 fade-up">

                {/* Contact methods */}
                {contactMethods.map((method) => (
                  <a
                    key={method.id}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="glass-card rounded-2xl p-6 flex gap-4 cursor-pointer transition-all hover:border-white/20 block"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${method.iconBg}`}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{method.label}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${method.badgeColor}`}>{method.badge}</span>
                      </div>
                      <p className="font-semibold text-white text-sm mb-1">{method.value}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{method.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                ))}

                {/* Hours */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl icon-wrap flex items-center justify-center text-amber-400">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Horario de atención</p>
                      <p className="text-xs text-gray-500">Zona horaria: Colombia (UTC-5)</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{h.day}</span>
                        <span className={`font-medium ${h.time === 'Cerrado' ? 'text-gray-600' : 'text-white'}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="glass-card rounded-2xl p-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">¿Qué necesitas?</p>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">{link.label}</p>
                          <p className="text-xs text-gray-500">{link.desc}</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-amber-400 transition-colors flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT: Form */}
              <div className="lg:col-span-3 fade-up delay-2">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div className="glow-divider mx-6 sm:mx-12" />

        <section className="py-14" aria-label="Por qué elegirnos">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 fade-up">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                  ),
                  value: '< 24h',
                  label: 'Tiempo de respuesta garantizado',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  value: '100%',
                  label: 'Atención personalizada, sin bots',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  ),
                  value: 'Gratis',
                  label: 'Cotización sin compromiso',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  value: 'LATAM',
                  label: 'Clientes en toda Latinoamérica',
                },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                  <div className="text-amber-400">{s.icon}</div>
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <p className="text-gray-400 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
