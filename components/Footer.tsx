import Image from 'next/image'

const socials = [
  {
    label: 'Instagram',
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="20" x="2" y="2" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

const serviceLinks = ['Cursos Digitales', 'Asesorías Personalizadas', 'Diseño Web', 'Landing Pages', 'Instalación GHL']

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-5">
              <Image src="/images/EL-OTRO-ROMULO-LOGO-BLANCO.png" alt="El Otro Romulo" width={160} height={48} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Agencia de marketing digital especializada en transformar negocios a través de estrategias probadas y tecnología moderna.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href="#" className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:text-white cursor-pointer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4 text-sm text-white">Servicios</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <a href="#servicios" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-4 text-sm text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                contacto@romulo.agency
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.42 2 2 0 0 1 3.57 2.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +57 300 000 0000
              </li>
            </ul>
          </div>

        </div>

        <div className="glow-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">&copy; 2025 El Otro Romulo. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors cursor-pointer">Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors cursor-pointer">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
