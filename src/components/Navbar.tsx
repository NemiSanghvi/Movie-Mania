import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, toggleNav] = useState(false);

  return (
    <nav className="bg-gray-900 py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-[#e63946] font-epic text-3xl">
        M <br />M{" "}
      </Link>
      <ul className={`lg:flex space-x-4 hidden lg:items-center`}>
        <li className="flex flex-row space-x-12">
          <Link
            to="/battle-ground"
            className="block text-[#e63946] text-xl font-mono hover:border-b-2  hover:border-[#e63946]"
          >
            Battle Ground
          </Link>
          <Link
            to="/preferred-movies"
            className="block text-[#e63946] text-xl font-mono hover:border-b-2  hover:border-[#e63946]"
          >
            What to watch
          </Link>
          <Link
            to="/create-battle"
            className="block text-[#e63946] text-xl font-mono hover:border-b-2  hover:border-[#e63946]"
          >
            Create Battle's
          </Link>
          <Link
            to="/arena"
            className="block text-[#e63946] text-xl font-mono hover:border-b-2  hover:border-[#e63946]"
          >
            Arena
          </Link>
        </li>
      </ul>
      <button
        className="sm:hidden text-white text-xl outline-none focus:outline-none"
        onClick={() => toggleNav(!toggle)}
      >
        <span
          className={`block h-1 w-6 mb-1 bg-white transform transition-transform ${
            toggle ? "rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 mb-1 bg-white transform transition-transform ${
            toggle ? "rotate-45 -translate-y-1 opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 mb-1 bg-white transform transition-transform ${
            toggle ? "-rotate-45 translate-y-1" : ""
          }`}
        ></span>
      </button>
      {toggle && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 h-screen w-screen flex justify-center items-center z-50 transition-opacity duration-300" onClick={() => toggleNav(!toggle)}>
          <ul className="text-white text-xl text-center">
            <li className="flex flex-col space-y-10">
              <Link
                to="/battle-ground"
                className="text-[#e63946] text-3xl font-semibold font-mono hover:border-b-2  hover:border-[#e63946]"
              >
                Battle Ground
              </Link>
              <Link
                to="/preferred-movies"
                className="block text-[#e63946] text-3xl font-semibold font-mono hover:border-b-2  hover:border-[#e63946]"
              >
                What to watch
              </Link>
              <Link
                to="/create-battle"
                className="block text-[#e63946] text-3xl font-semibold font-mono hover:border-b-2  hover:border-[#e63946]"
              >
                Create Battle's
              </Link>
              <Link
                to="/arena"
                className="block text-[#e63946] text-3xl font-semibold font-mono hover:border-b-2  hover:border-[#e63946]"
              >
                Arena
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
