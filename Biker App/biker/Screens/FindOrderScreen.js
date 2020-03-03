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
import ArrowIcon from "../assets/Icons/arrow.svg";
import { SvgUri } from 'react-native-svg';
import { inject, observer } from "mobx-react";
import store from "../store/TestStore";
import personIcon from '../assets/Icons/person.svg';


inject('store')
@observer
export default class FindOrderScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Find Order'
    }
    this.BottomSheetRef = React.createRef();
    this.onViewableItemsChanged.bind(this)


  }

  componentDidMount() {

  }

  onViewableItemsChanged({ viewableItems, changed }) {
    console.log('viewableItems', viewableItems)
    console.log('changed', changed)
  }

  viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 }

  render() {


    const { navigation, route } = this.props;

    let orders = route.params.orders;



    const OrderCard = ({orderId,name,totalDistance,totalPrice,items,Stops}) => {
      

      return <TouchableOpacity activeOpacity={1}
        onPress={() => {
          navigation.push('Order Details',{
            orderId:orderId
          })
        }}
      ><View

        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: "center",
          paddingVertical: 28,
          paddingHorizontal: 18,
          backgroundColor: '#ffffff',
          elevation: 4,
          marginHorizontal: 4,
          marginVertical: 10,
          borderRadius: 16
        }}>

          <View>
            <Image source={require('../assets/Images/person.png')} style={{ width: 65, height: 65 }} />
          </View>


          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 4 }}>{name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 16, fontSize: 14, color: "#69718F" }}>{totalDistance}</Text>
              <Text style={{ marginRight: 16, fontSize: 14, color: "#69718F" }}>{Stops}</Text>
              <Text style={{ marginRight: 16, fontSize: 14, color: "#69718F" }}>{items} Items</Text>
            </View>
            <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "600" }}>{totalPrice}</Text>
          </View>
          <View style={{ alignContent: "center" }}>
            <ArrowIcon width={42} height={42} />
          </View>
        </View>
      </TouchableOpacity>
    }
    // DEFINE COMPONENTS HERE

    const RenderInner = () => {
      return <View style={styles.panel}>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={this.viewabilityConfig}
          renderItem={({item}) => <OrderCard name={item.name} totalDistance={item.totalDistance} Stops={item.stops.length} totalPrice={item.totalPrice} orderId={item.id}/>
        }
        />
      </View>
    }

    // DEFINE COMPONENTS HERE





    return (<View style={styles.container} >



      <View style={styles.map}>


        <MapComponent />
      </View>

      <BottomSheet
        // enabledHeaderGestureInteraction={true}
        enabledContentGestureInteraction={true}
        snapPoints={[650, 350, 70]}
        renderHeader={this.renderHeader}
        renderContent={RenderInner}
        ref={this.BottomSheetRef}
        initialSnap={1}
      />


      <View style={{ zIndex: 5 }}></View>

    </View>);

  }





  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
          <Text style={styles.sheetHeaderText}>Select Order</Text>
        </View>
      </View>

    );
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
    bottom: 500,
    left: 0,
    right: 0,
  },
  panel: {
    height: 700,
    padding: 20,
    backgroundColor: '#ffffff',

  },
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 500
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
  sheetHeaderText: {
    fontSize: 18,

  }
})