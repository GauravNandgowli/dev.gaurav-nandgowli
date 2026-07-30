import React from "react";
import NavBar from "../components/NavBar";
import Base from "./Base";
import Focus from "./Focus";
import NameHeader from "./NameHeader";

function LandingPage() {
  return (
    <main className="w-full min-h-[100dvh] md:h-[100dvh] md:overflow-hidden flex flex-col items-center justify-between md:justify-center p-4 md:py-4">
      <div className="flex-grow md:hidden"></div>

      <div className="w-full flex flex-col items-center">
        <NameHeader />

        <h3 className="text-2xl md:text-4xl  tracking-widest mt-6 md:mt-4">
          SOFTWARE ENGINEER
        </h3>

        <NavBar />

        <section className="w-full max-w-4xl p-16 flex flex-row justify-between gap-4 mt-12 md:mt-8">
          <Base />
          <Focus />
        </section>
      </div>

      <div className="flex-grow md:hidden"></div>
    </main>
  );
}

export default LandingPage;
