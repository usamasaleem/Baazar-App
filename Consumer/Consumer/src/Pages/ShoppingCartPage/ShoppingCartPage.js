import React, { Component } from 'react';
import "./ShoppingCartPage.scss";
import Table from '../../components/Table/Table';
import { Button } from '@material-ui/core';

export default class ShoppingCartPage extends Component {
    render() {
        return (
            <>
                <div className="ShoppingCartContainer">
                    <h1 className="ShoppingCartContainer_title">Shopping Cart</h1>

                    <div className="ShoppingCartContainer_TableContainer">
                        <Table />
                    </div>

                    <div className="BtnContainer">
                        <Button variant="contained" color="primary">Save this Cart</Button>
                    </div>

                    <div className="ShoppingCartContainer-ExtraInfo">
                        <p className="ExtraInfo__continueShoppingTxt">Continue Shopping</p>
                        <div className="ProceedToCheckout">
                            <h1 className="ProceedToCheckout__title">Grand Total <span className="ProceedToCheckout__TotalPricetxt">Rs 69000</span></h1>
                            <Button variant="outlined" color="primary">Proceed to Checkout</Button>
                        </div>
                    </div>


                </div>
            </>
        )
    }
}
