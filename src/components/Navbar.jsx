import LogoImg from '../assets/logo-design.png'
import ProfileImg from '../assets/profile.png'
import CartImg from '../assets/shopping-cart.png'
import FavImg from '../assets/fav.png'



export default function Navbar(){
const list = ['Home','about','products','deals','offers']

    return(
        <>
<section className='max-w-8xl px-5 py-4  grid grid-cols-3  justify-between items-center'>
    <a href="" className='flex items-center gap-4 font-extrabold text-2xl'><img src={LogoImg} alt="" className='w-15 h-auto object-cover '/> Logo Brand</a>
    <button className='hidden'><span>=</span></button>
    <div>
        <ul className='flex items-center gap-8'>
            {list.map((item)=>(
                <li><a href="#" className=" capitalize text-black font-bold hover:underline text-lg"
                >{item}</a></li>))}
        </ul>
    </div>
    <div>
        <ul className='flex gap-6   place-content-end'>
            <li><a href=""><img src={CartImg} alt="" className='size-8'/></a></li>
            <li><a href=""><img src={FavImg} alt="" className='size-8'/></a></li>
            <li className=' ml-5 '><a href=""><img src={ProfileImg} alt="" className='size-10'/></a></li>

        </ul>
    </div>
</section>
        </>
        )
}




