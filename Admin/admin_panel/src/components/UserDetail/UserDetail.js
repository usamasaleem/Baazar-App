import React, { Component } from 'react';
import styled from 'styled-components';
import './UserDetail.scss';
import PropTypes from "prop-types";
import Avatar from '../../assets/images/Avatar.jpg';


export default class UserDetail extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="UserDetail_container">

                <div className="UserDetail_buttonContianer">
                    <button className="UserDetail_button">EDIT</button>
                    <button className="UserDetail_button">DELETE</button>
                </div>

                <div className="UserDetail_DetailContainer">


                    <div className="UserDetail_userImageContainer">
                        <img src={Avatar} className="UserDetail_userImage"></img>
                    </div>

                    <div className="UserDetail_userInfoContainer">
                        <h1 className="UserDetail_userInfotxt UserDetail_userName">Usama</h1>
                        <p className="UserDetail_userInfotxt  UserDetail_userType">Retailer</p>
                        <div className="UserDetail_userDescriptContainer">
                            <p className="UserDetail_userInfotxt  UserDetail_userDescription">asdsadsadsaasdsadsadsaasdsadsadsaasdsadsadsaasdsadsadsaasdsadsadsaasdsadsadsaasdsadsadsaasdsadsadsaasdsadsadsa</p>
                        </div>
                    </div>
                </div>


                {this.props.children &&
                    <div className="UserDetail_AdditionalDetail">
                        <h1 className="UserDetail_AddiInfoTxt">Additional Information</h1>
                        <div className="UserDetail_AddiInfo">
                            {this.props.children}
                        </div>

                    </div>


                }





            </div>
        );
    }


}

