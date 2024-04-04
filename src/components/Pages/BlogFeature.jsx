export default function ({img , info}){
    return(
        <div className="featurecontent">
            <div style={{boxShadow: "#a7a2a2 8px 21px 32px 12px"}} className="card">
                <div className="img">
                    <img style={{width : "384px"}} src={img} alt="" />
                </div>
                <div className="info">
                    <h2>{info}</h2>
                </div>
            </div>
        </div>
    );
}