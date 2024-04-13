import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const notify = () => toast.warn("Successfully LogOut!");
  const [isOpen, setIsOpen] = useState(false);

  // console.log(user);
  const handleLogOut = async () => {
    await logOut();
    notify();
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar bg-base-100 max-w-[1536px] mx-auto px-4 md:px-10 py-5 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-base-100 rounded-box w-40"
            >
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
              {/* Add other NavLink items here */}
              {user && (
                <>
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
                </>
              )}
              {user && (
                <>
                  <NavLink
                    to="/saved-property"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                        : "text-black"
                    }
                  >
                    Saved Property
                  </NavLink>
                </>
              )}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                    : "text-black"
                }
              >
                Contact
              </NavLink>
            </ul>
          )}
        </div>
        <Link
          to="/"
          className="animate__animated animate__zoomIn text-2xl font-bold"
        >
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
          {user && (
            <>
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
            </>
          )}
          {user && (
            <>
              <NavLink
                to="/saved-property"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                    : "text-black"
                }
              >
                Saved Property
              </NavLink>
            </>
          )}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 border border-sky-500 px-2 rounded-md py-1"
                : "text-black"
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <div
              className="w-12 h-12 rounded-full flex justify-center items-center  border-2 tooltip  tooltip-bottom"
              data-tip={user?.displayName || "user name not found"}
            >
              <img
                className="rounded-full"
                src={user?.photoURL || "https://i.ibb.co/BwsjNp3/1057231.png"}
              />
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-sm text-white text-base bg-sky-400"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm text-base text-white bg-sky-400">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
