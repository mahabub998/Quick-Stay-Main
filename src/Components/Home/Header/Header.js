import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className="backGround_img">
      
        <li class="nav-item dropdown box_two">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Chandirga
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <div className="box"> 
          <form action="">
          <input type="text" className="Box_handel"/>
          <button className="ms-3 button_handel ">Search</button>
          </form>
    </div> 
   
        
        </section>
    );
};

export default Header;