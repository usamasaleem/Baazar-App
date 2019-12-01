import React, { Component } from 'react';
import styled from 'styled-components';
import './NavLink.scss';
import PropTypes from "prop-types";

import {
    Link
} from "react-router-dom";



export default class NavLink extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { image, text, sectionText,routeTo } = this.props;


        return (
            <div className="NavLink_container">
                {sectionText != undefined &&

                    <p className="NavLink_sectionText">{sectionText}</p>
                }

                <div className="NavLink">
                    <img src={image} className="NavIcon"></img>
                    <Link to={routeTo}><h1 className="NavText">{text}</h1></Link>
                </div>
            </div>
        );
    }


}

