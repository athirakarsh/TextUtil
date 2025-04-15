import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.header}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">{props.title}</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
          
         
        </ul>

      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick= {props.toggleMode} id="switchCheckDefault"/>
        <label className="form-check-label" for="switchCheckDefault">Enable dark mode</label>
      </div>

      <form className="d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0 mx-2" type="submit">Search</button>
    </form>
    </div>
  </nav>
  </>
    )

}
Navbar.propTypes = {
    header: PropTypes.string
  };
Navbar.defaultProps = {
    header: 'stranger'
  }