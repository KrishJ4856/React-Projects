import React, { useState } from "react";
import '../assets/main.css'

export default function Search({ generateResults }) {
  const [inputText, setInputText] = useState("");
  return (
    <div id="Search" className="w-full h-[20%] flex justify-center items-center">
      <div id="SearchBox" className="m-5 flex flex-row p-3 justify-center items-center border-b-2 border-solid border-green-500">
        <input
          type="text"
          placeholder="Enter Image Term"
          onChange={(e) => setInputText(e.target.value)}
          className="outline-none p-3"
        />
        <button onClick={() => generateResults(inputText)} className="bg-green-500 font-bold text-white p-3 rounded-lg">Search</button>
      </div>
    </div>
  );
}
