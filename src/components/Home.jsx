import Banner from '../assets/banner.webp'
import {Card} from './Trend.jsx'
import './global.css'
import Img from '../assets/iphone.png'

export default function Home(){
    return(
        <>
        <main>
            
<section className='my-1'>
    <div>
        <marquee behavior="" direction="" className=' text-[0.8rem] md:text-sm text-red-900'> <a href="#" className='underline capitalize text-indigo-600'>new features</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</marquee>
    </div>
    <div className='my-5 sm:my-3'>
        <a href="">
            
        <img className='w-11/12 mx-auto lg:w-11/12 lg:h-[70vh] object-cover' src={Banner} alt="" />
        </a>

    </div>
    <div>
        <ul className=' flex justify-center items-center gap-5'>
<div className='inline-flex gap-4'>
    <li className='w-1 h-1 ring-1 rounded-full outline-2 outline-indigo-500 bg-indigo-500'></li>
    <li className='w-1 h-1 ring-1 rounded-full'></li>
    <li className='w-1 h-1 ring-1 rounded-full'></li>
    <li className='w-1 h-1 ring-1 rounded-full'></li>

</div>            

        </ul>
    </div>
    </section>

    <Recent name='recent' />
    <Recent name='lanch' />


        </main>
        </>
    )
}

function Recent({name}){
    return(
        <section>
    <div>
        
    <h2 className='pl-[2rem] capitalize mb-5'>{name}</h2>
    <div className='grid grid-flow-col-dense gap-3 justify-center  '>
   <Card ALT={Img}/>   
   <Card ALT={Img}/>     
<div className='hidden md:block'>
   <Card ALT={Img}/>   
    
</div>
<div classNam='hidden lg:block'> 
   <Card ALT={Img}/>   
    
</div>
<div className='hidden xl:block'>
   <Card ALT={Img}/>   
    
</div>
    </div>
    </div>

</section>
)
}


