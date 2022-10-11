import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Nopagefound from "./Components/Page-not-found/Nopagefound";
import Questions from "./Components/Questions/Questions";
import Statistics from "./Components/Statistics/Statistics";
import Main from "./Layout/Main";

function App() {
  const [topics, settopics] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => settopics(data.data));
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home topics={topics}></Home>,
        },
        {
          path: "/questions/:questionID",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.questionID}`
            );
          },
          element: <Questions></Questions>,
        },
        {
          path: "/statistics",
          element: <Statistics data={topics}></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: <Nopagefound></Nopagefound>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
