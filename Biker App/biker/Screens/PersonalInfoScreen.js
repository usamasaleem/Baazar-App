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
import ImagePicker from 'react-native-image-picker';
import { ToastAndroid } from 'react-native';



export default class SignupScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedImageUri: "../assets/Images/blank-profile-picture.png",
            hasSelectedImage: false,
            imageName: "blank-profile-picture.png"
        }
    }


    chooseImage = () => {
        let options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                alert("Image Selection Cancelled")
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                this.setState({ selectedImageUri: response.data })
                this.setState({ hasSelectedImage: true })
            }
        });
    }



    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>

                {this.state.hasSelectedImage &&

                    <View style={styles.profilePicContainer}>
                        <Image
                            style={styles.profilePic}
                            source={{ uri: 'data:image/jpeg;base64,' + this.state.selectedImageUri }}
                        />
                    </View>

                }

                {!this.state.hasSelectedImage &&

                    <View style={styles.profilePicContainer}>
                        <Image
                            style={styles.profilePic}
                            source={require('../assets/Images/blank-profile-picture.png')}
                        />
                    </View>

                }


                {!this.state.hasSelectedImage &&
                    <Button
                        title="SELECT PHOTO"
                        containerStyle={styles.loginBtn}
                        buttonStyle={{ backgroundColor: '#343847', padding: 14, }}
                        onPress={() => {
                                this.chooseImage()
                        }}
                    />
                }

                {this.state.hasSelectedImage &&
                    <Button
                        title="CONFIRM PROFILE"
                        containerStyle={styles.loginBtn}
                        buttonStyle={{ backgroundColor: '#343847', padding: 14, }}
                        onPress={() => {
                            ToastAndroid.show('Account Created', ToastAndroid.SHORT);
                            navigation.push('Login')
                        }}
                    />
                }





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
        fontSize: 30,
        textAlign: "center"

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
    },
    profilePic: {
        width: 250,
        height: 250,
        borderRadius: 125,

    },
    profilePicContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 30,
        flex: 1
    }

});