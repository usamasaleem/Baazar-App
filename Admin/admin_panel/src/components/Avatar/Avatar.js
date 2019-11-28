import React, { Component } from 'react';
import styled from 'styled-components';
import './Avatar.scss';
import PropTypes from "prop-types";



export default class Avatar extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { avatarImg,avatarName,avatarDescript } = this.props;

        return (
            <div className="Avatar_container">

                <div className="Avatar_imgContainer">
                    <img className="Avatar_Image" src={avatarImg}></img>
                </div>


                <div className="Avatar_txtContainer">
                    <h1 className="Avatar_title">{avatarName}</h1>
                    <p className="Avatar_extra">{avatarDescript}</p>
                </div>




            </div>
        );
    }


}

