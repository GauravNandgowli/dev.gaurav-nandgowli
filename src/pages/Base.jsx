import React from "react";

function Base() {
  return (
    <div className="flex flex-col text-left w-1/2 md:w-64 pr-2 text-sm md:text-xl lg:text-2xl tracking-wider">
      <hr className="border-[#c9f2a9] mb-2 md:mb-4" />
      <span className="mb-2 md:mb-4">Base</span>
      <span className="leading-tight">Banglore, KA</span>
      <span className="leading-tight">Hyderabad, TS</span>
    </div>
  );
}

export default Base;
