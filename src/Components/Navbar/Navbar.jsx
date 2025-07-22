import React, { useEffect , useState } from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';


export default function Navbar() {

  const [isScrolled, setisScrolled] = useState(false)


useEffect(() => {

  function handleScroll (){
    setisScrolled(window.scrollY > 50);
  }

  window.addEventListener("scroll" , handleScroll);

  return () => {
    window.removeEventListener("scroll" , handleScroll);
  }

}, [])



  return (
    <>
      <nav className={`navbar ${isScrolled? "Navmini" : "py-4"} navbar-expand-lg bg-petrolblue position-fixed top-0 start-0 end-0 z-3`}>
        <div className="container">
          <NavLink className="navbar-brand fs-2 fw-bolder text-uppercase" aria-current="page" to={"/"}>Start Framework</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3 mt-3 mt-lg-0">
                <NavLink className="nav-link fw-bold text-uppercase rounded-2 p-2" aria-current="page" to={"/About"}>About</NavLink>
              </li>
              <li className="nav-item me-3 mt-3 mt-lg-0">
                <NavLink className="nav-link fw-bold text-uppercase rounded-2 p-2" aria-current="page" to={"/Portfolio"}>Portfolio</NavLink>
              </li>
              <li className="nav-item me-3 mt-3 mt-lg-0">
                <NavLink className="nav-link fw-bold text-uppercase rounded-2 p-2" aria-current="page" to={"/Contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
