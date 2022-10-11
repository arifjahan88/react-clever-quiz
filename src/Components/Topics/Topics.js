import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  console.log(topic);
  const { id, logo, name, total } = topic;
  return (
    <div>
      <div className="card w-100 shadow-xl m-10">
        <figure className="p-5">
          <img src={logo} alt="logo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-cyan-500">
            {name}
          </h2>
          <p className="font-serif text-xs text-purple-500">
            Total Question : {total}
          </p>

          <div>
            <p className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <Link to={`/questions/${id}`}>Start Quiz</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
