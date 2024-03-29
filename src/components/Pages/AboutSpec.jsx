import specImg from "./Images/image1.png";
import mainImg from './Images/videoC.jpg';
import "./AboutSpec.css";
export default function () {
    return (
        <div className="mainSpec d-flex justify-content-center flex-column align-items-center">

            <div className="mainImg mt-5 mb-5">
                <img src={mainImg} alt="" />
            </div>
            <div className="mainSpecc d-flex justify-content-center align-items-center">
                <div className="mainSpecLeft container d-flex justify-content-center align-items-center flex-column">
                    <div className="SpecHeading">
                        <h1>It's not about where or when you work. It's about how you get it done.</h1>
                    </div>
                    <div className="specdesc">
                        <div className="desc1">
                            <p>In a flexibility-first world, great work can happen anywhere. That mindset has helped us fulfill the promise of reliability, connection, and simplicity for tens of millions of people, and in turn, has helped us become one of the world's largest SaaS companies – with more than 3,500 global employees, over $1.3 billion in annual revenue and tens of millions of users.</p>
                        </div>
                        <div className="desc2">
                            <p> Today, we’re the trusted partner for companies of all sizes to connect, collaborate, secure their workforces, and support employees and customers. Our portfolio of products, including GoTo Connect and Rescue, helps:</p>
                        </div>
                        <div className="desc3">
                            <p>
                                <li><b>People,</b> by letting them work securely from wherever they need to, keeping them happy, safe, and productive.</li>
                                <li><b>Businesses</b>, by guaranteeing continuity in the face of disruptions, accelerating their ability to reduce costs and hit sustainability goals.</li>
                                <li><b>Everyone</b>, by delivering flexible tools built for navigating work and life easily.
                                </li>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mainSpecRight">
                    <img src={specImg} alt="" />
                </div>
            </div>

        </div>
    )
}