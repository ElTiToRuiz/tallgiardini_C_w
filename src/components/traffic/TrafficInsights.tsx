import {
  ChartNoAxesColumnDecreasing,
  CircleAlert,
  CircleHelp,
  Clock,
  MessageSquareOff,
} from "lucide-react";
import { useEffect, useRef } from "react";

interface FadeUpItemProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const FadeUpItem: React.FC<FadeUpItemProps> = ({
  delay = 0,
  children,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("!translate-y-0", "!opacity-100");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu ${className} opacity-0 z-10 translate-y-10 transition-all duration-500 ease-out [transform-style:preserve-3d]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const TrafficInsights = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 mt-4 relative overflow-hidden max-w-6xl mx-auto">
      <FadeUpItem delay={50}>
      <h1 className="text-center text-5xl mt-6 font-bold text-shadow">
        Tráfico Sin Conversión
      </h1>
      </FadeUpItem>
      <FadeUpItem delay={80}>
      <h2 className="text-center text-gray-400 mt-2 mb-6 md:mb-12 font-semibold">
        Las razones por las que tu tráfico no se convierte en ventas
      </h2>
      </FadeUpItem>
      {/* Contenedor del grid con imagen de borde */}
      <FadeUpItem delay={100}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent before:content-[''] before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-gradient-to-l before:from-transparent before:via-[#222b] before:to-transparent after:-z-0 before:-z-0">
          {/* Celda 1 */}
          <FadeUpItem delay={200}>
            <div className="left-top-border px-7 max-md:py-9 py-11 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50">
              <div className="glow-trapezoid animate-fade-in"></div>
              <div className="flex items-center h-16 m-auto w-full relative">
                <div className="bg-[#0c0c0c] m-auto z-50 rounded-full w-12 h-12 flex items-center justify-center">
                  <CircleAlert className="w-10 h-10" />
                </div>
              </div>
              <h3 className="mt-4 text-xl text-white text-center font-semibold">
                Alto Rebote
              </h3>
              <p className="mt-2 text-sm text-gray-300 text-center">
                Los visitantes llegan pero se van sin interactuar.
              </p>
            </div>
          </FadeUpItem>

          {/* Celda 2 */}
          <FadeUpItem delay={250}>
            <div className="left-top-border px-7 max-md:py-9 py-11 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50">
              <div className="glow-trapezoid animate-fade-in"></div>
              <div className="flex items-center h-16 m-auto w-full relative">
                <div className="bg-[#0c0c0c] m-auto z-50 rounded-full w-12 h-12 flex items-center justify-center">
                  <Clock className="w-10 h-10" />
                </div>
              </div>
              <h3 className="mt-4 text-xl text-white text-center font-semibold">
                Poco Tiempo en Página
              </h3>
              <p className="mt-2 text-sm text-gray-300 text-center">
                Los usuarios no encuentran contenido interesante.
              </p>
            </div>
          </FadeUpItem>

          {/* Celda 3 */}
          <FadeUpItem delay={300}>
            <div className="left-top-border right-top-border px-7 max-md:py-9 py-11 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50">
              <div className="glow-trapezoid animate-fade-in"></div>
              <div className="flex items-center justify-center h-16 w-full m-auto relative">
                <div className="bg-[#0c0c0c] m-auto z-50 rounded-full w-12 h-12 flex items-center justify-center">
                  <ChartNoAxesColumnDecreasing className="w-10 h-10" />
                </div>
              </div>
              <h3 className="mt-4 text-xl text-white text-center font-semibold">
                Baja Tasa de Conversión
              </h3>
              <p className="mt-2 text-sm text-gray-300 text-center">
                El tráfico no se traduce en leads o ventas.
              </p>
            </div>
          </FadeUpItem>

          {/* Celda 4 */}
          <FadeUpItem delay={350}>
            <div className="left-bottom-border px-7 max-md:py-9 py-11 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50 after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent">
              <div className="glow-trapezoid animate-fade-in"></div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
                <div className="bg-[#0c0c0c] m-auto z-50 rounded-full w-12 h-12 flex items-center justify-center">
                  <CircleHelp className="w-10 h-10" />
                </div>
              </div>
              <h3 className="mt-4 text-xl text-white text-center font-semibold">
                Falta de Claridad
              </h3>
              <p className="mt-2 text-sm text-gray-300 text-center">
                Los visitantes no entienden tu oferta o el siguiente paso.
              </p>
            </div>
          </FadeUpItem>

          {/* Celda 5 */}
          <FadeUpItem delay={400}>
            <div className="left-bottom-border border-b-2 border-gray-300 px-7 max-md:py-9 py-11 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50 after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent">
              <div className="glow-trapezoid animate-fade-in"></div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
                <div className="bg-[#0c0c0c] m-auto z-50 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    className="w-10 h-10"
                    fill="#ffffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64px"
                    height="64px"
                    viewBox="0 0 983.81 983.81"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M208.854,257.755c-16.4,4-31.7,12.3-44,23.9c-12.7,11.9-22.1,27.1-27.1,44L4.154,778.154c-7.6,25.7-4.7,52.9,8.1,76.5 c12.8,23.601,34.1,40.7,59.8,48.301l245.7,72.5c17.5,5.199,36.1,5.6,53.8,1.3c17.3-4.2,33.399-12.9,46.399-25.101 c13.5-12.6,23.4-28.6,28.601-46.199l25.899-87.601l10.301-35c2.399-8,0.399-16.5-5.4-22.5c-5.7-6-14.3-8.5-22.2-6.6 c-3.399,0.8-6.5,2.399-9.3,4.7c-9.1,7.5-19.2,12.699-29.9,15.399c-10.1,2.5-21,2.7-32.399,0.7c-4.3-0.8-8.601-0.6-12.8,0.4 c-10.7,2.6-19.2,10.8-22.301,21.3l-15.8,53.399l-201.6-59.5l119.1-403.499l134.8,39.8c5.2,1.5,10.801,1.699,16.101,0.399 c10.7-2.6,19.2-10.8,22.3-21.3l17.9-60.6c4.8-16.4-4.601-33.6-20.9-38.4l-160.3-47.3 C243.455,254.055,225.754,253.555,208.854,257.755z"></path>{" "}
                        <path d="M911.755,80.855l-245.7-72.5c-17.5-5.2-36.101-5.6-53.8-1.3c-17.301,4.3-33.4,13-46.4,25.1c-13.5,12.6-23.4,28.6-28.6,46.3 l-25.9,87.6l-10.3,35c-2.4,8-0.4,16.5,5.399,22.5c5.7,6,14.301,8.5,22.2,6.6c3.4-0.8,6.5-2.4,9.3-4.7 c9.101-7.5,19.2-12.7,29.9-15.4c10.1-2.5,21-2.7,32.4-0.7c4.3,0.8,8.6,0.6,12.8-0.4c10.7-2.6,19.2-10.8,22.3-21.3l15.8-53.4 l201.601,59.5L733.654,597.354l-134.899-39.8c-5.2-1.5-10.801-1.7-16.101-0.4c-10.7,2.601-19.2,10.801-22.3,21.301l-17.9,60.6 c-4.8,16.4,4.601,33.6,20.9,38.4l160.3,47.3c16.7,4.899,34.4,5.399,51.3,1.2c16.4-4,31.7-12.301,44-23.9 c12.7-11.9,22.101-27.1,27.101-44l133.6-452.6c7.601-25.7,4.7-52.9-8.1-76.5C958.755,105.655,937.555,88.455,911.755,80.855z"></path>{" "}
                        <path d="M685.354,979.255c9.4,0,18.9-2.9,27-9c19.9-14.9,23.9-43.101,8.9-63l-117-155.5c-14.9-19.9-43.101-23.9-63-8.9 c-19.9,14.9-23.9,43.101-8.9,63l117,155.5C658.154,973.055,671.654,979.255,685.354,979.255z"></path>{" "}
                        <path d="M419.555,249.255c10.399,0,20.899-3.6,29.399-11c18.801-16.3,20.9-44.7,4.601-63.5l-132.601-153.3 c-16.3-18.8-44.7-20.9-63.5-4.6c-18.8,16.3-20.8,44.7-4.6,63.5l132.6,153.4C394.454,244.055,406.954,249.255,419.555,249.255z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-xl text-white text-center font-semibold">
                Experiencia de Usuario Deficiente
              </h3>
              <p className="mt-2 text-sm text-gray-300 text-center">
                El sitio web es difícil de navegar o no es intuitivo.
              </p>
            </div>
          </FadeUpItem>

          {/* Celda 6 */}
          <FadeUpItem delay={450}>
            <div className="left-bottom-border right-bottom-border px-7 py-11 max-md:py-9 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50 after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent">
              <div className="glow-trapezoid animate-fade-in"></div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
                <div className="bg-[#0c0c0c] m-auto z-50 rounded-full w-12 h-12 flex items-center justify-center">
                  <MessageSquareOff className="w-10 h-10" />
                </div>
              </div>
              <h3 className="mt-4 text-xl text-white text-center font-semibold">
                Mensaje No Convincente
              </h3>
              <p className="mt-2 text-sm text-gray-300 text-center">
                La propuesta de valor no resuena con la audiencia.
              </p>
            </div>
          </FadeUpItem>
        </div>
      </FadeUpItem>
      
      <div className='bg-white w-[50px] h-[50px] absolute top-1/3 left-1/3 -translate-x-1/2 blur-[80px] z-[0]'/>
      <div className='bg-white w-[50px] h-[50px] absolute top-2/3 right-1/3 -translate-x-1/2 blur-[80px] z-[0]'/>
    </section>
  );
};

export default TrafficInsights;
