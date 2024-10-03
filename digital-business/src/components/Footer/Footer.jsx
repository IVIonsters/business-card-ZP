/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/IVIonstersRUS" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://facebook.com/ZacharyPolof" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://instagram.com/zpolof" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://github.com/IVIonsters" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div>
  );
}

export default Footer;
