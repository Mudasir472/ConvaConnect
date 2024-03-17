import FeaturesBox from "./FeaturesBox";
import "./Features.css"
export default function (){
    
    return(
        <div className="features container d-flex flex-column justify-contant-centre align-items-center">
            <div className="featuresHeading">
                <h2>There's lots to love about ConvoConnect Meeting</h2>
            </div>
            <div className="featuresDesc">
                <p>Fully loaded with features designed to give you the best web conferencing experience ever.</p>
            </div>
            <div className="featuresMainBox d-flex flex-wrap justify-content-between align-items-center">
                <FeaturesBox logo={<i className="bi bi-camera-reels-fill"></i>} heading="Video Meetings" L1="HD video" L2="Preview your webcam" L3="Screen sharing" L4="In-session chat" L5="Drawing tools" L6=""/>
                <FeaturesBox logo={<i className="bi bi-camera-reels-fill"></i>} heading="Enhance Audio" L1="Crystal clear audio" L2="Background noise suppression" L3="Mobile conferencing" L4="Conference calling" L5="Dial out" L6=""/>
                <FeaturesBox logo={<i className="bi bi-camera-reels-fill"></i>} heading="Latest Security" L1="Single sign-on" L2="Encrypted sessions" L3="Meeting lock" L4="Dismiss attendees" L5="End-to-end encryption" L6=""/>
                <FeaturesBox logo={<i className="bi bi-camera-reels-fill"></i>} heading="Account Management" L1="Seamless integrations" L2="Client Communication" L3="Relationship Building" L4="Customer Feedback" L5="Continuous Improvement" L6=""/>
            </div>
        </div>
    )
}