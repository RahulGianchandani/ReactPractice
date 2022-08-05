import { Link, NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../UseContext";
import { useContext } from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"
import { useState } from "react";

import { useLocation } from "react-router-dom";


const Header = () => {

  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
     toggle ? setToggle(false): setToggle(true);
  }

  console.log(toggle)
  const theme = useContext(ThemeContext);
  let color =  theme.state.theme 
  console.log(color)

  let ACTIONS = theme.ACTIONS;
  let dispatch = theme.dispatch;

const location = useLocation();
console.log(location.pathname);
  
  return (

      
    <div id="header" className="sticky-top  ">
      <nav
        className={`navbar navbar-light  sticky-top py-3 max-sm:border-b-4 max-sm:border-red-600
        ${color === ACTIONS.DARK ? "bg-dark" : "bg-white"}
          `}
      >
        <div className="container ">
          <div>
            <Link to="/" className={`navbar-brand  ${ color === ACTIONS.LIGHT ? "text-black" : "text-white"}`}>
              {" "}
              Rahul
            </Link>
          </div>
          <MdDarkMode
                  size={50} 
                  className= {` sm:hidden cursor-pointer transition duration-300 ${color === ACTIONS.LIGHT ? "hover:fill-slate-300" : "hover:fill-black"}`}
                  color={color === ACTIONS.LIGHT ? ACTIONS.DARK : ACTIONS.LIGHT }
                  onClick={(e) => {
                    color === "white"
                      ? dispatch({ type: ACTIONS.DARK })
                      : dispatch({ type: ACTIONS.LIGHT });
                  }}
                />
          <div className="max-sm:order-last  max-sm:w-full">
            <ul className={`relative  sm:flex justify-end list-unstyled mb-0 align-items-center max-sm:before:content-[''] max-sm:before:absolute max-sm:before:border-2 ease-in-out max-sm:before:border-red-600 before:w-full max-sm:before:top-0 ${toggle ? "h-full " : "hidden"}`}>
              <li className="nav-item sm:px-3">
                
                <MdDarkMode
                  size={50} 
                  className= {` hidden sm:block cursor-pointer transition duration-300 ${color === ACTIONS.LIGHT ? "hover:fill-slate-300" : "hover:fill-black"}`}
                  color={color === ACTIONS.LIGHT ? ACTIONS.DARK : ACTIONS.LIGHT }
                  onClick={(e) => {
                    color === "white"
                      ? dispatch({ type: ACTIONS.DARK })
                      : dispatch({ type: ACTIONS.LIGHT });
                  }}
                />
              </li>
              <li className="nav-item sm:px-3">
                <NavLink
                  to="/Counter"
                  className={`${location.pathname === "/Counter" ? "active" : ""} after:w-full   after:left-0 max-sm:inline-block  nav-link px-0  ${color === ACTIONS.DARK ? "text-cyan-300 " : "after:bg-black"}`
                  }
                >
                  Counter
                </NavLink>
              </li>
              <li className="nav-item sm:px-3">
                <NavLink
                  to="/Login"
                  className={`${location.pathname === "/Login" ? "active" : ""} after:w-full   after:left-0 max-sm:inline-block  nav-link px-0  ${color === ACTIONS.DARK ? "text-cyan-300 " : ""}` 
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item sm:px-3">
                <NavLink
                  to="/Register"
                  className={`${location.pathname === "/Register" ? "active" : ""} after:w-full   after:left-0 max-sm:inline-block  nav-link px-0 ${color === ACTIONS.DARK ? "text-cyan-300 " : ""} `
                  }
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item sm:px-3">
                <NavLink
                  to="/Reducer"
                  className={ ` ${location.pathname === "/Reducer" ? "active" : ""} after:w-full  after:left-0 max-sm:inline-block  md:inli nav-link px-0  ${color === ACTIONS.DARK ? "text-cyan-300 " : ""}` 
                  }
                >
                  useReducer
                </NavLink>
              </li>
              <li className="nav-item sm:px-3">
                <NavLink
                  to="/Pagination"
                  className={`${location.pathname === "/Pagination" ? "active" : ""} after:w-full  after:left-0 max-sm:inline-block  md:inli nav-link px-0  ${color === ACTIONS.DARK ? "text-cyan-300 " : ""}` 
                  }
                >
                  Pagination
                </NavLink>
              </li>
              <li className="nav-item sm:px-3">
                <NavLink
                  to="/Pagination2"
                  className={`${location.pathname === "/Pagination2" ? "active" : ""}  after:w-full  after:left-0 max-sm:inline-block  md:inli nav-link px-0  ${color === ACTIONS.DARK ? "text-cyan-300 " : ""}`
                  }
                >
                  Pagination2
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="   sm:hidden grid place-items-center" >
           {
            toggle? <GrClose color={color === ACTIONS.DARK ? "red" : "black"} size={30} onClick={toggleNav}/> :
             <GiHamburgerMenu color={color === ACTIONS.DARK ? "red" : "black"} size={30} onClick={toggleNav}/>
           } 
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Header;
