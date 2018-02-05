import React from 'react';

const Footer = ({changeTheme, currentTheme}) => {
  return (
    <footer >
      <div className={"container " + currentTheme.userTheme}>
        <p>copyright @2018: created by <span><a href="https://github.com/Siya-ng">Si Ya</a></span></p>

      </div>

    </footer>



  )
}

export default Footer;
