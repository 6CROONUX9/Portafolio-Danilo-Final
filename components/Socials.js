//links - es el componente de los iconos de las rede sociales
import Link from "next/link";

//iconos
import{
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiNetflixLine,
  RiWhatsappLine,

} from 'react-icons/ri'



const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.youtube.com/channel/UC1Va0Cw7ZONp1UuuDyp-kMw'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine/>
      </Link>
      <Link href={'https://www.instagram.com/daniloflorez69/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine/>
      </Link>
      <Link href={'https://github.com/6CROONUX9'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={'https://app.netlify.com/teams/6croonux9/sites'} className="hover:text-accent transition-all duration-300">
        <RiNetflixLine/>
      </Link>
      <Link href={'https://wa.me/qr/JHRBZYKDN6MND1'} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
    </div>
  );
};

export default Socials;
