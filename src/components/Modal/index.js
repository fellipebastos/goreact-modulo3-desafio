import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';

// Import Styles
import { Container } from './styles';

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      cordinates: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
        }),
      ]),
    }).isRequired,
    modalHide: PropTypes.func.isRequired,
    userAddRequest: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  handleInputChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    const { userInput } = this.state;

    if (!userInput) return;

    const {
      userAddRequest,
      modal: { cordinates },
    } = this.props;

    userAddRequest(userInput, cordinates);
    this.handleModalHide();
    this.handleClearUserInput();
  };

  handleModalHide = () => {
    const { modalHide } = this.props;

    modalHide();
    this.handleClearUserInput();
  };

  handleClearUserInput = () => {
    this.setState({ userInput: '' });
  };

  render() {
    const { userInput } = this.state;
    const { modal } = this.props;

    return (
      <Container className={`modal ${modal.visible ? '' : ' d-none'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <strong>Adicionar novo usuário</strong>
          </div>

          <div className="modal-body">
            <form onSubmit={this.handleSubmitForm} action="" method="post">
              <input
                type="text"
                name="user"
                value={userInput}
                placeholder="Usuário do GitHub."
                onChange={this.handleInputChange}
              />

              <div className="form-action">
                <button type="button" onClick={this.handleModalHide}>
                  Cancelar
                </button>
                <button type="submit">Adicionar</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
