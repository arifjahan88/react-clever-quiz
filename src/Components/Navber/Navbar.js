import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="drop-shadow-md">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start lg:mb-0 mb-32">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl ml-28 lg:ml-64">
            <span className="text-amber-500 font-bold text-3xl">Clever</span>
            <span className="text-blue-600 font-bold text-3xl ml-2"> Quiz</span>
          </p>
        </div>
        <div className="navbar-end hidden lg:flex mx-36">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/" className="font-bold text-xl text-emerald-500">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                to="/questions"
                className="font-bold text-xl text-emerald-500"
              >
                Questions
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className="font-bold text-xl text-emerald-500"
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-bold text-xl text-emerald-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
