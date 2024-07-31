import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pwd, setPwd] = useState("");

  const pwdGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPNQRSTUWVXYZabcdefghijklmnopqrstuvwxvyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*(){}[]-_~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPwd(pass);
  }, [length, numAllowed, charAllowed, setPwd]);

  useEffect(() => {
    pwdGenerator();
  }, [length, numAllowed, charAllowed, setPwd]);

  const inputRef = useRef(null);

  const copyPWD = useCallback(() => {
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(pwd);
  }, [pwd]);
  
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-xl px-8 py-4 my-8 text-orange-400 text-center bg-gray-700">
        <h1 className="mb-4 font-semibold">Password Generator</h1>
        <div className="flex shadow-lg, rounded-lg mb-4">
          <input
            type="text"
            value={pwd}
            className="outline-none rounded-lg w-full p-4 py-1"
            placeholder="Password"
            readOnly
            ref={inputRef}
          />
          <button
            type="button"
            className="rounded-xl mx-1 bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            onClick={copyPWD}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2     md:space-y-0">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex flx-col items-center gap-x-0">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numInput" className="text-white mx-1">
              Numbers
            </label>
          </div>
          <div className="flex flx-col items-center gap-x-0">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="text-white mx-1">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
