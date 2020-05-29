import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav>
                {this.props.logo}
            </nav>
        )
    }
}

export default Navbar
