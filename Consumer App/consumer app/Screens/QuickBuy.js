import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';
import CartItem from '../Components/CartItem/CartItem'
import { Button } from 'react-native-paper';



export default class QuickBuy extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {

    }

    render() {

        


        return <ScrollView style={styles.container}>

            <Text style={styles.title}>QuickBuy</Text>
            

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
    title:{
        fontSize:36,
        marginTop:20
    }

})