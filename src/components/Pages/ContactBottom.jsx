import './ContactBottom.css';

export default function ({ aboutMain, aboutMainDesc }) {
    return (
        <div className="ContactBottom">
            <div className="ContactBottomHead">
                <h3>{aboutMain}</h3>
            </div>
            <div className="contactBot">
                <h6>{aboutMainDesc}</h6>
            </div>
        </div>
    );
}