import Banner from '../assets/banner.webp'

export default function Home(){
    return(
        <>
<section className='my-1'>
    <div>
        <marquee behavior="" direction="" className=' text-xs text-red-700'> <a href="#" className='underline capitalize text-indigo-600'>new features</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</marquee>
    </div>
    <div className='my-5 sm:my-3'>
        <img className='w-11/12 mx-auto lg:w-11/12 lg:h-[70vh] object-cover' src={Banner} alt="" />
    </div>
    <div>
        <ul className=' flex justify-center items-center gap-5'>
<div className='inline-flex gap-4'>
    <li className='w-2 h-2 ring-1 rounded-full outline-2 outline-indigo-500 bg-indigo-500'></li>
    <li className='w-2 h-2 ring-1 rounded-full'></li>
    <li className='w-2 h-2 ring-1 rounded-full'></li>
    <li className='w-2 h-2 ring-1 rounded-full'></li>

</div>            

        </ul>
    </div>
    </section>        
        </>
    )
}

