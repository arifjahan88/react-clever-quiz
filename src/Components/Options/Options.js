import React from "react";
import "./Options.css";
const Options = ({ options, carrectanswer }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 mt-5">
          {options.map((data) => (
            <button
              onClick={() => carrectanswer(data)}
              className="make-hover font-mono m-2 px-5 py-3 text-sky-800 text-center bg-lime-300 rounded-lg "
            >
              <div>{data}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;
