import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Product extends Component {

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

            <TouchableOpacity onPress={()=>{this.props.stackNavigation.push('ProductDetail',{prodName:'Tomato'})}}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/Images/tomato.png')} style={styles.productImage} />
                </View>
            </TouchableOpacity>

            <View style={styles.productDetails}>
                <Text style={styles.productName}>Tomato</Text>
                <Text style={styles.productPrice}>$0.99 - $3.99</Text>

            </View>


            <View style={styles.actionContainer}>
                <Icon name={'add-circle-outline'} size={26} color={'#BDBDBD'} />
            </View>


        </View>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        width: '47%',
        padding: 20,
        borderRadius: 16,
        marginHorizontal: 2,
    },
    productImage: {
        width: 90,
        height: 90,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    productDetails: {
        marginTop: 20,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 24
    },
    productPrice: {
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4CAF50'
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: '#E0E0E0',
    }

})