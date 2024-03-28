import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/applied-jobs">Applied Jobs</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 font-medium opacity-85">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-blue-400 font-semibold to-purple-600 bg-clip-text text-transparent"
                : ""
            }
            to="/statistics">
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-blue-400 font-semibold to-purple-600 bg-clip-text text-transparent"
                : ""
            }
            to="/applied-jobs">
            Applied Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold "
                : ""
            }
            to="/blogs">
            Blogs
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-gradient-to-r from-blue-400 to-purple-600">
          Start Applying
        </a>
      </div>
    </div>
  );
};

export default NavBar;
