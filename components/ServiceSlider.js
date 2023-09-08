// se enarga de renderizar mis servicios con el slider lateral
// Importar componentes de reacción de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importar estilos del swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Iconos
import { 
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

// Importamos los módulo requerido
import { FreeMode, Pagination } from "swiper";

// Datos de mi servicios
export const ServiceData = [
  {
    icon: <RxCrop />,
    title: 'Marca',
    description: 'Ofrezco servicios de branding para dar identidad a tu negocio, creando logos y diseños únicos que reflejan tu esencia.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Diseño',
    description: 'Creo interfaces de usuario atractivas y funcionales utilizando React y CSS, para sitios web y aplicaciones de gran impacto.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desarrollo',
    description: 'Especializado en JavaScript, React y Node.js, desarrollo soluciones tecnológicas eficientes y escalables para resolver problemas reales.',
  },
  {
    icon: <RxReader />,
    title: 'Redacción Publicitaria',
    description: 'Genero contenido publicitario persuasivo que conecta con tu audiencia y mejora la conversión de clientes.',
  },
  {
    icon: <RxRocket />,
    title: 'Desarrollador Junior',
    description: 'contribuyo en proyectos bajo supervisión y estoy comprometido con ofrecer soluciones de calidad.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320:{
        slidesPerView: 1,
        spaceBetween: 15
      },
      640:{
        slidesPerView: 3,
        spaceBetween: 15
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
    >
      {
        ServiceData.map((item, index)=>{
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:first-letter:bg-[rgba(89,65,169,0.15)] transition-all duration-300 xl:h-[310px] xl:py-4 ">
                {/* Iconos del slider */}
                <div className="text-3xl text-accent mb-2">{item.icon}</div>
                {/* Titulos y Descripcion */}
                <div className="mb-8 ">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] loading-normal text-xs xl:text-sm">{item.description}</p>
                </div>
                {/* Flecha -> slider */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  )
}

export default ServiceSlider;
