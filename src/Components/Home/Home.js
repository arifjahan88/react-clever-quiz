import React from "react";
import Header from "../Header/Header";
import Topics from "../Topics/Topics";

const Home = ({ topics }) => {
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 mt-10 p-10">
        {topics.map((topic) => (
          <Topics key={topic.id} topic={topic}></Topics>
        ))}
      </div>
    </div>
  );
};

export default Home;
