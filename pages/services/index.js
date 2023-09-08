// componente que se encarga renderizar my Servicios
// Componentes
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// Movimiento del enmarcador
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Services = () => {
  return (
  <div className="h-full bg-primary/30 py-36  flex items-center">
    <Circles/>
    <div className=" container mx-auto xl:ml-[130px] xl:pr-14 ">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* Texto */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left pt-10 xl:mb-0">
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show"
            exit="hidden" 
            className="h2 xl:mt-0 text-xl xl:text-3xl"
          >
            Mi <span className="text-accent">Servicios</span>.</motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm xl:text-base"
            >
              Ofrezco desarrollo de software de calidad con experiencia en JavaScript, React, Node.js y bases de datos. Aprendo rápido y creo soluciones eficientes, escalables y fáciles de usar que resuelven problemas del mundo real. <br /> <span className="text-accent xl:text-2xl"></span> Mi enfoque es hacer realidad tus ideas.<span className="text-accent xl:text-2xl">!</span></motion.p>
        </div >
          {/* control deslizante lateral */}
        <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className='w-full xl:max-w-[65%]'
        >
          <ServiceSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Services;
