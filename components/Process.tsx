const steps = [
  {
    num: '1',
    title: 'Consulta Gratuita',
    desc: 'Analizamos tu negocio, objetivos y mercado para entender tus necesidades específicas.',
    shadow: 'shadow-amber-500/25',
    delay: '',
  },
  {
    num: '2',
    title: 'Estrategia Personalizada',
    desc: 'Diseñamos un plan de acción con objetivos claros, timelines y métricas de éxito.',
    shadow: 'shadow-yellow-500/25',
    delay: 'delay-3',
  },
  {
    num: '3',
    title: 'Ejecución y Resultados',
    desc: 'Implementamos, medimos y optimizamos continuamente para maximizar tu retorno.',
    shadow: 'shadow-pink-500/25',
    delay: 'delay-5',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 fade-up">
          <p className="section-label mb-3">Cómo trabajamos</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Tu Éxito en <span className="gradient-text">3 Pasos</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Proceso claro y transparente desde el primer contacto hasta los resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className={`glass-card rounded-2xl p-8 text-center fade-up ${s.delay}`}>
              <div className={`w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg ${s.shadow}`}>
                {s.num}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
