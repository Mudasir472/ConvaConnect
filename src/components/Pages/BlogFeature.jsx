export default function ({img , info}){
    return(
        <div className="featurecontent">
            <div style={{boxShadow: "#a7a2a2 8px 21px 32px 12px"}} className="card">
                <div className="img">
                    <img style={{width : "384px"}} src={img} alt="" />
                </div>
                <div className="info">
                    <p style={{width : "22rem",marginBottom : "0!important"}}>{info}</p>
                </div>
            </div>
        </div>
    );
}