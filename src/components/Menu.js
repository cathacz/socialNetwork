import instagramLogo from "..//InstagramLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCompass,
  faHeart,
  faHome,
  faPaperPlane,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const home = <FontAwesomeIcon icon={faHome} />;
const paperPlane = <FontAwesomeIcon icon={faPaperPlane} />;
const compass = <FontAwesomeIcon icon={faCompass} />;
const heart = <FontAwesomeIcon icon={faHeart} />;
const circle = <FontAwesomeIcon icon={faCircle} />;
const search = <FontAwesomeIcon icon={faSearch} />;

const Menu = () => {
  return (
    <menu>
      {" "}
      <div className="menu">
        {/* logo >> left */}
        <div className="insta">
          <img src={instagramLogo} alt="Instagram lettering Logo" />
        </div>

        {/* search bar >> center */}
        <div className="search">
          <input
            type="text"
            // value={userInput}
            placeholder="src={search}search"
          ></input>
        </div>
        {/* home/messages/something/heart/profile >> right */}
        <div className="icons">
          <i>{home}</i>
          <i>{paperPlane}</i>
          <i>{compass}</i>
          <i>{heart}</i>
          <i>{circle}</i>
        </div>
      </div>
    </menu>
  );
};
export default Menu;
