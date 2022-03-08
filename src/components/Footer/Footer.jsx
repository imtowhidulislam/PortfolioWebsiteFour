import "./Footer.scss";
import { FaMegaport, FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="F_footer" id="footer">
      <div className="logo__footer">
        <FaMegaport />
      </div>
      <footer className="footer">
        <span>All</span> <FaCopyright />{" "}
        <span>copyrights reserved to Towhidul Islam </span>
      </footer>
    </div>
  );
};

export default Footer;
