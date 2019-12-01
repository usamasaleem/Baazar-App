import React, { Component } from 'react';
import styled from 'styled-components';
import './DashboardPage.scss';
import PropTypes from "prop-types";
import Grid from '../../components/Grid/Grid.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import SearchPage from "../SearchPage/SearchPage";
import ContentPage from "../ContentPage/ContentPage";


export default class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {



        return (
            <div>
             <Grid col1={<Sidebar title="Baazar."></Sidebar>} col2={<ContentPage></ContentPage>}   col3={<SearchPage helperText="No Search Result"/>}></Grid>
            </div>
        );
    }


}

