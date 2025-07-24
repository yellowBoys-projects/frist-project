import LogoImg from '../assets/logo-design.png'
import ProfileImg from '../assets/profile.png'
import CartImg from '../assets/shopping-cart.png'
import FavImg from '../assets/fav.png'

export default function Navbar() {
    return (
        <>
            <NavbarCom />
        </>
    )
}

const NavbarCom = () => {
    const list = ['home', 'produts', 'about', 'deals'];

    return (
        <>
            <section className='navbar-section '>
                <nav className='flex justify-between items-center py-5 px-3  sm:bg-sky-400 md:bg-indigo-500 lg:bg-red-400 xl:bg-slate-400 xl:text-white  sm:py-4 sm:px-5'>
                    <div className='flex items-center gap-1 sm:gap-2'>
                        <img className='size-8 object-cover sm:size-10 lg:size-14 xl:size-15' src={LogoImg} alt="" />
                        <a href="" className='font-bold uppercase text-xl sm:text-2xl'>logo</a>
                    </div>
                    <div className='hidden md:block  '>
                        <ul className='flex gap-2 capitalize md:gap-5 justify-end '>
                            {list.map((item) => (
                                <li><a href="" className="capitalize  text-md lg:text-xl xl:text-xl font-mono"
                                >{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6 sm:gap-7 w-auto'>
                            <li><img  className='w-5 h-5 object-cover sm:w-7 sm:h-7 ' src={FavImg} alt="" /></li>
                            <li><img  className='w-5 h-5 object-cover sm:w-7 sm:h-7' src={CartImg} alt="" /></li>
                            <li><img  className='w-8 h-8 object-cover sm:w-10 sm:h-10' src={ProfileImg} alt="" /></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    )
}

