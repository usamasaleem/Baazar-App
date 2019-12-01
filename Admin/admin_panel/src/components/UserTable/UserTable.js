import React, { Component } from 'react';
import styled from 'styled-components';
import './UserTable.scss';
import PropTypes from "prop-types";
import NavLink from "../NavLink/NavLink";
import Add from "../../assets/icons/plus.svg"
import Cross from "../../assets/icons/close.svg"
import Dots from "../../assets/icons/more.svg"
import AvatarImage from "../../assets/images/Avatar.jpg"
import {
    Link
} from "react-router-dom";



import ROUTES from "../../constants/ROUTES.json";









export default class UserTable extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { title, data } = this.props;

        const row = data.map((val) => {
            const r = val.map((result) =>

                <p className="UserTable_rowText">{result}</p>
            )

            return <div className="UserTable_rowContainer">
                <div className="UserTable_rowImageContainer">
                    <Link to={ROUTES.USERDETAIL_PAGE}>
                    <img className="UserTable_rowImage" src={AvatarImage}></img>
                    </Link>
                </div>
                {r}
                <img className="UserTable_rowIcon" src={Add}></img>
                <img className="UserTable_rowIcon" src={Cross}></img>
                <img className="UserTable_rowIcon" src={Dots}></img>
            </div>

        }



        )


        return (
            <div className="UserTable_container">
                <h1 className="UserTable_title">{title}</h1>
                <div className="UserTable_ROWS">
                    {row}
                </div>
            </div>
        );
    }


}

