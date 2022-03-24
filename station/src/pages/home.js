import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../asset/render_12.png";
import Logo from "../asset/untitled.png";
import "../styles/Home.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCalendar} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookSquare } from 'react-icons/fa';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
         <h1> Stance </h1>
        <Link to="/Trending">
          <button> Trending </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;