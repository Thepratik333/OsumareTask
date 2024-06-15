import React from "react";
import OsumareLogo from "../../assets/OsumareLogo.png";
import svg from "../../assets/customerservice2fill1.svg";

function Header() {
  return (
    <nav className="flex justify-between px-10">
      <img src={OsumareLogo} alt="" />

      <div className="p-3 flex justify-center items-center">
        <a className="[text-decoration:none] md:px-10 px-5 py-3 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out rounded-full border-2 border-black">
          Contact us
        </a>
      </div>
    </nav>
  );
}

export default Header;
