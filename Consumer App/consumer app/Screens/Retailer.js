import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-ionicons'
import Product from '../Components/Product/Product';
import ReatilerCard from '../Components/RetailerCard/RetailerCard';

export default class Retailer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {

    }

    render() {

        const { navigation } = this.props;



        return <ScrollView style={styles.container}>

            <View style={styles.retailers}>
                <ReatilerCard />
                <ReatilerCard />
                <ReatilerCard />
                <ReatilerCard />
                <ReatilerCard />
            </View>
        </ScrollView>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: '#FAFAFA',
        flex: 1,
    },
    retailers:{
        marginVertical:20
    }
})