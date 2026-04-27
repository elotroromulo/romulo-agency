'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top header bar ── */}
      <div
        className="border-b border-white/5 transition-all duration-300 overflow-hidden"
        style={{
          background: '#06070F',
          height: scrolled ? 0 : undefined,
          opacity: scrolled ? 0 : 1,
          paddingTop: scrolled ? 0 : undefined,
          paddingBottom: scrolled ? 0 : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">

          {/* Email */}
          <a
            href="mailto:contacto@romulo.agency"
            className="hidden sm:flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors duration-200 text-xs"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            contacto@romulo.agency
          </a>

          {/* Center: status pill — visible only on md+ */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ animation: 'dot-pulse 2s ease-in-out infinite' }} />
            Disponibles · Respondemos en &lt;24h
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors duration-200 text-xs"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            +57 300 000 0000
          </a>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className={`navbar px-4 py-4 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer" onClick={closeMenu}>
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              ROMULO<span className="gradient-text">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer">
              Servicios
            </Link>
            <Link href="/asesoria-personalizada" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer">
              Asesoría
            </Link>
            <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer">
              Nosotros
            </Link>
            <Link href="/contacto" className="btn-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer">
              Agendar Llamada
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 -mr-2"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 px-2">
            <div className="glass-card rounded-2xl p-4 flex flex-col gap-1">
              <Link href="/" onClick={closeMenu} className="text-gray-400 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium cursor-pointer">
                Inicio
              </Link>
              <Link href="/servicios" onClick={closeMenu} className="text-gray-400 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium cursor-pointer">
                Servicios
              </Link>
              <Link href="/asesoria-personalizada" onClick={closeMenu} className="text-gray-400 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium cursor-pointer">
                Asesoría
              </Link>
              <Link href="/nosotros" onClick={closeMenu} className="text-gray-400 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium cursor-pointer">
                Nosotros
              </Link>

              {/* Mobile topheader info */}
              <div className="border-t border-white/5 mt-2 pt-3 px-4 flex flex-col gap-2">
                <a href="mailto:contacto@romulo.agency" className="flex items-center gap-2 text-gray-500 text-xs">
                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  contacto@romulo.agency
                </a>
                <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 text-xs">
                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  +57 300 000 0000
                </a>
              </div>

              <Link href="/contacto" onClick={closeMenu} className="btn-primary text-white py-3 px-4 rounded-xl text-sm font-semibold text-center mt-2 cursor-pointer">
                Agendar Llamada
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
