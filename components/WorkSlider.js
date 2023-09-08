// se enarga de renderizar mis trabajos con el slider lateral

//Datos de mi Trabajos
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1D.jpg',
          link: 'https://danilo-rickandmorty.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb2DD.png',
          link: 'https://ecommercecroonux.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb4D.jpg',
          link: 'https://pokedex-md-2023.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb3D.jpg',
          link: 'https://userforge-2023.netlify.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb1DD.jpg',
          link: '',
        },
        {
          title: 'title',
          path: '/thumb2D.jpg',
          link: 'https://world-climate.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb2DD.png',
          link: 'https://ecommercecroonux.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb1D.jpg',
          link: 'https://danilo-rickandmorty.netlify.app/',
        },
      ],
    },
  ],
};

// Importar componentes de reacción de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importar estilos del swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Importamos los módulo requerido
import { Pagination } from "swiper";

// Icono
import { BsArrowRight } from "react-icons/bs";

// Siguiente imagenes
import  Image  from "next/image";

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {
        workSlides.slides.map((slide, index)=>{
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index)=>{
                  return (
                    <div 
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group " key={index}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden hover:scale-110">
                        {/* Imagenes */}
                        < Image  src={image.path} width={500} height={300} alt='' />
                        {/* Gradiente de superposicion muestra el bg encima de la img */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* Titulo de cada card */}
                        <div className="absolute botton-0 translate-y-16 group-hover:-translate-y-0 group-hover:xl:-translate-y-0 transition-all duration-300 xl:translate-y-28 ">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* Titulo parte 1 */}
                            <div className="delay-100 text-[8px] xl:text-lg">LIVE</div>
                            {/* Titulo parte 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-[8px] xl:text-lg ">PROJECT</div>
                            {/* Icono */}
                            <a href={image.link} className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 hover:text-accent hover:scale-110 xl:hover:scale-150"><BsArrowRight/></a>
                            {/* <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight/>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );          
        })
      }
    </Swiper>
  );
};

export default WorkSlider;
