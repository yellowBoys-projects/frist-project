import Img from '../assets/frame.png'

export default function Product(){
    return(
        <>
        <section className='my-5 '>
            <h2 className='text-xl capitalize pl-[5%]'>products</h2>
            <div className='my-5 grid grid-cols-2 p-1 gap-5 sm:grid-cols-3 sm:p-0 sm:gap-3 md:grid-cols-4 lg:grid-cols-5'>
                <Card img={Img}/>
                <Card img={Img}/>
                <Card img={Img}/>
                <Card img={Img}/>
                <Card img={Img}/>
                <Card img={Img}/>
                <Card img={Img}/>
                <Card img={Img}/>
                <Card img={Img}/>

            </div>
            </section>
            </>
    )
}

function Card(props){
    return(
        <>
        <div className='ring-1 ring-slate-300 py-3 w-40 h-max mx-auto'>
            <img src={props.img} alt="" className='size-20 object-center  mx-auto mb-2 '/>
            <div className='text-center'>
                <h6 className='capitalize text-sm  font-bold py-1 sm:text-sm'>iphone 10 pro</h6>
                <p className='text-xs'>12 ram 1Tb storeage....</p>
                <div className='flex justify-center font-bold mt-1  text-xs sm:gap-2'><p><span>&#8377;</span> 120 | <span>89</span>%</p><p><del><span>&#8377;</span> 120 | <span>89</span>%</del></p></div>
            </div>
        </div>
        </>
    )
}