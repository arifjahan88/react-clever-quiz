import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  const { id, logo, name } = topic;
  return (
    <div>
      <div className="card w-100 bg-slate-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} alt="logo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-cyan-500">
            {name}
          </h2>

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
