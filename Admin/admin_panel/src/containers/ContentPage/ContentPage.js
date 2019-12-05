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
import MaterialTable from 'material-table';




export default class CöntentPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        var column = [{ title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname',searchable :false },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
        ]


        return (
            <div className="ContentPage_container">

                <div className="ContentPage_scrollContainer">

                    <Switch>


                        <Route path={ROUTES.RETAILER_PAGE}>

                            <div className="tables_container">
                                <MaterialTable
                                    title="Retailers"
                                    columns={column}
                                    data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                                />
                            </div>

                        </Route>
                        <Route path={ROUTES.CUSTOMER_PAGE}>


                            <div className="tables_container">
                                <MaterialTable
                                    title="Customers"
                                    columns={column}
                                    data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                                />
                            </div>


                        </Route>
                        <Route path={ROUTES.DELIVERER_PAGE}>


                            <div className="tables_container">
                                <MaterialTable
                                    title="Deliverers"
                                    columns={column}
                                    data={[{ name: 'Mehmet', surname: 'ABC', birthYear: 1987, birthCity: 63 },{ name: 'Usama', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                                    options={{
                                        search: true
                                      }}
                                />
                            </div>


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
                                <PopUp message="Are you sure you want to delete" Visible={false} />

                                <div className="tables_container">
                                    <MaterialTable
                                        title="Pending"
                                        columns={column}
                                        data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                                    />
                                </div>

                                <div className="tables_container">
                                <MaterialTable
                                    title="Recently Verified"
                                    columns={column}
                                    data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                                />
                            </div>s




                                


                            </div>
                        </Route>


                    </Switch>

                </div>

            </div>

        );
    }


}

