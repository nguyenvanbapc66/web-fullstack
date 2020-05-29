import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: 'Hello',
      inputValue: '',
      isToggleSidebar: true,
      selectedOption: ''
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  toggleSidebar() {
    this.setState(state => ({ isToggleSidebar: !state.isToggleSidebar }))
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
      <div>
        <Navbar logo={ this.state.inputValue } />
        { this.state.isToggleSidebar ? <Sidebar redirect={this.redirect} /> : '' }
        <input value={this.state.inputValue} onChange={this.handleChangeInput} />
        <button onClick={this.toggleSidebar}>Toggle sidebar</button>
        {this.state.selectedOption}
      </div>
    )
  }
}

export default App;
