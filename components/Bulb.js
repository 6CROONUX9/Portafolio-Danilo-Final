// componente  que renderiza la imagen del bombillo utilizada en el service omponente index
// Siguiente Imagen
import Image from 'next/image';

const Bulb = () => {
  return (
  <div className='absolute -left-28 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[180px] xl:w-[260px] xl:-left-32'>
    <Image
      src={'/bulb.png'}
      width={260}
      height={200}
      className='w-full h-full'
      alt=''
    />
  </div>);
};

export default Bulb;
