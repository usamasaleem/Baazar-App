import React, { Component } from 'react';
import styled from 'styled-components';
import './PopUp.scss';
import PropTypes from "prop-types";



export default class PopUp extends Component {

    constructor(props) {
        super(props);
 
    }


    render() {

        const { message, btn_text1, btn_text2,Visible } = this.props;


        if (Visible) {
            return (

                <div className="PopUp_container" >
                    <h1 className="PopUp_messageTxt">{message}</h1>
                    <button className="PopUp_btn">{btn_text1}</button>
                    <button className="PopUp_btn">{btn_text2}</button>
                </div>
            );
        }
    
    else{
       return <div></div>
    }



    }



}


PopUp.defaultProps = {
    btn_text1: "Yes",
    btn_text2: "No",
    message: "Enter Message here"
}