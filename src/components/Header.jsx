import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";

const Header = () => {

  const { user, logOut } = useContext(UserContext)
  
  const handelLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <nav className="navbar bg-base-300 relative">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <div className="text-center">
          <Link className="font-semibold text-lg ml-10" to="/">
            Home
          </Link>
          {user && <Link className="font-semibold text-lg ml-4" to="/orders">
            Orders
          </Link>}
          {user && <Link className="font-semibold text-lg ml-4" to="/profile">
            Profile
          </Link>}
          <Link className="font-semibold text-lg ml-4" to="/login">
            Login
          </Link>
          <Link className="font-semibold text-lg ml-4 " to="/register">
            Register
          </Link>
        </div>
        <div className="absolute right-5">
        {
          user ? <>
            <span className="mr-4">{ user.email}</span> <button onClick={handelLogOut} className="btn btn-xs">Sign out</button>
          </> : <button className="btn btn-xs"><Link to='/login'>Login</Link></button>
        }
      </div>
      </nav>
    </div>
  );
};

export default Header;
