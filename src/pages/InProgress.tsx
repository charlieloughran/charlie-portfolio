import "../styles/InProgress.css";
import SiteLogoDark from "../assets/charlie-light.png";


const InProgress = () => {
  return (
    <div className="in-progress-wrapper">
        <div className="in-progress-logo">

            <img src= {SiteLogoDark} alt="Charlie"></img>

        </div>
      <div className="in-progress-content">
        <h1>Time for an upgrade</h1>
        <p>Portfolio site inbound... soon</p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

      </div>
    </div>
  );
};

export default InProgress;
