import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      {/* first line */}
      <div className="footerLine">
        {" "}
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="">Jobs</a>
        <a href="">Help</a>
        <a href="">API</a>
        <a href="">Privacy</a>
        <a href="">Impressum/Terms/NetzDG </a>
        <a href="">TopAccounts</a>
        <a href="">Hashtags</a>
        <a href="">Locations</a>
      </div>
      {/* 2nd Line */}
      <div className="footerLine">
        <a href="">Beauty</a>
        <a href="">Dance</a>
        <a href="">Fitness</a>
        <a href="">Food&Drink</a>
        <a href="">Home&Garden</a>
        <a href="">Music</a>
        <a href="">VisualArts</a>
      </div>

      <span> © {year} Instagram from Facebook</span>
    </div>
  );
};

export default Footer;
