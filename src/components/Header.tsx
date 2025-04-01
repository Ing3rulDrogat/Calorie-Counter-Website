import React from "react";
import "./Header.css";
import DefaultPng from "../Png/DefaultAccount.png";

function Header() {
  return (
    <>
      <div className="header-div">
        <div>
          <input type="button" value="hi" />
        </div>
        <div className="greetings-div">
          <p>Hello, Mihai</p>
        </div>
        <div>
          <img src={DefaultPng} className="account-png"></img>
        </div>
      </div>
    </>
  );
}

export default Header;
