import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import CartItem from '../Components/CartItem/CartItem'
import { Button } from 'react-native-paper';



export default class QuickBuy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:[require('../assets/Images/arrow.png'),require('../assets/Images/person.png')],
            logo: {
                uri: require('../assets/Images/arrow.png')
              },
        }
    }


    componentWillMount() {
      
    }

    render() {

       
        return <ScrollView style={styles.container}>

            <Text style={styles.title}>QuickBuy</Text>
            <Image  source={this.state.images[1]}/>



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