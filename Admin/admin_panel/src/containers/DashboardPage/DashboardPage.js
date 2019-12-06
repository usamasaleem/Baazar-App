import React, { Component } from 'react';
import styled from 'styled-components';
import './DashboardPage.scss';
import PropTypes from "prop-types";
import Grid from '../../components/Grid/Grid.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import SearchPage from "../SearchPage/SearchPage";
import ContentPage from "../ContentPage/ContentPage";
import axios from 'axios';

import { connect } from 'react-redux'
import { addRetailer } from '../../actions/Retailer/retailerAction'
import store from "../../store/store";

import MaterialTable from 'material-table';



class DashboardPage extends Component {

    constructor(props) {
        super(props);


    }

    componentWillMount() {


    }

    render() {

        var column =  [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]
  
        
        console.log(this.props.retailers[0])

        return (
            <div>
                  
                <Grid col1={<Sidebar title="Baazar."></Sidebar>} col2={<ContentPage></ContentPage>} col3={<SearchPage helperText="No Search Result" />}></Grid>
                
            </div>
        );
    }


    handleAddRetailer = () => {
        // dispatches actions to add todo

        this.props.addRetailer({ name: "Usama", Store: "XTS" })
        


    }

}

const mapStateToProps = (state) => {
    return {
        retailers: state
    }
}



export default connect(
    mapStateToProps,
    { addRetailer }
)(DashboardPage)