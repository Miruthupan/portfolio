import AboutImg from '../assets/businessman-application-human-digital-business.jpg';

export default function About(){
    return <section id='about' className='flex flex-col md:flex-row
     bg-third px-5' >
        <div className='py-8 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center '>
            <h1 className='text-4xl border-b-4  mb-5 w-[170px]'>About Me</h1>
            <p className='pb-5'>. Hi, My name is Miruthupan. I am a software developer.I built beautifull web site<br/>with React.js and Tailwind CSS</p>
            <p className='pb-5'>. I am proficient in Frontend skills like React.js,Redux Tool Kit,CSS,SaSS and many more.</p>
            <p className=''>. In backend I know Node.js,Express.js,MongoDB and Mongoose</p>
         </div>
         
        </div>
    </section>
}