import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default () => {
  let users = [
    { email: "ale@gmail.com", password: "ciao123" },
    { email: "anna@gmail.com", password: "hello123" },
  ];

  const [openSigninModal, setOpenSigninModal] = useState();

  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newUser, setNewUser] = useState([]);

  return (
    <>
      <div
        className={openSigninModal === true ? "sign-in-modal" : "display-none"}
      >
        <div className="sign-in-form">
          <IoMdClose
            className="close-icon"
            onClick={() => setOpenSigninModal(!openSigninModal)}
          />
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
              setNewUser({ email: newEmail, password: newPassword });
              users.push();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};
