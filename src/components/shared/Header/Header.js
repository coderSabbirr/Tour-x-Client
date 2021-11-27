import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



import './Header.css'
const Header = () => {
    const {user,logOut}=useAuth()
    return (


        <div className=" header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container p-4">
  <NavLink className="navbar-brand" to="/">
  <img src="https://i.ibb.co/FqBcMrw/logo-2.png" alt="" className="d-inline-block align-text-top logo" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/packages">Tour Package</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/orders">My Orders</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/mangeorders">Manage All Orders</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/addpackage">Add A New Package</NavLink>
        </li>
        <li className="user">
          {user?.photoURL?
           <img className="px-2  user" src={user.photoURL} alt="" />:
          <img className="px-2 " src="https://i.ibb.co/5r8HpR3/user-1.png" alt="" />
          }
        </li>
        <li className=" user-name">{user?.displayName}</li>
        {user?.email?
        <li className="mx-4">
        <button className="custom-login-btn custom-btn-logout " onClick={logOut} >Logout</button>
      </li>:
          <li >
          <Link to="/login"><button className="custom-login-btn custom-login ">Login</button></Link>
        </li> 
        }
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;