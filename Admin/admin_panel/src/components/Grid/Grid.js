import React, { Component } from 'react';
import styled from 'styled-components';
import './Grid.scss';
import PropTypes from "prop-types";




export default class Grid extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { col1, col2, col3 } = this.props;
        return (
            <div className="GridContainer">
                <div className="col col1">{col1}</div>
                <div className="col">{col2}</div>
                <div className="col">{col3}</div>
            </div>
        );
    }


}


Grid.propTypes = {
    col1: PropTypes.element,
    col2: PropTypes.element,
    col3: PropTypes.element,
}


Grid.defaultProps = {
    col1: <div />,
    col2: <div />,
    col3: <div />,
}