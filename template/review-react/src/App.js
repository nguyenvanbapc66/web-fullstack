import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarLogo: 'This is logo navbar',
      inputNavbar: '',
      isToggleSidebar: true,
      selectedOption: ''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.redirect = this.redirect.bind(this)
  }

  handleChangeInput(e) {
    this.setState({
      inputNavbar: e.target.value
    })
  }

  toggleSidebar() {
    this.setState(state => ({
      isToggleSidebar: !state.isToggleSidebar
    }))
  }

  redirect(option) {
    return() => {
      this.setState({
        selectedOption: option
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar logo={this.state.navbarLogo} />
        <input value={this.state.inputNavbar} onChange={this.handleChangeInput} />
        <button onClick={this.toggleSidebar} >Toggle Sidebar</button>
        {this.state.inputNavbar}
        {this.state.isToggleSidebar ? <Sidebar redirect={this.redirect} /> : ''}
        {this.state.selectedOption}
      </div>
    )
  }
}

export default App;
