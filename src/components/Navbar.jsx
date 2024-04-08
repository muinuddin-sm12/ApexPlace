import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="navbar bg-base-100 max-w-[1536px] mx-auto px-10 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          Apex<span className="text-sky-400">Place</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base flex items-center gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/update-profile"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                : "text-black"
            }
          >
            Update Profile
          </NavLink>
          <NavLink
            to="/user-details"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                : "text-black"
            }
          >
            User Details
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                    : "text-black"
                }
              >
                About
              </NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
              <div className="w-12 rounded-full  border-4 tooltip  tooltip-bottom" data-tip={user?.displayName || "user name not found"}>
                <img className="rounded-full" src={user?.photoURL || "#"} />
              </div>
            <button onClick={logOut} className="btn btn-sm text-white text-base bg-sky-400">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm text-base text-white bg-sky-400">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
