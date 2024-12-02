import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProviderData } from "./Provider/Providers";
import auth from "./firebase";

const Header = () => {
  const { user,singUsers } = useContext(ProviderData);
  const hendleSingOut=()=>{
    singUsers()
    .then(()=>{
      console.log('SinOut successfuly')
    })
    .catch(error=>{
      console.log('errror',error.message)
    })
  }

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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>SingUp</NavLink>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>SingUp</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>login</NavLink>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? 
        <div>
          <p>{user.email}</p>
          <a className="cursor-pointer" onClick={hendleSingOut}>SingOut</a>
        </div> 
        : <NavLink to={'/login'}>login</NavLink>}</div>
    </div>
  );
};

export default Header;
