import React from "react";
import '../assets/main.css'

export default function Results({ results }) {
  console.log(results);
  return (
    <div id="Results" className="w-full h-[80%] flex flex-col flex-wrap justify-center items-center">
      {results ? (
        <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
          {results.hits.map((hit) => {
            return (
              <div id="imageBox" className="border-2 border-solid border-black p-5 mr-2 mb-2 w-[400px] flex justify-center items-center flex-col">
                <img src={hit.previewURL} alt={hit.id} className="w-[300px] h-[200px]" />
                <h2>By: {hit.user}</h2>
                <h2>Views: {hit.views}</h2>
                <h2>Downloads: {hit.downloads}</h2>
                <h2>Tags: {hit.tags.split(",").map(tag => <div className="bg-slate-400 font-bold w-fit h-fit p-2 inline-block mr-2">{tag}</div>)}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-2xl text-slate-600 relative top-10">Loading</h1>
      )}
    </div>
  );
}
