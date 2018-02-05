import React from 'react';

const Nav = ({navProp, changeTheme, currentTheme}) => {
  return (
    <nav >
      <div className={"nav-wrapper container " + currentTheme.userTheme}>
        <a href="" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href=""> Hi {navProp.username } !</a></li>
          <li></li>
        </ul>

      </div>

    </nav>



  )
}

export default Nav;
