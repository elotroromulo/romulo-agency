import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Romulo Agency | Marketing Digital que Convierte',
  description: 'Cursos, asesorías personalizadas, diseño web, landing pages e instalación de GoHighLevel. Todo para escalar tu negocio digital.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
