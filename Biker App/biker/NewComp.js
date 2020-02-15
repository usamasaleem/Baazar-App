//
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import {NavigationContainer} from '@react-navigation/native';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 33.550855, longitude: 73.062877};
const {width, height} = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyB_UY8Mg65jm8F_BHOarN0wQAf1pFlqqtM';
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 


class NewComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flex: 1,
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        
        {
          latitude: 37.771707,
          longitude: -122.4053769,
        },
      ],
    };
    
    this.mapView = null;
  }

  componentWillMount() {
    // setTimeout(() => this.setState({ flex: 1 }), 500);
    setTimeout(() => this.forceUpdate(), 500);
  }

  render() {
    return (
      <View style={{flex:1}}>
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
            destination={this.state.coordinates[this.state.coordinates.length - 1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="red"
            optimizeWaypoints={true}

            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log('Distance: ${result.distance} km');
              console.log('Duration: ${result.duration} min.');
              
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
      <View style={styles.mapDrawerOverlay} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: width,
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get('window').height,
    width: 30,
  },
});

export default NewComp;
