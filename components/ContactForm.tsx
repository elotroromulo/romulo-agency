'use client'
import { useState, FormEvent } from 'react'

const SERVICES = [
  'Asesoría Personalizada',
  'Landing Page',
  'Diseño Web (WordPress)',
  'Diseño Web (Next.js / React)',
  'Instalación de GoHighLevel',
  'Cursos de Marketing',
  'Otro',
]

type Field = 'name' | 'email' | 'service' | 'message'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [sent, setSent] = useState(false)

  function update(field: Field, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function blur(field: Field) {
    setTouched((t) => ({ ...t, [field]: true }))
  }

  const errors: Partial<Record<Field, string>> = {
    name: form.name.trim().length < 2 ? 'Ingresa tu nombre' : undefined,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Email inválido' : undefined,
    service: !form.service ? 'Elige un servicio' : undefined,
    message: form.message.trim().length < 10 ? 'Cuéntanos un poco más (mínimo 10 caracteres)' : undefined,
  }
  const isValid = !Object.values(errors).some(Boolean)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setTouched({ name: true, email: true, service: true, message: true })
    if (!isValid) return

    const text = [
      `Hola, soy *${form.name}*`,
      `📧 ${form.email}`,
      `🎯 Servicio de interés: *${form.service}*`,
      `\n${form.message}`,
    ].join('\n')

    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="glass-card rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-400/15 border border-green-400/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">¡Mensaje listo!</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Se abrió WhatsApp con tu mensaje preparado. Solo envíalo y te respondemos en menos de 24 horas.
          </p>
        </div>
        <button
          onClick={() => { setSent(false); setForm({ name: '', email: '', service: '', message: '' }); setTouched({}) }}
          className="text-amber-400 text-sm hover:text-amber-300 transition-colors cursor-pointer underline underline-offset-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">Escríbenos</h3>
        <p className="text-gray-500 text-sm">Completa el formulario y te contactamos por WhatsApp.</p>
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Nombre</label>
        <input
          id="cf-name"
          type="text"
          placeholder="Tu nombre completo"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          onBlur={() => blur('name')}
          className={`w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all
            bg-white/4 border ${touched.name && errors.name ? 'border-red-400/60 focus:border-red-400' : 'border-white/8 focus:border-amber-400/60'}
          `}
        />
        {touched.name && errors.name && (
          <span className="text-xs text-red-400">{errors.name}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Correo electrónico</label>
        <input
          id="cf-email"
          type="email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          onBlur={() => blur('email')}
          className={`w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all
            bg-white/4 border ${touched.email && errors.email ? 'border-red-400/60 focus:border-red-400' : 'border-white/8 focus:border-amber-400/60'}
          `}
        />
        {touched.email && errors.email && (
          <span className="text-xs text-red-400">{errors.email}</span>
        )}
      </div>

      {/* Service */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-service" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">¿En qué podemos ayudarte?</label>
        <select
          id="cf-service"
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          onBlur={() => blur('service')}
          className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition-all cursor-pointer
            bg-white/4 border ${touched.service && errors.service ? 'border-red-400/60 focus:border-red-400' : 'border-white/8 focus:border-amber-400/60'}
            ${form.service ? 'text-white' : 'text-gray-600'}
          `}
          style={{ background: '#0F1119' }}
        >
          <option value="" disabled>Selecciona un servicio</option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-[#0F1119] text-white">{s}</option>
          ))}
        </select>
        {touched.service && errors.service && (
          <span className="text-xs text-red-400">{errors.service}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Cuéntanos sobre tu proyecto</label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="¿Qué tienes en mente? Cuéntanos tu negocio, objetivos y cualquier detalle relevante..."
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          onBlur={() => blur('message')}
          className={`w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none
            bg-white/4 border ${touched.message && errors.message ? 'border-red-400/60 focus:border-red-400' : 'border-white/8 focus:border-amber-400/60'}
          `}
        />
        {touched.message && errors.message && (
          <span className="text-xs text-red-400">{errors.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-primary text-white w-full py-4 rounded-full font-bold text-sm cursor-pointer inline-flex items-center justify-center gap-2.5 mt-1"
      >
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Enviar por WhatsApp
      </button>

      <p className="text-center text-xs text-gray-600">
        Al enviar, se abrirá WhatsApp con tu mensaje listo para enviarnos.
      </p>
    </form>
  )
}
