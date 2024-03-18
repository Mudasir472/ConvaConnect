import "./AboutHeading.css";
export default function ({aboutHead,aboutDesc}) {
    return (
        <div className="aboutHeading1">
            <div className="aboutHeading">
                <h1>{aboutHead}</h1>
            </div>
            <div className="aboutDesc">
                <p>{aboutDesc}</p>
            </div>
        </div>
        
    )
}