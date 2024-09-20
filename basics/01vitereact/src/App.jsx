import React, { useState } from "react";
import Test from "./Test";

function App() {
  const [name, useName] = useState("Shubham");
  return (
    <>
      <h1>hello world</h1>
      <Test name={name} />
    </>
  );
}

export default App;
