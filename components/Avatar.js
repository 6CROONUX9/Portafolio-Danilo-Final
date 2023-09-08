// Siguiente imagen
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image 
        src={'/avatarDanilo.png'}
        width={637}
        height={578}
        alt=''
        className='translate-z-50 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
