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
        this.state = {
            retailers: [],
            retailersPending:[],
            data: []
        }
    }


    componentWillMount() {

        fetch("http://localhost:3000/admin/retailers/request").then(
            (resp) => {
                resp.json().then((d) => {
                    // console.log(data)
                    this.setState({ retailers: d })
                    console.log(this.state.retailers)
                    console.log(this.state.retailers[0].City)








                })
            }
        )

        fetch("http://localhost:3000/admin/retailers/viewAll").then(
            (resp) => {
                resp.json().then((d) => {
                    // console.log(data)
                    this.setState({ retailersPending: d })
                    console.log(this.state.retailersPending)
                    console.log(this.state.retailers[0].City)
                })
            }
        )


        // this.setState({retailers:response})
    }




    render() {

        var a = [];
        var b = [];

        if (this.state.retailers.length > 0) {
            console.log(this.state.retailers[0].Preferences.toString())
            for (let index = 0; index < this.state.retailers.length; index++) {

                a.push({ F_name: this.state.retailers[index].L_name, L_name: this.state.retailers[index].L_name, Contact_no: this.state.retailers[index].Contact_no, City: this.state.retailers[index].City, Stores: this.state.retailers[index].Stores.toString(), Preferences: this.state.retailers[index].Stores.toString(), Verfication: this.state.retailers[index].Verfication.toString(), Address: this.state.retailers[index].Address, Password: this.state.retailers[index].Password, })

            }
        }

        if (this.state.retailersPending.length > 0) {
            console.log(this.state.retailers[0].Preferences.toString())
            for (let index = 0; index < this.state.retailersPending.length; index++) {

                b.push({ F_name: this.state.retailersPending[index].L_name, L_name: this.state.retailersPending[index].L_name, Contact_no: this.state.retailersPending[index].Contact_no, City: this.state.retailersPending[index].City, Stores: this.state.retailersPending[index].Stores.toString(), Preferences: this.state.retailersPending[index].Stores.toString(), Verfication: this.state.retailersPending[index].Verfication.toString(), Address: this.state.retailersPending[index].Address, Password: this.state.retailersPending[index].Password, })

            }
        }


        // a.push({F_Name:this.state.retailers[0].F_name})}
        // if(this.state.retailers.length>0){
        //     for(let index=0;index<=this.state.retailers.length;index++){
        //     a.push(this.state.retailers[index])        
        //     }
        // }




        var column = [{ title: 'F Name', field: 'F_name' },
        { title: 'L Name', field: 'L_name' },
        { title: 'Contact No', field: 'Contact_no' },
        { title: 'City', field: 'City' },
        { title: 'Address', field: 'Address' },
        { title: 'Stores', field: 'Stores' },
        { title: 'Password', field: 'Password' },
        { title: 'Verfication', field: 'Verfication' },
        { title: 'Preferences', field: 'Preferences' },
        ]

        console.log(a)


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
                                    data={[{ name: 'Mehmet', surname: 'ABC', birthYear: 1987, birthCity: 63 }, { name: 'Usama', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
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
                                        title="Pending Retialers"
                                        columns={column}
                                        data={a}
                                        options={{
                                            sorting: true
                                        }}
                                    />
                                </div>




                                <div className="tables_container">
                                <MaterialTable
                                title="Verified Retialers"
                                columns={column}
                                data={b}
                                options={{
                                    sorting: true
                                }}
                            />
                                </div>







                            </div>
                        </Route>


                    </Switch>

                </div>

            </div>

        );
    }


}

