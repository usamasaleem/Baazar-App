import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';
import { Button } from 'react-native-paper';

export default class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {
        console.log(this.props)
    }



    render() {


        return <ScrollView style={styles.container}>

            <View style={styles.imageContainer}>
                <Image style={styles.prodImage} source={require('../assets/Images/tomato.png')} />
            </View>
            <View style={styles.prodDetails}>
                <Text style={styles.prodTitle}>Tomato</Text>
                <Text style={styles.prodPrice}>Rs60-RS89</Text>
                <Text style={styles.prodDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.addToCart}    contentStyle={styles.addToCart} mode="contained" >ADD TO CART</Button>
            </View>
        </ScrollView >

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 30
    },
    prodImage: {
        width: 160,
        height: 160
    },
    prodTitle: {
        marginTop: 30,
        fontSize: 28,
        fontWeight: 'bold'
    },
    prodPrice: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50'
    },
    prodDescription: {
        marginTop: 10,
        lineHeight: 30,
        fontSize: 16
    },
    prodDetails:{

    },
    btnContainer:{
        marginTop:70,
        flex:1,
    },
    addToCart:{
        backgroundColor:"#3F51B5",
        height:50,
    }

})