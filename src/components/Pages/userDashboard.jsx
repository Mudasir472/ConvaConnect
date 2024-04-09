import img from './Images/dashImg.jpg'
import './userDashboard.css'
export default function () {
    return (
        <div className="dashboard">
            <h1>Welcome to <span style={{ color: "blue" }}>ConvoConnect</span></h1>
            <img src={img} alt="" />
            <div className="but">
                <button><a href="./actualWork/Actual.html">Continue</a></button>
            </div>
        </div>
    )
}