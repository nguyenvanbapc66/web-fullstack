import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>navbar { this.props.logo }</nav>
    )
  }
}

export default Navbar;
