import React, { Component } from 'react';
import styled from 'styled-components';
import './Sidebar.scss';
import PropTypes from "prop-types";

import NavLink from "../NavLink/NavLink";
import Avatar from "../Avatar/Avatar";


import compass from '../../assets/icons/compass.svg';
import user from '../../assets/icons/user.svg';
import shop from '../../assets/icons/shop.svg';
import delivery from '../../assets/icons/delivery.svg';
import AvatarImage from '../../assets/images/Avatar.jpg';




export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { title } = this.props;

        return (
            <div className="Sidebar">

                <div className="Sidebar_Frow">
                    <h1 className="Sidebar_logo">{title}</h1>
                </div>

                <div className="Sidebar_Srow">
                    <div className="Sidebar_Home">
                        <NavLink text="Home" image={compass} />
                    </div>

                    <NavLink sectionText="Users" text="Customers" image={user} />
                    <NavLink text="Retailer" image={shop} />
                    <NavLink text="Deliverers" image={delivery} />

                </div>



                <div className="Sidebar_Trow">
                    <Avatar avatarName="Mr X" avatarDescript="Admin" avatarImg={AvatarImage} />
                    </div>

            </div>
        );
    }


}

