import React from "react";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaRedditSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import "../styles/footer.css";

function Footer() {
  return (
    
    <div className="footer">
      <div className="socialMedia">
       <FaFacebookSquare/> <FaRedditSquare/> <FaLinkedin/>
      </div>
      <p> &copy; 2022 Sa'ad</p>
    </div>
    
  );
}

export default Footer