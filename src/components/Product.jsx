import Img from '../assets/frame.png'

export default function Product(){
    return(
        <>
        <section className='my-5 '>
            <h2 className='text-xl capitalize text-center'>products</h2>
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
        <div className='ring-1 ring-slate-300 py-1'>
            <img src={props.img} alt="" className='size-28 mx-auto mb-2 '/>
            <div className='sm:pl-3'>
                <h6 className='capitalize text-sm  font-bold py-1 sm:text-sm'>iphone 10 pro</h6>
                <p classNam='text-sm '>12 ram 1Tb storeage....</p>
                <div className='flex font-bold text-sm text-xs sm:gap-2'><p><span>&#8377;</span> 120 | <span>89</span>%</p><p><del><span>&#8377;</span> 120 | <span>89</span>%</del></p></div>
            </div>
        </div>
        </>
    )
}