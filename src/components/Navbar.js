import React, { useState } from "react";
import propTypes from "prop-types";
import CircularButton2 from './CircularButton2'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  
 
  
  return (

    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className={`text-${props.textMode}`}>{props.title}</div>
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <div className={`text-${props.textMode}`}>
                    Home
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <div className={`text-${props.textMode}`}>{props.aboutText}</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="ms-auto" style={{backgroundColor:'#AD7BE9',padding:'10px',marginRight:'15px', borderRadius:'10px'}}>
            <CircularButton2 color={'#E06469'} />
            <CircularButton2 color={'yellow'} />
            <CircularButton2 color={'blue'} />
            <CircularButton2 color={'green'} />
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.enableDarkMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" ><div className={`text-${props.textMode}`}>Enable Dark Mode</div></label>
          </div>
        </div>

      </nav>
    </>
  );
}

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About Us"
}

Navbar.propTypes = {
  title: propTypes.string,
  aboutText: propTypes.string
};
