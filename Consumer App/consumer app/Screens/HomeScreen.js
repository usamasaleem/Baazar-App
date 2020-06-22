import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-ionicons'
import Product from '../Components/Product/Product';

export default class HomeScreen extends Component {

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

            <View style={styles.searchContainer}>
                <Input
                    placeholder='Search Products'
                    containerStyle={styles.searchInputContainer}
                    inputContainerStyle={styles.search}
                    rightIcon={
                        <Icon
                            name='search'
                            size={24}
                            color='#BDBDBD'
                        />
                    }
                />
            </View>


            <View style={styles.categoriesList}>

                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>

                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>


                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>


                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>

                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>



            </View>
{/* 
            <View style={styles.quickBuy}>
            <Text style={styles.titleText}>Filters</Text>

            <View style={styles.chips}>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
                 <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
            </View>


            </View> */}



            <View style={styles.productList}>

                <View style={styles.row}>
                    <Product stackNavigation={navigation} />
                    <Product />
                </View>

                    
                <View style={styles.row}>
                    <Product />
                    <Product />
                </View>

                
                <View style={styles.row}>
                    <Product />
                    <Product />
                </View>

                
                <View style={styles.row}>
                    <Product />
                    <Product />
                </View>


            </View>


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
    titleText:{
        marginTop:16,
        fontSize:32,
        fontWeight:'bold'
    },
    quickBuy:{
        marginVertical:16
    },
    chips:{
        marginTop:0,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    chip:{
        marginRight:10,
        marginTop:10,
        backgroundColor:'#42A5F5',
        padding:10,
        borderRadius:16
    },
    chipText:{
        color:'#ffffff',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    search: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
    },
    searchInputContainer: {
        backgroundColor: '#FAFAFA',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    categoriesList: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'space-between'
    },
    category: {
        padding: 0,
    },
    productList: {
        marginTop: 40,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:12,
    }
})