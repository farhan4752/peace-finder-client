import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle user logout
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out successfully"))
      .catch((error) => console.error(error));
  };

  // Toggle dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navLinks = (
    <div className="flex flex-col lg:flex-row font-cursive font-bold space-y-2 lg:space-y-0 lg:space-x-4 text-base md:text-lg lg:text-xl">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTouristSpots">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/addTouristSpot">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/myList">My List</NavLink>
      </li>
      <li>
        <NavLink to="/users">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-blue-500 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 bg-blue-500 p-2 shadow lg:hidden"
          >
            {navLinks}
          </ul>
        </div>
        <a className="rounded-tl-full rounded-br-full bg-black text-sm md:text-3xl lg:text-4xl text-red-500 px-4 lg:px-8 py-3 font-bold italic transform -rotate-3 shadow-lg my-3 ">
          PEACE FINDER
        </a>
      </div>

      <div className="hidden lg:flex w-full justify-center">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end flex gap-4">
        {user ? (
          <UserProfile
            user={user}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            handleLogOut={handleLogOut}
          />
        ) : (
          <Link to="/login">
            <button className="btn btn-success btn-sm md:btn-md">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

const UserProfile = ({
  user,
  isDropdownOpen,
  toggleDropdown,
  handleLogOut,
}) => (
  <div className="relative">
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDropdown}
      className="btn btn-ghost btn-circle avatar hover:bg-gray-100 transition-all duration-300"
    >
      <div className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 rounded-full ring ring-offset-2 ring-green-500 overflow-hidden shadow-md">
        <img
          alt="User Avatar"
          src={
            user.photoURL ||
            "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
          }
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {isDropdownOpen && (
      <ul
        tabIndex={0}
        className="absolute right-0 menu menu-sm dropdown-content bg-white rounded-xl shadow-lg mt-3 p-4 w-52 md:w-60 border border-gray-200 text-sm md:text-base"
      >
        <li className="text-gray-500 font-semibold mb-2">
          Email: {user.email}
        </li>
        <li className="text-gray-500 font-semibold mb-2">
          Name: {user.displayName}
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className="btn btn-warning btn-sm md:btn-md"
          >
            Logout
          </button>
        </li>
      </ul>
    )}
  </div>
);

export default Navbar;
