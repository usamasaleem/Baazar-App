import React, {Component} from 'react';
// import Camera from 'react-native-camera';
import { RNCamera } from 'react-native-camera';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
export default class barcode extends Component {
  constructor() {
    super()
  //  this.handleTourch =this.handleTourch.bind(this);
    this.state = {
      torchOn: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
      
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => (this.camera = cam)}>
          <Text
            style={{
              backgroundColor: 'white',
            }}>
            BARCODE SCANNER
          </Text>
        </RNCamera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity
            onPress={() => this.handleTourch(this.state.torchOn)}>
            <Image
              style={styles.cameraIcon}
              
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onBarCodeRead = e => {
    Alert.alert('Barcode value is' + e.data, 'Barcode type is' + e.type);
  };

  handleTourch(value) {
    if (value === true) {
      this.setState({torchOn: false});
    } else {
      this.setState({torchOn: true});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
