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


export default class PhoneVerificationScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>

                <Text style={styles.loginText}>Verify PhoneNumber</Text>
                <View style={styles.inpContainer}>
                    <Input containerStyle={styles.inp} placeholder="Enter Phone Number" />
                </View>

                <Button
                    title="VERIFY"
                    containerStyle={styles.loginBtn}
                    buttonStyle={{ backgroundColor: '#343847', padding: 14 }}
                    onPress={() => { navigation.push('Main') }}
                />

            </View>

        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FDFDFF',
        padding: 40,
        paddingTop: 60
    },
    loginText: {
        marginLeft: 10,
        fontSize: 30
    },
    inpContainer: {
        marginTop: 40
    },
    inp: {
        marginBottom: 20
    },
    loginBtn: {
        marginTop: 20,
    },
    linkContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        color: "#69718F",
    },
    link: {
        fontSize: 16,
        textAlign: "center"
    }

});