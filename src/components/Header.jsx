import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-base-300">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <div className="text-center">
          <Link className="font-semibold text-lg ml-10" to="/">
            Home
          </Link>
          <Link className="font-semibold text-lg ml-4" to="/login">
            Login
          </Link>
          <Link className="font-semibold text-lg ml-4" to="/register">
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
