import LogoImg from '../assets/logo-design.png'
import ProfileImg from '../assets/profile.png'
import CartImg from '../assets/shopping-cart.png'
import FavImg from '../assets/fav.png'



export default function Navbar(){
const list = ['Home','about','products','deals','offers']

    return(

        <>
<section>
    <nav className='bg-slate-800 flex items-center justify-between px-[1rem] py-[1.2rem]'>
        <a href="" className='text-white font-bold text-[1.3rem] '> Navbar Logo </a>
        <button className=' md:hidden'><span className='text-2xl font-extrabold text-white '>=</span></button>
        <div className='hidden'>
            <ul className='flex gap-[1rem] items-center '>
        {list.map((item)=>(<li><a href="" className=" capitalize text-lg text-white"
        >{item}</a></li>))}        
            </ul>
        </div>
        <div className='hidden'>
            <ul className='flex gap-8 items-center'>
                <li className='text-white '><a href=""><svg className='size-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</a></li>
                <li className='text-white'><a href=""><svg className='size-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</a></li>
                <li><a href=""><img className='size-10' src={ProfileImg} alt=""/></a></li>

            </ul>
        </div>
    </nav>
</section>
        </>
        )
}

/*
<section className='bg-slate-800 w-full md:max-w-8xl px-5 py-4  grid grid-cols-2 md:grid-cols-3  justify-between items-center'>
    <a href="" className='flex text-white items-center md:gap-4 font-extrabold md:text-2xl gap-2 text-xs'><img src={LogoImg} alt="" className=' w-8 md:w-15 h-auto object-cover '/> Logo Brand</a>
    <button className='hidden'><span>=</span></button>
    <div className='hidden md:block'>
        <ul className='flex items-center gap-8'>
            {list.map((item)=>(
                <li><a href="#" className=" capitalize text-white font-bold hover:underline text-lg"
                >{item}</a></li>))}
        </ul>
    </div>
    <div className='hidden md:block'>
        <ul className='flex gap-2 md:gap-6 items-center  place-content-end'>
            <li><a href=""><img src={CartImg} alt="" className=' size-6 md:size-8'/></a></li>
            <li><a href=""><img src={FavImg} alt="" className='size-8'/></a></li>
            <li className=' ml-5 '><a href=""><img src={ProfileImg} alt="" className='size-10'/></a></li>

        </ul>
    </div>
    <div className='flex gap-5 w-full md:hidden  place-content-end'>
    <button className='font-extrabold  text-2xl bg-slate-300 px-3 hover:bg-slate-600 duration-200 hover:text-white rounded'>=</button>

            <a href=""><img src={ProfileImg} alt="" className='size-8 ring-3 ring-indigo-200 rounded-full'/></a>
        
    </div>

</section>
*/




