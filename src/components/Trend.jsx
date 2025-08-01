import Img from '../assets/iphone.png'

export default function Trend(){
    return(
        <>
        <section className='my-5'>
<h2 className='text-xl capitalize pl-[5%]  sm:pl-3 sm:text-xl'>trending products</h2>
<div className='  overflow-x-auto my-5 w-full grid  grid-flow-col-dense w-auto h-max gap-3 p-2 '>
    
<Card img={Img}/>
<Card img={Img}/>
<div className='hidden md:block '>
    <Card img={Img}/>
    
</div>
<div className='hidden lg:block'>
    <Card img={Img}/>
    
</div>    
<div className='hidden xl:block'>
    <Card img={Img}/>
    
</div>
</div>


        </section>
        </>
    )
}


export function Card({ALT}){
    return(
        <>
        <div className='flex gap-[0.4rem] w-fit h-fit ring-1  items-center p-[0.8rem] ring-slate-400 sm:ring-slate-300 rounded'>
            <img src={ALT ? Img : Img} alt="" className='w-[16vw] h-auto object-cover sm:w-20 sm:h-32 ' />
            <div  >
                <h4 className='text-md font-bold sm:text-md capitalize'>iphone 10 pro</h4>
                <p className='text-sm sm:text-md'><span className='font-bold text-xl sm:text-md'>&#8377;</span> 1,90,000</p>
                <p className='text-sm'>8 ram 256 store....</p>
                <button className='w-fit mx-auto  py-1 px-2 mt-2 text-sm bg-indigo-700 text-white font-bold rounded sm:px-2 sm:py-1 capitalize sm:text-sm'>shop now</button>
            </div>
        </div>
        </>
    )
}
