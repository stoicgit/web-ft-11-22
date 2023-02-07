import "./Footer.css";
import ReactLogo from "../../assets/react.svg";

const Footer = (props) => {
  return (
    <div className="footerBody">
      <h2>Footer</h2>
      <p>{props.studentName}</p>
      <img src={ReactLogo} alt="React Logo" />
      <h2>This is Apps counter: {props.counter}</h2>
    </div>
  );
};

export default Footer;
