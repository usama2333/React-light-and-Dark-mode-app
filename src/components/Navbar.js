import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div className="Demo bg-danger">
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TextUtiles
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
               
              </li>
            
            </ul>
            
          </div>
          <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

//Also used isRequired keyword to insure strickly that props is passed
// text : PropTypes.string.isRequired

// Navbar.propTypes = {text : PropTypes.string ,
//                     text1 : PropTypes.string}

// default Props -> if props cannot send it set defaults

// Navbar.defaultProps = {text : 'Set Title here' ,
//   text1 : 'Set text1 here'}
