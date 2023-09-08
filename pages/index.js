// siguiente imagen // Muestra la parte del HEADER
import  Image from "next/image";

// Componentes
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//movimiento del emarcador
import {motion} from 'framer-motion'

// Variantes
import {fadeIn} from '../variants'

// Iconos
import { BsArrowRight } from "react-icons/bs";
import { RiDownload2Line,RiFileDownloadFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Texto */}
      <div className="pt-36 pb-[95px]   w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 xl:pt-10">
        <div className="text-center flex flex-col justify-center  xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Titulo */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mb-2   h1"
          >
            Estudiante <br /> De{' '}<span className="text-accent">INGENIERIA DE SISTEMAS</span>
          </motion.h1>
          {/* Subtitulo */}
          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="xl:mb-10   max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 text-sm xl:text-lg "
          >
              Actualmente curso el noveno semestre en la Universidad de Pamplona. Enfoque en desarrollo web y bases de datos. Habilidad para resolver desafíos. Aspiro a formar parte de su empresa y contribuir con proyectos innovadores que superen las expectativas de los clientes.
          </motion.p>
          {/* boton */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="flex justify-center xl:hidden relative">
            <ProjectsBtn/>
          </motion.div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Imagen */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* imagen de fondo */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* Particulas */}
        <ParticlesContainer/>
        {/* Imagen Avatar */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[637px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:-right-[10%]"
        >
          <Avatar/>
        </motion.div>
      </div>
      {/* btn descargar */}
      <div className="absolute   sm:bottom-28 sm:right-10  xl:bottom-10 xl:right-20 z-50">
      <motion.button
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              type='submit'
              value='download'
              href='/pdf/HOJA_VIDA_JDFP.pdf'
              download='HojaVidaDanilo.pdf' 
            >
              <span   className='group-hover:-translate-y-[120%] group-hover:opacity-0  transition-all duration-500 mr-2'>Descargar CV </span>
              <a href='/pdf/HOJA_VIDA_JDFP.pdf' download='HojaVidaDanilo.pdf'  className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] hover:scale-150'><RiFileDownloadFill/></a>
                            {/* <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/> */}
            </motion.button>
      </div>
    </div>
  );
};

export default Home;
