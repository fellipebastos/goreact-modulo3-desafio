/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions
import * as ModalActions from '../../store/actions/modal';

// Import Styles
// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';
import { Avatar } from './styles';

class Map extends Component {
  static propTypes = {
    modalShow: PropTypes.func.isRequired,
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

  state = {
    viewport: {
      width: window.innerHeight,
      height: window.innerHeight,
      latitude: -22.9979988,
      longitude: -43.3504081,
      zoom: 15,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const { modalShow } = this.props;
    const [longitude, latitude] = e.lngLat;

    await modalShow({ latitude, longitude });
  };

  render() {
    const { viewport: viewpt } = this.state;
    const { users } = this.props;

    return (
      <MapGL
        {...viewpt}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(user => (
          <Marker
            key={user.id}
            latitude={user.cordinates.latitude}
            longitude={user.cordinates.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <Avatar className="avatar" src={user.avatar} alt={user.name} />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
