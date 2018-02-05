import React, { Component } from 'react';

import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import './App.css';


const userProfile = {
  username: "Si Ya",
  title: 'Theme Changer',
  themeTitle: "default",
  themeIndex: 0
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      userTheme : userProfile.themeTitle,
      themeNo : userProfile.themeIndex
    }
  }

  changeTheme(e) {

    const themeArray = ["default", "secondTheme", "thirdTheme", "fourthTheme"]
    if (this.state.themeNo === 3){
      this.setState({
        userTheme: "default",
        themeNo: 0
      })
    } else {
      this.setState({
        userTheme: themeArray[this.state.themeNo + 1],
        themeNo: this.state.themeNo += 1
      })
    }
  }


  render() {
    const currentTheme = this.state
    return (
      <div class={"container " + currentTheme.userTheme}>
        <Nav
          navProp={userProfile}
          currentTheme={currentTheme}
          changeTheme={this.changeTheme}/>
          <a className="changeThemeBtn" onClick={(e) => this.changeTheme(e)}>Change Theme</a>
        <Header
          navProp={userProfile}
          currentTheme={currentTheme}/>
        <h3>Welcome to react</h3>


        <Footer
          currentTheme={currentTheme}
          changeTheme={this.changeTheme}/>

      </div>
    )
  }
}
export default App;
