import React, { Component } from 'react';
import styled from 'styled-components';
import './DashboardPage.scss';
import PropTypes from "prop-types";
import Grid from '../../components/Grid/Grid.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';



export default class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {



        return (
            <div>
             <Grid col1={<Sidebar title="Baazar"></Sidebar>} col2={<h1>Column2</h1>}   col3={<h1>Column3</h1>}></Grid>
            </div>
        );
    }


}

