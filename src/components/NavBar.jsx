import React from "react";

function NavBar() {
  return (
    <nav className="mt-6 md:mt-10 w-full flex justify-center">
      <ul className="flex flex-col text-left gap-3 text-xl md:text-2xl tracking-wider">
        <li className="cursor-pointer hover:text-white transition-colors duration-200">
          /About
        </li>
        <li className="cursor-pointer hover:text-white transition-colors duration-200">
          /Projects
        </li>
        <li className="cursor-pointer hover:text-white transition-colors duration-200">
          /Resume
        </li>
        <li className="cursor-pointer hover:text-white transition-colors duration-200">
          /Contact
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
