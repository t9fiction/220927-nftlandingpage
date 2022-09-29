import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar_logo">
        <h1>NFTERS</h1>
      </div>

      <div className="app__navbar_links">
        <ul>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Resource</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>

      <div className="app__navbar_search">
        <div className="search">
          <input type="text" placeholder="Search" />
          <AiOutlineSearch className="search__icon" />
        </div>
      </div>

      <div className="app__navbar_button">
        <button className="button_1">Upload</button>
        <button className="button_2">Connect Wallet</button>
      </div>
      <div className="app__navbar_smallscreen">
        <GiHamburgerMenu
          color="#3D00B7"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar_smallscreen_overlay flex__center slide-bottom">
            <MdClose
              className="overlay__close"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar_smallscreen_links">
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Resource</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
