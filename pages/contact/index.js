// se encarga de renderizar el formulario de contacto
// Componentes
import Circles from '/components/Circles';

// Iconos
import { BsArrowRight } from "react-icons/bs";

// Enmarcador de limites - framer
import { motion } from "framer-motion";

// Variantes
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* Texto y Formularios */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* Texto */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:h2 text-[20px] mt-10 text-center mb-2'>
            Enviame un <span className='text-accent'>Mensaje</span>
          </motion.h2>
          {/* Formulario */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-2 xl:gap-6 w-full mx-auto'
            action="https://formspree.io/f/mleynpqg"
            method="POST"
          >
            {/* Grupo de entrada */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='nombres' id='nombres' placeholder='nombre' className='input' />
              <input type='text' name='correo' id='correo' placeholder='email' className='input' />
            </div>
            <input type='text' name='sujeto' id='sujeto' placeholder='individuo' className='input' />
            <textarea name='mensaje'  placeholder='mensaje' className='textarea' ></textarea>
            <motion.button
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              type='submit'
              value='enviar'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0  transition-all duration-500 mr-2'>Hablemos </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
