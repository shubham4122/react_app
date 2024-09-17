import React, { useState } from "react";
import Agenda from "./components/agenda";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Agenda Maker
      </h1>
      <Agenda />
    </>
  );
}

export default App;
