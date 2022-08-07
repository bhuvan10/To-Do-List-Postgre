import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav({user}) {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
      Navbar
    </Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      {user? <>
      <li className="nav-item">
      <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
      </li>
      <li className="nav-item">
      {user.displayName}
      </li>
      <li className="nav-item" onClick={logout}>
         Logout
          </li>
      </>
      :
      <li className="nav-item">
          <Link className="nav-link" to="login">
            Login
          </Link>
        </li>}
        
        
        
       
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}
