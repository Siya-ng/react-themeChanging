import React, { Component } from 'react';







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
      userTheme : userProfile["themeTitle"],
      themeNo : userProfile["themeIndex"]
    }
  }

  changeTheme(e) {
    const themeArray = ["default", "secondTheme", "thirdTheme", "fourthTheme"]
    if (this.state.themeArray === 3){
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
    return (
      <div>
        <h3>Welcome to react</h3>


      </div>
    )
  }
}
export default App;
