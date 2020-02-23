import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import "./HomePage.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import InfoPage from "../InfoPage/InfoPage";
import Dashboard from '../../components/Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';
import BCarousel from '../../components/Carousel/Carousel'

class HomePage extends Component {




    render() {

        return (<>
            <div className="HomePageContainer">

                <div className="HomePage-carouselContainer">
                    <BCarousel />
                </div>

                <div className="How-it-works-Section Section">
                    <h1 className="hiw__title">How it works</h1>
                    <div className="Cards-Container hiw-cards">
                        <Card detailCard />
                        <Card detailCard />
                        <Card detailCard />
                    </div>
                </div>

                <div className="Categories-Section Section">
                    <h1 className="Categories__title">Categories</h1>
                    <div className="Cards-Container Categories">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>

        </>)


    }
}



export default HomePage;