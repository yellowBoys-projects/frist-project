import Brand01 from '../assets/brand-1.png'
import Brand02 from '../assets/brand-2.png'
import Brand03 from '../assets/brand-3.png'
import Brand04 from '../assets/brand-4.png'


export default function Brand(){
    return(
        <>
        <section>
            <h2>top brands</h2>
            <div>
                <Card img={Brand01}/>
                <Card img={Brand02}/>
                <Card img={Brand03}/>
                <Card img={Brand04}/>

            </div>
        </section>
        </>
    )
}

function Card(props){
    return(<img src={props.img} alt="" /> )
}