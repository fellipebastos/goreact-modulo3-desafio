/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

// Global Styles
import GlobalStyle from './styles/global';

// Import Components
import UserList from './components/UserList';

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerHeight,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
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

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  render() {
    const { viewport: viewpt } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <UserList />
        <MapGL
          {...viewpt}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={viewpt.latitude}
            longitude={viewpt.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
              alt=""
            />
          </Marker>
        </MapGL>
      </Fragment>
    );
  }
}
