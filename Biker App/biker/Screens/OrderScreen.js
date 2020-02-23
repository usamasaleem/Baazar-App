import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Platform
} from 'react-native';
import { Button } from 'react-native-elements';
import MapComponent from '../Components/MapComponent/MapComponent';
import { Header } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const BottomSheetCard = ({ title, description }) => {
  return <View style={styles.BSCardContainer}>
    <Text style={styles.BSCard_titleText}>{title}</Text>
    <Text style={styles.BSCard_extraText}>{description}</Text>
  </View>
}


export default class OrderScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.bottomSheetRef = React.createRef();
  }

  render() {

    const { navigation } = this.props;




    return (<View style={styles.container} >

      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => {
            navigation.toggleDrawer();
          },
          underlayColor: 'none',
        }}
        centerComponent={{ text: 'ORDER', style: { color: '#fff' } }}
        statusBarProps={{ translucent: true }}
        containerStyle={Platform.select({
          android: Platform.Version <= 20 ? { paddingTop: 0, height: 56 } : {},
        })}
      />

      <View style={styles.map}>
        <MapComponent />
      </View>


      <BottomSheet
        enabledContentGestureInteraction={false}
        snapPoints={[350, 50]}
        renderHeader={this.renderHeader}
        renderContent={this.renderInner}
        ref={this.bottomSheetRef}
        initialSnap={0}
      />


    </View>);

  }



  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>

    );
  }


  renderInner() {
    return <View style={styles.panel}>
      <ScrollView>
        <BottomSheetCard title="Driver's location" description="Chandni Chowk" />
        <TouchableOpacity>
        <BottomSheetCard title="First Retail Store Name" description="Address" />
        </TouchableOpacity>
        <BottomSheetCard title="First Retail Store Name" description="Address" />
        <BottomSheetCard title="Consumer Name" description="Address" />
      </ScrollView>
    </View>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: "50%",
    width: "100%"
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: "100%",
    padding: 40,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: '#f7f5eee8',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  BSCardContainer: {
    marginBottom: 20,
  },
  BSCard_titleText: {
    fontWeight: "bold",
  },
  BSCard_extraText: {
    marginTop: 8,
  },
})