import React from "react";

const Header = () => {
  return (
    <div>
      <div
        className="hero w-100 bg-no-repeat bg-cover drop-shadow-2xl"
        style={{
          backgroundImage: `url("https://64.media.tumblr.com/94e2ae9387dfc7011db5390803e60edc/tumblr_p4riaxallb1w8fu05o1_1280.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-100"></div>
        <div className="hero-content text-left p-28">
          <div className="text-white">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-xl">
              It is an app for quizzes. where anyone can take the quiz and pass
              the time. It was created using web development. Here is a list of
              web development-related questions and answers. So, I think
              everyone enjoy it's lot.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
