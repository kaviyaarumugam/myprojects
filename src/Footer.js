import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer(){
  return (
    <footer>
      <div className="footer-content">
        <div className="address">
          <h1>Farm Fresh</h1>
          <p><FaMapMarkerAlt /> No. 14, Reddy Street, Nerkundram, Chennai, Tamil Nadu, 600107</p>
          <p><FaPhoneAlt /> &nbsp; 44440055768</p>
          <p><IoMail />&nbsp;support@farmfresh.in</p>
        </div>
        <div className="links">
            <p>Our Links</p>
            <br></br>
            
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="links1">
            <p>More Links</p>
            <br></br>
          <ul>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="social-media">
            <p>Follow us on</p>
            <br></br>
          <ul>
            <li><FaTwitter />&nbsp;&nbsp;<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><BsInstagram />&nbsp;&nbsp;<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><FaFacebookSquare />&nbsp;&nbsp;<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><FaLinkedin />&nbsp;&nbsp;<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p>&copy; 2023 Farm Fresh</p>
    </footer>
  );
};

export default Footer;
