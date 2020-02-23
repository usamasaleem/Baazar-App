import React, { Component } from 'react'
import "./Footer.scss";
import Icon from "../../assets/images/logo192.png";


export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="Footer">

                    <div className="Footer-FSection FooterSection">
                        <h1 className="FSection__title">Baazar</h1>
                        <p className="FSection__description">lorem ipsum</p>
                        <p className="FSection__description">lorem ipsum</p>
                        <p className="FSection__description">ipsum</p>
                        <h1 className="FSection__subtitle FSection__heading">Download App</h1>
                        <div className="Footer-StoreIcons">
                            <div className="Footer-StoreContainer">
                                <i className="Footer__StoreIcon fab fa-google-play"></i>
                                <p className="Footer_StoreIconText">Google Play</p>
                            </div>
                            <div className="Footer-StoreContainer">
                                <i className="Footer__StoreIcon fab fa-app-store AppStoreIcon"></i>
                                <p className="Footer_StoreIconText">App Store</p>
                            </div>
                        </div>

                    </div>

                    <div className="Footer-MSection FooterSection">
                    <img src={Icon} className="MSection__img" />
                    </div>

                    <div className="Footer-ESection FooterSection">
                    <h1 className="FSection__title">Contact Us</h1>
                    <p className="FSection__description">lorem ipsum</p>
                    <p className="FSection__description">lorem ipsum</p>
                    <p className="FSection__description">ipsum</p>
                    <h1 className="FSection__subtitle FSection__heading">Something</h1>
                    </div>

                </div>
            </>
        )
    }
}
