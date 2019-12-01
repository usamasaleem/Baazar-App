import React, { Component } from 'react';
import styled from 'styled-components';
import './ContentPage.scss';
import UserTable from "../../components/UserTable/UserTable"
import PopUp from "../../components/PopUp/PopUp"
import UserDetail from "../../components/UserDetail/UserDetail"
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import ROUTES from "../../constants/ROUTES.json";




export default class CöntentPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="ContentPage_container">

                <div className="ContentPage_scrollContainer">

                    <Switch>


                        <Route path={ROUTES.RETAILER_PAGE}>
                            <UserTable title="Pending Retailers" data={[["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"]]} />
                        </Route>
                        <Route path={ROUTES.CUSTOMER_PAGE}>
                            <UserTable title="Pending Customers" data={[["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"]]} />
                        </Route>
                        <Route path={ROUTES.DELIVERER_PAGE}>
                            <UserTable title="Deliverers" data={[["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"]]} />
                        </Route>

                        <Route path={ROUTES.USERDETAIL_PAGE}>
                            <div className="ContentPage_heading" >
                                <h1>UserDetail</h1>
                            </div>
                            <UserDetail>
                            </UserDetail>
                        </Route>


                        <Route path="/">
                            <div className="ContentPage_heading" >
                                <h1>Dashboard</h1>
                                <PopUp message="Are you sure you want to delete" Visible={false}/>
                                <UserTable title="Pending Retailers" data={[["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"]]} />
                                <UserTable title="Pending Customers" data={[["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"]]} />
                                <UserTable title="Deliverers" data={[["Usama", "Usama", "Usama", "Usama"], ["Usama", "Usama", "Usama", "Usama"]]} />
                      
                            </div>
                        </Route>


                    </Switch>

                </div>

            </div>

        );
    }


}

