import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listOption: ['Option 1', 'Option 2', 'Option 3']
        }
    }

    render() {
        const listOption = this.state.listOption.map(option => (<li key={option} onClick={this.props.redirect(option)} >{option}</li>))

        return (
            <div>
                <ul>
                    {listOption}
                </ul>
            </div>
        )
    }
}

export default Sidebar
