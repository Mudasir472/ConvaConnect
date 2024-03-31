import './ContactBottom.css';

export default function ({ aboutMain, aboutMainDesc }) {
    return (
        <div className="ContactBottom">
            <div className="ContactBottomHead">
                <h1>{aboutMain}</h1>
            </div>
            <div className="contactBot">
                <h5>{aboutMainDesc}</h5>
            </div>
        </div>
    );
}