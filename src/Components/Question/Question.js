import React from "react";
import Options from "../Options/Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ datas }) => {
  const showrightanswer = (rightans) => {
    const rrr = rightans.correctAnswer;
    toast.info("Right Answer : " + rrr);
  };

  const carrectanswer = (getdata) => {
    const rightans = datas.find((data) => data.correctAnswer === getdata);
    if (rightans) {
      toast.success("Oaww! You Clicked Right Answer.");
    } else {
      toast.error("Sorry! This is Wrong Answer.");
    }
  };
  return (
    <div>
      {datas.map((data) => (
        <div className="bg-yellow-100 m-4 p-5 rounded-lg">
          <div className="flex justify-end">
            <button onClick={() => showrightanswer(data)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          <h2 className="font-bold text-xl px-7">{data.question}</h2>

          <Options
            key={data.id}
            options={data.options}
            carrectanswer={carrectanswer}
          ></Options>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </div>
  );
};

export default Question;
