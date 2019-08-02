import React, { Component } from 'react';

import { connect } from 'react-redux';

// Import Styles
import { Container, List } from './styles';

class UserList extends Component {
  state = {};

  render(props) {
    console.log(props);

    return (
      <Container>
        <List>
          <li>
            <img
              className="user-avatar"
              src="https://avatars1.githubusercontent.com/u/35773455?v=4"
              alt="Fellipe"
            />

            <div className="user-info">
              <span className="name">Fellipe Bastos</span>
              <span className="login">fellipebastos</span>
            </div>

            <div className="user-action">
              <i className="dismiss fa fa-times-circle" />
              <i className="view fa fa-angle-right" />
            </div>
          </li>
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);
