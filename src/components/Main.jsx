import React from "react";

const Main = () => {
  return (
    <main className="p-8 pt-0 overflow-hidden">
      <h1 className="text-6xl text-white font-bold my-8">
        Fun facts about React
      </h1>
      <ul className="text-white list-disc marker:text-cyan-400 mt-16 pl-24 text-4xl gap-6 flex flex-col">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps!</li>
      </ul>
      <img
        className="w-[35rem] absolute -right-56 top-56 -z-20 opacity-10 grayscale"
        src="react.svg"
      />
    </main>
  );
};

export default Main;
