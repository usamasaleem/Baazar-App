import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet
} from 'react-native';
import CartItem from '../Components/CartItem/CartItem'
import { Button } from 'react-native-paper';



export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {

    }

    render() {




        return <ScrollView style={styles.container}>


            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <Button style={styles.addToCart}    contentStyle={styles.addToCart} mode="contained" >ADD TO CART</Button>
          

        </ScrollView>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: 'white',
        flex: 1,
    },
    addToCart:{
        backgroundColor:"#3F51B5",
        height:50,
    }

})