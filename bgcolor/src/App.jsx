import { useState } from "react";
import BgColorChange from "./components/BgColorChange";

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0">
        <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2     md:space-y-0">
          <button
            onClick={() => setColor("black")}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Black
          </button>
          <button
            onClick={() => setColor("yellow")}
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("red")}
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Red
          </button>
          <button
            type="button"
            onClick={() => setColor("green")}
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Green
          </button>
          <button
            type="button"
            onClick={() => setColor("purple")}
            className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
