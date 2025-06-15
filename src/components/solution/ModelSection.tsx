import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { FaArrowUpRightDots } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md'
import { PiStrategy } from 'react-icons/pi'

const cards = [
  {
    title: 'Claridad antes que acción',
    subtitle: 'Analizamos tu negocio y objetivos reales.',
    content: 'Trazamos una estrategia clara para atraer a los clientes adecuados, basada en tu propuesta de valor.',
    Icon: PiStrategy,
    color: 'rgba(59,130,246,0.12)',
  },
  {
    title: 'Sistema de ventas efectivo',
    subtitle: 'Un embudo pensado para vender.',
    content: 'Diseñamos una arquitectura personalizada que guía a tus clientes hacia la conversión sin fricción.',
    Icon: MdOutlineDesignServices,
    color: 'rgba(139,92,246,0.12)',
  },
  {
    title: 'Ejecución & escalado',
    subtitle: 'De idea a resultados.',
    content: 'Lanzamos tu sistema digital completo y optimizamos cada fase para escalar de forma inteligente.',
    Icon: FaArrowUpRightDots,
    color: 'rgba(236,72,153,0.12)',
  },
]

const ModelSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return

      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        gsap.to(card, {
          background: `radial-gradient(circle at ${x}px ${y}px, ${cards[i].color}, #0f0f0f 90%)`,
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      const handleLeave = () => {
        gsap.to(card, {
          background: `linear-gradient(to bottom, #1d1d1d, #141414)`,
          duration: 0.6,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mousemove', handleMove)
      card.addEventListener('mouseleave', handleLeave)

      return () => {
        card.removeEventListener('mousemove', handleMove)
        card.removeEventListener('mouseleave', handleLeave)
      }
    })
  }, [])

  return (
    <section className="relative px-6 py-20 max-w-6xl mx-auto flex flex-col items-center ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 max-w-2xl">
        Así diseñamos embudos <span className="text-[#3b82f6]">que convierten</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {cards.map(({ title, subtitle, content, Icon }, i) => (
          <div
            key={i}
            ref={el => {cardsRef.current[i] = el}}
            className="group relative transition-all duration-300 p-8 bg-gradient-to-b from-[#1d1d1d] to-[#141414] rounded-2xl shadow-lg hover:shadow-xl"
          >
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#181A20] group-hover:scale-105 transition-transform">
              <Icon className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-white/70 text-sm mb-4">{subtitle}</p>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">{content}</p>
          </div>
        ))}
      </div>
      <div className='bg-white/10 w-32 h-32 absolute top-5 left-5 blur-[100px] rounded-full'></div>
      <div className='bg-white/10 w-32 h-32 absolute bottom-5 right-5 blur-[100px] rounded-full'></div>
    </section>
  )
}

export default ModelSection
