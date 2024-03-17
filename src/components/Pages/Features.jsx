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
                <FeaturesBox logo={<i className="bi bi-camera-reels-fill"></i>} heading="Video Meetings" L1="HD video" L2="Preview your webcam" L3="Screen sharing" L4="In-session chat" L5="Drawing tools" L6=""/>
                <FeaturesBox logo={<i className="bi bi-camera-reels-fill"></i>} heading="Video Meetings" L1="HD video" L2="Preview your webcam" L3="Screen sharing" L4="In-session chat" L5="Drawing tools" L6=""/>
                <FeaturesBox logo={<i className="bi bi-camera-reels-fill"></i>} heading="Video Meetings" L1="HD video" L2="Preview your webcam" L3="Screen sharing" L4="In-session chat" L5="Drawing tools" L6=""/>
            </div>
        </div>
    )
}