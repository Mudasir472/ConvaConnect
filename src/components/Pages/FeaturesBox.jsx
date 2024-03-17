export default function({icon,heading,L1,L2,L3,L4,L5,L6}){
    return(
        <div className="featureBox d-flex flex-column justify-centre align-items-centre">
            <div className="boxLogo">
                {/* {icon} */}
                <i className="bi bi-camera-reels-fill"></i>
            </div>
            <div className="boxHeading">
                <h3>{heading}</h3>
            </div>
            <div className="listItems">
                <ul style={{flexDirection: "column",cursor : "default",alignItems: "start"}}>
                <li >{L1}</li>
                <li>{L2}</li>
                <li>{L3}</li>
                <li>{L4}</li>
                <li>{L5}</li>
                <li>{L6}</li>
                </ul>
            </div>
        </div>
    )
}