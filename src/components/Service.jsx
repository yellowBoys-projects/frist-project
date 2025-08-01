import Img01 from '../assets/service-1.png'


export default function Service(){
    return(
        <>
        <section className='my-[1rem] '>
            <h2 className='text-md pl-[5%] md:text-xl  capitalize  sm:text-xl sm:pl-5'>service</h2>
            <div className='mt-[1rem]  '>
<Card img={Img01}/>
<div className='hidden md:block'>
<Card img={Img01}/>
<Card img={Img01}/>
<Card img={Img01}/>
    
</div>
            </div>
        </section>
        </>
    )
}


const Card = (props) =>{
    return( 
<div className='flex justify-evenly  w-4/5 h-auto py-[0.5rem] sm:inline-flex sm:gap-3 items-center ring-3 ring-slate-500 mx-auto sm:p-1 rounded'> 
    
        <img className='size-[3rem] sm:w-20 sm:h-15 rounded object-cover  ring-1' src={props.img} alt="" /> 
<p className='capitalize text-sm sm:text-md font-bold'>free service enjoy offer cost!</p>
</div>

)

}