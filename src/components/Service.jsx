import Img01 from '../assets/service-1.png'


export default function Service(){
    return(
        <>
        <section className='my-5  '>
            <h2 className='text-lg pl-[5%] md:text-xl  capitalize  sm:text-xl sm:pl-5'>service</h2>
            <div className='mt-8 flex justify-center gap-4 '>
<Card img={Img01}/>

            </div>
        </section>
        </>
    )
}


const Card = (props) =>{
    return( 
<div className='flex justify-evenly  w-4/5 h-18  sm:inline-flex sm:gap-3 items-center ring-1 ring-slate-300 sm:p-1 rounded'> 
    
        <img className='size-15 sm:w-20 sm:h-15 rounded object-cover  ring-1' src={props.img} alt="" /> 
<p className='capitalize text-sm sm:text-md font-bold'>free service</p>
</div>

)

}