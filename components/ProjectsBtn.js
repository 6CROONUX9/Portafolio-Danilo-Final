// componente que renderiza el boton del header
// siguiente imagen
import Image from 'next/image';

//  Siguiente link
import Link from 'next/link';

// Icono
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='xl:pb-4   mx-auto xl:mx-0 z-10 '>
      <Link 
        href={'/work'}
        className='relative w-[149px] h-  [149px] flex justify-center   items-center bg-circleStar bg-cover  bg-center bg-no-repeat group'
      >
      <Image 
        src={'/rounded-textV2.png'}
        width={141}
        height={148}
        alt=''
        className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'  
      />
      <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
    </Link>
  </div>
  );
  
};

export default ProjectsBtn;
