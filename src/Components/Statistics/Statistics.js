import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const maindata = useLoaderData();
  console.log(maindata);
  return (
    <div>
      <h2>This is Statistical Page : {maindata.length}</h2>
    </div>
  );
};

export default Statistics;
