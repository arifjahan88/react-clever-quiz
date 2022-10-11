import React from "react";
import Options from "../Options/Options";

const Question = ({ datas }) => {
  return (
    <div>
      {datas.map((data) => (
        <div className="bg-yellow-100 m-4 p-5 rounded-lg">
          <h2 className="font-bold text-xl">{data.question}</h2>

          <Options key={data.id} datas={data.options} correct={data}></Options>
        </div>
      ))}
      <h2>This is question part</h2>
    </div>
  );
};

export default Question;
