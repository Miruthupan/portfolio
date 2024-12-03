import ResumeImg from '../assets/closeup-candidate-giving-his-cv-while-applying-job-office.jpg';

export default function Resume(){
    const config ={
        link:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-third px-5' >
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[400px]' src={ResumeImg} />
        </div>
        <div className='w-1/2 flex md:justify-center text-white'>
        <div className='flex flex-col justify-center '>
            <h1 className='text-4xl border-b-4  mb-5 w-[140px]'>Resume</h1>
            <p className='pb-5'>. You can view my resume <a className='btn' href={config.link}>Download</a></p>
           
            
         </div>
         
        </div>
    </section>
}