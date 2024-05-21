import * as React from "react";
import "../../index.css";
import logo from "../../public/logo.png";

function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div><a href="/" className="text-white font-bold text-xl">Survey App </a> </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/createSondage" className="text-white hover:text-gray-300">Create Survey</a></li>
          <li><a href="/Sondages" className="text-white hover:text-gray-300">Surveys</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
          
        </ul>
        </div>
      </nav>
  );
}

export default Nav;
