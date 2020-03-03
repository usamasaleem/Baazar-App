import React, { Component,useState ,useEffect } from 'react';
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
import DetailScreen from './DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FindOrderScreen from './FindOrderScreen';
import OrderScreen from './OrderScreen';
import RecievingScreen from './RecievingScreen';
import axios from 'axios';
import sample from '../Constants/FakeApi.json';


const Stack = createStackNavigator();

const routeOption = {
    headerStyle: {
        backgroundColor: '#FDFDFF',
        elevation:0,
    },
 
    headerTitleAlign:'center'
}


export function StackNav() {

    



    return (
        <Stack.Navigator
            initialRouteName="FindOrder">
            <Stack.Screen name="FindOrder" component={FindOrderScreen} options={{ headerShown: false }}
            initialParams={{orders:sample}}
            />
            <Stack.Screen name="Order Details" component={DetailScreen} options={routeOption} />
            <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Order Detail" component={RecievingScreen} options={routeOption} />
        </Stack.Navigator>
    );
}


