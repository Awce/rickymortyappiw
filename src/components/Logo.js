import { Link } from "react-router-dom";
import logo from "../assets/ricklogo.png";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" width="250px" />
      </Link>
    </>
  );
};

export default Logo;
