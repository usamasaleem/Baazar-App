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
import BottomSheet from 'reanimated-bottom-sheet';
import MapComponent from './Components/MapComponent/MapComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailScreen from './Screens/DetailScreen';
import OrderScreen from './Screens/OrderScreen';
import RecievingScreen from './Screens/RecievingScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import FindOrderScreen from './Screens/FindOrderScreen';
import { Provider } from 'mobx-react';
import store from './store/TestStore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-ionicons'
import SummaryScreen from './Screens/SummaryScreen';
import { StackNav } from './Screens/StackNav';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './Screens/SignupScreen';
import PersonalInfoScreen from './Screens/PersonalInfoScreen';
import PhoneVerificationScreen from './Screens/PhoneVerificationScreen';



export default function App() {


  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const MainNavigator = () => {
    return(
    <Stack.Navigator>
      <Stack.Screen name="Login"        component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup"       component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PhoneVerify"  component={PhoneVerificationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main"         component={StackNav} options={{ headerShown: false }} />
    </Stack.Navigator>
    )}

  const DrawerNavigatorContainer = () => {
    return(
    <Tab.Navigator
      barStyle={{ backgroundColor: '#ffffff', elevation: 10, }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Summary') {
            iconName = 'compass'
          }
          else if (route.name === 'Profile') {
            iconName = 'person'
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
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />


    </Tab.Navigator>
    )}





  return (

    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>

  );
}


