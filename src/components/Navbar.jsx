import LogoImg from '../assets/logo-design.png'
import ProfileImg from '../assets/profile.png'
import CartImg from '../assets/shopping-cart.png'
import FavImg from '../assets/fav.png'



export default function Navbar(){
const list = ['Home','about','products','deals','offers']

    return(
        <>
<section className='w-full md:max-w-8xl px-5 py-4  grid grid-cols-2 md:grid-cols-3  justify-between items-center'>
    <a href="" className='flex items-center md:gap-4 font-extrabold md:text-2xl gap-2 text-xs'><img src={LogoImg} alt="" className=' w-8 md:w-15 h-auto object-cover '/> Logo Brand</a>
    <button className='hidden'><span>=</span></button>
    <div className='hidden'>
        <ul className='flex items-center gap-8'>
            {list.map((item)=>(
                <li><a href="#" className=" capitalize text-black font-bold hover:underline text-lg"
                >{item}</a></li>))}
        </ul>
    </div>
    <div className='hidden'>
        <ul className='flex gap-2 md:gap-6 items-center  place-content-end'>
            <li><a href=""><img src={CartImg} alt="" className=' size-6 md:size-8'/></a></li>
            <li><a href=""><img src={FavImg} alt="" className='size-8'/></a></li>
            <li className=' ml-5 '><a href=""><img src={ProfileImg} alt="" className='size-10'/></a></li>

        </ul>
    </div>
    <div className='flex gap-5 w-full  place-content-end'>
    <button className='font-extrabold text-2xl bg-slate-300 px-3 hover:bg-slate-600 duration-200 hover:text-white rounded'>=</button>

            <a href=""><img src={ProfileImg} alt="" className='size-8 ring-3 ring-indigo-200 rounded-full'/></a>
        
    </div>

</section>
        </>
        )
}




