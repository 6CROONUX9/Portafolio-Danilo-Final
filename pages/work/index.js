// componente que se encarga renderizar my Work
// Componentes
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// Movimiento del enmarcador
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Work = () => {
  return (
  <div className="h-full bg-primary/30 py-36  flex items-center xl:mt-10 ">
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
            className="h2 xl:mt-12 text-xl xl:text-3xl"
          >
            Mis <span className="text-accent">Proyectos</span>.</motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm xl:text-base"
            >
              Me desempeño en la creción de proyectos, utilizando herramientas de programación Front-End.Siempre en constante aprendizaje, mejorando mis habilidades <span className="text-accent xl:text-2xl">.</span></motion.p>
        </div >
          {/* control deslizante lateral */}
        <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className='w-full xl:max-w-[65%]'
        >
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Work;
