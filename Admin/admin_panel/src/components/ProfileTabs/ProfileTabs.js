import React, { Component } from 'react';
import styled from 'styled-components';
import './ProfileTabs.scss';
import PropTypes from "prop-types";
import AvatarImage from "../../assets/images/Avatar.jpg";


export default class Searchbar extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div className="ProfileTab">
                
             <div className="ProfileTab_container">
                <img src={AvatarImage} className="ProfileTab_image"></img>
                <div className="ProfileTab_details">
                <h2 className="ProfileTab_name">Mr A</h2>
                <p className="ProfileTab_description">Retailer</p>
                </div>
             </div>


            </div>
        );
    }


}

