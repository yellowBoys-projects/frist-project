import Img from '../assets/iphone.png'
import {Card} from './Trend.jsx'

export default function Lanch(){
    return(
        <>
        <section className='my-5'>
            <h2 className='text-md font-bold pl-[5%]  capitalize sm:pl-5'>new  lanch </h2>
<div className='grid  overflow-x-auto    py-[1rem] grid-flow-col px-2 gap-3'>
<Card img={Img}/>
<Card img={Img}/>

</div>
<div className=''>

</div>
        </section>
        </>
    )
}

function SmallCard(props){
    return(
        <>
        <div className='flex   ring-1 ring-slate-300  '>
            <img src={props.img} alt="" className='w-auto h-28 object-cover mx-auto' />
            <div className=''>
                <h1 className='text-md capitalize font-bold text-red-500'>new lanch</h1>
                <h3 className='font-bold text-md'>iphone</h3>
                <p className='capitalize text-sm'>12 ram 1Tb store...</p>
                <button className='w-fit px-4 py-1 bg-slate-800 text-white  font-bold rounded mt-3'>view</button>
            </div>
        </div>
        </>
    )
}

function BigCard(props){
    return(
        <>
        <div className=' flex ring-1 w-1/2 mx-auto my-5  '> 
            <img src={props.img} alt="" className=' object-cover w-[2rem] h-auto ' />
            <div className='flex '>
                <h4 className='text-[1.3rem] text-red-500 font-bold capitalize'>iphone 10 pro</h4>
                <p className='text-md'>8 ram 256 store.......</p>
                <h6 className='text-md'><span className='font-bold text-lg '>&#8377;</span> 1,50,000</h6>
<button className='capitalize font-bold  bg-indigo-500 text-white w-fit px-3 mt-5 text-2xl'>live sale</button>
            </div>
            <div className='w-full mx-auto bg-indigo-500 text-white rounded '>
                <h5 className='font-bold capitalize text-xl '>lanch date</h5>
                <p className='capitalize font-bold text-md'><span>10-07-2030</span><span> wendesday july </span></p>
                <h6 className='text-2xl font-bold text-red-500 capitalize'>flash sale</h6>

            </div>
        </div>
        </>
    )
}