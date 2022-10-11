import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-center">
      <div className="lg:w-3/6">
        <Question key={data.data.id} datas={data.data.questions}></Question>
      </div>
    </div>
  );
};

export default Questions;
