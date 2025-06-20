import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

function Nav() {
  const { LogedIn, persionInfo } = useAuth();
  return (
    <header className="nav-main">
      <h1 className="nav-logo logos">Rolex</h1>
      <nav className="nav-item">
        <li>
          <NavLink className="nav" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to={"/Service"}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to={"/Sales"}>
            Sales
          </NavLink>
        </li>
        {/* <li>
          {" "}
          <NavLink className="nav" to={"/Book"}>
            Book
          </NavLink>
        </li> */}
        {!LogedIn ? (
          <li>
            <NavLink className="nav" to={"/Login"}>
              Login
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink className="nav" to={"/Logout"}>
                Logout
              </NavLink>
            </li>
            <li>
              <p className="personinfo">{persionInfo?.user?.username}</p>
            </li>
          </>
        )}
      </nav>
    </header>
  );
}

export default Nav;
