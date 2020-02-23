import React, { Component } from 'react'
import "./NavBar.scss";
import Icon from "../../assets/icons/searchIcon.svg";


export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">

                <div className="NavBar-titleContainer">
                    <i className="fas fa-bars  NavBar__Menu"></i>
                    <h1 className="NavBar__logo">Baazar</h1>
                </div>

                <div className="NavBar-searchContainer">
                    <input placeholder="Search here" className="NavBar__search" />
                    <i className="fas fa-search  searchIcon "  ></i>
                </div>

                <div className="NavBar-iconContainer">
                    <i className="NavBar__Icon  fas fa-shopping-cart" ></i> 
                    <i className="NavBar__Icon  fas fa-user" ></i> 

                </div>

            </div>
        )
    }
}
