import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo3 from '../../../Components/assets/images/Logo3.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div className="nav-logo d-flex image_handel">
  <img src={Logo3} alt="" />
  
</div>
    <a className="navbar-brand" to="/">QuickStay</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  font-change">
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" to="/">About</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" to="/">Blogs</a>
        </li>
        <li className="nav-item ms-5">
        <a className="nav-link active" aria-current="page" to="/">Contacts Us</a>
      </li>
      <li className="nav-item ms-5">
        <a className="nav-link active" aria-current="page" to="/">Login</a>
      </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;