import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>

                <Text style={styles.loginText}>Login</Text>
                <View style={styles.inpContainer}>
                    <Input style={styles.inp} placeholder="Phone Number" leftIcon={{ type: 'material', name: 'person', color: '#BDBDBD' }} />
                </View>
                <Button
                    title="LOGIN"
                    containerStyle={styles.loginBtn}
                    buttonStyle={{ backgroundColor: '#343847', padding: 14 }}
                    onPress={()=>{
                        navigation.push('PhoneVerify')
                    }}
                />
                <View style={styles.linkContainer}>
                    <TouchableOpacity
                    onPress={()=>{navigation.push('Signup')}}
                    >
                        <Text style={styles.link}>Create an Account</Text>
                    </TouchableOpacity>
                </View>


            </View>

        )
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FDFDFF',
        justifyContent: 'center',
        padding: 40,
    },
    loginText: {
        marginLeft: 10,
        fontSize: 40
    },
    inpContainer: {
        marginTop: 40
    },
    inp: {
        marginTop: 20
    },
    loginBtn: {
        marginTop: 40,
    },
    linkContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent:"flex-start",
        color:"#69718F",
    },
    link:{
        fontSize:16,
        textAlign:"center"
    }

});