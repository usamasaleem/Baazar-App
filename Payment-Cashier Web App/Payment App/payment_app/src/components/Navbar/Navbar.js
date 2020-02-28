import React, { Component } from 'react'
import "./Navbar.scss";
import Icon from "../../assets/images/Avatar.jpg";
import ExpandedCard from "../ExpandedCard/ExpandedCard";


export default class Navbar extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false };
    }


    render() {
        return (
            <>
                <div className="Navbar">

                    <div className="navbar-card">
                        <h1 className="navbar-card__name">Walkin Orders</h1>
                    </div>
                    <div className="navbar-card">
                        <h1 className="navbar-card__name">Online Orders</h1>
                    </div>
                    <div className="navbar-card">
                        <h1 className="navbar-card__name">Sales Orders</h1>
                    </div>

                </div>
            </>
        )
    }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }



}
