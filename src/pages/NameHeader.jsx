import React from "react";
import gauravNandgowli from "../assets/gauravNandgowli.svg";

function NameHeader() {
  return (
    <header className="w-full flex justify-center px-4 md:px-0 mt-12 md:mt-24">
      <img
        src={gauravNandgowli}
        alt="Gaurav Nandgowli"
        className="w-full h-auto max-w-[721px]"
      />
    </header>
  );
}

export default NameHeader;
