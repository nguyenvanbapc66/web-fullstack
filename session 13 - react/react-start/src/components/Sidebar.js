import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listMenu: ['Option 1', 'Option 2', 'Option 3']
    }
  }

  render() {
    const listMenu = this.state.listMenu.map((menu) => (<li key={menu} onClick={this.props.redirect(menu)}>{menu}</li>))
    return (
      <aside>
        <ul>
          {listMenu}
        </ul>
      </aside>
    )
  }
}

export default Sidebar;
