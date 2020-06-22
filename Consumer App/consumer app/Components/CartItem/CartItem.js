import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';


export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {
        console.log()
    }

    render() {


        return <View style={styles.container}>

            <Image style={styles.prodImage} source={require('../../assets/Images/tomato.png')}/>
            <Text  style={styles.prodName}>Tomato</Text>
            <Text  style={styles.prodPrice}>RS60</Text>

        </View>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',  
        marginVertical:16,
        padding:10,
        paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:16
    },
    prodImage:{
        width:90,
        height:90
    },
    prodPrice: {
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4CAF50'
    },
    prodName: {
        fontWeight: 'bold',
        fontSize: 18
    },

})