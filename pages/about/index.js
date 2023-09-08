// renderiza la informacion acerca de mi
import React, { useState } from "react";

// Iconos
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  acerca de mis datos
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          {
            icon: <FaHtml5 />,
            id: 1,
          },

          {
            icon: <FaCss3 />,
            id: 2,
          },

          {
            icon: <FaJs />,
            id: 3,
          },

          {
            icon: <FaReact />,
            id: 4,
          },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          {
            icon: <FaFigma />,
            id: 1,
          },
          {
            icon: <SiAdobephotoshop />,
            id: 2,
          },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Fundamentos de Desarrollo Web - Academlo",
        stage: "2023 - Gen28",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Pasante - Alcadia de toledo",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Desarrollo de Aplicaciones Web con React - Academlo",
        stage: "2023",
      },
      {
        title: "Fundamentos de Desarrollo Web - Academlo",
        stage: "2023",
      },
      {
        title: "Ingeniería de Sistemas - Universidad de Pamplona",
        stage: "Cursando",
      },
    ],
  },
];

// componentes
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Movimiento del enmarcador
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Contador
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Imagen Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-32 w-[320px] z-0"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:h2 text-[20px]"
          >
            {/* Mi <span className='text-accent'>Profesión</span> Actualmente</motion.h2> */}
            FRONTEND <span className="text-accent">DEVELOPER</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] text-xs xl:text-lg mx-auto xl:mx-0 mb-4 xl:mb-12 px-1 xl:px-0"
          >
            Estudiante de Ingeniería de Sistemas con experiencia en desarrollo
            web y bases de datos. Habilidades para resolver problemas.
            Interesado en unirme al equipo y contribuir con proyectos
            innovadores que superen las expectativas de los clientes.
          </motion.p>
          {/* Contadores animados */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 mb-2">
              {/* Experience laboral */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 xl:ml-12">
                  <CountUp start={0} end={6} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] xl:ml-12">
                  meses de experiencia
                </div>
              </div>
              {/* Clientes sactifechos */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 xl:ml-12">
                  <CountUp start={0} end={6} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] xl:ml-12">
                  Cliente satisfecho
                </div>
              </div>
              {/* Proyectos Finalizados */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 xl:ml-12">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] xl:ml-12">
                  Proyecto finalizado
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* mi informacion */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* lista los titulos */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:mt-14 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* lista los titulos de cada titulo */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-center">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col xl:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  {/* Titulo */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* Iconos */}
                    {item.icons?.map((icon) => {
                      return (
                        <div key={icon.id} className="text-2xl">
                          {icon.icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
