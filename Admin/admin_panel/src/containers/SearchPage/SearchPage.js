import React, { Component } from 'react';
import styled from 'styled-components';
import './SearchPage.scss';
import PropTypes from "prop-types";
import Searchbar from "../../components/Searchbar/Searchbar.js";
import ProfileTabs from "../../components/ProfileTabs/ProfileTabs.js";

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        const { helperText } = this.props;


        return (
            <div className="SearchPage"> 
                <Searchbar placeholderText="Search Here" />
                <ProfileTabs />
                <div className="helperText">
                    {helperText}
                
                </div>


            </div>
        );
    }


}

