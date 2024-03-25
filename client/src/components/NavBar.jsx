import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import menu from "/image/menu.png"
import cross from "/image/cross.png"
import { useAuth } from "../store/auth";

export const NavBar = () => {
  const { isLoggedIn , user, isLoading} = useAuth();
  const [openmenu, setOpenmenu] = useState(false);

  return (
    <>
      <header>
        <div className="container1 container">
          <div className="logo">
            <NavLink to="/">siddharth rohan</NavLink>
          </div>
          <nav className="menu">
          <img className='menu-btn' src={openmenu ? cross : menu } alt="" onClick={()=>setOpenmenu(!openmenu)} />
            <ul className={`menu-items ${openmenu ? 'menu-open' : ''}`}>
              <li>
                <NavLink to="/" className="item">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="item">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="item">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className="item">
                  Contact
                </NavLink>
              </li>
              {!user.isAdmin || !isLoggedIn? null : (<li>
                <NavLink to="/admin" className="item">
                  Admin
                </NavLink>
              </li>) }
              {!isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/register" className="item">
                      register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="item">
                      login
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/logout" className="item">
                    log Out
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    
    </>
  );
};
