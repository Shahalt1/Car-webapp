import "./Hero.css";
import pause_icon from "../assets/pause_icon.png";
import play_icon from "../assets/play_icon.png";

const Hero = ({ setPlayStatus, setHeroCount, playStatus }) => {
  return (
    <div>
      <div>
        <ul>
          <li className="hero-dot" onClick={() => setHeroCount(0)}></li>
          <li onClick={() => setHeroCount(1)}></li>
          <li onClick={() => setHeroCount(2)}></li>
        </ul>
      </div>
      <div>
        <p>see video</p>
        <img
          onClick={() => setPlayStatus(!playStatus)}
          src={playStatus ? pause_icon : play_icon}
        />
      </div>
    </div>
  );
};

export default Hero;
