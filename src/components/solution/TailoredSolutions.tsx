import { useEffect, useRef, type ReactElement } from "react";
import { Brush, ChartBar, BadgeCheck, Funnel } from "lucide-react";

interface TailoredSolutionItem {
  img: ReactElement;
  tag: string;
  title: string;
  description: string;
}

const data: TailoredSolutionItem[] = [
  {
    img: <Brush />,
    tag: "Personalizado",
    title: "No hacemos plantillas",
    description:
      "Cada marca es única. Diseñamos estrategias personalizadas desde cero, adaptadas a tus clientes reales y tus metas específicas. Nada de copiar-pegar.",
  },
  {
    img: <ChartBar />,
    tag: "Decisiones informadas",
    title: "No improvisamos. Construimos sobre datos.",
    description:
      "Cada decisión está respaldada por analytics y pruebas reales. Usamos lo que tus números revelan para diseñar embudos que escalan tu negocio, no suposiciones.",
  },
  {
    img: <BadgeCheck />,
    tag: "Transparencia total",
    title: "No hacemos promesas vacías",
    description:
      "Cero humo. Solo resultados medibles: embudos que convierten, clientes cualificados y crecimiento sostenible. Te mostramos los datos reales.",
  },
  {
    img: <Funnel />,
    tag: "Crecimiento real",
    title: "Hacemos crecer marcas con procesos reales",
    description:
      "Construimos embudos estratégicos que guían a tus clientes ideales desde el primer contacto hasta la compra. Sin suposiciones, solo procesos probados que generan ventas recurrentes.",
  },
];

const TailoredSolutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Configuración del grid de puntos
    const gridSize = 35; // Tamaño entre puntos (en píxeles)
    const dotSize = 2; // Tamaño de los puntos (en píxeles)
    const activationRadius = 80; // Radio de activación (en píxeles)

    // Calcular cuántos puntos necesitamos
    const containerRect = container.getBoundingClientRect();
    const cols = Math.ceil(containerRect.width / gridSize);
    const rows = Math.ceil(containerRect.height / gridSize);

    // Crear puntos en un grid
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const dot = document.createElement("div");
        dot.className = "absolute rounded-full bg-white opacity-0 transition-opacity duration-300 pointer-events-none";
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.left = `${x * gridSize}px`;
        dot.style.top = `${y * gridSize}px`;
        dot.style.transform = "translate(-50%, -50%)";
        container.appendChild(dot);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const containerRect = container.getBoundingClientRect();
      const x = clientX - containerRect.left;
      const y = clientY - containerRect.top;

      // Resetear todos los puntos a opacidad 0
      const dots = container.querySelectorAll<HTMLDivElement>('div[class*="rounded-full"]');
      dots.forEach(dot => {
        dot.style.opacity = '0';
      });

      // Activar puntos cercanos
      dots.forEach(dot => {
        const dotX = parseFloat(dot.style.left);
        const dotY = parseFloat(dot.style.top);
        const distance = Math.sqrt(Math.pow(x - dotX, 2) + Math.pow(y - dotY, 2));

        if (distance < activationRadius) {
          // Calcular opacidad basada en la distancia (más cerca = más brillante)
          const opacity = 1 - (distance / activationRadius);
          dot.style.opacity = opacity.toString();
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      const dots = container.querySelectorAll('div[class*="rounded-full"]');
      dots.forEach(dot => dot.remove());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-20 md:grid md:grid-cols-2 max-w-6xl mx-auto relative " 
    >
      <div className="max-md:mb-12 md:sticky md:top-[10%] pt-[30px] md:self-start z-10">
        <h2 className="text-2xl md:text-4xl text-white font-bold my-2 text-center">Nuestra solución</h2>
        <div className="h-[1px] bg-gray-300 w-full opacity-30 my-10"></div>
        <h1 className="text-center text-gray-200 text-2xl md:text-3xl font-semibold px-8 animate-[pulse_4500ms_linear_infinite]">
          Diseñamos sistemas digitales a medida que convierten tráfico en
          ventas
        </h1>
      </div>

      <div className="space-y-10 pt-[30px] px-8 z-10 md:border-l md:border-gray-300 md:border-opacity-30">
        

        {data.map((item, index) => (
          <div key={index} className="bg-[linear-gradient(to_bottom_right,#2563eb19_5%,#0D0D0D_20%,#0D0D0D_80%,#9333ea19_95%)] p-10 rounded-xl border border-[#ffffff18] scroll-animation">
            <div className="flex justify-between items-center mb-7">
              {item.img}
              <div className="relative after:absolute after:content-[''] after:w-8 after:left-[50%] after:translate-x-[-50%] after:h-[1px] after:bg-gray-600 after:top-0 max-md:text-sm md:text-base bg-blue-500/10 py-2 px-3 rounded-xl text-[#e8e8e8]">
                <span>{item.tag}</span>
              </div>
              
            </div>
            <h3 className="text-xl md:text-2xl font-medium my-5">{item.title}</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-48 mb-5"></div>
            <p className="text-white/50">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className='bg-[#2563eb]/50 w-[240px] h-[250px] absolute top-0 left-0 -translate-x-1/2 blur-[160px] z-[0]'/>
      <div className='bg-white w-[50px] h-[50px] absolute top-5 right-5 blur-[100px] z-[0]'/>
      <div className='bg-white w-[50px] h-[50px] absolute bottom-5 right-5 blur-[100px] z-[0]'/>
    </section>
  );
};

export default TailoredSolutions;