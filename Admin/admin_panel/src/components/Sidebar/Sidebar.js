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


import ROUTES from "../../constants/ROUTES.json";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";



export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { title } = this.props;

        return (
            <div className="Sidebar">

                <div className="Sidebar_Frow">
                   <Link to={ROUTES.HOME}><h1 className="Sidebar_logo">{title}</h1></Link>
                </div>

                <div className="Sidebar_Srow">
                    <div className="Sidebar_Home">
                        <NavLink text="Home" image={compass} routeTo={ROUTES.HOME}/>
                    </div>
                
                    <NavLink sectionText="Users" text="Customers" image={user} routeTo={ROUTES.CUSTOMER_PAGE} />
                    <NavLink text="Retailer" image={shop} routeTo={ROUTES.RETAILER_PAGE} />
                    <NavLink text="Deliverers" image={delivery}  routeTo={ROUTES.DELIVERER_PAGE}/>

        
                 

                </div>



                <div className="Sidebar_Trow">
                    <Avatar avatarName="Mr X" avatarDescript="Admin" avatarImg={AvatarImage} />
                    </div>

            </div>
        );
    }


}

