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

import Dashboard from '../../components/Dashboard/Dashboard';
import Button from '@material-ui/core/Button';
import ProductTable from "../../components/ProductTable/ProductTable";

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
class HomePage extends Component {




    render() {

        return (<>

            <div className="HomePage">
                <div className="HomePage-BtnContainer">
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Return
                  </Button>
                </div>

                <ProductTable/>



            </div>

        </>)


    }
}



export default HomePage;