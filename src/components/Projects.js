import websiteImg1 from '../assets/laughing-couple-sitting-with-tablets-cafe.jpg'
import websiteImg2 from '../assets/close-up-man-shopping-with-laptop.jpg'
import websiteImg3 from '../assets/UI-UX-Design.png'


export default function Projects(){
    return<section id='project' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
          <div className="flex flex-col px-10 py-10">

          <h1 className="text-4xl border-b-4  mb-5 w-[150px]">Projects</h1>
          <p>hgfiuehgierhgiupshdfgiegirngirngirhgigefnseifnivnein</p>
          </div>
  
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-10'>
            <div className='relative'>
            <img className='h-[250px] w-[500px]' src={websiteImg1}/>
            <div className='project-desc'>
                <p className='text-center py-5'>dsfhxksglfjoi;jfiuawevhteboiutnwjiec<br/>gdfghfhgefuawkge</p>
            </div>
            </div>
            <div className='relative'>
            <img className='h-[250px] w-[500px]' src={websiteImg2 }/>
            <div className='project-desc'>
                <p className='text-center py-5'>dsfhxksglfjoijfiuawevhteboiutnwjiec</p>
            </div>
            </div>
            <div className='relative'>
            <img className='h-[250px] w-[500px]' src={websiteImg3 }/>
            <div className='project-desc'>
                <p className='text-center py-5'>dsfhxksglfjoi;jfiuawevhteboiutnwjiec</p>
            </div>
            </div>
           
          
        </div>
            
        </div>
    </section>
}