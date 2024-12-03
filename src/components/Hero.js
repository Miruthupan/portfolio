import HeroImg from '../assets/man-pointing-his-left-removebg-preview.png'
import { FaXTwitter} from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { LiaBehanceSquare } from "react-icons/lia";



export default function Hero() {
    return <section className='flex flex-col md:flex-row px-20 py-32 bg-secondary justify-center'>
        <div className='w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl'>Hi,<br/>Im MIRUTHUPAN
        <p className='text-2xl'>Im a software developer</p>
        </h1>
        <div className='flex py-12 text-white'>
            <a href='#'className='pr-2'><FaXTwitter size={30}/></a>
            <a href='#'className='pr-2'><CiLinkedin size={30}/></a>
            <a href='#'className='pr-2'><FaGithub size={30}/></a>
            <a href='#'className=''><LiaBehanceSquare size={33}/></a>
        </div>
        </div>
        
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}
    