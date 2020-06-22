import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./HomeScreen";
import ProductDetail from './ProductDetail';
import Cart from './Cart';


const routeOption = ({ route, navigation }) => {

    return {
        headerStyle: {
            backgroundColor: '#FDFDFF',
            elevation: 0,
        },
        headerTitleAlign: 'center',
        headerRight: (props) => {
            return <Icon name={'cart'} size={26} color={'#000000'} onPress={() => {navigation.push('Cart') }} />
        },
        headerRightContainerStyle: {
            paddingRight: 40
        }
    }
}


const routeOptionProdDetail = ({ route, navigation }) => {
    return {
        headerStyle: {
            backgroundColor: '#FDFDFF',
            elevation: 0,
        },
        headerTitleAlign: 'center',
        headerRight: (props) => {
            return <Icon name={'cart'} size={26} color={'#000000'} onPress={() => { navigation.push('Cart') }} />
        },
        headerRightContainerStyle: {
            paddingRight: 40
        },
        title: route.params.prodName,
    }
}




export function QuickbuyStack() {

    const Tab = createMaterialBottomTabNavigator();
    const Stack = createStackNavigator();


    const InnerNavigator = () => {
        return (<Stack.Navigator>
            <Stack.Screen name="Baazar" component={HomeScreen} options={routeOption} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={routeOptionProdDetail} />
            <Stack.Screen name="Cart" component={Cart} options={routeOption} />
        </Stack.Navigator >
        )
    }




    return (
        <InnerNavigator />
    );
}


