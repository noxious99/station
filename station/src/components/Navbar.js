import React, { useState } from "react";
import Logo from "../asset/untitled.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/Login"> Login </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/Login"> Login </Link>
        <button onClick={toggleNavbar}>
        < FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default Navbar;