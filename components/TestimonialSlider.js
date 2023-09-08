// se enarga de renderizar los comentarios con el slider lateral

// datos de testimonios o comentarios
const testimonialSlider = [
  {
    image: "/t-avt-1D.png",
    name: "Junior Pacheco",
    position: "Profesor - Academlo",
    message:
      "Es un estudiante muy activo, siempre trata de dar más de lo propuesto en los proyectos y soluciones que implementa y eso se valora, trabaja en grupo con compañeros y es detallista al momento de maquetar, sabe que en los detalles está la diferencia ",
  },
  {
    image: "/t-avt-2D.png",
    name: "Brayan Munoz",
    position: "Profesor - Academlo",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque",
  },
  {
    image: "/t-avt-3D.png",
    name: "Danilo Florez",
    position: "Autor",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque",
  },
];

// Importar componentes de reacción de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importar estilos del swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importamos los módulo requerido
import { Navigation, Pagination } from "swiper";

// Icono
import { FaQuoteLeft } from "react-icons/fa";

// Siguiente imagenes
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[380px] xl:w-[990px]   "
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" flex flex-col items-center  md:flex-row gap-x-8 h-full px-6 xl:mx-16 ">
              {/* Avatar, nombre. posicion */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* Foto */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* Nombre */}
                  <div className="text-lg">{person.name}</div>
                  {/* Cargo */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              {/* citas, mensajes ò comentarios */}
              <div className="flex-1 flex  flex-col justify-center before:w-[1px]   xl:before:bg-white/20 xl:before:absolute  xl:before:left-0 xl:before:h-[200px]   relative xl:pl-20">
                {/* icono de Citas o comillas `` */}
                <div className="mb-2 pt-2">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0 mb-2" />
                  {/* Mensaje */}
                  <div className="text-xs xl:text-lg text-center md:text-left ">
                    {person.message} <span className="text-accent text-3xl">.</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
