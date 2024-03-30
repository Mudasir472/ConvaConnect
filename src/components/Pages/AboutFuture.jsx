
import './AboutFuture.css'
import img from './Images/AboutFuture.png'
export default function(){
    return(
        <>
            <div className="aboutFuture d-flex justify-content-center align-items-center mt-5 mb-5">
                <div className="left">
                    <img src={img} alt="" />
                </div>
                <div className="right d-flex justify-content-start flex-column align-items-start">
                    <div className="heading">
                        <h3>The future of work is now</h3>
                    </div>
                    <div className='para' >
                        <p style={{width: "80%"}}>We're witnessing an evolution of the modern workforce, and the revolution of the modern workplace. GoTo is at the forefront, ready to help everyone take on all challenges, including:</p>
                        <p className='ullist d-flex flex-column align-items-start'>
                            <li>Facilitating flexible, hybrid and remote work policies</li>
                            <li>Providing seamless, on-demand support and assistance</li>
                            <li>Delivering powerful collaboration tools and cybersecurity products</li>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}