import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { FaArrowUpRightDots } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md'
import { PiStrategy } from 'react-icons/pi'



const ModelSection = () => {
  const card1 = useRef<(HTMLDivElement | null)>(null)
  const card2 = useRef<(HTMLDivElement | null)>(null)
  const card3 = useRef<(HTMLDivElement | null)>(null)

  const lastPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement | null, color: string) => {
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      lastPosition.current = { x, y }

      gsap.to(card, {
        background: `radial-gradient(circle at ${x}px ${y}px, ${color}, #101216 80%)`,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = (card: HTMLDivElement | null) => {
      if (!card) return

      const { x, y } = lastPosition.current

      gsap.to(card, {
        background: `linear-gradient(to bottom, #1d1d1d, #141414)`,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    const cardActions = (card: HTMLDivElement | null, color: string) => {
      if (!card) return
      const handleMove = (e: MouseEvent) => handleMouseMove(e, card, color)
      const handleLeave = () => handleMouseLeave(card)

      card.addEventListener('mousemove', handleMove)
      card.addEventListener('mouseleave', handleLeave)

      return () => {
        card.removeEventListener('mousemove', handleMove)
        card.removeEventListener('mouseleave', handleLeave)
      }
    }

    const card1Cleanup = cardActions(card1.current, 'rgba(37, 99, 235, 0.10)')
    const card2Cleanup = cardActions(card2.current, 'rgba(92, 75, 235, 0.10)')
    const card3Cleanup = cardActions(card3.current, 'rgba(147, 51, 234, 0.10)')

    return () => {
      card1Cleanup?.()
      card2Cleanup?.()
      card3Cleanup?.()
    }
  }, [])



  return (
    <section className='mt-40 py-10 flex flex-col gap-10 justify-center items-center relative'>
      <h1 className='text-[40px] font-medium'>Así diseñamos embudos que realmente convierten</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div ref={card1} className='xl:h-[420px] px-4 py-10 md:px-6 rounded-xl max-w-[440px] flex flex-col bg-gradient-to-b from-[#1d1d1d] to-[#141414]'>
          <div>
            <div className='rounded-full w-[60px] h-[60px] flex justify-center items-center'>
              <PiStrategy className='size-10' />
            </div>
            <h3 className='text-3xl font-medium my-4'>Claridad antes que acción.</h3>
          </div>
          <div className='flex flex-col justify-between h-full'>
            <p className="text-white/70 text-normal w-full">Analizamos tu negocio y tus objetivos reales.</p>
            <p className='text-sm text-[#7a7a7a] w-full"'>Analizamos tu estudio, tu propuesta de valor y tus objetivos reales para identificar los puntos clave que deben optimizarse. A partir de ahí, definimos una estrategia alineada a tu visión y al tipo de clientes que querés atraer. Sin dirección, no hay crecimiento sostenible.</p>
          </div>
        </div>
        <div ref={card2} className='xl:h-[420px] px-5 md:px-10 flex flex-col justify-between py-10 bg-[#101216] rounded-xl  max-w-[440px] bg-gradient-to-b from-[#1d1d1d] to-[#141414]'>
          <div>
            <div className='bg-[#181A20] mb-6 rounded-full w-[60px] h-[60px] flex justify-center items-center'>
              <MdOutlineDesignServices className='size-7' />
            </div>
            <h3 className='text-3xl font-medium my-4'>Diseño de ventas del sistema digital</h3>
            <p className="text-white/70 text-normal w-full">Un sistema pensado para vender tus servicios.</p>
          </div>
          <p className='text-sm text-[#7a7a7a] my-2'>Creamos una estructura personalizada que se ajusta al proceso comercial de tu estudio. Construimos un embudo claro que convierta visitas en oportunidades reales, alineado con la forma en que tus clientes deciden. Nada genérico, todo pensado para ti.
          </p>

        </div>
        <div ref={card3} className='xl:h-[420px] px-5 md:px-10 py-10 bg-[#101216] flex flex-col justify-between rounded-xl  max-w-[440px] bg-gradient-to-b from-[#1d1d1d] to-[#141414]'>
          <div>
            <div className='bg-[#181A20] mb-6 rounded-full w-[60px] h-[60px] flex justify-center items-center'>
              <FaArrowUpRightDots className='size-7' />
            </div>
            <h3 className='text-[26px] font-medium my-4'>Ejecución y optimización de resultados</h3>
            <p className="text-white/70 text-normal w-full">Lo implementamos todo para que empiece a vender.</p>
          </div>
          <p className='text-sm text-[#7a7a7a] my-2'>Ponemos todo en marcha: páginas web, automatizaciones, emails, integraciones y herramientas. Monitoreamos, medimos y optimizamos para escalar tus resultados sin perder tiempo en tareas técnicas.</p>
        </div>
      </div>

      <div className='bg-white w-[50px] h-[50px] absolute top-5 left-5 blur-[100px] z-[0]'/>
      <div className='bg-white w-[50px] h-[50px] absolute bottom-5 right-5 blur-[100px] z-[0]'/>
    </section>
  )
}

export default ModelSection