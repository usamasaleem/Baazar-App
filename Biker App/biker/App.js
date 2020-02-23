import React, { useRef } from 'react';
import { Header } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  Platform,
  FlatList
} from 'react-native';
import NewComp from './NewComp';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import barcode from './barcode';
import BottomSheet from 'reanimated-bottom-sheet';
import MapComponent from './Components/MapComponent/MapComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailScreen from './Screens/DetailScreen';
import OrderScreen from  './Screens/OrderScreen';
import RecievingScreen from  './Screens/RecievingScreen';
import OrderHistoryScreen from  './Screens/OrderHistoryScreen';
import FindOrderScreen from  './Screens/FindOrderScreen';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1, margin: 20, flexDirection: 'row' }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 28 }}
          source={{
            uri:
              'data:image/png;base64,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',
          }}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Usama</Text>
          <Text style={{ fontSize: 12 }}>Red Bike 125</Text>
          <Text style={{ fontSize: 12 }}>ABC-123</Text>
        </View>
      </View>
      <View style={{ flex: 1, margin: 20, flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Active Status</Text>
        <Switch disabled={false} value={true} style={{ marginLeft: 10 }} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="Find Orders"
        >
        <Drawer.Screen name="Find Orders" component={FindOrderScreen} />
        <Drawer.Screen name="My Orders" component={DetailScreen} />
        <Drawer.Screen name="Order Detail" component={OrderScreen} />
        <Drawer.Screen name="Order Recieving" component={RecievingScreen} />
        <Drawer.Screen name="History" component={OrderHistoryScreen} />
        <Drawer.Screen name="Profile" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
 
})
