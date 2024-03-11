import "./HomeHeading.css";
import videoCall from "../Images/videoCall.jpg"

export default function(){

    return (
        <>
            <div className="mainBox ">
                <div className="mainLeft container">
                    <div className="mainHeading">
                        <h1>Engaging and collaborative web conferencing
                            <b className="auto-text"></b>
                        </h1>
                    </div>
                    <div className="mainDesc">
                        <h3>
                        
                        {/* Our platform offers customizable meeting rooms, real-time collaboration tools, and advanced security measures to enhance productivity and creativity.<br/><br/> */}
                        Simplified online meeting software with enterprise-grade security _ perfect for a work-wherever world.
                        </h3>
                    </div>
                    <div className="mainButtons">
                        <span className="loginn">Login</span>
                        <span className="Signn">SignUp</span>
                    </div>
                </div>
                <div className="mainRight">
                    <div className="img">
                        <img src={videoCall} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}