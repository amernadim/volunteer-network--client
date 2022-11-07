import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assest/logos/Group 1329.png";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
    .then()
    .catch(err => console.log(err))
  }

  // console.log(user);

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>

      <li className="font-semibold">
        <Link to="/">Donation</Link>
      </li>

      <li className="font-semibold">
        <Link to="/volunteer">Events</Link>
      </li>

      <li className="font-semibold">
        <Link to="/">Blog</Link>
      </li>

       {
        user?.uid ?
        <>           
       <li className="font-semibold">
        <p>{user?.displayName}</p>
      </li>
        
      <li className="font-semibold mr-2">
        <button onClick={handleLogOut} className="btn btn-warning text-white rounded-md" to="#">LogOut</button>
       </li>      
        </>
       :
       <>
       
      <li className="font-semibold mr-2">
       <Link className="btn btn-warning text-white rounded-md" to="/register">Register</Link>
      </li>
       
       <li className="font-semibold mr-2">
       <Link className="btn text-white rounded-md" to='/login'><button className="">Admin</button></Link>
     </li>
       </>

       }
     
    </>
  );
  return (
    <nav className="navbar h-20 bg-base-100 inline-block items-center mx-auto py-4">
      <div className="navbar-start flex justify-between w-full"> 
           
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-10" src={logo} alt="" />
        </Link>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden mr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-6"
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
            className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box "
          >
            {menuItems}
          </ul>
        </div>

     

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{menuItems}</ul>
      </div>

      </div>

    </nav>
  );
};

export default NavBar;
