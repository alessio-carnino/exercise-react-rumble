import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button>
          <RxHamburgerMenu />
        </button>
        <img src="https://rumble.com/img/rumble-full-logo-v4.svg" alt="logo" />
      </div>

      <div className="nav-center">
        <div className="search-wrapper">
          <input type="text" />
          <CiSearch className="search-btn" />
        </div>
      </div>

      <div className="nav-right">
        <button
          className="sign-in-btn"
          onClick={() => setOpenSigninModal(!openSigninModal)}
        >
          Sign In
        </button>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </nav>
  );
};
