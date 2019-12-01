import React, { Component } from 'react';
import styled from 'styled-components';
import './Searchbar.scss';
import PropTypes from "prop-types";
import Search from "../../assets/icons/searchIcon.svg";


export default class Searchbar extends Component {

    constructor(props) {
        super(props);
    }


    render() {

const {placeholderText}= this.props; 

        return (

            <div className="Searchbar">


                <div className="Seachbar_inputContainer">
                <input className="Searchbar_input" placeholder={placeholderText}></input>
                </div>


                <div className="Searchbar_iconContainer">
                    <img src={Search} className="searchIcon"/>
                </div>



            </div>
        );
    }


}

