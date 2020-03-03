import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Switch
} from 'react-native';
import { Button } from 'react-native-elements';
import MapComponent from '../Components/MapComponent/MapComponent'
import { DATA } from '../Constants/data'
import { Header, Overlay } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import ArrowIcon from "../assets/Icons/arrow.svg";
import { SvgUri } from 'react-native-svg';
import { inject, observer } from "mobx-react";
import store from "../store/TestStore";
import personIcon from '../assets/Icons/person.svg';
import ProfileImage from '../assets/Icons/NoPath - Copy (11).svg';


inject('store')
@observer
export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Find Order'
        }

    }

    render() {


        const { navigation } = this.props;

        return (<View style={styles.container} >
            <Header
                centerComponent={{ text: 'PROFILE', style: { color: '#69718F', fontSize: 18 } }}
                statusBarProps={{ translucent: true }}
                containerStyle={Platform.select({
                    android: Platform.Version <= 20 ? { paddingTop: 0, height: 56, backgroundColor: "#FAFAFA" } : {},
                })}
                backgroundColor="#FAFAFA"
            />




            <View style={styles.profileDetailContainer}>
                <ProfileImage/>
                <Text style={[styles.profileDetailText, styles.nameText]}>Tahseen Riaz Abbasi</Text>
                <Text style={[styles.profileDetailText, styles.infoText]}>Pink Metro Bike 125</Text>
                <Text style={[styles.profileDetailText, styles.infoText]}>PND-420</Text>
                <Switch />
                <View style={styles.reportContainer}>

                    <View style={styles.reportRow}>
                        <Text style={styles.reportText}>Distance</Text>
                        <Text style={styles.reportText}>Total Earnings</Text>
                        <Text style={styles.reportText}>Rating</Text>
                    </View>

                    <View style={styles.reportRow}>
                        <Text style={styles.reportInfoText}>140 km</Text>
                        <Text style={styles.reportInfoText}>850000 PKR</Text>
                        <Text style={styles.reportInfoText}>4.5</Text>
                    </View>


                </View>

            </View>




        </View>);

    }



}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingHorizontal:20
    },
    profileDetailContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    reportRow:{
         flexDirection:"row",
         width:"100%",
         justifyContent:"space-evenly",
         marginVertical:8
    },
    reportContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    reportInfoText:{
        color:'#343847'
    },
    reportText:{
        color:'#69718F'
    },
    profileDetailText:{
        marginVertical:4
    },
    infoText:{
        color:'#69718F'
    },
    nameText:{
        color:'#343847'
    }
})