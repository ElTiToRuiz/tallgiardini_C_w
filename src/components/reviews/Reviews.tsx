import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { GoArrowLeft, GoArrowRight, GoStarFill } from 'react-icons/go'
import { FaXTwitter } from 'react-icons/fa6'
import SplitType from 'split-type'
import gsap from 'gsap'

import 'swiper/css'
import 'swiper/css/navigation'

const reviews = Array(8).fill({
  name: 'Jeannie Grant - CEO',
  date: 'June 01, 2023',
  img: './person.jpg',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  href: '#',
  icon: <FaXTwitter />
})

const Reviews = () => {
  const reviewsContainer = useRef<HTMLDivElement | null>(null)
  const prevButton = useRef<HTMLDivElement | null>(null)
  const nextButton = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const [navigationReady, setNavigationReady] = useState(false)

  useEffect(() => {
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'chars,words' })
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0,
        y: 10,
        stagger: 0.05,
        ease: 'power2.out'
      })
    }
  }, [])

  useEffect(() => {
    setNavigationReady(true)
  }, [])

  useEffect(() => {
    if (reviewsContainer.current) {
      gsap.fromTo(
        reviewsContainer.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: reviewsContainer.current,
            start: 'top 85%',
          },
        }
      )
    }
  }, [])

  const breakpointsResponsive = {
    '@0.00': { slidesPerView: 1, spaceBetween: 16 },
    '@0.75': { slidesPerView: 2, spaceBetween: 24 },
    '@1.00': { slidesPerView: 3, spaceBetween: 24 },
    '@1.50': { slidesPerView: 3, spaceBetween: 32 },
  }

  const animateButtonHover = (el: HTMLDivElement | null, enter: boolean) => {
    if (el) {
      gsap.to(el, {
        scale: enter ? 0.92 : 1,
        duration: enter ? 0.2 : 0.5,
        ease: enter ? 'power1.out' : 'elastic.out(1,0.4)',
      })
    }
  }

  return (
    <div className="w-full px-6 py-16 overflow-hidden max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          No confíes solo en nuestra palabra
        </h1>
        <p className="text-[#a1a1a1] text-lg md:text-xl">
          Nos enorgullece trabajar con estudios de arquitectura y diseño de interiores de todos los tamaños.
          <br />
          <span className="text-white font-medium mt-4 block">
            Descubre cómo hemos ayudado a otros a alcanzar sus metas.
          </span>
        </p>
      </div>

      {navigationReady && (
        <div ref={reviewsContainer} className="relative">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={{ nextEl: nextButton.current, prevEl: prevButton.current }}
            breakpoints={breakpointsResponsive}
            modules={[Navigation]}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 rounded-xl bg-gradient-to-tr from-[#121212] to-[#1d1d1d] border border-[#ffffff18] text-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <img className="w-12 h-12 rounded-full" src={review.img} alt={review.name} />
                    <a href={review.href} className="text-xl text-white/70 hover:text-white">
                      {review.icon}
                    </a>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {Array(5).fill(0).map((_, i) => (
                      <GoStarFill key={i} className="text-yellow-400 text-base" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-white/80 italic mb-4">"{review.text}"</blockquote>
                  <hr className="border-t border-[#2c2c2c] mb-3" />
                  <p className="font-semibold text-sm">{review.name}</p>
                  <time className="text-xs text-white/60">{review.date}</time>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="flex justify-center gap-8 mt-10">
        <div
          ref={prevButton}
          onMouseEnter={() => animateButtonHover(prevButton.current, true)}
          onMouseLeave={() => animateButtonHover(prevButton.current, false)}
          className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 transition-colors"
        >
          <GoArrowLeft className="text-lg" />
        </div>
        <div
          ref={nextButton}
          onMouseEnter={() => animateButtonHover(nextButton.current, true)}
          onMouseLeave={() => animateButtonHover(nextButton.current, false)}
          className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 transition-colors"
        >
          <GoArrowRight className="text-lg" />
        </div>
      </div>
    </div>
  )
}

export default Reviews
