'use client'
import { useState } from 'react'

const sites = [
  {
    id: 'metodo-edicion-viral',
    name: 'Método Edición Viral',
    url: 'https://www.metodoedicionviral.com',
    category: 'Curso · Edición con IA',
    tag: 'Curso digital',
  },
  {
    id: 'mejor-programa-meta',
    name: 'El Mejor Programa de Meta',
    url: 'https://elmejorprogramademeta.com/',
    category: 'Curso · Meta Ads',
    tag: 'Publicidad',
  },
]

export default function PortfolioShowcase() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const active = sites[activeIdx]

  function switchSite(idx: number) {
    if (idx === activeIdx) return
    setActiveIdx(idx)
    setLoaded(false)
  }

  return (
    <div className="flex flex-col gap-4 w-full">

      {/* ── Browser frame ── */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
           style={{ background: '#0F1119' }}>

        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5"
             style={{ background: '#161820' }}>
          {/* Traffic lights */}
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
          </div>

          {/* URL bar */}
          <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 min-w-0"
               style={{ background: '#0A0B14' }}>
            <svg className="w-3 h-3 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-400 text-xs truncate font-mono">{active.url}</span>
          </div>

          {/* Open in tab */}
          <a
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir en nueva pestaña"
            className="flex-shrink-0 text-gray-500 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>

        {/* Iframe area */}
        <div className="relative w-full" style={{ height: '480px' }}>
          {/* Loading overlay */}
          {!loaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3"
                 style={{ background: '#0A0B14' }}>
              <div className="w-8 h-8 rounded-full border-2 border-amber-400/20 border-t-amber-400"
                   style={{ animation: 'spin 0.8s linear infinite' }} />
              <span className="text-gray-500 text-xs">Cargando {active.name}…</span>
            </div>
          )}

          <iframe
            key={active.id}
            src={active.url}
            title={`Preview de ${active.name}`}
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none', opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>
      </div>

      {/* ── Site navigation tabs ── */}
      <div className="grid grid-cols-2 gap-3">
        {sites.map((site, idx) => (
          <button
            key={site.id}
            onClick={() => switchSite(idx)}
            className={`glass-card rounded-xl p-4 text-left cursor-pointer transition-all ${
              idx === activeIdx
                ? 'border-amber-400/50 bg-amber-400/8'
                : 'hover:border-white/20'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${idx === activeIdx ? 'bg-amber-400' : 'bg-gray-600'}`} />
              <span className="text-xs font-semibold text-white truncate">{site.name}</span>
            </div>
            <span className="text-xs text-gray-500 pl-4">{site.category}</span>
          </button>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-gray-600">
        Vista previa en vivo · Haz clic en{' '}
        <svg className="w-3 h-3 inline mb-0.5 text-amber-400/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>{' '}
        para ver en pantalla completa
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
