import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import MapComponent from '../Components/MapComponent/MapComponent'
import { DATA } from '../Constants/data'
import { Header, Overlay } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';


export default class FindOrderScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.BottomSheetRef =React.createRef();
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
        centerComponent={{ text: 'Order Details', style: { color: '#fff' } }}
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
        ref={this.BottomSheetRef}
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
      <FlatList
        data={DATA}
        renderItem={() => <TouchableOpacity><View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 32,
            borderWidth: 1,
            borderColor: "#E0E0E0",
            margin: 10,
          }}>
          <View>
            <Text>Usama</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 16 }}>4.6 km</Text>
              <Text style={{ marginRight: 16 }}>2 Stops</Text>
              <Text style={{ marginRight: 16 }}>5 Items</Text>
            </View>
          </View>
          <Image
            style={{ width: 60, height: 60, borderRadius: 50 }}
            source={{
              uri:
                'data:image/png;base64,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',
            }}
          />
        </View>
        </TouchableOpacity>}
      />
    </View>
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },
  map: {
    flex: 1,
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
    height: 600,
    padding: 20,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: '#f7f5eee8',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
})