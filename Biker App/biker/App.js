import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import NewComp from './NewComp';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from 'react-native-camera';
import barcode from "./barcode";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button
        onPress={() => navigation.navigate('BarCode')}
        title="Go to BarCode"
      />
    </View>
  );
}



// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NewComp} />
        <Drawer.Screen name="BarCode" component={barcode} />
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}
