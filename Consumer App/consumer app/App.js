import React, { useRef } from 'react';
// import { Header } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  Platform,
  FlatList
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-ionicons';
import { StackNav } from './Screens/StackNav';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Screens/Categories';
import { categoryStack } from './Screens/categoryStack'
import { retailerStack } from './Screens/retailerStack';
import QuickBuy from './Screens/QuickBuy';



export default function App() {


  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();

  const MainNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Main"
      >

        <Stack.Screen name="Main" component={DrawerNavigatorContainer} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  const DrawerNavigatorContainer = () => {
    return (
      <Tab.Navigator
        barStyle={{ backgroundColor: '#ffffff', elevation: 10, }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Categories') {
              iconName = 'apps'
            }
            else if (route.name === 'Retailer') {
              iconName = 'archive'
            }
                else if (route.name === 'QuickBuy') {
              iconName = 'archive'
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={26} color={color} />;
          },
        })}
        activeColor='#4D7CFE'
        inactiveColor='#BDBDBD'

        tabBarOptions={{

        }}

      >
        <Tab.Screen name="Home" component={StackNav} />
        <Tab.Screen name="Categories" component={categoryStack} />
        <Tab.Screen name="Retailer" component={retailerStack} />
        <Tab.Screen name="QuickBuy" component={QuickBuy} />


      </Tab.Navigator>
    )
  }





  return (

    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>

  );
}


