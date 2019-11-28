import React, { Component } from 'react';
import styled from 'styled-components';
import './NavLink.scss';
import PropTypes from "prop-types";




export default class NavLink extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { image, text, sectionText } = this.props;


        return (
            <div className="NavLink_container">
                {sectionText != undefined &&

                    <p className="NavLink_sectionText">{sectionText}</p>
                }

                <div className="NavLink">
                    <img src={image} className="NavIcon"></img>
                    <a href=""><h1 className="NavText">{text}</h1></a>
                </div>
            </div>
        );
    }


}

