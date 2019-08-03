import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// Import Styles
import { Container, List } from './styles';

const UserList = ({ users }) => {
  if (users.data.length) {
    return (
      <Container>
        <List>
          {users.data.map(user => (
            <li key={user.id}>
              <img className="user-avatar" src={user.avatar} alt={user.name} />

              <div className="user-info">
                <span className="name">{user.name}</span>
                <span className="login">{user.login}</span>
              </div>

              <div className="user-action">
                <i className="dismiss fa fa-times-circle" />
                <i className="view fa fa-angle-right" />
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
  return '';
};

UserList.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        login: PropTypes.string,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);
