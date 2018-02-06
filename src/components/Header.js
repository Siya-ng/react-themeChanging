import React from 'react';
import './Header.css';

const Header = ({navProp, currentTheme}) => {
  return (
    <header className={"header header-" + currentTheme.userTheme}>
      <div className="intro-text">
        <div className="intro-lead-in">Web Developer</div>
          <div className="intro-heading text-uppercase">Si Ya</div>
          <a className={"btn btn-xl text-uppercase btn-" + currentTheme.userTheme} href="#portfolio">Tell Me More</a>
      </div>
    </header>

  )
}

export default Header;
