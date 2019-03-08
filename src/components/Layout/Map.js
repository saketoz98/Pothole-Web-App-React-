import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '500px',
  height: '500px'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedPlace: {}          
      };
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
        return (
        <Map
            google={this.props.google}
            zoom={18}
            style={mapStyles}
            initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={'Kenyatta International Convention Centre'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAMmGMOtcaH0pNORJMA43INflioNSTI1ZY'
})(MapContainer);