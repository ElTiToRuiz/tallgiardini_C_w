import { useRef } from "react";
import Marquee from "react-fast-marquee";

const InfiniteMarqueeComponent = () => {
  const logosWrapper = useRef<HTMLDivElement | null>(null);

  return (
    <div className='pb-20 flex flex-col items-center w-[100vw] overflow-x-hidden max-w-6xl mx-auto relative'>
      <h2 className="p-5 text-5xl pb-20 text-center text-white w-full lg:w-[80%]">Trabajamos con marcas que usan las <span className='underline-transition'>mejores herramientas</span> del mercado</h2>
      <div>
        <div className="relative h-min" ref={logosWrapper}>
          <div
            className='w-[100%] h-[100%] absolute z-10 top-0 left-0'
            style={{
              background: 'linear-gradient(95deg,rgba(10, 10, 10, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(10, 10, 10, 1) 100%)'
            }}
          ></div>
          <Marquee
            autoFill={true}
          >
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./1.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./3.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./4.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./5.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./6.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./8.png" alt="" />
          </Marquee>
        </div>

      </div>
    </div>

  )
}

export default InfiniteMarqueeComponent