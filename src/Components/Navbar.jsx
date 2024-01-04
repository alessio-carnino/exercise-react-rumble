import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

export default () => {
  let users = [
    { email: "ale@gmail.com", password: "ciao123" },
    { email: "anna@gmail.com", password: "hello123" },
  ];

  //   SIGN UP ---------------------------------------------------
  const [openSignUpModal, setOpenSignUpModal] = useState();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const newUser = {
    email: { newEmail },
    password: { newPassword },
  };

  //   SIGN IN ---------------------------------------------------
  const [openSignInModal, setOpenSignInModal] = useState();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const userLogin = {
    email: { loginEmail },
    password: { loginPassword },
  };

  const [isLogedin, setIsLogedin] = useState();

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button>
            <RxHamburgerMenu />
          </button>
          <img
            src="https://rumble.com/img/rumble-full-logo-v4.svg"
            alt="logo"
          />
        </div>

        <div className="nav-center">
          <Searchbar />
        </div>

        <div className="nav-right">
          {isLogedin === true ? (
            <>
              <div>
                <NavLink to="/" className="navlink">
                  Home
                </NavLink>
                <NavLink to="/about" className="navlink">
                  About
                </NavLink>
              </div>
              <h5>{`Hi ${loginEmail}`}</h5>
            </>
          ) : (
            <div className="nav-buttons-wrapper">
              <button
                className="sign-in-btn"
                onClick={() => setOpenSignInModal(!openSignInModal)}
              >
                Sign In
              </button>

              <button
                className="sign-up-btn"
                onClick={() => setOpenSignUpModal(!openSignUpModal)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* SIGN UP MODAL ------------------------------------------------------------------------------ */}

      <div
        className={openSignUpModal === true ? "sign-up-modal" : "display-none"}
      >
        <div className="sign-up-form">
          <IoMdClose
            className="close-icon"
            onClick={() => setOpenSignUpModal(!openSignUpModal)}
          />
          <h3>Create a new account</h3>
          <label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            Email
          </label>
          <label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            Password
          </label>
          <button
            onClick={() => {
              users.push(newUser);
              setOpenSignUpModal(!openSignUpModal);
              setIsLogedin(true);
              console.log(users);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* SIGN IN MODAL ------------------------------------------------------------------------------ */}

      <div
        className={openSignInModal === true ? "sign-in-modal" : "display-none"}
      >
        <div className="sign-in-form">
          <IoMdClose
            className="close-icon"
            onClick={() => setOpenSignInModal(!openSignInModal)}
          />
          <h3>Login</h3>
          <label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            Email
          </label>
          <label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            Password
          </label>
          <button
            onClick={() => {
              if (
                users.some(
                  (userLogin) =>
                    userLogin.email === loginEmail &&
                    userLogin.password === loginPassword
                )
              ) {
                setLoginMessage("");
                setOpenSignInModal(!openSignInModal);
                setIsLogedin(true);
              } else {
                setLoginMessage("Login not valid");
              }
            }}
          >
            Sign In
          </button>

          <h4>{loginMessage}</h4>
        </div>
      </div>
    </>
  );
};
