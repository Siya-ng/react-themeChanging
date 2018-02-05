import React from 'react';
import './Nav.css';

const Nav = ({navProp, changeTheme, currentTheme}) => {
  return (
    <nav className={"navbar fixed-top navbar-" + currentTheme.userTheme} >
      <a href="" className="navbar-brand brand-logo">Logo</a>
      <div className="navbar-collapse ">
        <ul id="nav-mobile" className="navbar-nav right hide-on-med-and-down">
          <li className="nav-items"><a className="nav-link" href=""> Hi {navProp.username } !</a></li>
          <li></li>
        </ul>

      </div>

    </nav>



  )
}

export default Nav;
